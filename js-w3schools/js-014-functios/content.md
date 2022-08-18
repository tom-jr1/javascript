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

Quando o JS atinge uma keyword 'return' a função para de ser executada
Se a função foi invocada a partir de uma instrução, o JS retornada para executar o código após a chamada
da função.
As funções geralmente calculam um **valor de retorno**. O valor de retorno é devolvido ao chamador:

Exemplo:

~~~ javascript
let x = myFunc(4, 3);  //Função chamada, retorna o valor na var x

function myFunc(a, b){
    return a * b;       // Função retorna o produto de a e b
}
~~~

## Por que funções
Voce pode reutilizar o código: defina o código uma vez e use-o varias vezes.
Voce pode usar o mesmo código muitas vezes com argumentos diferentes, para produzir resultados diferentes

~~~ javascript
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);
~~~

## O operador '()' invoca a function

Acessar uma func sem o '()' retornará o objeto da func em vez do resultado da func

~~~ javascript
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius;
~~~

## Funções usadas com valores variáveis

As func podem ser usadas da mesma maneira que voce usa variáveis, em todos os tipos de fórmulas,
atribuições e cálculos.

Em vez de usar uma var para armazenar o valor de retorno de uma func
~~~ javascript
let x = toCelsius(77);
let text = "The temperature is " + x + " Celsius";
~~~
Voce pode usar a func diretamente, como um valor de variável
~~~ javascript
let text = "The temperature is " + toCelsius(77) + " Celsius";
~~~

## Variáveis locais
Var declaradas dentro de uma func JS torna-se **LOCAL** para a func
Var locais só podem ser acessadas dentro da func

~~~ javascript
                            // var carName não existe aqui
function myFunc(){
    let carName = 'Volvo'
                            // var carName existe aqui
}
                            // var carName não existe aqui

~~~

Como as var locais são reconhecidas apenas dentro de suas func, var com o mesmo nome podem ser usadas em 
func diferentes. As var locais são criadas quando uma func é iniciada e excluída quando a func é concluída

