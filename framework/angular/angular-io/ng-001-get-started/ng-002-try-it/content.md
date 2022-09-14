# Try It
Apresenta os fundamentos do angular, orientando voce na construção de um site de comercio 
eletrônico com um catalogo, carrinho de compras e forms de check-out.

## Uma tour pelo app

Voce cria apps angular components . Os componentes definem areas de responsabilidades na interface
de usuário que permite reutilizar um conjunto de funcionalidade da interface de user
U componente consiste em tres coisas

- Uma classe component: trata dados e funcionalidades
- HTML template: Determina a UI.
- Estilo especifico de components: Define o designer da renderização de umm component


Este guia demonstra a criação de um app com os seguintes components:

- \<app-root>: O primeiro component a ser carregado e container para os demais components
- \<app-top-bar>: O nome da loja e o botão de check-out
- \<app-product-list>: A lista de produtos
- \<app-products-alert>: Um component que  contem os alters do app

![](2022-09-14_06-25.png)



## Crie uma lista def produtos