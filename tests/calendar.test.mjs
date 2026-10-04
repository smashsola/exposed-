import test from 'node:test';
import assert from 'node:assert/strict';
import {monthCells,availableDay,puzzleOnDay,latestDayForCase,nextArchiveDay,shiftMonth,dateForDay} from '../src/calendar.js';
import {dailyPuzzle,freshState} from '../src/engine.js';
import {puzzles} from '../src/data.js';
test('Calendário alinha dias da semana sem remover posições',()=>{const s=monthCells('2026-09','2026-10-04');assert.equal(s.length%7,0);assert.equal(s[2].number,1);assert.equal(s[8].day,'2026-09-07');assert.equal(monthCells('2026-10','2026-10-04')[4].number,1);});
test('Arquivo respeita início e não libera datas futuras',()=>{assert.equal(availableDay('2026-09-06','2026-10-04'),false);assert.equal(availableDay('2026-09-07','2026-10-04'),true);assert.equal(availableDay('2026-10-05','2026-10-04'),false);assert.equal(dateForDay('2026-02-29'),null);assert.equal(shiftMonth('2026-12',1),'2027-01');});
test('Datas preservam a rotação e incluem os 15 enigmas existentes',()=>{const days=monthCells('2026-09','2026-10-04').filter(x=>x?.available).slice(0,15);assert.equal(new Set(days.map(x=>x.puzzle.id)).size,15);for(const d of days)assert.equal(puzzleOnDay(d.day).id,dailyPuzzle(dateForDay(d.day)).id);for(const p of puzzles)assert.equal(puzzleOnDay(latestDayForCase(p.id,'2026-10-04')).id,p.id);});
test('Próximo desafio nunca navega ao futuro',()=>{const state=freshState();assert.equal(nextArchiveDay('2026-09-07',state,'2026-10-04'),'2026-09-08');assert.ok(nextArchiveDay('2026-10-04',state,'2026-10-04')<'2026-10-04');});
