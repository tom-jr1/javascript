## String JS

String em JS são usada para armazenar e manipular texto.
Uma string Js é zero ou mais caracteres escrito entre aspas.

Exemplo
~~~ javascript
let text = 'John Doe';
~~~

Voce pode usar aspas simples e duplas

~~~ javascript
let carName1 = "Volvo xc60";
let carName2 = 'Volvo xc60';

~~~
Voce pode usar aspas dentro de uma string, desde que elas não correspondam as aspas que cercam a string

~~~ javascript
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
~~~

## Comprimento da String 

Para encontrar o cumprimento da string, use a propriedade **length**

~~~ javascript
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
~~~

## Caractere de scape
Como as string devem ser escritas entre aspas, O js não entendera essa string

~~~ javascript
let text = "We are the so-called "Vikings" from the north.";
~~~
a string sera cortada para "We are the so-called"
A solução para evitar esse problema é usar o caractere de scape de barra invertida.
O caractere de escape de barra invertida '\' transforma caracteres especiais em caracteres de string


|Code| Result| Description|
|--|--|--|
|\\'|'|single quote|
|\\"|"|doble quote|
|\\\\|\\|backslash|

~~~ javascript
let text = "We are the so-called \"Vikings\" from the north.";
let text= 'It\'s alright.';
let text = "The character \\ is called backslash.";
~~~

Outras sequencias de scapes validas em JS

|code|Result|
|--|--|
|\\b| backspace|
|\\f|form feed|
|\\n|new line|
|\\r|carriage return|
|\\t|horizontal tabulator|
|\\v|Vertical tabulator|

## Quebrando linhas de code longas
Para melhorar a legibilidade , os programadores geralmente preferem evitar linhas com mais de 80 caracteres
Se uma instrução JS não couber em uma linha, o melhor lugar para quebra-la de um operador:

~~~ javascript
document.getElementById("demo").innerHTML =
"Hello Dolly!";
~~~
Voce tbm pode dividir uma linha de code dentro de uma string de texto com uma única barra invertida

~~~ javascript
document.getElementById("demo").innerHTML = "Hello \
Dolly!";
~~~

uma maneira  mais segura de se quebra linha, uma string usa adição de string

~~~ javascript
document.getElementById("demo").innerHTML = "Hello " +
"Dolly!";
~~~

## String Js como Objetos

Normalmente, strings JS são valores primitivos, criados a partir de literais:

let x = 'John';

Mas strings tbm podem ser definidas como objetos com a palavra **new**
~~~ javascript
let  y = new String('John');
~~~

Não crie objetos String
a keyword **new** complica e diminui a velocidade da exec do code
Objetos string podem produzir resultados inesperados
Ao usar o '==' xe y são iguais

~~~ javascript
let x = "John";
let y = new String("John");
~~~

Ao usar o '===' x e y não são iguais:

~~~ javascript
let x = "John";
let y = new String("John");
~~~

Observe a diferença entre x==y  e x===y

A comparação de dois objetos sempre retora false length 