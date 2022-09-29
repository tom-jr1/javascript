# break
**break** salta de um loop
**continue** salta de uma iteração

## break statement
voce java usou o break para saltar fora de um switch. Tbm pode ser usado para saltar de um loop for

~~~ javascript
for(let i = 0 ; i < 10 ; i++) {
    if(i === 3){
        break;
    }
    console.log(`the number is ${i}`);
}
~~~

## continue statement
a continue interrompe uma iteração no loop e continua para a proxima iteração
~~~ javascript
for(let i = 0 ; i < 10 ; i++) {
    if(i === 3){
        continue;
    }
    console.log(`the number is ${i}`);
}
~~~

