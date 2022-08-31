# Methods Numbers

Methods numbers ajuda voce a trabalhar com numbers

## Methods e properties de numbers
Valores primitivos (como 3.14 ou 2014) não podem ter propriedades e methods (por que não são objetos)
Mas com JS, methods e propriedades tbm estão disponíveis para valores primitivos, por que JS trata
valores primitivos como objetos ao executar methods e propriedades

## toString 
Retorna o number como um string
Todos os methods numbers podem ser usados em qualquer tipo number (literais, var e expressions)

~~~ javascript
let x = 123;
x.toString()
(123).toString();
(100 + 23).toString();
~~~

## toExponential()

toExponential() retorna uma string , com um numero arredondado e escrito usando notação exponencial
um param define o numero de caracteres atrás do ponto decimal:

~~~ javascript
let x = 9.656;
x.toExponential(2)
x.toExponential(4)
x.toExponential(5)
~~~

O param é opcional, se não especifica-lo, o JS não arredondara o number

## toFixed
O toFixed() retorna uma string, com o numero escrito, com numero especificado no param de casas decimais

~~~ javascript
let x = 9.656;
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);
~~~

## toPrecision
O methods toPrecision() retorna uma string  com um numero escrito com um numero escrito com um cumprimento
especificado

~~~ javascript
let x = 9.656;
x.toPrecision(0)
x.toPrecision(2)
x.toPrecision(4)
x.toPrecision(6)
~~~

## valueOf
O valueOf() retorna um number como um number

~~~ javascript
let x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();
~~~
Em js um number pode ser um valor primitivo (typeof = number) ou um objeto (typeof = object)
O valueOf é usado internamente para converter objetos Numbers em valores primitivos.
Não há razões para usa-lo em seu code

    Todos os tipos em JS tem o método valueOf() e o toString()

## Convertendo vars em numbers
Existem 3 methods para isso 

- Number()
- parseInt()
- parseFloat()

Não são métodos numéricos, mas são métodos globais

## Métodos Js globais
Os métodos globais em js, podem ser usados em todo tipo de dados
methods most relevant 

- Number: retorna um number
- parseFloat: retorna um number ponto flutuante
- parseInt: retorna um numero int

## Number
Pode ser usado para converter vars em numbers

~~~ javascript
Number(true)
Number(true)
Number("10")
Number("10")
Number("   10")
Number("10   ")
Number("10.33")
Number("10,33")
Number("10 33")
Number("John")
~~~

    Se o numero não pode ser convertido, NaN será retornado

## Number usado em datas

Number() pode ser usado para converter uma data em numero

~~~ javascript
Number(new Date("1993-13-03")) // retorna a data em milliseconds
~~~

## parseInt
Analisa uma string e retorna um numero inteiro. Espaços são permitidos. Apenas o primero numero é retornado

~~~ javascript
parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");
~~~

Caso não conseguir realizar a conversão retorna um NaN

## parseFloat
analisa uma string e retorna um numero. Espaços permitidos. Apenas o primeiro numero é retornado

~~~ javascript
parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");
~~~
Caso não conseguir realizar a conversão retorna um NaN


## Propriedades no Number

1. MAX_VALUE:  retorna o maior numero possível em js
2. MIN_VALUE:   retorna o menor numero possível em js
3. POSITIVE_INFINITY: representa um infinito(overflow)
4. NEGATIVE_INFINITY: negativo representa um infinito(overflow)
5. NaN:  not a number

~~~ javascript
Number.MAX_VALUE;
Number.MIN_VALUE;
~~~

    Propriedades de number não podem ser usadas em vars