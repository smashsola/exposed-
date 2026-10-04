// Todo o universo é fictício. IDs de rastros ligam conteúdo, resposta e proteção.
export const characters = [
 {id:'guto',name:'Guto Akiyama',handle:'ponto.invisivel',bio:'Falo pouco. Desmancho a costura e tento de novo. 🧵 Miniaturas, tecidos e detalhes que quase ninguém vê.',avatar:'/assets/pixel/avatars/guto.webp',color:'#72c7bc',followers:196},
 {id:'marina',name:'Marina Kimberly',handle:'glitter.em.curto',bio:'Mangás, desenhos e ideias demais para um caderno. ✨ Figurinos feitos à mão e tardes com a turma.',avatar:'/assets/pixel/avatars/marina.webp',color:'#f2a9c2',followers:317},
 {id:'gojo',name:'Wakana Gojo',handle:'wakana.ponto.a.ponto',bio:'Costura, figurinos e bonecas hina. 🪡 Aprendendo a dar forma às ideias, um ponto de cada vez.',color:'#9db5e1',followers:162},
 {id:'lia',name:'Lia Monteiro',handle:'argila.exe',bio:'Cores nas mãos, ideias no papel. ☀ Desenhando um dia de cada vez.',color:'#92cbaa',followers:284},
 {id:'nico',name:'Nico Alves',handle:'quase.um.kickflip',bio:'Mais uma tentativa. 🛹 Vídeos tremidos e receitas que quase dão certo.',color:'#e8a266',followers:391},
 {id:'bia',name:'Bia Nunes',handle:'plot.twist.da.bia',bio:'Se a cortina abriu, já valeu. 🎭 Livros, jogos e café gelado.',color:'#bc9be1',followers:326},
 {id:'tom',name:'Tom Vale',handle:'ruido.de.bolso',bio:'Gravando barulhos que talvez virem música. 🎧',color:'#81b9e6',followers:208},
 {id:'iris',name:'Íris Melo',handle:'verso.em.orbita',bio:'Olho no céu, um verso no bolso. ✦ Sem pressa para chegar.',color:'#e4a2c0',followers:412},
 {id:'caio',name:'Caio Luz',handle:'fora.do.quadro',bio:'Uma foto torta também conta uma história. 📷 Tudo aqui é memória.',color:'#dfc892',followers:253},
];
const t=(id,type,text,action,protectedText,extra={})=>({id,type,text,action,protectedText,...extra});
const p=(id,who,title,scene,caption,parts=[],extra={})=>({id,who,title,scene,caption,parts,date:'18 set · arquivo',likes:73+id.length*9,...extra});
export const posts = [
 p('gojo-sewing','gojo','O avesso também conta',0,'A parte que ninguém vê também precisa ficar boa. @glitter.em.curto, deixei a barra pronta para a prova.'),
 p('gojo-hina','gojo','Paciência no pincel',0,'Um traço de cada vez. Hoje consegui terminar os olhos da boneca sem precisar recomeçar.'),
 p('gojo-fabric','gojo','Esse azul ou aquele?',0,'@glitter.em.curto escolheu pelo brilho. Eu escolhi pelo caimento. Voltamos com os dois.'),
 p('guto-stitch','guto','Mais uma tentativa',0,'Desfiz essa manga três vezes. Na quarta, ela finalmente entendeu o desenho. @glitter.em.curto, agora pode testar.'),
 p('guto-bird','guto','Cabe na palma da mão',0,'Um passarinho de madeira e uma tarde inteira pintando uma asa. Meu avô disse que ficou bom. Já valeu o dia.'),
 p('guto-fabric','guto','Missão: escolher só dois',0,'A gente foi comprar linha. @glitter.em.curto voltou com sete ideias. Eu voltei com sete tecidos.'),
 p('marina-pages','marina','Um capítulo e uma ideia',9,'Era só para ler um capítulo. Agora meu caderno tem três personagens novos e nenhum final.'),
 p('marina-cafe','marina','Pausa entre rabiscos',0,'@argila.exe trouxe os lápis. Eu trouxe ideias demais. O café segurou o resto.'),
 p('marina-stage','marina','Feito à mão',7,'Uma capa de aventureira, um monte de retalhos e a ajuda da @plot.twist.da.bia. O melhor do figurino foi fazer juntas.'),
 p('cafe','lia','Uma pausa pequena',0,'O desenho não ficou pronto, mas o café ficou perfeito.',[
  t('cafe-logo','photo','CAFÉ VAGALUME','Ocultar o nome na xícara','[nome da xícara oculto]',{label:'Estampa da xícara'}),
  t('cafe-comment','comment','A Vagalume tem a melhor espuma mesmo!','Revisar o comentário','Essa espuma parece ótima!',{by:'nico'})]),
 p('pingo','lia','Meu assistente',5,'Ele acha que todo caderno é uma cama.',[
  t('cat-tag','photo','PINGO','Cobrir a plaquinha','[plaquinha coberta]',{label:'Plaquinha da coleira'}),
  t('cat-comment','comment','O Pingo é o verdadeiro dono desse perfil.','Retirar o nome do comentário','O gato é o verdadeiro dono desse perfil.',{by:'bia'})]),
 p('backstage','bia','Do lado de cá',7,'O aplauso também chega atrás da cortina. 💜',[
  t('badge','photo','BIA · CONTRARREGRA','Ocultar a função no crachá','BIA · EQUIPE',{label:'Crachá de produção'})]),
 p('birthday','nico','Mais uma volta',14,'Pedido feito. Não conto para não estragar.',[
  t('candles','photo','1  6','Cobrir as velas numeradas','✦  ✦',{label:'Velas no bolo'})]),
 p('trip','caio','Mochila pronta',15,'Já esqueci alguma coisa. Só vou descobrir depois.',[
  t('travel-pass','photo','DESTINO: FESTIVAL AURORA','Cobrir o destino no passe','DESTINO: [oculto]',{label:'Passe preso à mochila'})]),
 p('clay','lia','Tentativa número muitas',12,'Uma borda torta e um orgulho enorme.',[
  t('clay-tools','photo','BARBOTINA · ARGILA · ESTECAS','Ocultar os materiais do curso','[materiais fora do enquadramento]',{label:'Mesa de trabalho'})]),
 p('class','bia','A turma resiste',1,'A última aula terminou com todo mundo precisando lavar o tênis.',[
  t('lia-course','comment','@argila.exe sua primeira peça do curso já foi pro forno?','Retirar a referência ao curso','Sua peça ficou muito bonita!',{by:'bia'})]),
 p('skate-one','nico','Até acertar',2,'A gravidade venceu de novo.',[
  t('skate-day','photo','TERÇA · 8 SET','Ocultar o dia do registro','[dia oculto]',{label:'Data do registro'}),
  t('skate-time','comment','Depois da aula, como toda terça. O joelho já sabe.','Retirar a rotina da legenda','Um treino de um tempo atrás.',{by:'nico'})]),
 p('skate-two','caio','Mais uma terça',13,'Os tênis são novos. O truque ainda é o mesmo.',[
  t('skate-repeat','comment','@quase.um.kickflip segunda terça seguida saindo da aula direto pro skate!','Retirar a repetição da rotina','Esse treino rendeu boas fotos!',{by:'caio'})]),
 p('tom-studio','tom','Uma faixa sem nome',10,'Tem música que só existe depois que todo mundo dorme.',[
  t('tom-sign','photo','SINAL DO PROJETO: LUA AZUL + 3 PONTOS','Ocultar o símbolo do projeto','[símbolo fora do enquadramento]',{label:'Adesivo do notebook'})]),
 p('credits','caio','Som que ficou',3,'Esse som combinou demais com o vídeo.',[
  t('satellite-credit','photo','SATÉLITE · LUA AZUL + 3 PONTOS','Retirar a assinatura visual','TRILHA · [assinatura oculta]',{label:'Crédito na capa'})]),
 p('iris-note','iris','Rascunhos',9,'Ainda não sei se termina assim.',[
  t('iris-line','photo','guardo o céu num bolso furado','Ocultar o verso identificável','[verso fora do enquadramento]',{label:'Página do caderno'})]),
 p('poem','bia','Achado bonito',9,'Texto anônimo no mural da biblioteca. Queria saber quem escreveu.',[
  t('poem-line','photo','guardo o céu num bolso furado','Remover o trecho reconhecível','[trecho não reproduzido]',{label:'Recorte do mural'})]),
 p('caio-private','caio','Só um recorte',13,'Cortei o nome do meu clube da foto. Resolvido?',[
  t('club-symbol','photo','ESCUDO: COMETA COM CAUDA VERDE','Cobrir o escudo também','[escudo coberto]',{label:'Escudo da camiseta'})]),
 p('club','nico','Time reunido',2,'Um treino, duas garrafas de água e três quedas.',[
  t('club-name','photo','CLUBE COMETA · ESCUDO VERDE','Ocultar nome e escudo','[identificação ocultada]',{label:'Faixa do grupo'}),
  t('club-tag','comment','@fora.do.quadro saiu bem na foto oficial do Clube Cometa!','Retirar marcação e clube','A foto do grupo ficou boa!',{by:'nico'})]),
 p('curtain','bia','A cortina abriu',7,'Casa cheia. A gente conseguiu.',[
  t('stage-pass','photo','QUINTA · 10 SET','Cobrir a data do registro','[data não compartilhada]',{label:'Data da foto'})]),
 p('playbill','tom','Quase estreia',3,'Trilha entregue. Agora é esperar o sábado.',[
  t('play-schedule','photo','10 SET · ENSAIO GERAL / 12 SET · ESTREIA','Ocultar a agenda de bastidores','ESTREIA · [agenda de bastidores oculta]',{label:'Agenda da produção'})]),
 p('rehearsal','caio','Plateia diferente',7,'Todo mundo quis sentar na primeira fila.',[
  t('rehearsal-guests','comment','Quinta foi só para a equipe e familiares testarem o espetáculo.','Retirar a identificação do ensaio','Foi bom encontrar vocês!',{by:'bia'})]),
 p('beach','tom','Queria estar aqui',11,'Postando hoje porque essa luz merece.',[
  t('beach-frame','photo','PUBLICADO: 18 SET 2026','Adicionar a data original à foto','FOTO DE JULHO DE 2024 · PUBLICADA EM 2026',{label:'Data mostrada no post'})],{slides:[11,15]}),
 p('old-trip','caio','Memória boa',11,'Achei a pasta das nossas férias.',[
  t('old-date','photo','MESMA FOTO · JULHO DE 2024','Manter o contexto junto da imagem','FOTO ANTIGA · JULHO DE 2024',{label:'Identificação do arquivo'}),
  t('tom-memory','comment','Aquela viagem de 2024 foi boa demais. Sou eu repostando na memória 😂','Esclarecer que não é uma viagem atual','Esta foto é de 2024, não mostra onde estamos agora.',{by:'tom'})]),
 p('game','bia','Quem ganhou?',8,'A revanche está marcada. Não aceito contestação.',[
  t('game-winner','photo','VENCEDOR: PEÇA AMARELA','Ocultar o resultado identificável','[resultado privado]',{label:'Placar da partida'}),
  t('game-seats','photo','NICO À ESQUERDA DE TOM · BIA À DIREITA','Ocultar a posição dos jogadores','[posições ocultadas]',{label:'Anotação da mesa'})]),
 p('game-colors','nico','As regras da mesa',8,'Ninguém quis trocar depois que começou.',[
  t('game-colors','comment','Tom ficou com azul. Quem estava à esquerda pegou verde; à direita, amarelo.','Remover a associação de cores','Cada um escolheu sua peça.',{by:'nico'})]),
 p('prisma-hidden','lia','Primeiro projeto',1,'O nome da escola ficou fora. Só o trabalho importa.',[
  t('school-symbol','photo','SELO: TRIÂNGULO VIOLETA COM UM SOL','Cobrir o selo no trabalho','[selo coberto]',{label:'Selo da pasta'})]),
 p('prisma-fair','iris','Feira de ideias',4,'Passei a tarde conhecendo projetos.',[
  t('school-fair','photo','INSTITUTO PRISMA · TRIÂNGULO VIOLETA + SOL','Ocultar nome e símbolo','FEIRA DE IDEIAS · [instituição oculta]',{label:'Programa da feira'})]),
 p('prisma-class','bia','A gente chegou lá',1,'Guardei esse dia.',[
  t('school-link','comment','@argila.exe é nossa colega de turma, não só visitante da feira.','Retirar a ligação com a turma','Que bom ver seu projeto pronto!',{by:'bia'})]),
 p('books-start','iris','Domingo diferente',9,'O que chegou nas minhas mãos já viveu outras histórias.',[
  t('books-rule','photo','TRAGA UM LIVRO. SAIA COM OUTRO.','Ocultar a regra do encontro','[atividade não detalhada]',{label:'Bilhete sobre a mesa'})]),
 p('books-place','lia','O café virou outra coisa',6,'Hoje as xícaras dividiram espaço.',[
  t('books-meet','photo','CAFÉ VAGALUME · MESA COM LIVROS','Ocultar o lugar do encontro','[nome do lugar oculto]',{label:'Placa e mesa do café'})]),
 p('books-finish','caio','Nenhuma compra',9,'Voltei com mais histórias, sem gastar um centavo.',[
  t('books-exchange','comment','Cada pessoa entregava o seu e escolhia o de alguém. No café da Lia!','Revisar a descrição do encontro','Adorei as histórias que trouxe para casa.',{by:'caio'})]),
 p('tea','iris','Pequena pausa',0,'Hoje fui de chá. Polêmicas só amanhã.'),
 p('sunset','nico','Sem truque hoje',11,'Tem dia que o melhor rolê é ficar olhando.'),
 p('book','bia','Só mais uma página',9,'Spoiler: não foi só mais uma página.'),
 p('chord','tom','Tentativa em dó',3,'Acorde novo. Dedos reclamando. Faz parte.'),
 p('pot','lia','Quase simétrico',12,'A alça ficou tortinha. Decidi que é personalidade.'),
 p('sky','iris','Uma janela para cima',4,'A nuvem venceu a observação. Ganhei um chá.'),
 p('light','caio','Luz no caminho',6,'Gosto quando a cidade acende antes do céu apagar.'),
];
export const stories=[
 {who:'gojo',title:'Entre pontos',posts:['gojo-sewing','gojo-hina','gojo-fabric']},
 {who:'guto',title:'Ponto a ponto',posts:['guto-stitch','guto-bird','guto-fabric']},
 {who:'marina',title:'Entre páginas',posts:['marina-pages','marina-cafe','marina-stage']},
 {who:'lia',title:'No ateliê',posts:['clay','prisma-hidden','pot']},
 {who:'nico',title:'No rolê',posts:['skate-one','skate-two','sunset']},
 {who:'bia',title:'Bastidores',posts:['backstage','curtain','rehearsal']},
 {who:'tom',title:'Frequências',posts:['tom-studio','credits','chord']},
 {who:'iris',title:'Entre linhas',posts:['iris-note','books-start','sky']},
 {who:'caio',title:'Memórias',posts:['trip','old-trip','books-finish']},
];
const q=(id,level,title,phrase,answer,aliases,routes,hints,explanation,protection,extra={})=>({id,level,title,phrase,answer,aliases:[answer,...aliases],routes,hints,explanation,protection,...extra});
export const puzzles=[
 q('xicara','Fácil','Assinatura sem legenda','Sem dizer onde, a xícara assinou.','Café Vagalume',['vagalume','o cafe vagalume'],[['cafe-logo']],['Lia fez uma pausa entre desenhos. Abra “Uma pausa pequena”.','Na foto, observe o que foi impresso na xícara.','A assinatura é de um estabelecimento, não de quem desenhou.'],'A estampa “Café Vagalume” identifica o lugar mesmo sem marcação de localização. O comentário de Nico confirma a mesma informação.','O nome do café aparece em dois lugares. Oculte a estampa e revise o comentário.',{exposureRoutes:[['cafe-logo'],['cafe-comment']],learn:'rastro'}),
 q('coleira','Fácil','Uma presença discreta','Meu nome saiu na foto. Eu nem tenho perfil.','Pingo',['o pingo'],[['cat-tag']],['O assistente de Lia aparece em “Meu assistente”.','Amplie a foto e observe a coleira.','Procure um nome próprio fora da legenda.'],'A plaquinha diz Pingo. Até o nome de um animal pode aparecer numa foto sem que a legenda o mencione. Bia também o repetiu no comentário.','Cubra a plaquinha e retire o nome repetido no comentário.',{exposureRoutes:[['cat-tag'],['cat-comment']]}),
 q('cortina','Fácil','Fora de cena','Não piso no palco. Mesmo assim, faço a cena acontecer.','Contrarregra',['contra regra','contra-regra','contrarregra de teatro'],[['badge']],['Bia publicou “Do lado de cá” nos bastidores.','Observe a identificação presa à roupa, não os adereços.','É a função que organiza o que acontece atrás da cortina.'],'O crachá identifica Bia como contrarregra. A postagem cotidiana revela uma função sem precisar contar isso na legenda.','Preserve a foto e o nome de Bia, mas esconda a função no crachá.'),
 q('velas','Fácil','Um pedido, dois números','O desejo ficou em segredo. A idade, nem tanto.','16',['dezesseis','dezasseis','16 anos','dezesseis anos'],[['candles']],['Nico fez um pedido em “Mais uma volta”.','O que está sobre o bolo comunica mais que a legenda.','Leia as duas velas numeradas juntas.'],'As velas 1 e 6 revelam a idade celebrada. O desejo é secreto; os números na foto não.','Cubra apenas os números das velas. A comemoração pode continuar visível.'),
 q('bagagem','Fácil','Uma viagem no canto','A legenda não contou o destino. A bagagem contou.','Festival Aurora',['aurora','o festival aurora'],[['travel-pass']],['A mochila de Caio está no destaque “Memórias”.','Procure o pequeno passe preso à bagagem.','A resposta é um evento, não um endereço.'],'O passe anuncia Festival Aurora. Um detalhe na borda da foto revela o destino que não estava na legenda.','Cubra o destino no passe antes de compartilhar a foto.'),
 q('barro','Médio','Mais que um passatempo','O barro deu a matéria. Outra voz fez a matrícula.','Cerâmica',['ceramica','curso de ceramica','um curso de cerâmica'],[['clay-tools','lia-course']],['Visite o ateliê de Lia e a publicação “A turma resiste” de Bia.','Os materiais indicam a atividade; um comentário diz se é apenas hobby.','Argila e barbotina, somadas à expressão “do curso”, dão a conclusão.'],'Os materiais de cerâmica não provam matrícula sozinhos. Bia liga a peça de Lia a um curso. Juntos, os dois rastros sustentam a conclusão.','Remova a ligação com o curso ou os materiais identificáveis. Não é preciso apagar as duas fotos.',{learn:'conexao'}),
 q('tercas','Médio','O calendário sem agenda','Uma queda é acaso. Duas terças já contam uma história.','Terça depois da aula',['terca depois da aula','tercas depois da aula','terça-feira depois da aula','terca feira depois da aula','depois da aula na terça'],[['skate-time','skate-repeat']],['Compare “Até acertar”, de Nico, com “Mais uma terça”, de Caio.','Uma publicação descreve um hábito; a outra mostra a repetição.','Sua resposta precisa dizer o dia e o período em relação à aula.'],'Nico descreve as terças depois da aula, e Caio confirma a repetição. São registros passados: isso não revela a localização atual de ninguém.','Quebre a associação entre dia e rotina nas duas fontes.',{exposureRoutes:[['skate-time'],['skate-repeat']]}),
 q('satelite','Médio','Uma assinatura em silêncio','Troquei meu nome por um céu. Esqueci a marca no meu som.','Satélite',['satelite','projeto satelite'],[['tom-sign','satellite-credit']],['Compare o notebook de Tom com o crédito publicado por Caio.','O mesmo símbolo pode ligar duas identidades.','Uma lua azul com três pontos aparece nas duas imagens.'],'O símbolo único do notebook de Tom reaparece junto ao nome Satélite no crédito. A marca visual liga seu perfil ao projeto musical.','Oculte a assinatura de uma das fontes para quebrar a ligação entre perfil e projeto.'),
 q('anonimo','Médio','Anônimo entre aspas','No mural, ninguém. No caderno, alguém. O mesmo céu cabe nos dois.','Íris',['iris','iris melo','íris melo'],[['iris-line','poem-line']],['Bia encontrou um texto anônimo. Alguém publicou um rascunho antes.','Compare “Achado bonito” com “Rascunhos”, no perfil de Íris.','O mesmo verso incomum está nas duas imagens. Quem tem o rascunho?'],'No universo deste caso, o rascunho de Íris e o mural reproduzem o mesmo verso. Os dois registros conectam o texto anônimo ao perfil dela.','Retire o verso identificável de uma das imagens. O restante pode continuar público.'),
 q('escudo','Médio','O recorte que não bastou','Cortei o nome. Deixei o cometa. Meu amigo completou o resto.','Clube Cometa',['cometa','o clube cometa'],[['club-symbol','club-name']],['Caio cortou uma camiseta. Nico publicou uma foto de grupo.','Compare o escudo que sobrou com a faixa da foto do time.','Não basta descobrir o desenho: procure o nome do clube correspondente.'],'O escudo da camiseta de Caio corresponde ao Clube Cometa na faixa. Além disso, Nico identifica Caio e o clube diretamente em um comentário.','Quebre a ligação visual e revise a marcação explícita no comentário.',{exposureRoutes:[['club-symbol','club-name'],['club-tag']]}),
 q('ensaio','Difícil','A primeira vez que não foi','A cortina abriu, a casa encheu. Mas a estreia ainda não aconteceu.','Ensaio geral',['ensaio','um ensaio geral'],[['stage-pass','play-schedule','rehearsal-guests']],['Compare os bastidores de Bia, a agenda de Tom e a plateia de Caio.','A foto é de quinta. A estreia está marcada para sábado. Quem estava na plateia?','Cruze o dia 10 com o tipo de sessão reservado a equipe e familiares.'],'Bia publicou a foto de quinta, dia 10. A agenda chama essa sessão de ensaio geral, e Caio confirma a plateia de equipe e familiares. Casa cheia não significa estreia.','Remova um dos rastros que conectam a foto à agenda de bastidores.'),
 q('agora','Difícil','Hoje não é agora','Cheguei hoje no seu feed. Então estou lá agora?','Não é possível saber',['nao e possivel saber','nao da para saber','não dá para saber','sem evidencias','evidencias insuficientes','nao ha evidencias suficientes','não podemos afirmar'],[['beach-frame','old-date','tom-memory']],['Tom postou uma praia. Caio guardou a foto original em “Memórias”.','Separe a data da publicação da data em que a foto foi feita.','Uma foto antiga pode ser publicada hoje. Ela prova onde Tom está agora?'],'A publicação é de 2026, mas a foto e o comentário a situam em 2024. Isso não prova que Tom esteja na praia, nem que não esteja: a localização atual é desconhecida.','Acrescente a data original à foto de Tom. O contexto precisa viajar junto com a imagem.',{learn:'suposicao',exposureRoutes:[['beach-frame']],contextProtection:true}),
 q('amarelo','Difícil','A cor da vitória','Sem nome no placar. À direita do azul, alguém levou o amarelo.','Bia',['bia nunes','a bia'],[['game-winner','game-seats','game-colors']],['Abra a partida de Bia e as regras de Nico.','Você precisa do placar, da posição e da distribuição das cores.','Tom é azul. Bia está à direita dele. Qual peça recebeu essa posição?'],'O amarelo venceu. Tom ficou com azul; à direita dele estava Bia, e Nico diz que essa posição recebeu amarelo. A combinação identifica a vencedora sem nome no placar.','Retire uma associação entre resultado, posição e cor. O jogo pode continuar aparecendo.'),
 q('prisma','Difícil','O sol que ficou','Tirei o nome da escola. Um sol, uma feira e uma voz me levaram de volta.','Instituto Prisma',['prisma','o instituto prisma','escola prisma'],[['school-symbol','school-fair','school-link']],['Veja o projeto de Lia, a feira de Íris e o comentário de Bia.','O símbolo liga duas imagens. Mas visitar uma feira não prova estudar lá.','O comentário que diz “colega de turma” completa a ligação com a instituição.'],'O selo do projeto corresponde ao Instituto Prisma no programa. Isso sozinho poderia indicar visita. Bia confirma Lia como colega de turma e completa a cadeia de evidências.','Quebre uma das ligações: selo, identificação da feira ou comentário da turma.'),
 q('troca','Difícil','Histórias sem etiqueta','Cheguei com uma história, saí com outra. No balcão, nenhuma moeda.','Troca de livros',['troca de livro','troca livros','uma troca de livros','troca de livros no cafe'],[['books-rule','books-meet','books-exchange']],['Junte o bilhete de Íris, o café de Lia e o relato de Caio.','A regra descreve uma troca; a mesa e o relato mostram o que estava circulando.','Livros mudam de mãos. Ninguém vende, empresta ou compra. Que atividade aconteceu?'],'O bilhete propõe levar um livro e sair com outro. A foto situa os livros no café, e Caio confirma a troca entre participantes. As três perspectivas reconstituem o encontro.','Oculte um elo da combinação para não reconstruir o encontro a partir dos três perfis.'),
];
export const postById=Object.fromEntries(posts.map(p=>[p.id,p]));
export const personById=Object.fromEntries(characters.map(p=>[p.id,p]));
export const traces=Object.fromEntries(posts.flatMap(p=>p.parts.map(t=>[t.id,{...t,post:p.id}])));
export const puzzleById=Object.fromEntries(puzzles.map(p=>[p.id,p]));

// Individual post artwork; the shared beach photo is an intentional puzzle clue.
// Individual lossless WebP assets. Keep the shared memory photograph required by the puzzle.
for(const post of posts){
 post.art={src:`/assets/pixel/posts/${post.id==='old-trip'?'beach':post.id}.webp`};
 if(post.id==='beach')post.artSlides=[post.art,{src:'/assets/pixel/posts/sunset.webp'}];
}
for(const c of characters){c.avatar=`/assets/pixel/avatars/${c.id}.webp`;delete c.avatarCell;}
const profileTraits={"gojo":["#9db5e1","O avesso também merece cuidado.",["costura","figurinos","bonecas hina"]],"marina":["#f5a9bc","Ideias demais, um caderno só.",["figurinos","mangás","rabiscos"]],"guto":["#72c7bc","O detalhe faz a diferença.",["costura","miniaturas","feito à mão"]],"lia":["#b7d68a","Se ficou torto, ficou meu.",["cerâmica","desenho","café"]],"nico":["#ffa46d","Foi quase. Mais uma tentativa.",["skate","rolês","receitas"]],"bia":["#d2a0ee","Toda história merece bastidores.",["teatro","livros","jogos"]],"tom":["#88c5f0","Gravando o que ninguém escutou.",["música","guitarra","mixagens"]],"iris":["#f1adcc","Coleciono versos e céus.",["poesia","estrelas","chá"]],"caio":["#edcb85","O melhor ângulo é o inesperado.",["fotografia","viagens","memórias"]]};
for(const c of characters){[c.color,c.tagline,c.interests]=profileTraits[c.id];}
const everydayComments={
 'gojo-sewing':[{by:'marina',text:'FICOU LINDO. A barra tem mais paciência do que eu inteira.'},{by:'guto',text:'Esse acabamento por dentro ficou muito bom.'}],
 'gojo-hina':[{by:'lia',text:'A firmeza desse traço! Eu teria prendido a respiração.'},{by:'marina',text:'Quero ver a próxima de pertinho.'}],
 'gojo-fabric':[{by:'marina',text:'E foi a decisão CERTA. Já tenho mais uma ideia.'},{by:'bia',text:'Brilho e caimento: os dois lados do figurino.'}],
 'marina-pages':[{by:'gojo',text:'Esse desenho dá um figurino. Já pensei em como fazer a gola.'},{by:'guto',text:'Guardei o retalho azul para o personagem da segunda página.'},{by:'iris',text:'Sem final é só uma história que ainda está respirando.'}],
 'marina-stage':[{by:'bia',text:'Essa capa merece uma entrada dramática.'},{by:'guto',text:'Reforcei a costura dos ombros. Pode fazer a entrada dramática.'}],
 'guto-stitch':[{by:'marina',text:'QUARTA TENTATIVA E FICOU PERFEITA. Já quero inventar a próxima.'}],
 'guto-bird':[{by:'lia',text:'A paciência que eu queria ter com as alças das minhas canecas.'}],
 'guto-fabric':[{by:'nico',text:'Sete tecidos e nenhuma rampa. Vocês precisam rever esse rolê.'}],
 'tea':[{by:'tom',text:'Som de chuva + chaleira. Já gravei mentalmente.'}],
 'sunset':[{by:'caio',text:'Essa luz dura dois minutos. Você chegou na hora certa.'}],
 'book':[{by:'iris',text:'Uma página é uma unidade de medida muito flexível.'}],
 'chord':[{by:'nico',text:'Quando sair a música, quero usar no vídeo do flip.'}],
 'pot':[{by:'marina',text:'A alça tortinha foi exatamente a parte de que eu gostei.'}]
};for(const post of posts)post.comments=everydayComments[post.id]||[];
