# Loop for
Loops podem executar um codeblock varias vezes

## loops JS
Os loops são uteis se voce quiser executar o mesmo code varias vezes, cada vez com
com um valor diferente. Muitas vezes esse é o caso ao trabalhar com matrizes:

## Diferentes tipos de loops

- for percorre um codeblock varias vezes
- for/in percorre as propriedades de um objeto
- for of percorre os valores de um objeto iterável
- while percorre um codeblock enquanto uma condição especifica for true
- do/while tbm percorre um codeblock enquanto uma condição especifica for true

## for
A for cria um loop com 3 expressões opcionais

~~~ javascript
for(expression1, expression2, expression3) {
//codeblock
}
~~~

expression1 é executada uma vez antes de executar o codeblock
expression2 define a condition para execução do codeblock
expression3 é executada ao final de cada exec de codeblock

~~~ javascript
for(let i = 0 ; i < 5 ; i++) {

}
~~~

no exemplo
expression1 define uma var antes de iniciar o loop(i = 0).
expression2 define a condição para que se repita o loop (i < 5)
expression3 acrescenta i++ para cada execução do codeblock

**Expression 1**
Normalmente voce usa a expression1 para declarar vars usada no loop. Isso nem 
sempre é o caso. A expressão1 é opcional
Voce pode iniciar muitos valors na expression1(separando-os) com virgula

~~~ javascript
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
~~~

**Expression2**
frequentemente é usada para avaliar a condição da var inicial. Isso não é sempre o
caso. a expression2 é opcional.
Se a expression2 retorna true o loop continua, caso contrario é interrompido.

**Expression3**
frequentemente é usada para incrementar valor a variável inicial. é opcional
a expression3 pode fazer qualquer coisa como incremento negativo (i--), 
positivo(i += 15). qualquer outra coisa

## Escopo de loop
Usando var em um loop

~~~ javascript
var i = 5;
for (var i = 0 i< 10; i ++) {
//codeblock
}
//here i is 10
~~~

usando let

~~~ javascript
let i = 5;
for(let i = 0 ; i < 10 ; i++) {
    //codeblock
}
// here i is 5
~~~

No primeiro exemplo usando var , a var declarada no loop, redeclara a var de fora
No segundo ex usando let, a var declarada no loop não  redeclara a var fora
Quando o let é usado para declarar a var no loop, ela tem scope apenas no loop