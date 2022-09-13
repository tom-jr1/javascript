# Objetos Data

## Output data JS
Por padrão o js usará o fuso horário do navegador e exibirá uma data como string de texto:

## Criando Objetos de Data

Objetos de datas são criados com o new Date()
Existe 4 maneiras um novo objeto data:

~~~ javascript
new Date();
new Date(year,month,day,hours,minute,seconds,milliseconds);
new Date(milliseconds);
new Date(stringDate);
~~~

## New Date

Cria um novo objeto data com a hora atual

~~~ javascript
const date =  new Date();
~~~

## New Date(args)
cria um novo objeto Data com definição baseada com seus args
7 numbers especificam ano, mes, dia , hora, minuto, segundo, milissegundos.

~~~ javascript
const date =   new Date(1993, 03, 13, 10, 33, 30, 0);
~~~

Nota: Js conta meses de 0 a 11

Especificar um mes maior que 11, não resultará em erro, mas adicionará o estouro para o prox mes
O mínimo de parâmetro que podemos oferecer é de ano e mes. Caso contrario o param sera entendido como
milliseconds.

## Seculo anterior

Anos de um e dois dígitos serão interpretados como 19XX

~~~ javascript
const date = new Date(93, 04, 13);
~~~
## new Date(dataString)

cria um objeto data a partir de uma string

~~~ javascript
const date = new Date('October 13, 2014 11:13:00');
~~~

## new Date(milliseconds)
cria um objeto de datas com zero tempo mais milissegundos.

~~~ javascript
const d  =  new Date(0);
~~~

## Métodos date

Quando um Objeto date é criado, vários métodos permite que voce opere neles
Os métodos de data permite obter e definir o ano, mês, dia, hora, minuto, segundo e milissegundo de 
objetos de data, usando a hora local ou a hora

## Exibindo datas 
por padrão o js exibe datas no formato de string
Quando voce exibe um objeto de data no HTML, ele é convertido imediatamente para string , com o 
toString()

~~~ javascript
const date = new Date();
date.toString();
~~~
O toUTCString() converte uma data para uma string UTC(padrão de exibição de data)
~~~ javascript
const date = new Date();
date.toUTCString();
~~~
O toDateString() converte uma data em um formato mais legível.
~~~ javascript
const date =  new Date();
date.toDateString();
~~~

O toISOString() converte a data para uma String no padrão ISO

~~~ javascript
const date =  new Date();
date.toISOString();
~~~

