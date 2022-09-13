# Métodos de set Date

Permite definir valores de data (ano, mes, dias, horas, minutos, segundos, milliseconds) para um
objeto date

## Definir métodos Date
Os métodos setDate são usados para definir uma parte da date
|Método| Descrição|
|--|--|
|setDate()	        |Set the day as a number (1-31)|
|setFullYear()	    |Set the year (optionally month and day)|
|setHours()	        |Set the hour (0-23)|
|setMilliseconds()	|Set the milliseconds (0-999)|
|setMinutes()	    |Set the minutes (0-59)|
|setMonth()	        |Set the month (0-11)|
|setSeconds()	    |Set the seconds (0-59)|
|setTime()	        |Set the time (milliseconds since January 1, 1970)|


## setFullYear()

define o ano de um objeto date
~~~ javascript
const d =  new Date();
d.setFullYear(2020);
~~~

O setFull Year opcionalmente pode add o mes e dia

~~~ javascript
const d = new Date();
d.setFullYear(2020,11,3);
~~~


## setMonth

define o mes de um objeto Date (0-11)
~~~ javascript
const d =  new Date();
d.setMonth(11);
~~~

## setDate()
define o dia de um objeto date (1-31)
~~~ javascript
const d =  new Date();
d.setDate(20);
~~~
o setDate pode ser usado para acrescentar dias a uma date

~~~ javascript
const d =  new Date();
d.setDate(d.getDate() + 20);
~~~

## setHours

define as horas de um objeto date (0-23)
~~~ javascript
const d =  new Date();
d.setHours(22);
~~~

## setMinutes()
defini os minutos de um objeto date (0-59)
~~~ javascript
const d =  new Date();
d.setMinutes(12);
~~~

## setSeconds()

define segundos de um objeto Date (0-59)
~~~ javascript
const d =  new Date();
d.setSeconds(45);
~~~


# Comparar datas  
As datas podem ser facilmente comparadas. O ex a seguir compara a data de hoje com 
14 de janeiro de 2100;

~~~ javascript
let text = '';
const today =  new Date();
const someDay = new Date();
someDay.setFullYear(2100,01,14);
if (someDay > today) {
    text = 'today is before Jan 14 2100';
} else {
    text = 'today isn\'t before Jan 14 2100';
}
~~~
