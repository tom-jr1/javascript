# JavaScript Events

Eventos HTML são coisas que acontecem com elementos HTML.
Quando o JS é usado em paginas html, o js pode 'reagir' a esses eventos.

## Eventos html
Um evento html pode ser algo que o navegador faz ou algo que um usuário faz.
Aqui estão alguns exemplos de eventos html:

- Uma pagina da web html terminou de carregar
- um campo de entrada html foi alterado
- um botão html foi clicado

Muitas vezes quando os eventos acontecem , voce pde querer fazer alguma coisa.
Js permite que voce execute código quando os eventos são detectados.

html permite que atributos do manipulador de evento, com códigos JS sejam adicionado aos elementos html.

~~~ javascript
<element event='some JS'>
<element event="some JS">
~~~
Exemplo do onClick

~~~ javascript
<button onClick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
~~~

## Eventos htl comuns
|Evento|Descrição|
|--|--|
|onChange| elemento html alterado|
|onClick|o usuário clicou em um elemento|
|onMouseOver|o usuário passou o mouse por um elemento html|
|onMouseOut|o usuário removeu o mouse de um elemento html|
|onKeydown| apertou uma tecla|
|onLoad| ao carregar a pagina |


## Manipuladores de eventos JS

Os manipuladores de eventos JS podem ser usados para manipular e verificar entrada do usuário, as ações do usuário e as ações
do browser
- Coisas que devem ser feiras todas as vezes que uma pagina é carregada
- Coisas que devem ser feitas quando a a pagina é fechada
- Ação que deve ser executada quando um usuário clica em um botão
- Conteúdo que de ser verificado quando um user inseri dados

Muitos métodos diferentes podem ser usados para permitir que o JS funcione com eventos:

- Atributos de eventos html podem executar códigos JS diretamente
- Atributos do evento html podem chamar funções js
- Voce pode abrir suas próprias funções de manipulador de eventos a elementos html
- Voce pode evitar que eventos sejam enviados ou tratados

