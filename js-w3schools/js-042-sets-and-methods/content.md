# Set JS

Um set é um conjunto de valores exclusivos
Cada valor so pode ocorrer uma vez em um set.

## Métodos set essenciais

|método|Descrição|
|--|--|
|new set()| cria um novo set|
|add()|Adiciona um novo elemento ao set|
|delete()|remove um elemento do set|
|has()|retorna true se existir um valor no set|
|forEach()|retorna um callback para cada el no set|
|values()|retorna um iterator com todos os valores em um set|
|**Property**|**Descrição**|
|size| retorna o numero de els de um set|

## Como criar um set

- Passando um array para new Set()
- Criar um new Set e passe els com o add()
- Criar um new Set e passe vars com o add()


## new Set
Passando array para um set
~~~ javascript
const set =  new Set(["a","b","c","a","b","c"]);
~~~

Criando set e add valores

~~~ javascript
const letters = new Set();
letters.add('a');
letters.add('b');
letters.add('c');
letters.add('d');
~~~
Criando set e adicionando vars

~~~ javascript
const letters =  new Set();
const a = "a";
const b = "b";
const c = "c";

letters.add(a);
letters.add(b);
letters.add(c);
~~~

## add()

caso voce adicionar elementos iguais o set ignara as demais ocorrências dos mesmos valos salvando apenas um
~~~ javascript
const letters =  new Set();
letters.add('a');
letters.add('a');
letters.add('a');
letters.add('a');
letters.add('a');
letters.add('a');
letters.add('a');

console.log(letters);

// Saida = Set(1) { 'a' }
~~~

## método forEach
chama uma função callback para cada elemento do set

~~~ javascript
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
})
~~~

## método values()
retorna um novo objeto iterador contendo todos os valores de um set
~~~ javascript
letters.values()// retorna um objeto iterador com os valores de letters
~~~

Agora voce pode usar o objeto iterator para acessar os elementos

~~~ javascript
let text = '';
for(let x of letters.values()) {
    text += x;
}
~~~