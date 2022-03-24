# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

| `Persona` | `Idade` | `Descrição` | `Plataformas e apps utilizados` | `Motivações` | `Frustrações`  |  `Hobbies` |
|:-----------:|:---------:|:-------------:|:---------------------------------:|:--------------:|:----------------:|:------------:|
|Carlos Eduardo|15|Estudante do ensino médio. Gosta de jogos online e possui facilidade para uso de internet.|Instagram, Netflix, Amazon Prime, Crunchyroll, Youtube|Acompanhar de forma organizada os animes que está assistindo e conhecer novos animes.|Ficar perdido quanto ao episódio  que está no momento.|Filmes e séries, taekwondo|
|Maria Julia|29| Fisioterapeuta, apaixonada por animes de suspense, faz uso computador no dia a dia, possui facilidade para o uso da internet.|Instagram, Netflix, Animes Fire, Uber, Ifood|Conseguir pesquisar os melhores animes de acordo com o gênero que ela mais gosta, e conhecer novos animes|Conseguir feedbacks reais a respeito da qualidade dos animes.|Caminhadas ao ar livre e Ir ao cinema|
|Ana Laura|19|Auxiliar de estoque, possui uma rotina intensa de trabalho, precisando se organizar dentro das suas atividades. Informa aptidão no uso da internet.|Instagram, Netflix, Nubank, Twitter, Ifood|Encontrar um lugar onde possa dar notas para seus animes favoritos.|Não consegue encontrar um local para descobrir outros animes e visualizar suas notas.|Ir a restaurantes e Ouvir músicas|
|Pedro Ferraz|18|Estudante do pré-vestibular, fã de animes, curte programação.|Instagram, Netflix, YouTube|Colocar em prática estudos de programação e criar uma aplicação para gerenciar seus animes favoritos.|Falta de um local voltado para catalogar e descobrir animes.| Jogar vídeo game e assitir séries.| 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Eu, Carlos Eduardo|quero marcar em qual episódio/temporada de um determinado anime eu estou|para conseguir me organizar com os vários títulos que assisto e não me perder nos episódios.|
|Eu, Maria Julia|quero conseguir ver a nota de vários animes| para encontrar novos animes para acompanhar.|
|Eu Ana Laura| desejo criar uma lista e catalogar os animes que venho assistindo e dar nota a eles| para que eu e outros usuários descubram novos animes. | 
|Eu, Pedro Ferraz|desejo criar uma aplicação capaz de catalogar e gerenciar animes|para fixar meu aprendizado adquiridos em cursos de programação.|

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O aplicativo deve apresentar uma tela de login para autenticação de usuários cadastrados.| `ALTA` | 
|RF-02| O aplicativo deve apresentar um botão na tela de login para cadastro de novos usuários através de um formulário. <br> Este formulário deve conter: <br> * Nome <br> * Data de nascimento <br> * E-mail <br> * Senha <br>| `ALTA`|
|RF-03| O acesso a lista de animes será permitido apenas, a usuário previamente cadastrados no aplicativo.|`ALTA`|
|RF-04| O aplicativo deverá apresentar uma tela home com imagem e nota do anime, para visualizar essa tela o usuário não precisa estar logado. Ao clicar na imagem do anime, ele irá exibir outra tela com as informações de sinopse e temporadas.|`ALTA`|
|RF-05| O usuário poderá criar uma lista pessoal com os animes que ele desejar. Esses animes serão separados por status, sendo eles "assitidos", "em andamento" e "assitir depois".| `ALTA` |
|RF-06| O usuário, quando previamente cadastrado, poderá marcar a temporada e o episódio em que ele está de um determinado anime.| `ALTA` |
|RF-07|O aplicativo deverá consumir de uma API as informações referentes ao anime.| `ALTA` |
|RF-08|O aplicativo deverá possibilitar um mecanismo de busca.|`MÉDIA`|
|RF-09|O aplicativo deve possibilitar a avaliação de animes, por um usuário previamente cadastrado.|`BAIXO`|


### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01|As informações cadastrais do usuário devem estar disponíveis apenas para o usuário.|`ALTA`| 
|RNF-02|O site deverá utilizar tecnologias como React Native |`ALTA`| 
|RNF-03|O aplicativo deve ser compatível com os sistemas operacionais Android e IOS.|`ALTA`|
|RFN-04|O layout do aplicativo deverá trabalhar com um esquema de cores que atenda visualmente o usuário portador de daltonismo|`BAIXA`|
|RFN-05|O aplicativo deverá atender aos requisitos de leitores de tela para ser acessível para deficientes visuais|`BAIXA`|

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01|O projeto deverá ser entregue funcionando no final do semestre letivo, sem ultrapassar a data 22/06/2022.|
|RE-02|A equipe não pode subcontratar o desenvolvimento do trabalho|
|RE-03|A equipe desenvolverá o projeto com os integrantes que compõem o grupo e todos deverão estar cientes sobre as funcionalidades do código e sistema.|

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
