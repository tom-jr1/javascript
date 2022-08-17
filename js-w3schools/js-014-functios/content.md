## JS Functions

Uma função JS é um bloco de código projetado para executar uma tarefa especifica.
Uma function JS é executada quando 'algo' a invoca.

~~~ javascript
function myFunction(p1, p2) {
    return p1 * p2;         // the func returns the product of p1 and p2 
}
~~~
## Sintaxe da Function JS

Uma func JS é definida com a keyword **function** chave, seguida por um name, seguido por parenteses{}
Os nomes das functions podem conter letras, dígitos, sublinhados e cifrões(mesmas regras das variáveis)
Os parenteses podem incluir nomes de parâmetros separados  por virgulas: (param1, param2)
O código  a ser executado pela func é colocado entre chaves: {}

~~~ javascript
function name(param1, param2, param3){
    //code
}
~~~

Os params da func são  listados entre parenteses() na definição da func.
Os argumentos da func são os valores recebidos pela func quando ela é invocada.
Dentro da func, os args se comportam como var locais.

    Uma func é muito parecida com um procedimento ou sub-rotina, em outras linguagens de programação.

## Call de functions

O código dentro da func será exec quando 'algo' invocar(call) a func
- quando ocorrer um evento(um usuário clicar em um botão)
- Quando é invocada(called) do código js
- Automaticamente (auto-invoque)

## Retorno de Func

