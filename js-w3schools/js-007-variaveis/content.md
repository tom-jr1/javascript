# Variáveis(var) em JS

4 maneiras de declarar variáveis em JS

- usando **var**
- usando **let**
- usando **const**
- usando nada

## O que são Variáveis
Variáveis são containers para armazenar dados(armazenar valores de dados).
Neste exemplo x,y e z são variáveis com a keyword var

~~~ javascript
var x = 5;
var y = 6;
var z = x + y;
~~~

Neste exemplo a declaração é realizada com a keyword let
~~~ javascript
let x = 5;
let y = 6;
let z = x + y;
~~~

Neste exemplo a declaração é realizada sem keyword

~~~ javascript
x = 5;
y = 6;
z = x + y;
~~~

Quando usar JS var?
Sempre declare variáveis JS com var, let ou const.
A keyword var é usada em todo o code js de 1995 a 2015
As keywords let e const foram adicionadas em 2015
Se voce deseja que seu code seja executado em um navegador mais antigo, voce deve usar **var**.


## Quando usar JS const 
Se voce quer uma regra geral: sempre declare variáveis como **const**
Se voce acha que o valor da variável pode mudar use **let**
Neste exemplo, price1, price2 e total, são variáveis:

~~~ javascript
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
~~~

As duas variáveis price1 e price2 são declaradas com const 
Estes são valores constantes e não podem ser alterados
A varinel total é declarado com let
Este é um valor que pode ser alterado

## Assim como a algebra
Assim como na algebra, as variáveis guardam valores:

~~~ javascript
let x = 5;
let y = 6;
~~~


## Identificadores JS
Todas as variáveis JS devem ser identificadas com nomes exclusivos.
Esses nomes exclusivos são chamados de identificadores.
Os identificadores podem ser nomes curtos (como x e z) ou nomes descritivos (idade, soma, volume, total, etc)
As regras gerais para construir nomes para variáveis identificadores exclusivos são:

- Os nomes podem conter letras, dígitos, sublinhados e cifrões
- Os nomes devem começar com uma letra 
- Os nomes também podem começar com **$** e **_**
- Os nomes diferenciam low e Upper case
- Keywords do JS não podem ser usadas como nomes

## Operadores de atribuição
E JS , o sinal de igual (=) é um operador de atribuição.
Isso é diferente da algebra. O seguinte não faz sentido em algebra:

~~~ javascript
x = x + 5
~~~

Em js, no entanto, faz todo o sentido: atribui o valor de x + 5 a x.
Ele calcula o valor de x + 5 e coloca o resultado em x. O valor de x é incrementado em 5.

    O operador de 'igual a' é escrito como == em JS

## Tipos de dados em JS

As variáveis JS podem conter números e valores de texto
Na programação os valores de texto são chamados de string de texto
JS pode lidar com muitos tipos de dados, mas por enquanto, pense apenas em numero e string
Strings são escritas entre aspas duplas ou simples. Os números são escritos sem aspas.
Se voce colocar numero entre aspas ele sera tratado como uma string de texto.

Ex:

~~~ javascript
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';
~~~

## Declarando uma variável JS

Criar uma variável em JavaScript é chamado de "declarar" uma variável.
Voce declara uma variável JS com var ou let:

~~~ javascript
var carName;
//or
let carName;
~~~

Apos a declaração a variável não tem um valor (tecnicamente **undefined**)
para atribuir um valor á variável, use o sinal de igual:

~~~ javascript
carName = "Volvo";
~~~

Voce também pode atribuir um valor á variável ao declara-la:

~~~ javascript
let carName = 'Volvo';
~~~

No exemplo abaixo, criamos uma variável chamada carName e atribuímos o valor 'Volvo' a ela
Em seguida 'enviamos' o valor dentro de um paragrafo HTML com o id 'demo':

~~~ html
<p id = 'demo'></p>

<script>
    let carName = 'Volvo'
    document.getElementById('demo').innerHTML = carName;
</script>
~~~

    É boa pratica de programação declarar todas as variáveis no inicio do script.

## Uma declaração, muitas variáveis
Voce pode declarar muitas variáveis em uma instrução.
Inicie a instrução com let e separe as variáveis por virgula:

~~~ javascript
let person = 'John Doe', carName = 'Volvo', price = 200;
~~~

Uma declaração pode abranger varias linhas:

~~~ javascript
 let person = 'John Doe',
 carName = 'Volvo',
 price =200;
~~~

## Valor = undefined

Em programas de computador, as variáveis geralmente são declaradas sem valor. O valor pode ser algo
que precisa ser calculado ou algo que será fornecido posteriormente, como entrada do usuário.
Uma variável declarada sem valor terá seu valor como **undefined**
A variável carName terá o valor **undefined** após a execução da instrunção

~~~ javascript
let carName;
~~~

## Redeclarando variáveis JS
Se voce declara novamente uma variável JS declarada como var, ela não perderá seu valor
A variava carName ainda terá seu valor 'Volvo' após a execução dessa instrução:

~~~ javascript
var carName = 'Volvo';
var carName;
~~~

    Voce não pode declarar novamente uma variável declarada co let ou const.

## Aritmética JS

Assim como na algebra, voce pode fazer aritmética com variáveis JS, usando operadores

~~~ javascript
let x = 5 + 2 + 3;
~~~

Adicionando string elas serão concatenadas:

~~~ javascript
let x = 'John' + ' ' + 'Doe';
~~~

~~~ javascript
let x ='5' + 2 + 3;
// saída --> 523
~~~

    Se voce colocar um numero entre aspas, o restante dos números será tratado com string e concatenado.

~~~ javascript
let x = 2 + 3 + '5';
//saída --> 55
~~~


## JS Cifrão($)

Como Js trata um cifrão como uma letra, identificadores contendo $ são nomes de variáveis validos:

~~~ javascript
let $ = 'Hello World';
let $$$ = 2;
let $myMoney = 5;
~~~

Usar o cifrão não é muito comum em JS, mas programadores profissionais costumam usá-los como um alias
para a função main de uma lib JS.
Na biblioteca JS JQuery, por exemplo, a função main $ é usado para selecionar elementos HTML . Em JQuery $('p');
significa 'selecionar todos os elementos "p"'

## Sublinhado JS(_)
Como o JS trata o sublinhado como letra, os identificadores que contem '_' são nomes de variáveis validos:

~~~ javascript
let _lastName = 'Johnson';
let _x = 2;
let _100 = 5;
~~~

Usar o sblinhado não é muito comum em JS, mas uma convenção entre programadores profissionais é usa-lo como
um alias para variáveis 'privadas'