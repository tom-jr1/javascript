# Method Array

## Convertendo array em string 
O method toString converte um array em uma string de valores de array(separados por virgulas)

~~~ javascript
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let fruitsString = fruits.toString();
console.log(fruitsString)
~~~

o **join()** ta,bém une todos os elementos do array em uma string.
Ele se comporta com toString(), mas além disso voce pode especificar o separador.

~~~ javascript
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let fruitsJoin = fruits.join('*');
console.log(fruitsJoin);
~~~


## Popping and pushing
quando voce trabalha com array, é fácil remover elementos e adicionar novos.

## pop()
remove o ultimo elemento de um array:

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
~~~
O pop() retorna o valor que foi extraído

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
~~~

## Push de matriz
O push método adicionar um novo elemento a um array (no final)
~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
~~~
push() retorna o novo length do array

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
~~~

## Elementos de deslocamento 
o shift remove o primeiro elemento da matriz e desloca os demais para o índice anterior

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
~~~
o shift retorna o valor que foi deslocado

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let removed  = fruits.shift();
~~~
## JS Array unshift()
O unshift() adiciona um novo elemento ao array no inicio e desloca todos os demais ao index a frente
~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift('Lemon');
~~~
O unshift retornara o novo cumprimento da matriz

## Alterando os elementos
Os elementos do array são acessados usando seu numero de index, onde zero é o primeiro

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = 'Kiwi';
~~~

## Cumprimento da matriz JS

A length da matriz fornece uma forma fácil de se anexar um novo elemento a matriz 

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = 'Kiwi';
~~~

## Exclusão de matriz
Os elementos da matriz JS podem ser excluídos utilizando o operador **delete**
Usando delete deixa buracos undefined na matriz
Use pop ou shift em vez disso

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
~~~

## Mesclando/Concatenando arrays
o **concat** cria um novo array concatenando arrays existentes

~~~ javascript
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
~~~

O **concat** não altera matrizes ja existente. Sempre retorna uma novas.
O concat pode receber any numero de elementos para concatenar

~~~ javascript
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
~~~

O concat tbm pode receber string como argumento

~~~ javascript
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat('Peter');
~~~
## Splicing e Slicing arrays
O splice adiciona novos items ao array
O slice fatia uma parte do array

## Emenda de matriz
O **splice** pode ser usado para adicionar novos itens a um array

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,0,'Lemon','Kiwi');
~~~

O primeiro parâmetro 2 defini onde os novos elementos iram ser adicionados
O segundo param 0 define quantos el devem ser removidos
O resto dos param define quantos os novos els a serem adds
O splice retorna um array com os objetos deletados


~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,2,'Kiwi','Lemon');
~~~


## Usando splice para remover  els
com a config inteligente de params, voce pode usar splice para remover els sem deixar buracos na matriz
~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0,1);
~~~
como o terceiro param foi omitido o splice realizar a tarefa apenas dos dois
0- numero de el a remover e qual el deve ser substituído.
Neste a matriz é alterada e retorna o valor removido

## slice()(fatiar a matriz)
fatia um pedaço da matriz par uma nova matriz
este exemplo corta uma parte da matriz a partir do index informado no param

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sliced = fruits.slice(1);
~~~

Retorna uma nova matriz. E não remove nenhum elemento da matriz atual
O slice pode receber dois args com a posição inicial e final para fatiar

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sliced = fruits.slice(1,3);
~~~
## toString automático
JS converte automaticamente em uma string separa por virgulas quando atribuída a um primitivo
os dois exemplos produziram o mesmo result
~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.QuerySelector('#demo').innerHTML = fruits.toString();
~~~

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.querySelector('#demo').innerHTML = fruits;
~~~

        Todos os objetos JS tem um toString()

## Encontrar valores max e min em uma matriz 
não ha funções internas para localizar o valor mais alto ou mais baixo em uma matriz JS