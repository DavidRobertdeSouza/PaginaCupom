# Página de Cupons Multipedidos

Essa é uma página para cadastrar, editar e excluir cupons que serão utilizados em restaurantes. 

Essa página foi desenvolvida utilizando apenas HTML, CSS e JavaScript, sem nenhum framework para o desenvolvimento.

Para o desenvolvimento do gráfico, foi utilizado a lib [Chart.js](https://www.chartjs.org/).

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em sua máquina local para fins de desenvolvimento e teste.


### 🔧 Instalação

Para executar este projeto localmente, siga estas etapas:

1. Clone o repositório:

```
git clone https://github.com/DavidRobertdeSouza/PaginaCupom.git
```

2. Navegue até o diretório do projeto:

```
cd PaginaCupom
```

3. Clique com o botão direito no arquivo index.html e escolha "Abrir com" no seu navegador de preferência.



## 📦 Detalhes do projeto

### Seção 1 - Cadastro

A primeira seção do site contém um cadastro de cupons. Nessa tela, basta preencher todos os campos solicitados e clicar no botão "Cadastrar Cupom" para realizar a inserção.

Você terá a opção de escolher entre Cupom de Uso Único e Cupom Geral. Ao lado do título, é possível encontrar um botão com uma interrogação com mais informações para o cadastro.

As informações que forem cadastradas, serão salvas no LocalStorage com a Key de identificação chamada "item". Dessa forma, mesmo que o usuário atualize a página, as informações não serão perdidas.

![image](https://github.com/DavidRobertdeSouza/PaginaCupom/assets/45516045/68e51af4-b6d9-4fc0-8a5d-7e6f3018fe36)


### Seção 2 - Cupons Cadastrados

A segunda seção do site contém a listagem dos cupons criados. Nessa tela, o usuário poderá além de visualizar os cupons, editar se ele permanecerá ativo ou não, e também excluir um cupom.

Para fins de demonstração as informações do campo "Vezes Usado", possui um valor aleatório que é gerado no momento em que o usuário cria um novo cupom.

Importante: Para que as alterações sejam realizadas, o usuário deverá pressionar o botão "Salvar".

![image](https://github.com/DavidRobertdeSouza/PaginaCupom/assets/45516045/a91658c3-46d5-43d0-94f1-85e96e08a880)


### Seção 3 - Gráfico de Cupons

A terceira seção do site contém dois gráficos, o primeiro gráfico (gráfico de pizza) é utilizado para verificar a quantidade de cupons do tipo "Cupom Geral" e "Uso Único".

O segundo gráfico (gráfico de linha) é utilizado para verificar a quantidade de uso durante o tempo.

Importante: Como não era possível verificar a quantidade de uso por dia, o segundo gráfico foi gerado utilizando o campo "Data Limite" para fins de demonstração.

![image](https://github.com/DavidRobertdeSouza/PaginaCupom/assets/45516045/b08b8535-0b09-4fbb-a2cb-fd1720b65607)



## 🛠️ Construído com

Para criar o projeto foi utilizado as seguintes ferramentas:

* HTML
* JavaScript
* CSS


