# Maps

Contem pares de chave/valor. Em que as chaves podem ser de qualquer tipo de dados
Um map lembra a ordem de inserção original das chaves

## métodos essenciais


|Method|	Description|
|--|--|
|new Map()|	Creates a new Map|
|set()	|Sets the value for a key in a Map|
|get()	|Gets the value for a key in a Map|
|delete()|	Removes a Map element specified by the key|
|has()	|Returns true if a key exists in a Map|
|forEach()|	Calls a function for each key/value pair in a Map|
|entries()|	Returns an iterator with the [key, value] pairs in a Map|
|**Property**|	**Description**|
|size	|Returns the number of elements in a Map|

## Como criar um map

Voce pode criar um map passando um array para o map
~~~ javascript
const fruits = new Map([['apples',500],['bananas',300], ['oranges',200]]);

~~~
 ## método set()

Voce pode adicionar elementos em um map com o set. Tbm pode ser usado para alterar valores de map existente

~~~ javascript
const fruits = new Map();
fruits.set(['apples',500])
~~~

Para alterar o valor basta especificar a chave que ja existe no set

~~~ javascript
fruits.set('apples',898);
~~~

## método get

get obtém o valor de um map baseado na chave
~~~ javascript
fruits.get('apples);
~~~

## A propriedade size
retorna o numero de elementos em um map
fruits.size

## método delete, deleta um elemento pela chave

~~~ javascript
mapa.delete('key');
~~~

## método has
retorna um boolean para caso existir uma elemento com tal chave
~~~ javascript
mapa.has('key');
~~~

## Objetos js vc Maps
|	|Objeto	|Mapa|
|--|--|--|
|Iterável|	Não diretamente iterável|	Diretamente iterável
|Tamanho|	Não tem uma propriedade de tamanho|	Tenha uma propriedade de tamanho
|Tipos de chave|	As chaves devem ser Strings (ou Símbolos)|	As chaves podem ser qualquer tipo de dados
|Pedido de chave|	As chaves não estão bem ordenadas|	As chaves são ordenadas por inserção
|Padrões|	Tem chaves padrão|	Não tem chaves padrão


## método forEach
chama uma função par cada chave/valor

~~~ javascript
mapa.forEach((value,key) => {
    console.log(`${key} => ${value}`);
});
~~~

## método entries

retorna um objeto iterador com chave e valor em um map

~~~ javascript
for(const x of mapa.entries()) {
    console.log(x)
}
~~~