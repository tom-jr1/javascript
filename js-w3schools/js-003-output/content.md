# Output JS
## Possibilidades de exibição do JS

JS pode exibir dados de diferentes maneiras:

- Escrevendo em um elemento HTML usando **innerHTML**
- Escrevendo na saída de HTML usando **document.write()**
- Escrevendo em uma caixa de alerta, usando **window.alert()**
- Escrevendo no console do navegador, usando **console.log()**

## Usando innerHTML

Para acessar um elemento HTML, JS pode usar o document.getElementoById(id) método.
O id atributo define o elemento HTML. A innerHTML Propriedade define conteúdo HTML:

~~~ html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>
~~~

## Usando document.write()

para fins de teste, é conveniente usar document.write();

~~~ html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>
~~~

O uso document.write após o carregamento de um HTML excluirá todo o HTM existente

~~~ html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<button type="button" onclick="document.write(5 + 6)">Try it</button>

</body>
</html>
~~~

## Usando o window.alert()

Voce pode usar uma caixa de alerta para exibir dados:

Exemplo:

~~~ html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>
~~~
Voce pode pular a palavra window.
Em Js o objeto de window é o objeto de escopo global, o que significa que variáveis, propriedades e métodos por
padrão pertencem ao objeto de window. Isso também significa que especificar a keyword window é opcional 

Ex:
~~~ html
<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
alert(5 + 6);
</script>

</body>
</html>
~~~

## Usando console.log()

Para fins de depuração, voce pode chamar o console.log() método no navegador para exibir dados.

Exemplo:

~~~ html
<!DOCTYPE html>
<html>
<body>

<script>
console.log(5 + 6);
</script>

</body>
</html>
~~~

## Output JS
JS não tem nenhum objeto de impressão ou métodos de impressão.
Voce não pode acessar dispositivos de saída do JS
A única exceção é que voce pode chamar o **window.print()** método para imprimir o conteúdo da tela atual.
Exemplo:

~~~ html
<!DOCTYPE html>
<html>
<body>

<button onclick="window.print()">Print this page</button>

</body>
</html>
~~~

