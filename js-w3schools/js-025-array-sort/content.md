# Array Sort

## Ordenando uma matriz

O sort() método ordena um array em ordem alfabética

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
~~~

## Revertendo uma matriz 
o reverse() inverte os elementos em uma matriz.
Voce pode usa-lo para classificar uma matriz em ordem decrescente:

~~~ javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruit.sort();
fruits.reverse();
~~~

## Classificação numérica
Por default a sort classifica os valors como strings.
Isso funciona bem para string 
No entanto se os números forem classificados com string, o sort produzira um resultado incorreto
ao classificar os números
Voce pode corrigir isso fornecendo uma função de comparação

~~~ javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a,b) => a - b);
~~~

caso queiramos decrescente

~~~ javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
~~~

## A função de comparação 
A finalidade da função de comparação é defini uma ordem de classificação alternativa
A função de comparação deve retorna um valor negativo, zero ou ou positivo, dependendo dos 
argumentos:
~~~ javascript
function(a, b){return a - b}
~~~

Quando a func sort compara dois valores, ela envia os valores para a func de comparação e 
classifica os valores de acordo com o valor retornado(zero, negativo, positivo).

Se o result for negativo a é classificado antes de b.
Se o resultado for positivo b é classificado antes do a
Se o result for 0 nenhuma alteração sera feita com a ordem de classificação dos dois valores

**Exemplo**
A função compare compara todos os valores na matriz, dois valores por vez (a, b).
A o comparar 40 e 100, o sort() método chama a função de comparação (400, 100)
A função calcula 40-100 (a - b) e, como o resultado é negativo (-60), a função classifica 40
como um valor menor que 100.
Voce pode usar esse snippet de code para experimentar a classificação e alfa


## Ordenando array em ordem aleatória
Por algum motivo que desconheço quando utilizamos o decimal 0.5 - Math.random() a coleção
de numbers se organiza de forma aleatório. Porem é infavorável para alguns numbers 
~~~ javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => 0.5 - Math.random());
~~~

## Encontrando o maior valor da matriz

Não a funções internas para verificar
No entanto, depois de classificar uma matriz, voce pode usar o índice para obter os valores mais
altos e mais baixos 
Asc:
~~~ javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b)=> a - b);
~~~
Desc:
~~~ javascript
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b)=> b - a);
~~~

Basicamente o que faz é ordenar o array e depois se asc pega o ultimo valor e apresenta ele como
o max. Caso fizer desc usa o first element da matriz.


## Math.max em uma matriz

Voce pode usar o math.max.apply para encontrar valores em uma matriz    

~~~ javascript
function myArray(arr){
    return Math.max.apply(null, arr);
}


~~~

## Usando Math.min em matriz
Voce pode usar o math.min.apply para pegar o menor valor de um array

~~~ javascript
function myArray(arr){
    return Math.min.apply(null, arr);
}
~~~

## Methods max e min na unha
A solução mais rápida para verificar maior e menor é  fazer na mão

~~~ javascript
function myArray(arr){
    let len = arr.length;
    let max = -Infinity;
    while(len--){
        if(arr[len] > max){
            max = arr[len];
        }
    }
    return max;
}
~~~

## Classificando matriz de objeto

Geralmente matrizes contem objetos

~~~ javascript
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
~~~

Mesmo que o s objetos tenham propriedades de tipos de dados diferentes o sort method pode ser 
usado para classifica a matriz. A solução é escrever uma função de comparação para comparar os
valores das propriedades

~~~ javascript
cars.sort((c1, c2) => c1.year - c2.year);
~~~

Comparar propriedades de strings ´e um pouco mais complexa.

~~~ javascript
cars.sort((c1, c2) => c1.type.toLowerCase() > c2.type.toLowerCase() ? 1 : c1.type.toLowerCase() < c2.type.toLowerCase() ? -1);
~~~