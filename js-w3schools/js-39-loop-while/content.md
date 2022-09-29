## While

Os loops podem executar um codeblock desde que as condições sejam verdadeiras

## Loop While
percorre um codeblock enquanto uma condição for true
**Sintaxe**
~~~ javascript
while(condition) {
    //codeblock
}
~~~

exemplo:
O code no loop será exec enquanto a var i seja menor que 10
~~~ javascript
let i = 0;
while(i < 10) {
console.log(`the number is ${i}`);
i++;
}
~~~

## do while
é uma variante do while. Este loop executa o codeblock uma vez antes de checar a condition, então repetirá
a execução caso a condition for true

**Sintaxe**
~~~ javascript
do {
    //codeblock
} while(condition);
~~~
