# JS Boolean
U boolean representa um de dois valores **true** ou **false**

## Valores booleans

Muitas vezes em programação voce precisa de um tipo de dado que so pode ter um de dois valores 
como:
- SIM / NÃO
- LIGADO / DESLIGADO
- VERDADEIRO / FALSO

Para isso o Js possui um tipo de dado boolean. Ele so pode assumir os valores true or false

## A função Boolean
Voce pode usar a func Boolean() para descobrir se sua expressão(ou var) é true or false

~~~ javascript
console.log(Boolean((10 > 9)));
~~~

ou mais  simples

~~~ javascript
console.log((10 > 9));
~~~
## Comparações e condições
O capitulo de comparação JS oferece uma visão geral dos operadores de comparação.
O capitulo de Condições JS fornece uma visão geral complete das declarações condicionais

alguns ex:

|Operador|Descrição|Ex|
|--|--|--|
|==|equal|if (day == 'Monday')|
|>|greater than|if (salary > 9000)|
|<|less than|if (age < 18)|

## Tudo que contenha um valor é considerado true pelo método Boolean()

~~~ javascript
Boolean(200);
Boolean(3.14);
Boolean(-15);
Boolean('Hello World');
Boolean('false');
~~~


## Tudo sem um valor é considerado false pelo Boolean()

O valor boolean de 0 é false
~~~ javascript
let x = 0;
Boolean(x);
~~~

O valor de string blanc é false
~~~ javascript
let str = '';
Boolean(str);
~~~

O valor undefined é false
~~~ javascript
let x;
Boolean(x)
~~~

O valor **null** é false

~~~ javascript
let x  = null;
Boolean(x);
~~~

O valor de false é false rsrssr
~~~ javascript
let x = false;
Boolean(x);
~~~

## JS boolean as object

Normalmente boolean são valores primitivos criados a partir de literais:

~~~ javascript
let x = false;
~~~

Mas Booleans podem ser definidos tbm com a palavra chave new:
~~~ javascript
let y = new Boolean(false);
~~~

~~~ javascript
let x = false;
let y = new Boolean(false);

typeof(x) //returns boolean
typeof(y) //returns a object
~~~

    Não crie objetos Booleans  por motivos de desempenho e resultados podem retorna unexpected

au usar o '=='
~~~ javascript
let x = false;
let y= new Boolean(false);

x == y; //returns true
~~~


ao usar o '==='
~~~ javascript
let x = false;
let y= new Boolean(false);

x === y; //returns false
~~~


Em resumo, só da merda comparar primitivo com object.

