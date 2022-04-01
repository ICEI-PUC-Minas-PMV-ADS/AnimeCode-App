# Arquitetura da Solução
Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.
 
![UML class](https://user-images.githubusercontent.com/78181968/160144712-5fec9ff0-5c2c-469d-a562-f401b65f9525.png)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)
> 
![Modelo ER](https://user-images.githubusercontent.com/78181968/160144873-dcf7e84d-5194-4121-a0cd-8932f84a157b.png)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
![Database ER diagram](https://user-images.githubusercontent.com/78181968/160144913-34f6bdad-fec6-49e4-9ed7-d07a2576a09b.png)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Para o desenvolvimento da aplicação será utilizado:
* Front-end >  JavaScript
* Back-end > C#
* Frameworks > React Native
* IDE > Visual Studio 
* APIs >
* Banco de dados > SQLite 


## Hospedagem

A princípio, o app será hospedado na plataforma AWS.
Escolhemos essa platarforma pela sua versátilidade de hospedar o banco de dados, front end, entre outros. 

## Qualidade de Software

Escolhemos trabalhar contemplando as principais características de qualidade que podem ser atribuídas ao sistema. Entre elas: 

* Funcionalidade: O sistema será construído a partir dos requisitos levantados no início do projeto, a fim de atender de forma correta os desejos do cliente final. Para garantir que esses requisitos sejam atendidos, serão realizados testes funcionais, estruturados através dos requisitos. 
* Confiabilidade: Em um sistema onde o usuário irá disponibilizar dados sensíveis para cadastro no app, é importante utilizar de alguns artifícios para dificultar a ação de hacker e garantir a segurança da plataforma, um exemplo disso, é emitir uma mensagem “usuário ou senha incorretos” para não facilitar a aquisição de nenhum dado para invasores.  
* Portabilidade: Esta característica é extremamente importante, principalmente para uma aplicação mobile, pois a portabilidade é a característica que define o esforço da instalação de um aplicativo. 
* Manutenibilidade: Nesta característica, é importante destacar a testabilidade, que acompanha a funcionalidade, pois a testabilidade é a capacidade do sistema de ser testado e isso define a boa qualidade do aplicativo. 


