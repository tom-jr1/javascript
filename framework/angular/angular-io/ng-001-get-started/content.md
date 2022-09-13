# Getting started

## O que é o Angular?

Angular é uma plataforma de desenvolvimento construído em typescript. Como plataforma o Angular 
inclui:
- Uma estrutura baseada em componentes para criar apps da web escaláveis
- Uma coleção de bibliotecas bem integradas que cobrem uma ampla variedade de recursos, incluindo
roteamento, gerenciamento de formulários, comunicação cliente-server e muito mais
- Um conjunto de ferramentas de desenvolvedor para ajuda-lo a desenvolver, build, teste e atualizar
seu code

Com o angular voce esta aproveitando uma plataforma que pode ser dimensionada de projeto de um 
único desenvolvedor a apps de nível empresarial. O Angular foi projetado para tornar a atualização
o mais simples possível, portanto, aproveite os desenvolvimentos mais recentes com o mínimo de 
esforço. O melhor de tudo é que o ecossistema Angular consiste em um grupo diversificado com mais 
1,7 milhão de desenvolvedores, autores de bibliotecas e criadores de conteúdos


## O essencial

Esta sessão explica a ideas principais por detrás do angular. Compreender essas ideias pode 
ajuda-lo a projetar e construir seus apps com mais eficiência

### Components
Components são os blocos de construção que compõe os apps. Um componente inclui uma class 
TypeScript com uma decorator(annotation), um template HTML e css. um decorator @Component 
especifica as seguintes informações:

- Um Selector CSS que define como um componente é usado em um template. Os elementos HTML em seu
template que correspondem a esse selector tornam-se instancia deste component
- Um model HTML que instrui o  Angular como renderizar o component
- Um conjunto opcional de styles CSS que define a aparência dos elementos HTML do template

A seguinte class representa um minimal de um component

~~~ typescript
import {Component} from '@angular/core';

@Component({
    selector:'hello-world',
    template: `
    <h2> Hello World </h2>
    <p> This is my first component! </p>
    `
})
export class HelloWorldComponent {
// o code nesta class controla o comportamento deste component
}
~~~

Para usar esse component voce escreve o seguinte em um template

~~~ javascript
<hello-world></hello-world>
~~~

Quando o Angular renderizar este componente o DOM irá renderizar como:

~~~ html
<hello-world>
<h2>Hello World</h2>
<p>This is my first Component!</p>
</hello-world>
~~~

O modelo de components do Angular oferece encapsulamento forte e uma estrutura de aplicação 
intuitiva. Os componentes também facilitam os testes de unidades do seu aplicativo e pode melhorar
a legibilidade geral do seu code


### Templates

Cada component tem um modelo HTML que declara como esse component é renderizado, voce define esse
template inline ou por path do dir para indicar onde esta o arquivo html. 
Angular extends html como sintaxe adicional, que permite inserir valores dinâmicos de seu component
Angular atualiza automaticamente o DOM, renderizando quando o estado do seu component mudar.
Uma aplicação desse recurso é a inserção  de texto dinâmico, conforme mostrado no ex a seguir:

~~~ javascript
<p>{{message}}</p>
~~~

O valor da var message vem do component:

~~~ javascript
import {Component} from '@angular/core';

@Component({
    selector: 'hello-world-interpolation',
    templateUrl: './hello-world-interpolation.component.html'
})
export class HelloWorldInterpolationComponent {
    message = 'Hello World!';
}
~~~

Quando o app carrega o component e seu template o user ver o render:
~~~ javascript
<p>Hello World!<p>
~~~
Observe o uso de chaves duplas elas instruem o angular o conteúdo dentro delas
Angular tbm suporta associação de propriedades, para ajuda-lo a definir valores para propriedades e
atributos de elementos HTML e passar valores para a logica de apresentação.

~~~ javascript
<p [id] = "sayHello"
   [style.color] = "fontColor">
   you can set my color in the component
</p>
~~~

observe o uso dos colchetes essa sintaxe indica que voce esta vinculando a propriedade ou o 
atributo a um valor na class do component
Declare event Listener como click, keyUp, keyDown, etc . Voce declara um ouvinte de evento especificando o nome do evento entre parentese:

~~~ javascript
<button type ="button"
[disabled] = "canClick"
(click) = "sayMessage()">
Trigger alert message
</button>
~~~

O ex anterior chama um método que é definido na class component:

~~~ javascript
sayMessage() {
    alert(this.message);
}
~~~

A seguir esta um exemplo de combinado de interpolação, vinculação de propriedades e vinculação de 
eventos em um template angular:

~~~ javascript
import {Component} from 'a@angular/core';

@Component({
    selector: 'hello-world-bindings',
    templateUrl: './hello-world-bindings.component.html'
})
export class HelloWorldBindingsComponent {

    fontColor = 'blue';
    sayHelloId = 1;
    canClick = false;
    message = 'Hello World!';

    sayMessage() {
        alerte(this.message);
    }
}
~~~

Adicione funcionalidade adicionais ao seu template por meio do uso de diretivas. AS diretivas mais 
populares em angular são **ngIf** e **ngFor**. Use diretivas para executar uma infinidade de 
tarefas. Como modificar dinamicamente a estrutura do seu DOM. E crie suas próprias diretivas 
personalizadas para criar ótimas experiencia de user

O code a seguir é um exemplo de diretiva **ngIf**

~~~ javascript
import {Component} from '@angular/core';

@Component({
    selector:'hello-world-ngif',
    templateUrl: 'hello-world-ngif.component.html'
})
export class HelloWorldNgifComponent {

    message = 'I\'m read only!';

    canEdit = false;

    onEditClick(){
        this.canEdit = !this.canEdit;
        if (this.canEdit) {
            message = 'You can Edit me';
        } else {
            message = 'I\'m read only!';
        }
    }
}
~~~

template
~~~ javascript
<h2> Hello Word ngIf</h2>
<button type = "button" (click) = "onEditClick()"> Make text Editable </button>

<div *ngIf = "canEdit; else noEdit">
    <p>You can Edit the following paragraph.</p>
</div>

<ng-template #noEdit >
    <p> the following paragraph is read only. Try click the button </p>
</ng-template>

<p [contentEditable] = "canEdit"> {{message}} </p>

~~~

Os modelos declarativos do angular permite que voce separe claramente a logica do seu app e da sua
apresentação. Templates são baseados em html padrão, para facilitar a construção, manutenção e 
atualização. 

### Injeção de Dependências