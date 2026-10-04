# EXPOSED! · Órbita

Jogo de enigmas investigativos sobre privacidade digital. Tela inicial direta, paleta roxa/amarela e identidade pixelada. A rede social abre na mesma aba, com opção de explorar em outra. O caderno acompanha a investigação pelo armazenamento local.

## Executar

Requer Node.js 20 ou posterior, sem instalação de pacotes.

```sh
node scripts/serve.mjs
```

Abra http://127.0.0.1:4173/. No Windows, dê dois cliques em `ABRIR EXPOSED.cmd`: ele inicia e verifica o servidor em segundo plano antes de abrir o jogo. Repita após reiniciar o computador. O atalho `.url` sozinho não inicia o servidor. O projeto não deve ser aberto diretamente pelo arquivo HTML: módulos e sincronização precisam de HTTP.

```sh
node --test tests/*.test.mjs
node scripts/build.mjs
```

`dist/` contém a versão estática pronta para hospedagem. O jogo não usa API de IA, cadastro, cookies analíticos ou dados pessoais.

## Conteúdo

- 15 enigmas, cinco por dificuldade, com respostas equivalentes e três dicas próprias.
- 9 personagens, 44 posts, destaques, busca, carrossel, curtidas e publicações salvas.
- Caderno separado por desafio, validação determinística de resposta + evidências, revelação e próximos desafios sem bloqueio diário.
- Proteção por rastro, reavaliando caminhos alternativos. Arquivo original e simulação protegida ficam claramente separados para poder refazer os enigmas.
- Diário em rotação de 15 dias, com data de Brasília. Não há geração automática de novos enigmas.

`src/data.js` define o universo e as relações. `src/engine.js` valida respostas, exposição e persistência. `src/game.js` é a interface. `src/game.css` inclui layout responsivo e movimento reduzido.

Os detalhes identificáveis das imagens são etiquetas ilustrativas sobrepostas à arte, com transcrição para leitura. Tudo é fictício; as ilustrações foram geradas para este projeto. Prompts da nova arte em `assets/pixel/prompts.json`. A fonte ativa Oxanium e as fontes anteriores estão incluídas localmente, com licenças em assets/fonts. O calendário abre por botão e organiza os desafios por Fácil (verde), Médio (amarelo) e Difícil (vermelho).

Sites configurado para o EXPOSED! existente. A publicação depende de conexão ao repositório do serviço; usar a prévia local não altera a versão online.





Conclusões do desafio diário são registradas por data de Brasília no localStorage, além do progresso por enigma. Os dados pertencem ao navegador e à origem (protocolo/domínio/porta); não sincronizam entre aparelhos. O progresso da prévia local não migra automaticamente para o domínio publicado. Marina Kimberly tem perfil, três posts e destaque próprios.


Arte individual de cada publicação em `assets/pixel/posts/` e retratos em `assets/pixel/avatars/`, todos em WebP com carregamento sob demanda. Apenas beach/old-trip compartilham a mesma cena, intencionalmente para o enigma sobre data. Marina Kimberly mantém o nome e tem visual inspirado em Marin Kitagawa; Wakana Gojo possui perfil, três posts e destaque próprios. Guto permanece na rede. Interpretações de fã, sem frames oficiais. As artes foram redesenhadas em pixel art; a exportação mantém as bordas nítidas. Os 53 WebP somam aproximadamente 2,7 MB, carregados conforme a navegação. O build exclui os antigos atlas PNG.

## Aprendizado e privacidade

- Orientação curta em qualquer caso: explorar, guardar pistas e responder. Cada frase tem uma pergunta objetiva, sem antecipar a solução. O caderno leva ao campo de resposta e mostra quais pistas o acompanham.
- Explicação específica dos 15 casos, ligada aos rastros selecionados. O laboratório mostra caminhos restantes e consequências das edições.
- “Meu percurso” no rodapé: primeira conclusão por caso, tentativas com resposta/evidência insuficiente e decisões de proteção observadas. Dicas não diminuem pontuação. Não são inventadas métricas para progresso anterior à atualização.
- Comparação opcional com três situações antes e três depois. A primeira etapa fica disponível antes de começar a investigação; a final, após concluir ou revelar um caso. Sem etapa inicial, há resultado final, mas não comparação. Cada etapa registrada permanece salva.
- `/privacidade.html`: política e exclusão confirmada somente de `exposed-orbita-v3`. Não usa `localStorage.clear()`. Outras abas do jogo recebem a alteração.
- Resultado diário válido preservado: não há reinício do caso diário concluído. O registro por data permanece. Exclusão total pelo usuário pode remover esse registro; não há identificação invasiva ou bloqueio por pessoa.

O jogo não envia respostas ou avaliações a serviços externos. Fontes e imagens são locais. A publicação principal usa Cloudflare Workers Static Assets; a publicação no Sites da OpenAI também permanece disponível. Executar localmente não publica alterações. Antes de publicar, preencher responsáveis/contato e confirmar condições de registros e retenção da hospedagem nos campos identificados da política.

## Verificação desta atualização

33 testes automatizados de conteúdo, validação, calendário, persistência, aprendizado e exclusão. Verificação em navegador de um enigma por dificuldade, três dicas, solução com evidências, proteção, avaliação antes/depois, preservação do resultado diário, exclusão em duas abas, perfis Marina/Wakana, stories e persistência de curtidas/salvos. Layout conferido em 320, 390, 768 e 1440 px.

## Navegação e comparação de proteção

- Uma pista guardada oferece “Voltar para responder” diretamente no post. O rascunho e as pistas continuam no armazenamento local.
- O caderno e o laboratório conservam o foco da caixa marcada e a posição de rolagem durante as alterações.
- Após alterar um rastro, a rede oferece “Ver protegido” / “Ver original”, mantendo o perfil atual. A visualização protegida acompanha a URL e não passa acidentalmente para outro desafio.
- A busca recebe foco ao abrir, mostra perfis e publicações e aceita acentos, @, separadores e palavras em ordens diferentes. O campo continua montado durante a digitação.
- Calendário mensal em sete colunas, com arquivo a partir de 7 de setembro de 2026, respeitando a rotação existente de 15 enigmas. Dias futuros não são selecionáveis.

Verificação atual: 38 testes automatizados aprovados, build estático e fluxo de guardar evidências, resolver, proteger e comparar versões conferido no navegador em um caso de cada dificuldade. Layout verificado em 320, 390, 768 e 1440 px.

## Uso no celular

A interface usa áreas de toque maiores, menu inferior com espaço reservado para a área segura do aparelho e textos ajustados a telas estreitas. Posts têm uma única rolagem e botão de fechar fixo durante a leitura; as ações ficam no fluxo do conteúdo e não cobrem o botão de responder. O calendário, caderno e laboratório respeitam a altura disponível da janela. A visualização horizontal em telas até 950 px também usa a navegação móvel.

Fluxo móvel conferido em 320×568, 360×640, 390×844, 430×932 e 844×390: calendário, rede, busca, perfil, post, caderno, solução, proteção, comparação e stories. O layout do post no desktop continua com duas colunas. Verificação feita em navegador Chromium com toque emulado; aparelhos físicos não foram usados nesta verificação.


## Publicar na Cloudflare

Com a conta Cloudflare autorizada no Wrangler, execute `npm run deploy:cloudflare`. O comando gera `dist/` e publica os arquivos estáticos no projeto `exposed-orbita`, definido em `wrangler.jsonc`. Não usa API de IA ou servidor de aplicação. As credenciais ficam fora do repositório; `.wrangler/` é ignorado. O código está em https://github.com/smashsola/exposed-.
