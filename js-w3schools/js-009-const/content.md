# Const JavaScript

A const foi introduzida em ES6(2015)
Variáveis declaradas com const não podem ser redeclaradas.
Variáveis definidas com const não pode ser reatribuídas
As Variáveis definidas com const tem escopo do bloco.

## Não pode ser reatribuído

Uma **const** variável não pode ser reatribuída:

~~~ javascript
const PI = 3.141592653589793;
PI 3.14;        // dispara erro
PI = PI + 10;   // dispara erro tbm
~~~

## Deve ser atribuído
As variáveis JavaScript const devem receber um valor quando são declaradas:

correto
~~~ javascript
const PI= 3.141592653589793;
~~~

incorreto
~~~ javascript
const PI;
PI =3.141592653589793;
~~~

## Quando usar const
Como regra geral, sempre declare uma variável como const a menos que voce saiba que o valor será alterado
Use const quando declarar
- matriz
- objeto
- function
- RegExp(expressão regular)

## Objetos e matrizes constantes

A keyword const é um pouco enganosa.
Não define um valor constante. Ela define uma referencia constante a um valor.
Por isso não pode:
- Reatribuir um valor constante
- Reatribuir uma matriz constante
- Reatribuir um objeto constante

Mas voce pode:

- Altere os elementos de uma matriz constante
- Altere as propriedades do objeto constante

## Matrizes Constantes
Voce pode alterar os elementos do uma matriz constante:

~~~ javascript
// You can create a constant array:
const cars = ['Saab', 'Volvo', 'BMW'];

// You can change an element:
cars[0] = 'Toyota';

// You can add an element
cars.push('Audi');
~~~

Mas voce não pode reatribuir matriz:

~~~ javascript
const cars = ['Saab', 'Volvo', 'BMW'];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR
~~~

## Objetos constantes
Voce pode alterar as propriedades de um objeto constante:

~~~ javascript
const car = {type:'Fiat', model:'500', color:'white'};

car.color = 'red';

//podemos adicionar propriedade
car.owner = 'John'
~~~

mas não pode reatribuir o objeto
~~~ javascript
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
~~~

## Escopo de bloco

Declarar uma variável com const é semelhante a let quando se trata de **Block Scope**
o x declarado no bloco, neste exemplo, não é o mesmo que o x declarado fora do bloco:

~~~ javascript
const x = 10; 
// here x is 10
{
    const x = 2
    // here x is 2
}
//here x is 10;
~~~

## Redeclarando
Redeclarar uma **var** JS é permitido em qualquer lugar em um programa

~~~ javascript
var x = 2;
var x = 3;
x = 4;
~~~

Redeclara uma variável var ou existente para, no mesmo escopo, não  é permitido para let e const

~~~ javascript
var x = 2;     // Allowed
const x = 2;   // Not allowed

{
let x = 2;     // Allowed
const x = 2;   // Not allowed
}

{
const x = 2;   // Allowed
const x = 2;   // Not allowed
}
~~~

Não é permitido reatribuir uma const variável existente, no mesmo escopo

~~~ javascript
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}
~~~

Redeclara uma variável com const em outros escopos, ou blocos é permitido

~~~ javascript
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}
~~~

## Const Hoisting

As variáveis definidas com var são içadas para o topo e pode ser inicializadas a qualquer momento.

Voce pode usar a variável antes de ser declarada
~~~ javascript
carName = "Volvo";
var carName;
~~~

as variáveis const também são içadas para o topo, mas não inicializadas.
resultará em erro tentar usa-la antes de sua declaração

~~~ javascript
alert(carName);
const carName = 'Volvo';
~~~