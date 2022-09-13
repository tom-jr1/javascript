# Métodos obtenção de datas

|Method|	Description|
|--|--|
|getFullYear()	    | Get the year as a four digit number (yyyy)|
|getMonth()	        | Get the month as a number (0-11)|
|getDate()	        | Get the day as a number (1-31)|
|getHours()	        | Get the hour (0-23)|
|getMinutes()	    | Get the minute (0-59)|
|getSeconds()	    | Get the second (0-59)|
|getMilliseconds()	| Get the millisecond (0-999)|
|getTime()	        | Get the time (milliseconds since January 1, 1970)|
|getDay()	        | Get the weekday as a number (0-6)|
|Date.now()	        | Get the time. ECMAScript 5.|


## getTime

retorna o number de millisecond desde 1 de Janeiro de 1970
~~~ javascript
const d = new Date();
d.getTime();
~~~

## getFullYear()
Retorna o number de uma data com 4 dígitos

~~~ javascript
const d = new Date();
d.getFullYear();
~~~

## getMonth()
retorna o mes de uma da com numero entre 0-11.

~~~ javascript
const d =  new Date();
d.getMonth();
~~~

## getDate()
retorna o dia de uma data com number de 1-31

~~~ javascript
const d =  new Date();
d.getDate();
~~~

## getHours

retorna as horas de uma data com numbers de 0-23

~~~ javascript
const d = new Date();
d.getHours();
~~~

## getMinutes
retorna os minutos de uma data com os numbers 0-59
~~~ javascript
const d = new Date();
d.getMinutes();
~~~

## getSeconds()
retorna os segundos de uma data com valores 0-59

~~~ javascript
const d =  new Date();
d.getSeconds();
~~~

## getMilliseconds()
retorna os milliseconds de uma data com numbers 0-999
~~~ javascript
const d = new Date();
d.getMilliseconds();
~~~

## getDay
retorna o dia da semana de uma data, com valores de (0-6)
~~~ javascript
const d = new Date();
d.getDay();
~~~
Onde 0-> Sunday

## Métodos de data UTC

|Method|	Description|
|--|--|
| getUTCDate()	        | Same as getDate(), but returns the UTC date|
| getUTCDay()	        | Same as getDay(), but returns the UTC day|
| getUTCFullYear()	    | Same as getFullYear(), but returns the UTC year|
| getUTCHours()	        | Same as getHours(), but returns the UTC hour|
| getUTCMilliseconds()	| Same as getMilliseconds(), but returns the UTC milliseconds|
| getUTCMinutes()	    | Same as getMinutes(), but returns the UTC minutes|
| getUTCMonth()	        | Same as getMonth(), but returns the UTC month|
| getUTCSeconds()	    | Same as getSeconds(), but returns the UTC seconds|