# Methods JS
Os methods strings ajudam voce a trabalhar com strings

## Methods e properties string

Valores primitivos como 'John Doe', não podem ter propriedades ou métodos( por que não são objetos).
Mas com Js, métodos e propriedades tbm estão disponíveis para valores primitivos, porque JS trata valores
primitivos como objetos ao executar métodos e propriedades.

## COmprimento da string

a length property retorna o cumprimento de uma string

~~~ javascript
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
~~~

## Extrair partes de string

Existem 3 methods para extrair uma parte de uma string:
- slice(start, end)
- substring(start, end)
- substr(start, length)

## Fatia(slice) strings
**slice()** extrai uma parte de uma string e retorna a parte extraída em uma nova string.
O method tem 2 params a posição inicial e final.

Corte uma parte de uma corda da posição 7 para a posição 13 (13 não incluída):

~~~ javascript
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);

// >> Banana
~~~
    JS conta posições a partir do zero a primeira posição é a partir do zero

Se um parâmetro for negativo a posição pe contada a partir do final da string

~~~ javascript
let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);

// >> Banana
~~~

Se voce omitir o segundo param, o method cortará o restante da string;

~~~ javascript
let part = str.slice(7);
~~~

ou contando a partir do final

~~~ javascript
let part = str.slice(-12);
~~~

## Substring

**substring()** é semelhante a **slice()**
A diferença é que os valores inicial e final menores que 0 são tratados como o 0 em **substring**
Ele não opera 'de trás para frente' como o slice, ignora o valor negativo, trata-o como se fosse o índice zero

~~~ javascript
let str = "Apple, Banana, Kiwi"
let part = str.substring(7,13)
~~~
Se omitir o segundo param, o substring cortará o resto da string.

## substr()

**substr()** é semelhante ao **slice**
A diferença é que o segundo param especifica o tamanho da parte a ser extraída.

**slice**(n começa a copiar de n, n2 copie ate o índice n2)
**substr**(n comece a copiar de n, n2 copie a quantidade de n2 caracteres apos n)

~~~ javascript
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
~~~

se omitir o segundo param o method copiara o resto da string.
se o primeiro param for negativo, a posição conta a partir do final da string.

## Substituindo o conteúdo da string

O **replace** method substitui um valor especificado por outro valor em uma string

~~~ javascript
let text = "Please visit Microsoft";
let newText = text.replace("Microsoft","W3Schools");
~~~

O replace não altera a string em que é chamada,
O replace retorna uma nova string
O replace substitui apenas a primeira correspondência
Se deseja substitui todas as correspondência, use a expressão regular como o sinalizador /g definido

Por padrão o replace substitui apenas a primeira correspondência
~~~ javascript
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
~~~
Por padrão o replace diferencia maiúscula de minuscula
Para substituir maiúscula e minuscula ise a expressão regular com sinalizador /i

~~~ javascript
let text = "Please visit Microsoft!";
let newText = txt.replace(/MICROSOFT/i,"W3Schools");
~~~
    Expressões regulares são escritas sem aspas(', ")

Para substitui todas as correspondência, use a expressão /g

~~~ javascript
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");
~~~

## Converter para maiúsculo e minusculo

Uma string é convertida para maiúscula com **toUpperCase():**
Uma string é convertida para minuscula com **toLowerCase():**


~~~ javascript
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower

~~~

## Js String **concat()**

junta duas ou mais strings

~~~ javascript
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ",text2);
~~~

O concat pode ser usado em vez do operador de mais. Essas duas linhas fazem o mesmo

~~~ javascript
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
~~~

    Todos os métodos de string retornam uma nova string. Eles não modificam a string original
    String são imutáveis: string não podem ser alteradas, apenas substituídas


## Trim

O **trim** remove os espaços em branco de ambos os lados de uma string
~~~ javascript
let text1 = '   Hello World   ';
let text2 = text1.trim();
~~~

## Preenchimento de string 
O ECMAScript 2017 adicionou dois métodos String **padStart** e **padEnd()** para dar suporte ao preenchimento
no inicio e fim de uma string

- PadStart
O padStart() preenche uma string com outra string

~~~ javascript
let text = '5';
let padded = text.padStart(4,'x');
//  saída->> 'xxxx5'
~~~

O primeiro param é um number que informa quantos números de vezes a string sera adicionada no preenchimento

    O padStart é um método para string, caso queira fazer o mesmo com 
    números é necessário converte-los para string

~~~ javascript
let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");
~~~

- PadEnd 
O **padEnd()** preenche o final(end) uma string com outra string

~~~ javascript
let text = '5';
let padded = text.(4,'0');
~~~

    PadEnd é igualmente um método de string, numbers devem ser convertidos na hora de serem usados

~~~ javascript
let numb = 5;
let text = numb.toString();
let padded = text.padEnd(4,"0");
~~~


## Extraindo caracteres de strings

Existem 3 métodos para extrair
- charArt(position)
- charCodeAt(position)
- Acesso a propriedade[]

## JS String charAt
O **charAt()** retorna o caractere em um índice especificado (position)

~~~ javascript
let text = 'Hello World';
let char = text.charAt(0);

saída --> 'H'
~~~

## CharAtCode
O **charAtCode()**  retorna o uniCode do caractere em um índice especificado
retorna um code UTF-16

~~~ javascript
let text = "HELLO WORLD";
let char = text.charCodeAt(0);
~~~

## Acesso a propriedade
ECMAScript 2009 permite acesso a propriedade[] em string

~~~ javascript
let text = "HELLO WORLD";
let char = text[0];
~~~

    O acesso a propriedade pode ser um pouco imprevisível:
     - Faz string parecerem arrays(mas não são)
     - Se nenhum caractere for encontrado, [] retornara indefinido, enquanto charAt retornara uma string
     vazia
     - É somente leitura.str[0] = 'A' não da erro, mas não funciona


## Converter string em array
Uma string pode ser convertida em array com o **split()**:

~~~ javascript
text.split(',') //split on commas
text.split(' ') //split on spaces
text.split('|') //split on pipe
~~~

Se o separador for omitido, o array retornado conterá  a string inteira no índice [0].
Se o separador for "", o array retorna uma array de caracteres únicos