# JS Random
Math.random() retorna um numero aleatório entre 0-1(exclusivo)

~~~ javascript
Math.random();
~~~
sempre retornara um numero menor que 1

## Inteiros Random

Math.random() usado com Math.floor() pode ser usado para retorna números inteiros aleatórios.

retorna random de 0-9
~~~ javascript
Math.floor(Math.random() * 10);
~~~

retorna random de 0-10
~~~ javascript
Math.floor(Math.random() * 11);
~~~

retorna random de 0-99
~~~ javascript
Math.floor(Math.random() * 100);
~~~

retorna random de 0-100
~~~ javascript
Math.floor(Math.random() * 101);
~~~

retorna random de 1-10
~~~ javascript
Math.floor(Math.random() * 10) + 1;
~~~

retorna random de 1-100
~~~ javascript
Math.floor(Math.random() * 100) + 1;
~~~

## Uma função 
Pode ser uma boa ideia criar uma função de gerar números aleatórios
Esta função JavaScript sempre retorna um número aleatório entre min (incluído) e max (excluído):
~~~ javascript
function getRandomInteger(min, max){
    return Math.floor(Math.random() * max - min) + min;
}
~~~
Esta função JavaScript sempre retorna um número aleatório entre min e max (ambos incluídos):

~~~ javascript
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
~~~