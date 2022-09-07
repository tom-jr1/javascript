# JS Arrays
Um array é uma var especial que pode conter mais de um valor

~~~ javascript
const cars = ["Saab", "Volvo", "BMW"];
~~~

## Por que usar matrizes(arrays)
Se voce tiver uma lista de itens (nome de carros por exemplo) armazenar os carros em variáveis únicas
pode ficar assim:
~~~ javascript
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";
~~~

No entanto se voce quiser percorrer os carros e procurar um especifico? E se fosse 300 carros?
A solução seria uma matriz(array)
Uma matriz pode conter muitos valores em uma var e voce pode acessar os valores referindo-se a um number 
de índice.

## Criando uma matriz

Usar um literal de array é a maneira mais fácil de criar um array

~~~ javascript
const array_name = [item1,item2,...];
~~~

É uma pratica comum declarar arrays com a palavra chave **const**
Espaços e quebra de linhas não são importantes, uma declaração pode abranger varias linhas.
~~~ javascript
const cars = [
  "Saab",
  "Volvo",
  "BMW"
];
~~~
voce também pode criar uma matriz e fornecer os elementos:
~~~ javascript
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
~~~

## Usando a keyword new
O exemplo que segue tbm cria um array e atribui valores a ele:
~~~ javascript
const cars = new Array("Saab", "Volvo", "BMW");
~~~

Usamos a forma literal, por questões de desempenho e legibilidade

## Acessando elementos da matriz

Voce pode acessar referindo-se com o number index
~~~ javascript
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
~~~

    Index em matrizes começão a partir do 0

## Alterando um elemento da matriz

~~~ javascript
cars[0] = 'Other valuer';
~~~

## Acessando a matriz completa
~~~ javascript
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
~~~

## Matrizes são objetos 
Arrays são um tipo especial de objetos o typeof operador em JS retorna 'objeto' para arrays
Mas, matrizes js são melhores descritas como matrizes.


## Elementos de matrizes podem ser objetos
Vars JS podem ser objetos. Arrays são tipo especiais de objetos. Por causa disso voce pde ter tipos 
diferentes como indices de um array.
Voce pode ter objetos,funções, arrays dentro de um array

~~~ javascript
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
~~~

## Propriedades e métodos da matriz
 A verdadeira força dos arrays JS são as propriedades e métodos de arrays integrados

 ~~~ javascript
 cars.length // retorna o number de el
 cars.sort // ordena o array
 ~~~

## Propriedade de cumprimento

A **length** retorna o cumprimento de um array.

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const length = fruits.length;
~~~

A length é sempre 1 a mais do ultimo index.

## Acessando o primeiro elemento da matriz
~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
~~~

## Acessando o ultimo

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[(fruits.length -1)];
~~~

## Loop Array

Uma maneira de percorrer um array é usando o for loop
~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];

for(let i = 0; i< fruits.length ; i++){
    console.log(fruits[i])
}
~~~

Podemos usar tbm o array.**forEach()**

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach(item -> console.log(item));
~~~

## Adicionando elementos de matrizes
A maneira mais fácil de adicionar elementos de matrizes é usando o method **push()**

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.pus('avocado')
console.log(fruits);
~~~

pode usar um jump de :

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits[fruits.length] = 'avocado';
console.log(fruits);
~~~

    Criar elementos com index acima do do length cira lacunas de index com valores undefined.

## Matrizes associativas

Muitas linguagens suportam arrays com index nomeados 
São chamados de array associativos ou **hashes**
Js não suporta o mesmo. em JS sempre se usa arrays com index numerado


## Diferença entre arrays e objetos
Em JS array usam index numeral
em JS object usam index nomeados

    Arrays são tipos especiais de objetos, com indices numerados

## Quando usar matriz e quando usar objetos
- JS não suporta arrays associativos
- Voce deve usar objeto quando quer que os nomes dos elementos sejam string
- Voce deve usar arrays quando quiser que os nomes dos el sejam números

## JS new Array()

JS tem um construtor de array embutido **new Array()**
Mas voce pode usar com segurança [] em vez disso.
Essas duas instruções diferentes criam um novo array vazio chamado point

~~~ javascript
cont points = new Array();
points = [];
~~~

Essas duas declarações diferentes criam um novo array:

~~~ javascript
const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
~~~

A keyword new pode trazer alguns resultados inesperados

~~~ javascript
// Create an array with three elements:
const points = new Array(40, 100, 1);

// Create an array with two elements:
const points = new Array(40, 100);

// Create an array with one element ??? cria um array com 40 elementos com valor undefined
const points = new Array(40);  
~~~

Erro comum

~~~ javascript
const points = [40];

// não é o mesmo que:
const points = new Array(40);
~~~

## Como reconhecer uma matriz
Uma pergunta comum é como saber se uma var é array?
O problema é que o operador typeof retorna um object

~~~ javascript
const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
~~~

Para resolver esse problema, o ECMAScript5(2009) definiu um novo método Array.isArray():

~~~ javascript
Array.isArray(fruits);
~~~
Solução 2
O instanceof retorna true se um objeto for criado por um determinado construtor:

~~~ javascript
const fruits = ['Banana', 'Orange', 'Apple'];
fruits instanceof Array; //return true
~~~

retorna um boolean

length