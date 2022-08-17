#  Introdução

## JS pode alterar conteúdo HTML
Um dos muitos métodos html javascript é o getElementById()
O exemplo abaixo 'encontra' um elemento html (com id='demo') e altera o conteúdo do elemento (innerHTML) para
'Hello World':

Exemplo:
~~~ javascript
document.getElementById('demo').innerHTML = 'Hello World';
~~~

JS aceita aspas simples e duplas.

## JS pode alterar valores de atributos HTML

O Js pode alterar o valor de atributos, por exemplo de uma tag imagem, que pode ter
seu atributo src alterado com javascript.

## JS pode alterar o estilo HTML(CSS)

~~~ javascript
document.getElementById('demo').style.fontSize = '35px';
~~~

## JS pode ocultar elementos HTML
Ocultar elementos HML pode ser feito alterando display style:

Exemplo
~~~ javascript
documento.getElementById('demo').style.display = 'none';
~~~

## JS pode mostrar elementos HTML
A exibição de elementos HTML ocultos também pode ser feita alterando o display style.

~~~ javascript
document.getElementoById('demo').style.display = 'block';
~~~
