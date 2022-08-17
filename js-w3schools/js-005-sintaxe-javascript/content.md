# Sintaxe JavaScript

A sintaxe JS é o conjunto de regras, como os programadores JS são construídos
~~~ javascript
//como criar variáveis
var x;
let y;

//how to use variables
x = 5;
y = 6;
let z = x + y;
~~~
Valores JS
As duas regras de sintaxe mais importantes para valores fixos são:

1. Os números são escritos com ou sem decimais:

~~~ javascript
10.50
1001
~~~

2. **Strings** são textos, escritos entre aspas duplas ou simples:

~~~ javascript
"John Doe"
'John Doe'
~~~

Variáveis JavaScript

Em uma linguagem de programação, as variáveis são usados para armazenar valores de dados.
JavaScript usa as palavras-chave var e let para const declarar **variáveis**.

Um sinal de igual é usado para atribuir valores as variáveis.
Neste exemplos, x é definido como uma variável. Então x é atribuído (dado) o valor 6:

~~~ javascript
let x;
x = 6;
~~~

## Operados JavaScript
JavaScript usa operadores aritméticos(+ - * /) para calcular valores:
~~~ javascript
(5+6) * 10
~~~
Javascript usa operador de atribuição (=) para atribuir valores a variáveis:

~~~ javascript
let x,y;
x = 5;
y = 6;
~~~

## Expressões JavaScript
Uma expressão é uma combinação de valores, variáveis e operadores, que calcula um valor.
O calculo é chamado de avaliação.
Por exemplo, 5*10 resulta em 50:
~~~ javascript
5 * 10
~~~
As expressões também podem conter valores de variáveis:

~~~ javascript
x * 10
~~~
Os valores podem ser de vários tipos, como números e strings.
Por exemplo, "John"+ " " + "Doe"

## Palavras-chave JavaScript

Palavras-chave JavaScript são usadas para identificar ações a serem executadas.
A palavra-chave **let** chave diz ao navegador para criar variáveis:

~~~ javascript
let x,y;
x = 5 + 6;
y = x * 10;
~~~

A palavra-chave **var** também informa ao navegador para criar variáveis:
~~~ javascript
var x, y;
x = 5 + 6;
y = x * 10;
~~~

## Comentários JavaScript
Nem todas as instruções JavaScript são "executadas".
Código após barras duplas '//' ou entre '/\*' e  '\*/' é tratado como um comentário.
Os comentários são ignorados e não serão executados:

~~~ javascript
let x = 5; // I will be executed
// x = 6; I will not be executed
~~~

## Identificadores/Nomes JavaScript
Identificadores são nomes JavaScript.
Os identificadores são usados para nomear vereáveis, palavras-chave e funções.
As regras para nomes legais são as mesma na maioria das linguagens de programação.
Um nome JavaScript começa com 
- Uma letra (AZ ou az)
- Um cifrão ($)
- Ou um sublinhado(_)

Os caracteres subsequentes podem ser letras, dígitos, sublinhados ou cifrões

    Observação
    Números não são permitidos como primeiro caractere em nomes.
    Dessa forma, O JS pode distinguir facilmente os identificadores dos números.

## JavaScript e caso de camelo
Historicamente, os programadores usaram diferentes maneiras de juntar varias palavras em um nome
de variável:
Hifens:
nome, sobrenome, cartão-mestre, intermunicipal.
    Hifens não são permitidos em JavaScript. Eles são reservados para subtrações.

Sublinhado:
first_name, last_name, master_card, inter_city

Superior Camel Case (Pascal Case)
Nome, SobreNome, MasterCard, InterCity.

Caixa inferior:
Os programadores JavaScript tendem a usar maiúsculas e minusculas que começam com uma letra minuscula:
firstName, lastName, masterCard, interCity.

## Conjunto de caracteres JS
JS usa conjunto de caracteres **Unicode**.
Unicode cobre quase todos os caracteres, pontuações e símbolos do mundo.