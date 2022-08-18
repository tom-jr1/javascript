# JavaScript Object

## Objetos, propriedades e métodos
Na vida real um carro é um objeto.
Um carro tem propriedades como peso e cor, e métodos como iniciar e parar:

Todos os carros tem as mesmas propriedades, mas os valores das propriedades diferem de carro para carro.
Todos os carros tem os mesmos métodos, mas os métodos são executados em momentos diferentes.

## Objetos JavaScrip

Voce já aprendeu que as variáveis JS são containers para valores de dados.
Este código atribui um valor simples (Fiat) a um variável chamada car:

~~~ javascript
let car = 'Fiat';
~~~

Objetos tbm são variáveis. Mas objetos podem contem muitos valores.
Este código atribui muitos valores(Fiat, 500, branco) a uma var chamada car

~~~ javascript
const car = {type:'Fiat', model:'500', color:'white'};
~~~

Os valores são escritos com pares nome:valor (separados por ':')
É uma pratica comum declarar objetos com a keyword const

## Definição de objeto
Voce define e cria um objeto JS com um literal de objeto:

~~~ javascript
const person = {firstName:'John', lasName:'Doe', age:50, eyeColor:'blue'};
~~~

## Propriedades do objeto

Os pares nome:valor em objetos são chamados de properties

|Propriedade|Valor da Propriedade|
|--|--|
|firstName|John|
|lastName|Doe|
|age|50|
|eyeColor|blue|


## Acessando Propriedades do objeto

Voce pode acessar propriedades do objeto de duas maneiras:

~~~ javascript
objectName.propertyName
//or
objectName['propertyName']
~~~

## Métodos de objeto

Objetos tbm podem ter métodos.
Métodos são ações que podem ser executadas em objetos
Os métodos são armazenados em propriedades com definições de função

|Propriedade|Valor da Propriedade|
|--|--|
|firstName|John|
|lastName|Doe|
|age|50|
|eyeColor|blue|
|nomeCompleto|function(){return this.firstName + " " + this.lastName;}|

    Um método é como uma função armazenada como uma propriedade.

~~~ javascript
const person = {

    //attributes (properties)

  firstName: "John",
  lastName : "Doe",
  id       : 5566,

//functions
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
~~~

No exemplo acima, **this** refere-se ao objeto em si.
this.firstName --> significa o firstName do próprio objeto.

## O que é **this**

Em JS, a keyword **this** refere a um objeto
Qual objeto depende de com **this** esta sendo invocado(usado ou chamado).
**this** se refere a objetos diferentes dependendo de como é usada

Em um método de objeto o **this** refere-se ao objeto propriamente
Sozinho, **this** refere-se a um objeto global
Em uma função,no mode estrito **this** é undefined
Em um evento, **this** refere-se ao elemento que recebeu o evento.
Métodos como **call()** **apply** **bind** podem se referir **this** a qualquer objeto


## A keyword this

Em uma definição de função, this refere-se ao proprietário da func
No exemplo acima, this é o objeto person que possui a função fullName.
Em outras palavras, this.firstName significa firstName propriedade do objeto.

## Acessando métodos de objetos
 Voce acessa um method de objeto com a sintaxe seguinte

 ~~~ javascript
 objectName.methodName()
 name = person.fullName();
 ~~~
Se voce acessar esse method se os '()' ele retornará a definição da func

## Não declare string, números e booleans como objetos!

quando uma variável JS é declarada com a keyword **new**, a variável é criada como um objeto:

~~~ javascript
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
~~~
Evite String, Number e Boolean objects. Eles complicam seu código e diminuem a velocidade da execução.

