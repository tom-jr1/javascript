# Pesquisas de string JS

Métodos de pesquisa JS
- String indexOf()
- String lasIndexOf()
- String startWith()
- String endsWith()

## String indexOf()

O **indexOf()** retorna o index da posição (primeira ocorrência) de um texto especificado
como param

~~~ javascript
let str = 'Please locate where "locate" occurs!';
str.index("locate");
~~~

## lastIndexOf
O **lastIndexOf()** retorna o index da last ocorrência de uma string informada no param

~~~ javascript
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate");
~~~

indexOf e lastIndexOf retornam **-1** caso não encontrem any ocorrência
Ambos aceitam um segundo param com a posição inicial de onde começar a pesquisa.

~~~ javascript
let str = "Please locate where 'locate' occurs!";
str.indexOf('locate', 15);
~~~

O lastIndexOf() começa a pesquisa de trás para frente. Então o param ira contabilizar
o inicio de trás para frente também

## JS search()
O **search()** pesquisa uma string por um valor especificado e retorna a posição da  
correspondência

~~~ javascript
let str = "Please locate where 'locate' occurs!";
str.search('locate');
~~~

Os dois métodos indexOf e search são iguais?
Eles aceitam os mesmos argumentos e retornam valores iguais?

Os dois métodos são diferentes
- O search não recebe um segundo param da initial position
- O indexOf não pode receber expressões regulares como param de busca

## String match()

O method match pesquisa uma string em busca de uma correspondência com uma expressão
regular e retorna todas as correspondências como um objeto array

~~~ javascript
let text = 'The rain in SPAIN stays mainly in the plain';
text.match(/ain/g);
~~~

    Caso a expressão regular não fosse informada o match retroaria a primeira 
    correspondência

Execute uma pesquisa global sem distinção sobre o case 

~~~ javascript
let text = 'The rain in SPAIN stays mainly in the plain';
text.match(/ain/gi);
~~~

## JS includes
O **includes()** retorna true se uma string contiver um valor especificado.

~~~ javascript
let text = 'Hello World, welcome to the universe.';
text.includes('world');
~~~
Sintaxe
string.includes(searchValue, start)

**searchValue**:  Required.  String a ser procurada
**start**:         Optional. Default(0)  posição inicial da busca
**Return**:    boolean  true se encontra correspondência, false caso não encontrar.
**JS version**: ECMScript(2015)

## JS startsWith()

O **startsWith()** retorna true se uma string começar com um valor passado no param, caso
contrario retorna false.


~~~ javascript
let text = 'Hello world, welcome to the universe';
text.startsWith('Hello');
~~~

Sintaxe
string.startsWith(searchValue,start);

**searchValue**: Required - O valor a ser procurado
**start**: Opcional - a posição inicial da busca

~~~ javascript
let text = 'Hello World, welcome to universe';
text.startsWith('World'); //return false
~~~

    O startsWith é camelCase: diferencia maiúsculas de minusculas

## JS endsWith()
O **endsWith()** retorna true se uma string terminar com a string informada no param
caso contrario, retorna false

~~~ javascript
let text = "John Doe";
text.endsWith("Doe");
~~~
Sintaxe

string.endsWith(searchValue, length)

params
searchValue  Require - o valor a ser procurado
length  Optional -  tamanho de caracteres que vai realizar a busca, da esquerda para 
direita

~~~ javascript
let text = "Hello world, welcome to the universe.";
text.endsWith("world", 11);
~~~

