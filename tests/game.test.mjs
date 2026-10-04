import test from 'node:test';
import assert from 'node:assert/strict';
import {puzzles,posts,traces,postById,puzzleById,stories} from '../src/data.js';
import {checkAnswer,normalize,remainingRoutes,protectionIds,dailyPuzzle,sanitizeState,freshState,progressFor,saveState,loadState} from '../src/engine.js';
test('15 enigmas originais, cinco por dificuldade, referências reais e dicas próprias',()=>{
 assert.equal(puzzles.length,15);assert.equal(new Set(puzzles.map(p=>p.phrase)).size,15);
 for(const level of ['Fácil','Médio','Difícil'])assert.equal(puzzles.filter(p=>p.level===level).length,5);
 assert.equal(posts.flatMap(p=>p.parts).length,Object.keys(traces).length,'IDs de rastros únicos');
 for(const p of puzzles){assert.equal(p.hints.length,3);assert.equal(new Set(p.hints).size,3);assert.ok(p.explanation&&p.protection);for(const id of [...p.routes.flat(),...protectionIds(p)])assert.ok(traces[id]&&postById[traces[id].post]);}
 for(const s of stories)for(const id of s.posts)assert.ok(postById[id]);
});
for(const p of puzzles)test(`${p.level}: ${p.title} — resposta, evidência, dicas e proteção`,()=>{
 assert.equal(checkAnswer(p,'resposta aleatória',p.routes[0]),'incorrect');
 assert.equal(checkAnswer(p,p.answer,[]),'missing-evidence');
 for(const alias of p.aliases)assert.equal(checkAnswer(p,'  '+alias.toUpperCase()+'! ',p.routes[0]),'correct');
 if(p.routes[0].length>1)assert.equal(checkAnswer(p,p.answer,p.routes[0].slice(1)),'missing-evidence');
 assert.ok(remainingRoutes(p,[]).length>0);assert.equal(remainingRoutes(p,protectionIds(p)).length,0);
 assert.ok(p.hints.every(h=>h.length>20));
});
test('Ocultar uma fonte não elimina uma repetição em outro post/comentário',()=>{
 const p=puzzleById.xicara;assert.equal(remainingRoutes(p,['cafe-logo']).length,1);assert.deepEqual(remainingRoutes(p,['cafe-logo']),[['cafe-comment']]);
 const club=puzzleById.escudo;assert.deepEqual(remainingRoutes(club,['club-symbol']),[['club-tag']]);assert.equal(remainingRoutes(club,['club-symbol','club-tag']).length,0);
});
test('Uma conexão de três rastros é quebrada por um elo removido',()=>{assert.equal(remainingRoutes(puzzleById.prisma,['school-link']).length,0);});
test('Resposta não depende de acentos ou pontuação',()=>{assert.equal(normalize('  ÍRIS   MELO! '),'iris melo');});
test('Diário igual no mesmo dia de Brasília e muda na meia-noite local',()=>{
 assert.equal(dailyPuzzle(new Date('2026-09-22T03:01:00Z')).id,dailyPuzzle(new Date('2026-09-23T02:59:00Z')).id);
 assert.notEqual(dailyPuzzle(new Date('2026-09-23T02:59:00Z')).id,dailyPuzzle(new Date('2026-09-23T03:00:00Z')).id);
});
test('Salvar, sair e voltar preserva evidências, resposta, dicas e proteção',()=>{
 const memory=new Map(),storage={getItem:k=>memory.get(k),setItem:(k,v)=>memory.set(k,v)};const s=freshState();const p=progressFor(s,'xicara');Object.assign(p,{answer:'Vagalume',saved:['cafe-logo'],selected:['cafe-logo'],status:'solved',hints:2,protected:['cafe-logo']});saveState(storage,s);assert.deepEqual(loadState(storage),s);
 assert.deepEqual(loadState({getItem:()=>'{inválido'}),freshState());
 assert.equal(saveState({setItem:()=>{throw Error('quota');}},s),false);
});
test('Progresso inválido não injeta pistas desconhecidas nem seleciona pistas não salvas',()=>{
 const s=sanitizeState({version:3,progress:{xicara:{saved:['cafe-logo','inventado'],selected:['cat-tag','cafe-logo'],hints:50,status:'ganhou'},inventado:{}}});assert.deepEqual(s.progress.xicara.saved,['cafe-logo']);assert.deepEqual(s.progress.xicara.selected,['cafe-logo']);assert.equal(s.progress.xicara.hints,3);assert.equal(s.progress.xicara.status,'open');assert.equal(s.progress.inventado,undefined);
});

// Date-specific completion survives reload, without treating yesterday as today.
import {recordDailyCompletion,dailyCompleted,dayKey} from '../src/engine.js';
import {characters} from '../src/data.js';
test('Conclusão diária persiste por data de Brasília e não marca o dia seguinte',()=>{
 const date=new Date('2026-09-22T23:00:00Z'),state=freshState();
 const other=puzzles.find(p=>p.id!==dailyPuzzle(date).id);
 assert.equal(recordDailyCompletion(state,other.id,date),false);
 assert.equal(recordDailyCompletion(state,dailyPuzzle(date).id,date),true);
 const memory=new Map(),storage={getItem:k=>memory.get(k),setItem:(k,v)=>memory.set(k,v)};
 saveState(storage,state);const restored=loadState(storage);
 assert.equal(dayKey(date),'2026-09-22');
 assert.equal(dailyCompleted(restored,new Date('2026-09-23T02:59:00Z')),true);
 assert.equal(dailyCompleted(restored,new Date('2026-09-23T03:00:00Z')),false);
 assert.equal(dailyCompleted(restored,new Date('2026-10-07T23:00:00Z')),false);
 assert.equal(dailyCompleted(sanitizeState({version:3,progress:{}}),date),false);
});
test('Marina possui perfil, publicações e destaque com referências válidas',()=>{
 assert.ok(characters.find(c=>c.id==='marina'&&c.name==='Marina Kimberly'));
 assert.equal(posts.filter(p=>p.who==='marina').length,3);
 assert.equal(stories.find(s=>s.who==='marina').posts.length,3);
 for(const post of posts)assert.ok(characters.some(c=>c.id===post.who));
});

test('Imagens distintas por publicação, exceto a lembrança exigida pelo enigma',()=>{
 const seen=new Map();
 for(const p of posts){assert.ok(p.art?.src?.endsWith('.webp'));const key=JSON.stringify(p.art);if(seen.has(key))assert.deepEqual([seen.get(key),p.id],['beach','old-trip']);else seen.set(key,p.id);}
 assert.equal(seen.size,posts.length-1);
});
test('Perfis, comentários e novas menções mantêm referências válidas',()=>{
 const handles=new Set(characters.map(c=>c.handle));assert.equal(handles.size,characters.length);
 for(const p of posts){for(const c of p.comments)assert.ok(characters.some(person=>person.id===c.by));for(const match of p.caption.matchAll(/@([a-z0-9_]+(?:\.[a-z0-9_]+)*)/g))assert.ok(handles.has(match[1]),match[1]);}
 assert.ok(characters.some(c=>c.id==='guto'&&c.handle==='ponto.invisivel'));
});


test('Marina conserva o nome e Wakana Gojo tem perfil e conteúdo próprios',()=>{
 assert.equal(characters.find(c=>c.id==='marina').name,'Marina Kimberly');
 assert.equal(characters.find(c=>c.id==='gojo').name,'Wakana Gojo');
 assert.equal(posts.filter(p=>p.who==='gojo').length,3);
 assert.equal(stories.find(s=>s.who==='gojo').posts.length,3);
 for(const c of characters)assert.ok(c.avatar.endsWith('.webp'));
});
