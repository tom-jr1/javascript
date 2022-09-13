# Const Array
Em 2015, o Js introduziu uma nova palavra chave importante **const**.
Tornou-se uma pratica comum declarar arrays usando const:

~~~ javascript
const cars = ["Saab", "Volvo", "BMW"];
~~~
## Não pode ser reatribuída
Um array declarado com const não pode ser reatribuída
~~~ javascript
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Saab", "Volvo", "BMW"];
~~~

## Arrays não são constantes

A keyword const é um pouco enganosa
Ele não define uma matriz constante. Ele define uma referencia constante para uma matriz
Por causa disso, ainda podemos alterar os els de uma matriz const

## Elementos podem ser reatribuídos
Voce pode reatribuída os els de uma matriz const

~~~ javascript
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
~~~

## Atribuído quando declarado

As vars const devem receber um valor quando declaradas

~~~ javascript
const cars;
cars = ["Saab", "Volvo", "BMW"];
~~~

Arrays declaradas com **var** pode ser inicializada a qualquer momento
Voce pode até usar o array antes de ser declarado. Devido ao JS iça as var que são criadas com a keyword 
**var**

~~~ javascript
cars = ["Saab", "Volvo", "BMW"];
var cars;
~~~

## Bloco de scope
Um array declarado com const tem o Block scope.
Um array declarado em um bloco não é o mesmo array declarado fora do bloco

~~~ javascript
const cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  const cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Saab"
~~~

Um array declarado com **var** não tem escopo de bloco. E sim global

~~~ javascript
var cars = ["Saab", "Volvo", "BMW"];
// Here cars[0] is "Saab"
{
  var cars = ["Toyota", "Volvo", "BMW"];
  // Here cars[0] is "Toyota"
}
// Here cars[0] is "Toyota"
~~~

