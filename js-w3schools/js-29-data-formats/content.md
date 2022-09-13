# Js Data formats

## Entrada de data JS

geralmente existe 3 tipos de formato de entrada de data

|Model|Exemplo|
|--|--|
|Data ISO|"2015-03-25" (O Padrão Internacional)|
|Short Date|"25/03/2015"|
|Data longa|"Mar 25 2015" or "25 Mar 2015"|

O ISO segue um padrão estrito em JS. Os outros formatos não são tão bem definidos e podem ser
específicos do navegador

## Saiada de datas no JS 
Independente do formato de entrada, o JS ira produzir por padrão datas no formato de string de texto 
completo
~~~ bash
Fri Sep 09 2022 05:11:10 GMT-0300 (Horário Padrão de Brasília)
~~~

## Data ISO
A ISO 8601 é a norma internacional para representação de datas e horas
A sintaxe ISO 8601 (AAAA-MM-DD) tbm é o formato de data preferido

~~~ javascript
const d = new Date("2022-09-09");
~~~
A data calculada sera relativa ao seu fuso horário

## Data ISO Ano Mes

As datas ISOs podem ser declaradas sem definir o dia
~~~ javascript
cons d =  new Date("2022-09");
~~~

## Data ISO data/hora
As datas ISOs podem ser escritas com horas, minutos e secs (AAAA-MM-DDTHH:MM:SSZ)

~~~ javascript
const d = new Date("2022-09-09T12:12:12Z")
~~~

A data e hora são separados por um 'T'
a hora UTC é definido com 'Z'
Se quiser modificar a hora relativa ao UTC remova o 'Z' e adicione +HH:MM ou -HH:MM

~~~ javascript
const d =  new Date("2015-03-25T12:00:00-06:30");
~~~

UTC(Universal Time Coordinated) é O  mesmo que GMT(Greenwich Mean Time)


## Fusos Horários
Ao definir uma data sem especificar o fuso horário, O JS usará o fuso horário do navegador.
Ao obter uma data sem especificar o fuso horário, o resultado é convertido para navegador.

## Datas curtas de JS 
Datas são escritas com uma sintaxe  MM/DD/AAAA

~~~ javascript
const d =  new Date("09-09-2022")
~~~

**Avisos**
Em  alguns navegadores, meses ou dias sem zeros a esquerda podem produzir erros

~~~ javascript
const d = new Date('2022-9-9');
~~~

O comportamento de 'AAAA/MM/DD' é indefinido
Alguns navegadores tentarão adivinha o formato. Alguns retornaram NaN
~~~ javascript
const d =  new Date('25/03/2002');
~~~

O comportamento de 'DD/MM/AAAA' tbm é indefinido
Alguns navegadores tentarão adivinha o formato. Alguns retornaram NaN
~~~ javascript
const d = new Date('09-09-2022')
~~~

## Datas Longas JS
Datas longas são mais frequentemente escritas com uma sintaxe 'MMM DD YYYY' como esta:

~~~ javascript
const d = new Date("Mar 20 2022");
~~~

Mes e dia podem esta em qualquer order
~~~ javascript
const d = new Date('25 Mar 2022');
~~~

O nome pode ser escrito por estênico ou abreviado

~~~ javascript
const d1 = new Date('Jan 23 2022');
const d2 = new Date('January 23 2022');
~~~
As virgulas são ignoradas. Os nomes não são caseSensitive

~~~ javascript
const d = new Date('JANUARY, 22, 2022');
~~~

## Entrada de data -datas de analise

Se voce tiver uma string de data valida. Poderá usar o Date.parse(), método para converte-la em 
milliseconds **Date.parse()**;
**Date.parse()** retornara uma data especificada no param como um valor em milliseconds contando a partir
da data 1 de Jan 1970

~~~ javascript
let m = Date.parse("MAR 21 2022");
~~~

Voce pode usar os milliseconds para converte-los em data tbm com o Date.parse(mill);

~~~ javascript
const d =  new Data(1212434);
~~~