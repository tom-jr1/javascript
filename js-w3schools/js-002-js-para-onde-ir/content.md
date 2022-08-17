# Para Onde ir

## Tag <script>
Em HTML, o código JS é inserido entre as tags <script> </script>

Exemplo:

~~~ html
<script>
    document.getElementById('demo').innerHTML = 'My first Javascript code';
</script>
~~~

## Funções e eventos em JS
Um JS function é um bloco de código JS, que pode ser executado quando 'chamado'.
Por Exemplo, uma função pode ser chamada quando ocorre um evento, como quando o usuário cica em um botão.

## JS em <head> ou <body>

Voce pode colocar qualquer número de script em um document HTML.
Os scripts podem ser colocados no <body>, ou na <head> seção de uma pagina HTML, ou em ambos.

## jS em <head>

Neste exemplo, um JS function é colocado na <head> seção de uma pagina HTML.
A função é invocada (call) quando um botão é clicado:

## JS em <body>
Neste exemplo, em um JS function é colocado no <body> section de um HTML page.

~~~ javascript
<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>
~~~

## JS Externo

Os scripts também podem ser colocados em arquivos externos:
Scripts são práticos quando o mesmo código é usado em muitas paginas web diferentes.
Os arquivos JavaScript tem a extensão de arquivo **.js**
Para usar script externo, coloque o nome do arquivo de script no src atributo (source) de um <script> tag:

~~~ javascript
<script src='myScript.js'></script>
~~~

Voce pode colocar uma referencia de script externa em head ou <body> como desejar.
O script se comportara como se estivesse localizado exatamente onde a </script> tag esta localizada

Script externos não podem conter tag </script>

## Vantagens externas do JS

Colocar scripts em arquivos externos tem algumas vantagens
- Separa o HTML e código js
- Torna o HTML eo JS mais fáceis de ler e manter
- Arquivos JS em cache podem acelerar o carregamento da página
Para adicionar vários arquivos de js a uma página - use varias tags de script:

Exemplo
~~~ html
<script src="myScript1.js"></script>
<script src="myScript2.js"></script>
~~~

## Referencias externas 
Um script externo pode ser referenciado de 3 maneiras diferentes:

- Com url completo(endereço web)
- Com path de arquivo (path/arquivo.js)
- Sem nenhum caminho. Quando estão HTML e JS no mesmo package

Exemplo:
~~~ javascript
<script src="https://www.w3schools.com/js/myScript.js"></script>

<script src="/js/myScript.js"></script>

<script src="myScript.js"></script>
~~~

