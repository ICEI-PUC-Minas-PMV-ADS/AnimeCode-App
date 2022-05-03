# Plano de Testes de Software

|`CASO DE TESTE`| CT01 Cadastro de novos usuários através do formulário |
 |:-----------:|:---------:|
 |`REQUISITOS ASSOCIADOS`|RF-02	O aplicativo deve apresentar um botão na tela de login para cadastro de novos usuários através de um formulário.|
 |`OBJETIVO DO TESTE`| Verificar se o usuário consegue realizar ocadastro na tela de formulário|
 |`MASSA DE TESTE`|Novo usuário |
 |`PASSOS`| * Acessar o app <br> * clicar no link "Não é cadastrado? Cadastre-se" <br> * Abrir tela de formulário <br> * Preencher os inputs com as informações solicitadas|
 |`CRITÉRIOS DE ÉXITO`| Emitir alerta de cadastrado realizado com sucesso e direcionar o usuário pra tela inicial|
 
 <br>
 
 |`CASO DE TESTE`| CT02 Autenticação (login) de usuário cadastrado no sistema|
 |:-----------:|:---------:|
 |`REQUISITOS ASSOCIADOS`|RF-01	O aplicativo deve apresentar uma tela de login para autenticação de usuários cadastrados.|
 |`OBJETIVO DO TESTE`| Verificar se o usuário consegue utilizar a tela de login para se autenticar|
 |`MASSA DE TESTE`|Usuário teste cadastrado do sistema |
 |`PASSOS`| * Acessar o app <br> * Digitar seu usuário no input de usuário <br> * Digitar sua senha no input de senha <br>|
 |`CRITÉRIOS DE ÉXITO`| Emitir alerta de login realizado com sucesso.|
 
 <br>
 
 |`CASO DE TESTE`| CT03 Login de usuário não cadastrado no sistema|
 |:-----------:|:---------:|
 |`REQUISITOS ASSOCIADOS`|RF-03	O acesso a lista de animes será permitido apenas, a usuário previamente cadastrados no aplicativo.|
 |`OBJETIVO DO TESTE`| Verificar se o usuário consegue acessar a lista de anime sem cadastro|
 |`MASSA DE TESTE`|Usuário não cadastrado do sistema |
 |`PASSOS`| * Acessar o app <br> * Digitar seu usuário no input de usuário <br> * Digitar sua senha no input de senha <br>|
 |`CRITÉRIOS DE ÉXITO`| Emitir alerta de usuário não cadastrado.|
 
 <br>
 
  |`CASO DE TESTE`| CT04 Alteração de senha de usuário já cadastrado|
 |:-----------:|:---------:|
 |`REQUISITOS ASSOCIADOS`|RF-08	O aplicativo deverá permitir que o usuário já cadastrado, seja capaz de alterar a sua senha.|
 |`OBJETIVO DO TESTE`| Verificar se o usuário consegue recadastrar uma nova senha para se autenticar|
 |`MASSA DE TESTE`|Usuário cadastrado no sistema |
 |`PASSOS`| ?|
 |`CRITÉRIOS DE ÉXITO`| Emitir alerta de troca de senha com sucesso|
 
 <br>
 
 |`CASO DE TESTE`| CT05 Exibir os animes na tela home |
 |:-----------:|:---------:|
 |`REQUISITOS ASSOCIADOS`|RF-04	O aplicativo deverá apresentar uma tela home com imagem e nota do anime, para visualizar essa tela o usuário não precisa estar logado. Ao clicar na imagem do anime, ele irá exibir outra tela com as informações de sinopse e temporadas.|
 |`OBJETIVO DO TESTE`| Verificar se os itens propostos no requisíto estão disponíveis na tela|
 |`MASSA DE TESTE`|-|
 |`PASSOS`| * Acessar o app <br> * abrir a tela home <br> * visualizar a exibição do banner do anime com a sua nota <br> * clicar no anime e visualizar as informações de sinopse e temporadas|
 |`CRITÉRIOS DE ÉXITO`| Visualizar essas informações na tela.|
 <br>
 
