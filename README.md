# Automação Web com Nightwatch.js #

## Sobre o projeto

- Realizar acesso a um determinado Site e fazer uma busca e download de arquivos.

 ### NightWatch - Framework

A estrutura do Nightwatch já é preparada para trabalhar com testes, ele não depende de um framework de aceitação, ele já tem tudo isso embutido. Com o nightwatch é fácil estruturar os seus conjuntos de testes, suítes de teste, trabalhar com tags, trabalhar com hulks, com todos os recursos que ele oferece. Screenshot, com relatórios.
O framework também trabalha com mocha, mas no modelo convenciona que por padrão dele já funciona muito bem.
Ele trabalha com todos os padrões do World Wide Web Consortium (W3C) é a principal organização de padronização da World Wide Web.

Para maiores informações: https://nightwatchjs.org/
 
### Como instalar
- 1) No seu editor de código-fonte preferido, instale o Node.js
https://nodejs.org/en/ 

- 2) Instale o Nightwatch.js
 URL: https://www.npmjs.com/package/nightwatch

- 3) Caso haja a necessidade de um dia precisar atualizar o navegador chrome, no seu terminal rode o seguinte comando: 
   - npm i chromedriver + @ a versão do navegador --save-dev 
   - Ficaria assim: npm i chromedriver@86.0.0 --save-dev
 
rode o comando em um terminal dentro do projeto: npm install para instalar as dependências
 
### Executar Testes

- Dentro da pasta raiz no terminal, rode o comando a seguir: npm test para a execução dos cenários.
- npm | gerenciador de dependencias em node
- tests | diretório onde se encontram os testes
 
### Resultados

- Acesse a pasta "tests_output"
 
### Babel

Packages necessárias para a leitura de arrow functions utilizadas na declaração dos steps dos testes.

### hooks

Pasta que contém globals.js que guarda os steps globais dos testes que são realizados antes, depois ou durante cada teste.
A mesma é referenciada em nightwatch.conf.js na variavel `globals_path`
Note que os nomes das funções guardadas são padronizadas na documentação do NightWatch.

### pages

Pasta que contém objetos que representam desde blocos a páginas inteiras da web.
