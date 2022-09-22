# Switch

A switch é usado para executar diferentes condições.

## A declaração de switch de JS 

Use a switch instrução para selecionar um dos muitos blocos de code a serem executado

**Sintaxe**
~~~ javascript
switch(expression) {
    case x:
        //codeBlock
        break;
    case y:
        //codeBlock
        break;
    default:
        //codeblock
}
~~~

Assim funciona
- A expressão switch é avaliada uma vez
- O valor da expressão é comparado com cada caso
- Se houver uma correspondência o codeBlock associado será exec
- Caos não houver any correspondência o codeblock default será executado

exemplo
O getDay, é o método que retorna o dia da semana
Sunday= 0, Monday = 1 ...
Este exemplo usará o dia da semana para calcular o nome do dia da semana:

~~~ javascript
let day = '';
switch() {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesdays';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
        
}
~~~

## Break
Quando o JS atinge o break ele sai do bloco switch. Isso interromperá a exec.
Não é necessário usar o break no ultimo case. Caso não adicionar o break a função 
ira executar os demais codeblocks

## default

O default especifica o code a ser exec caso a condição do switch não satisfaça 
nenhum dos cases. Bloco default não precisa ser o ultimo a ser declarado.


## Common codeblocks
as vezes voce desejará que diferentes cases tenham o mesmo codeblock de exec

~~~ javascript
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";

~~~

## Detalhes da comutação
Se vários casos corresponderem a um valor de caso o primeiro caso será selecionado
Se nenhum caso correspondente for encontrado, o programa continuara com o rotulo
default

## Comparação de estritas
Caso de comutação usam comparação estrita(===)
Os valores devem ser do mesmo type para corresponder
Uma comparação estrita so pode ser verdadeira se os operandos forem do mesmo tipo

~~~ javascript
let x = '0';

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
~~~