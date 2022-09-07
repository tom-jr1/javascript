# Iterações matrizes JS

Os métodos de iteração do array operam em cada index do array

## JS forEach()

O forEach() chama uma func de retorno de chamado uma vez para cada elemento da matriz 

~~~ javascript
const numbers = [45, 4, 9, 16, 25];
let txt = '';

numbers.forEach((item,index,arr)=>{console.log(item,index,arr)});
~~~

Observe que uma func lambda ou não pode receber 3 args(params) 
- o valor do item 
- índice de itens
- a matriz em si


## Array map()

O **map()**  cria um novo array executando uma função em cada elemento do array.
O map não executa a função para elemento do array sem valores.
o map não altera a matriz original
Este exemplo multiplica cada valor da matriz por 2

~~~ javascript
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map((item) => {item * 2});
~~~

## filtro de matriz JS

O filter método cria uma nova matriz com elementos de matriz que passam em um teste.
Este exemplo cria uma nova matriz de elementos com um valor maior que 18. 

~~~ javascript
const numbers = [45, 4, 9, 16, 25];
const n2 = n2.filter((item) = > item > 18);
~~~

O filter pode receber também os mesmos argumentos que o **forEach()**


## Redução de matriz JS

O **reduce()** método executa uma função em cada elemento da matriz para produzir (reduzi-la) em um
único valor.
O reduce funciona da esquerda para a direita, Existe tbm o **reduceRight()**

    O reduce método não reduz a matriz original

Este exemplo encontra a soma de todos os number de uma matriz

~~~ javascript
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce((reduce,item) => reduce += item);
~~~

O reduce trabalha com uma function de callback que pode trabalhar com 4 args
- O total
- O valor do item
- O index
- Matriz em si

## reduzRight

O reduzRight executa uma função em cada elemento da matriz para produzir um único valor
O reduceRight trabalho da direita para esquerda na matriz


## every()

O **every()** verifica se todos os valores do array passa por um teste.
Este exemplo verifica se todos os valores da matriz são maiores que 18

~~~ javascript
const numbers = [45, 4, 9, 16, 25];
let n = numbers.every(item => item > 18);
~~~

A função callback tem 3 args  item, index, arr


## some()

O **some()** diferente do every ele verifica se algum item passa pelo teste, caso any passar o retorno
é true. 
A função callback tem 3 args  item, index, arr

## indexOf
O **indexOf()** procura um valor de elemento em uma matriz e retorna sua posição.

~~~ javascript
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf('Apple');
~~~

**Sintaxe**
array.indexOf(item, start)
item  necessário o valor da pesquisa
start optional um index de inicio da pesquisa

## find()

O find() retorna o primeiro item da matriz que passar pelo teste do find    
Exemplo retorna o primeiro valor que seja maior que 18

~~~ javascript
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(item => item > 18);
~~~

A função callback tem os args value, index, arr.

## findIndex

O **findIndex()** retorna o index do primeiro el que passe pelo teste da função callback
Ex, index do primeiro item  > 18

~~~ javascript
const numbers = [4, 9, 16, 25, 29];
let index = numbers.findIndex(item -=> item > 18);
~~~
A função callback tem args --> value, index, arr

## Array.from

O Array.from retorna um array de qualquer objeto que tenha a propriedade length ou que seja iterável.

~~~ javascript
Array.from('ABCDEFGH');
~~~

## Array.key

O Array.key() método retorna um objeto Array Iterator com as chaves de um array

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = Array.key(fruits)
~~~

## entries()

Crie um Array iterator e em seguida, itere sobre os pares de chave/valor

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let arr = fruits.entries();

for(let x of arr){
    console.log(x)
}
~~~

entries() não altera a matriz original

## includes()
Array.include() em arrays. Isso nos permite verificar se um elemento esta presente em array

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes('Mango'); // true
~~~