## JS let
A keyword let foi introduzida em ES6(2015)
Variareis definidas com let não podem ser redeclaradas.
As variáveis definidas com let devem ser declaradas antes do uso.
As variáveis definidas com let têm escopo do bloco

## Não pode ser declarado

Variáveis definidas com let não pode ser redeclaradas
Voce não pode redeclarar acidentalmente uma variável com let

~~~ javascript
var x = 'John Doe';
var x = 0;
~~~

## Escopo do Bloco
Antes do ES6, JS tinha apenas **escopo Global** e **escopo de função**
O ES6 introduziu duas novas keywords: 'let' e 'const'
Essas duas keywords fornecem Block  scope em JS
Variáveis declaradas dentro de um bloco '{}' não podem ser acessadas de fora do bloco:

~~~ javascript
{let x = 2;}
//x can not be acesse here
~~~
variáveis declaradas com var não podem ter escopo de bloco
Variáveis declaradas dentro de um bloco pode ser acessadas de fora do bloco.

~~~ javascript
{var x = 2;}
//can be acesse here
~~~

## Redeclarando variáveis

Redeclarando uma variável usando a keyword var pode causar problemas
Redeclarando uma variável dentro de um bloco também redeclarará a variável fora do bloco

~~~ javascript
var x = 10;
// here x is 10

{
    var x = 2;
    //here x is 2
}

//here x is 2
~~~

## Redeclarando

Redeclarando uma variável JS com var é permitido em qualquer lugar de um programa:

~~~ javascript
var x = 2;
// Now x is 2

var x = 3;
// Now x is 3
~~~
 Com let não é permitido redeclarar uma variável no mesmo bloco:

 ~~~ javascript
 var x = 2; //allowed
 let x = 3; //Not allowed

 {
    let x =2;   //allowed
    let x =3;   //not allowed
 }

 {
    let x = 2;   //allowed
    var x = 3;   //not allowed
}
 ~~~

 redeclarar uma variável com let em outro bloco é permitido:
 ~~~ javascript
 let x = 2; // allowed
 {let x = 3;} // allowed
 {let x = 4;} // allowed
 ~~~ 

 ## Let Hoisting
 As variáveis definidas com var sao içadas(hosting) para o topo e poder inicializadas a qualquer momento.
 Significa que podemos utilizar a variável antes de ter sido declarada no código.

~~~ javascript
 carName = 'Volvo';
 var carName;
~~~
As variáveis definidas como let também são içadas, mas não inicializadas. Significado: Usar uma let variável
antes de ser declarada resultará em **ReferenceErro**
