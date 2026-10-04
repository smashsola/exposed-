// Clarifies the question, never the solution or the required evidence IDs.
export const investigationQuestions={
 xicara:'Que lugar a publicação acabou revelando?',
 coleira:'Que nome aparece sem ter sido escrito na legenda?',
 cortina:'Qual é a função da pessoa nos bastidores?',
 velas:'Que idade a comemoração revelou?',
 bagagem:'Para qual evento a bagagem aponta?',
 barro:'Qual curso os registros permitem identificar?',
 tercas:'Em que dia e período essa rotina se repete?',
 satelite:'Qual é o nome do projeto musical ligado ao perfil?',
 anonimo:'Quem está ligado ao texto publicado sem assinatura?',
 escudo:'Qual clube o recorte ainda permite identificar?',
 ensaio:'Que tipo de sessão aparece no registro do teatro?',
 agora:'É possível afirmar onde a pessoa está agora?',
 amarelo:'Quem venceu a partida?',
 prisma:'A qual instituição os registros ligam a pessoa?',
 troca:'Que atividade reuniu as pessoas naquele encontro?'
};
export function investigationStep(progress){return !progress.saved.length?'explore':!progress.selected.length?'connect':'answer';}
