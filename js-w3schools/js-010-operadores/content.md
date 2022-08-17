## Operadores JS

Atribua valores a variáveis e adicione-os:

~~~ javascript
let x = 5;
let y = 2;
let z  = x + 5;
~~~

O operador de atribuição '=' atribuir valor a uma variável.

## Atribuição

~~~ javascript
let x = 10;
~~~

Operador de adição(+)

~~~ javascript
let x = 5;
let y = 2;
let z = x + y;
~~~
O operador de multiplicação '*'

~~~ javascript
let x = 5;
let y = 2;
let z = x * y;
~~~

## Operadores aritméticos em JS

- \+ adição
- \- subtração
- \* multiplicação
- ** Exponenciação
- / divisão
- % modulo (resto divisão) 
- ++ Incremento
- -- decremento

## Operadores de atribuição js

|operador|exemplo|semelhante a |
|--|--|--|
|=|x = y|x = y|
|+=|x += y|x = x + y|
|-=|x -= y|x = x - y|
|*=|x \*= y|x = x * y|
|/=|x /= y|x = x / y|
|%=|x %= y|x = x % y|
|**=|x **= y|x = x ** y|

O operador de adição += adiciona valor a variável

~~~ javascript
let x = 10;
x += 5;
~~~

## Operadores de string JS

O + operator também pode ser usado para adicionar(concatenar) strings

~~~ javascript
let text1 = 'John';
let text2 = 'Doe';
let text3 = text1 + " " + text2

//saída --> John Doe
~~~

O operador '+=' também pode ser usado para adicionar(concatenar) string

~~~ javascript
let text1 = "What a very ";
text1 += "nice day";

// saída --> What a very nice day
~~~

## Adicionando String e números
Adicionar dois números retornará a soma, mas adicionar um numero a uma string retornará uma string:

~~~ javascript
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;

// saída --> 10
// saída --> 55
// saída --> Hello5

~~~

Se voce adicionar um numero a uma string o resultado será string!

## Operadores de comparação JavaScript

|Operador| Descrição|
|--|--|
|==|    igual a|
|===|   igual valor e tipo|
|!=|    diferente|
|!==|   diferente valor e tipo|
|>|     maior que|
|<|     menor que|
|>=|    maior ou igual|
|<=|    menor ou igual|
|?|     operador ternário|


## Operadores logico
|Operador| Descrição|
|--|--|
|&&|    logical and|
|\|\||  logical or|
|!| logical not|

## Operadores de tipo

|Operadores| Descrição|
|--|--|
|typeof|    Retorna o tipo da variável|
|instanceof|    Retorna um boolean se o objeto for instancia de um tipo |


## Operadores BitWiser JS
Os operadores bitwise funcionam em números de 32 bits.
Qualquer operando numérico na operação pe convertido em um numero de 32 bits. O resultado é convertido novamente em numero JS

|Operador|Descrição|Exemplo|semelhante a |Resultado|Decimal|
|--|--|--|--|--|--|
|&|AND|5&1|0101 & 0001|0001|1|
|\||OR|5\|1|0101\|0001|0101|5|
|~|NOT|~5|~0101|1010|10|
|^|XOR|5^1|0101 ^ 0001|0100|4|
|<<|left shift|5 << 1|0101 << 1|1010|10|
|>>|right shift|5 >> 1|0101 >>0001|0010|2|
|>>>|unsigned right shift|5 >>> 1|0101 >>> 0001|0010|2|