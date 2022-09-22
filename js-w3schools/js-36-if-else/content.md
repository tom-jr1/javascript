# If else JS

As instruções condicionais são usadas quando voce quiser executar diferentes ações
com base em diferentes condições 

## Declaração
Muitas vezes quando voce escreve um código, deseja executar ações diferentes para 
decisões diferentes. Voce pode usar instruções condicionais em seu code para fazer
isso.
Em JS temos as seguintes declarações condicionais:

- Use if para especificar um code block a ser executado, se uma condição especifica
for true
- Use else para especificar um code block, se a mesma condição for false
- Use else if para especificar uma nova condição a ser testada, caso a primeira 
condição ter sido false
- Use switch para especificar muitos blocos alternativos de code a serem executado.


## A declaração if
Use if para especificar um code block a ser executado, se uma condição especifica
for true
**Sintaxe**
~~~ javascript
if(condition){
    //code block
}
~~~

    Observe que if está em letras minusculas. Letras maiúsculas(if ou IF)

faça uma saudação 'Bom dia' se hora for menor que 18
~~~ javascript
var greeting;
if(hour < 18) {
    greeting = 'Good Day';
}
~~~

## A declaração else
Use else para especificar um code block se a condição for false

~~~ javascript
if(condition) {
    //code block if true
} else {
    //code block if false
}
~~~

se hora for menor que 18, salde 'bom dia', caso contrario, 'boa noite'

~~~ javascript
var greeting;
if(hour < 18) {
greeting = 'Good Day';
} else {
greeting = 'Good evening';
}
~~~

## Else if
Para especificar uma nova condição caso a primeira retorne false

~~~ javascript
if(condition1) {
    //code block if true
} else if(condition2) {
    //code block if condition1 false and condition2 is true
} else {
    //code block if condition1 and condition2 is false
}
~~~

Se hora for menor que 10, saudação 'Bom dia'
~~~ javascript
var greeting;
if(hour < 10) {
    greeting = 'Good Morning';
} else if(hour < 20) {
greeting  = 'Good Day';
} else {
greeting = 'Good evening';
}
~~~

