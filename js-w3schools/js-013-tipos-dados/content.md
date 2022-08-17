# Tipos de dados
As variáveis javaScript podem ter diferentes tipos de dados: number,s tring object, boolean e mais:

~~~ javascript
let length = 16;
let lastName = 'Johnson';
let x = {lastName>'John', lastName:'Doe'};
~~~
## O conceito de tipos de dados
Na programação os tipos de dados são um conceito importante.
Para poder operar em variáveis, é importante saber algo sobre o tipo.
Sem tipo de dados, um computador não pode resolver isso com segurança:

~~~ javascript
let x = 16 + 'Volvo';
~~~

Faz algum sentido adicionar 'Volvo' a 16? Produzirá um erro ou produzira um resultado?
JS tratará o exemplo como:
~~~ javascript
let x = 16 + 'Volvo';
//saída --> 16Volvo
~~~

JS Avalia a expressão da esquerda para a direita. Sequencias diferentes podem produzir resultados diferentes:

~~~ javascript
let x = 16 + 4 + 'Volvo';
// saída --> '20Volvo'
~~~

~~~ javascript
let x = 'Volvo' + 16 + 4;
// saída 'Volvo164'
~~~

No primeiro exemplo, JS trata 16 e 4 como números, ate chegar a 'Volvo'.
No segundo ex, como o primeiro operando é uma string, todos os operandos são tratados como string.

## Os tipos de JS são dinâmicos
JS tem tipos dinâmicos. Isso significa que a mesma var pode ser usada para armazenar diferentes tipos de dados

ex:
~~~ javascript
let x; //now is undefined
x = 5; // now is a number
x = 'John'; // now is a string
~~~

## Strings JS
Uma String(string de texto) é uma serie de caracteres como 'John Doe'.
Strings são escrita com aspas simples ou duplas.
~~~ javascript
let carName1 'Volvo xc60';
let carName2 "Volvo xc60";
~~~

Voce po utilizar aspas dentro de uma string, desde que elas não correspondam as aspas que cercam a string:

~~~ javascript
let answer1 = "'It's alright"
let answer2 = "He is called 'Johnny'"
let answer2 = 'He is called "Johnny"'

~~~
## Números JS

JS tem apenas um tipo numérico
Os números podem ser escritos com ou sem decimais:
~~~ javascript
let x = 34.00;
let x2 = 34;
~~~
Números extra grandes ou extra pequenos podem ser escritos com notação cientifica(exponencial):

~~~ javascript
let y = 123e5; //12300000
let y = 123e-5; //00.00123
~~~

## Booleans JS

Booleans podem ter dois valores **true** or **false**.
Exemplo:
~~~ javascript
let x = 5;
let y = 5;
let z = 6;

(x == y) // return true
(x == z )// return false
~~~
Booleans são frequentemente usados em testes condicionais

## MAtrizes JS
Matrizes JS são escritas com colchetes
Os itens da matriz são separados por virgulas.
O código a seguir declara(cria) um array chamado cars, contendo tres itens(nomes dos carros):

~~~ javascript
const car = ['Saab', 'Volvo', 'BMW'];
~~~

Os indices de matriz são baseados em zero,o que significa que o primeiro item é[0], o segundo é [1] assim por 
diante

## Objetos em JS
Objetos em JS são escritos com Chaves {}
As propriedades do objeto são escritas como pares  key:value, separados por virgulas.

~~~ javascript
const person = {firstName = 'John', lastName = 'Doe', age:50, eyeColor:'blue'};
~~~
O objeto(person) no exemplo acima tem 4 propriedades: firstName, lastName, age e eyeColor

## typeOf operator
Voce usa o **typeof** operador JS para localizar o tipo de uma var ou expressão

~~~ javascript
typeof ''           //returns 'string'
typeof 'John'       //returns 'string'
typeof 'John Doe'   //returns 'string'
~~~

~~~ javascript
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"
~~~

## Undefined
Em js, uma var sem valor tem o valor **undefined**. O tipo também é undefined.
~~~ javascript
let car; // value is undefined typeof undefined
~~~
Qualquer var pode ser esvaziada, definindo o valor como undefined.

~~~ javascript
car = undefined;
~~~

## Valores vazios(empty)
Um valor empty não tem relação com undefined
Uma string vazia tem um valor legal e um type

~~~ javascript
let car = ''; //the value is '' the type is 'string'
~~~
