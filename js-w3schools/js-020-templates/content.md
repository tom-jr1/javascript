# Templates literals

Sinônimos
- Modelo literal
- String models
- Modelo de sequencia
- Sintaxe Back-Tics

## Sintaxe Back-Tics
Os literais de modelo usam acentos graves (``) em vez das aspas para definir uma
string

~~~ javascript
string text = `Hello World`;
~~~

## Citações dentro da string

Com literais podemos usar aspas simples e duplas dentro da string

~~~ javascript
let text = `He's often called "John"`;
~~~

## String de varias linhas
Os literais de modelo permitem string de varias linhas:

~~~ javascript
let text = `
the quick
brow fox
jumps over
the lazy dog
`;
~~~

## Interpolação

Os literais fornecem uma maneira fácil de interpolar variáveis e expressões
o method é chamado de interpolação de string

~~~ javascript
${}
~~~

## Substituição de vars

~~~ javascript
let firstName = 'John';
let lastName = 'Doe';

let text = `Welcome, ${firstName} ${lastName}!`;
~~~


## Substituição de expressão

~~~ javascript
let price = 10;
let VAT = 0.25;

let total = `Total:${(price * (1 + VAT)).toFixed(2)}`;
~~~

## Models js

~~~ javascript
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
~~~

