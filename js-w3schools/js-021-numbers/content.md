# Js Numbers

Js tem apenas um tipo numérico. Os números podem ser escritos ou não com decimais.

~~~ javascript
let x = 3.14;
let y =3;
~~~

Numbers extra grandes e  extra pequenos podem ser escritos com notação cientifica.

~~~ javascript
let x =  123e5; // 123 * 10⁵
let y =  123e-5 // 123 * -(10⁵)
~~~

## Numbers js são sempre pontos flutuantes de 64 bits

Ao contrario de outras muitas linguagens de programação, JS não define diferentes tipos de de números.
Os numbers js são sempre armazenados com pontos flutuantes de dupla precisão seguindo o padrão 
internacional IEEE 754. Este formato armazena números em 64 bits, onde o number(fração) é armazenado nos
bits de 0 a 51, o expoente nos bits 52 a 64 e o sinal  no bit 63;

## Precisão de inteiro
Numbers inteiros são precisos a te 15 dígitos.

~~~ javascript
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000
~~~

## precisão Flutuante

A aritmética de PF nem sempre é 100% precisa

~~~ javascript
let x = 0.2 + 0.1;
~~~

## Adicionando numbers e string 

Se voce adicionar doi numbers o return sera number

~~~ javascript
let x = 10;
let y = 20;
let z = x + y;
~~~

s
e voce adicionar duas strings o retorno sera string

~~~ javascript
let x = "10";
let y = "20";
let z = x + y;
~~~

se voce adiciona um number com uma string  o result sera "concat string"
e vice-versa

~~~ javascript
let x = 10;
let y = "20";
let z = x + y;
~~~

~~~ javascript
let x = "10";
let y = 20;
let z = x + y;
~~~

## String numeric

As strings JS podem ter contents number

~~~ javascript
let x = 100;    //number
let y = '100';  //string
~~~

O Js tentara converter string em number em todas as operações numéricas

~~~ javascript
let x = "100";
let y = "10";
let z = x / y;
~~~

~~~ javascript
let x = "100";
let y = "10";
let z = x * y;
~~~
Mas isso não funciona. Será realizado o concat

~~~ javascript
let x = "100";
let y = "10";
let z = x + y;
~~~

## NaN (Not a Number)

palavra reservada JS para representar quando o numero não é valido
Tentar fazer aritmética com uma string não numérica resultará  em NaN.

~~~ javascript
let x = 100 / "Apple";
~~~

No entanto se a string contiver  um valor numérico, o resultado sera valido

~~~ javascript
let x = 100 / "10";
~~~

Voce pode usar a func global isNaN() para descobrir se um valor não é um numero:

~~~ javascript
let x = 100 / "Apple";
isNan(x);
~~~

NaN é typeOf number
~~~ javascript
NaN typeof number;
~~~

## Infinity

**Infinity** ou **-Infinity** é o valor que js  return se voce calcular um numero que vai para fora
da curva central(maior numero possível)

~~~ javascript
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}
~~~

divisão por zero tbm gera um Infinity
Infinity é typeof number

## Hexadecimal
JS interpreta contantes numéricas como hexadecimais se forem precedidas por 0x.

~~~ javascript
let x = 0xFF;
~~~
Por default, o JS exibe numbers com decimais de base 10.
Mas voce pode usar o **toString()** para gerar numbers de base 2 até 36

~~~ javascript
let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);
~~~

## Numbers JS como objects

Normalmente numbers são valores primitivos criados a partir de literais

~~~ javascript
let x =123;
~~~

Mas números podem também ser definidos com a keyword **new**

~~~ javascript
let y = new Number(123);
~~~

Não é boa pratica usar como o new.

Caso testarmos um mesmo numero instanciado com e sem **new**

~~~ javascript
let x = 123;
let y = new Number(123);

x == y //true
x === y //false
~~~

Lembrando que objetos não compara seus valores, e sim suas referencias

~~~ javascript
let y = new Number(123);
let z = new Number(123);

y === z  //false
~~~

