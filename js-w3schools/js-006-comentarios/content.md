# Comentários JavaScript

Comentários JavaScript podem ser usados para explicar o código JavaScript e torna-lo mais legível.
Cometários também podem ser usados para impedir a exec, ao usar codes alternativos.

## Comentários de linha única

Comentários de linha única começam com //
Qualquer texto entre // e o final da linha será ignorado pelo JS não será executado.
Este exemplo usa um comentário de linha única antes de cada linha de código:

Exemplo
~~~ javascript
// mudando o heading
document.getElementById('myH').innerHTML = 'My First Page';

//change de paragraph
document.getElementById('myP').innerHTML = 'My First Paragraph';
~~~

Exemplo de comentários no final de cada linha, com intuito de explicar o code.

~~~ javascript
let x =5; // declarando x e atribuindo 5 como valor
let y = x + 2; // declarando y, atribuindo o valor de x somado com 2
~~~

## Comentário de varias linhas

Comentarios de varias linhas começam com '/\*' e terminam com '\*/'. Qualquer texto entre eles sera ignorado
pelo interpretador do JS

~~~ javascript
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
~~~
    é mais comum utilizar comentários de linha única. Comentários de varias linhas são mais comuns em
    documentações formal.

## Usando  comentário para impedir execução

Usar comentário para impedir a execução de código é adequado para teste de código.
Adicionar // na frente de uma linha de código altera as linhas de código de uma linha executável
para um comentário.

~~~ javascript
//document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
~~~

Este exemplo usa bloco de comentários para impedir a execução de varias linhas de códigos

~~~ javascript
/*
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
*/
~~~
