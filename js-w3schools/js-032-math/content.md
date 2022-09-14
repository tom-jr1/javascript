# JS Math
O objeto Math() permite que voce execute tarefas matemáticas no numbers

~~~ javascript
console.log(Math.PI);
~~~

## Math Object

Ao contrario de outros objetos o Math não possui construtor. O objeto Math é static. Todos os 
métodos e propriedades podem ser usados sem primeiro criar um objeto Math.

## Propriedades const Math
A sintaxe para qualquer propriedade Math é **Math.property**
Js fornece 8 constantes matemáticas que podem ser acessadas como propriedades matemáticas:

Exemplo

~~~ javascript
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
~~~

## Métodos Math

A sintaxe para qualquer método Math é **Math.method(number)**

## Number to integer
Existe 4 métodos comuns para arredondar um numero para inteiro:

Math.round(number)  retorna o number arredondado para o numero mais proximo
Math.ceil(number)  retorna o number arredondado para o numero inteiro mais acima
Math.floor(number) retorna o number arredondando para o numero inteiro mais abaixo
Math.trunc(number) ??? retorna parte inteira do numero

## Math.round 
retorna o inteiro mais proximo, em caso de impasse seleciona o maior
~~~ javascript
Math.round(4.6);
Math.round(4.5);
Math.round(4.4);
~~~

## Math.ceil()

retorna o number arredondando para o inteiro acima mais proximo

~~~ javascript
Math.ceil(4.9);
Math.ceil(4.7);
Math.ceil(4.4);
Math.ceil(4.2);
Math.ceil(-4.2);
~~~

## Math.floor(number)

retorna o numero arredondado para o inteiro inferior mais  proximo

~~~ javascript
Math.floor(4.9);
Math.floor(4.7);
Math.floor(4.4);
Math.floor(4.2);
Math.floor(-4.2);
~~~

## Math.trunc(number) retorna a parte inteira do number

~~~ javascript
Math.trunc(4.9);
Math.trunc(4.7);
Math.trunc(4.4);
Math.trunc(4.2);
Math.trunc(-4.2);
~~~

## Math.sign()
Retorna se o number é negativo, nulo ou positivo
nulo = 0
positivo = 1
negativo = -1

~~~ javascript
Math.sign(-4);
Math.sign(0);
Math.sign(4);
~~~

## Math.pow(x,y)
retorna o valor de x, elevado a Y

~~~ javascript
Math.pow(4,2);
~~~

## Math.sqrt(x)
retorna a raiz quadrada de x.
~~~ javascript
Math.sqrt(25);
~~~

## Math.abs(x)
retorna o valor absoluto de de x

~~~ javascript
Math.abs(-4.7);
~~~

## Math.sin()
retorna o seno (um valor entre -1 e 1) do ângulo x (dado em radianos).

Se você quiser usar graus em vez de radianos, você deve converter graus em radianos:

Ângulo em radianos = Ângulo em graus x PI / 180.

~~~ javascript
Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
~~~

## Math.cos()
Math.cos(x)retorna o cosseno (um valor entre -1 e 1) do ângulo x (dado em radianos).

Se você quiser usar graus em vez de radianos, você deve converter graus em radianos:

Ângulo em radianos = Ângulo em graus x PI / 180.

~~~ javascript
Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
~~~

## Math.min(x) e Math.max(x)
Usando para encontrar o valor mínimo e o valor máximo em uma list de args

~~~ javascript
Math.min(0, 150, 30, 20, -8, -200);
Math.max(0, 150, 30, 20, -8, -200);
~~~

## Math.random()
retorna numero de forma randômica entre 0-1

~~~ javascript
Math.random();
~~~

## MAth.log
retorna o logaritmo natural de x
O logaritmo retorna o tempo necessário para atingir um certo nível de crescimento
~~~ javascript
Math.log(1);
Math.log(2);
Math.log(3);
~~~
Math.E e Math.log() são gêmeos
Quantas vezes devemos multiplicar Math.E para obter 10?

~~~ javascript
Math.log(10);
~~~
