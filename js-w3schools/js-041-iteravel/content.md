# JS Iterável
São objetos iteráveis (como arrays)
Iteráveis podem ser acessado com código simples e eficiente.
Iteráveis podem ser iterados com  **for of** loops

## for of Loop
percorre os elementos de um objeto iterável
**Sintaxe**
~~~ javascript
for(variable of iterable) {
    //codeblock
}
~~~

**Iterando**
Iterar é fácil de entender
Significa simplesmente fazer um loop sobre uma sequencia de elementos, alguns ex
- Iterar sobre uma string
- Iterar sobre um array

## iterando String

~~~ javascript
const name = 'W3School';
let nameFormat = '';
for(let character of name) {
    nameFormat += `-${character}`;
}
console.log(nameFormat);
~~~

## Iterando array

~~~ javascript
const letters = ['a','b','c'];
for(let l of letters) {
    console.log(l);
}
~~~

## Iterando um conjunto
~~~ javascript
const letters = new Set(['a','b','c','d'])
for(let c of letters) {
    console.log(c);
}
~~~

## Iterando um map

~~~ javascript
const fruits = new Map(["apples", 500],
  ["bananas", 300],
  ["oranges", 200]);

  for(let fruit of fruits) {
    console.log(fruit);
  }
~~~