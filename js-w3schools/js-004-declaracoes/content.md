# Declarações JS
Ex: 
~~~ javascript
let x, y, z;
x= 5;
y= 6;
z = x + y;
~~~

## Programas JS

Um programa de computador é uma lista de instruções a serem executadas por um computador.
Em uma linguagem de programação, essas instruções de programação são chamadas de **instruções**.
Um programa JS é uma lista de instruções de programação.

    Em HTML, os programas são executados pelo navegador web.

## Declarações JS

As instruções JS são compostas por:
Valores, Operadores, Expressões, Palavras-Chaves e comentários.
Esta instruções diz ao navegador para escrever "Hello World". Dentro de um elemento co id = 'demo'.

Exemplo:
~~~ javascript
documento.getElementById('demo').innerHTML  = 'Hello World';
~~~

A maioria dos programas JS contém muitas instruções JS
AS instruções são executadas, uma a uma na mesma ordem que são escritas.


## Ponto virgula ';'

Ponto e virgula separam as instruções JS.
Adicione um ponto e virgula no final de cada instrução executável:

~~~ javascript
let a, b, c;    //declare 3 variáveis
a = 5;          // atribui o valor 5 a variável a
b = 6;          // atribui o valor 6 a variável b
c = a + b;      // atribui a soma de  a + b;
~~~

Quando separados por ponto e virgula, varias instruções em uma linha são permitidas:

~~~ javascript
a = 5; b = 6; c a + b;
~~~

    Na web voce pode ver exemplos sem ';'
    Não é obrigatório, mas é altamente recomendado.

## Espaço em branco
JS ignora vários espaços em branco. Voce pode adicionar espaço em branco ao seu script para torna-lo mais
legível. As seguintes linhas são equivalentes.

~~~ javascript
let person = "Hege";
let person="Hege";
~~~
Uma boa pratica é colocar espaços em volta dos operadores (= + - * /)

~~~ javascript
let x = y + z;
~~~
## Comprimento de linha no JS
 AS instruções JS podem ser agrupadas em blocos de código, dentro de chaves {}
O objetivo dos blocos de código é definir instruções a serem executadas em conjunto.
Um lugar onde voce encontrá instruções agrupadas em blocos no JS é nas funções JS:

Exemplo:
~~~ javascript
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
~~~

## Palavras chaves em JS

As instruções JS Geralmente começam com uma keyword para identificar a ação a ser executada.
lista de todas as palavras chaves:
|col1|col2|col3|col4|
|--|--|--|--|
|abstract	|arguments  | await*	    |    boolean
|break	    |byte	    |case	        |catch
|char	    |class*	    |const	        |continue
|debugger   |default	|    delete	    |    do
|double	    |else	    |enum*	        |eval
|export*	|extends*	|false	        |final
|finally	|float	    |for	        |    function
|goto	    |if	        |implements	    |import*
|in	        |inst       | anceof	    |    int	interface
|let*	    |long	    |native	        |new
|null	    |package	|    private	|        protected
|public	    |return	    |short	        |static
|super*	    |switch	    |synchronized   | this
|throw	    |throws	    |transient	    |true
|try	    |typeof	    |var            | void
|volatile	|while	    |with	        |yield


