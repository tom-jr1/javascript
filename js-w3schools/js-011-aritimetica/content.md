# Aritmética JS

Operadores aritméticos JS

## Operadores aritméticos JS
Os operadores aritméticos executam aritmética em números (literais ou variáveis)

- \+ adição
- \- subtração
- \* multiplicação
- ** Exponenciação
- / divisão
- % modulo (resto divisão) 
- ++ Incremento
- -- decremento

## Operações aritméticas
Uma operação aritmética tipica opera em dois números.
Os dois números podem ser literais:

~~~ javascript
let x = 100 +50;
~~~
 ou variáveis:

 ~~~ javascript
 let x = a + b;
 ~~~
Ou expressões

~~~ javascript
let x = (100 + 50) * a;
~~~
Operadores e Operandos

Os números (em uma operação aritmética) são chamados de operandos.
A operação(a ser realizada entre os operandos) é definida por um operador.

|Operando| Operador|Operando|
|-|-|-|
|100|+|50|

## Adicionando
O operador de adição '+' adiciona números

~~~ javascript
let x = 5;
let y = 2;
let z = x + y;
~~~

## Subtração
Operando '-' Subtração

~~~ javascript
let x = 5;
let y = 2;
let z = x - y;
~~~

## Multiplicação
Operando '*' multiplica números

~~~ javascript
let x = 5;
let y = 2;
let z = x * y;
~~~

## Dividindo
operador '/' divide números

~~~ javascript
let x = 5;
let y = 2;
let z = x / y;
~~~

## Restante 
Operadores de modulo '%' retorna o resto da divisão

~~~ javascript
let x = 5;
let y = 2;
let z = x % y;
~~~

Em aritmética a divisão de dois inteiros produz um quociente e um resto
Em Math o resultado de uma operação de modulo é o resto de uma divisão aritmética.

## Incremento

O operador de incremento '++' incrementa números

~~~ javascript
let x = 5;
x++;
let z = x;
~~~

## Decremento

O operador de decremento '--' decrementa números
~~~ javascript
let x = 5;
x--;
let z = x;
~~~

## Exponenciação

O operador de exponenciação '**' eleva o primeiro operando a potencia do segundo operando

~~~ javascript
let x = 5;
let z = x ** 2;          // result is 25
~~~
x ** y produz o mesmo resultado que Math.pow(x,y):

~~~ javascript
let x = 5;
let z = Math.pow(x,2);   // result is 25
~~~
## Operador precedente

A precedência do operadores descreve a ordem em que as operações são executadas em uma expressão aritmética.

~~~ javascript
let x = 100 + 50 * 3;
~~~

O resultado do exemplo do exemplo acima é igual 150 * 3, ou é igual a 100 + 150
A adição ou a multiplicação é feita primeiro?
Como na matemática escolar tradicional a multiplicação é feita primeiro.
A multiplicação (*) e a divisão (/) tem maior precedência do que adição e subtração
E como na math escolar a precedência pode alterar utilizando parâneses

~~~ javascript
let x = (100 + 50) * 3;
~~~
Ao usar parenteses, as operações dentro dos parênteses são calculadas primeiro
Quando muitas operações tem a mesma precedência(como adição e subtração), elas são calculadas da esquerda para a
direita:
~~~ javascript
let x = 100 + 50 - 3;
~~~

