CREATE DATABASE animeCodeAPP;

CREATE TABLE `ANIMES` (
  `id_anime` Int(11)-PK,
  `nome` String(50),
  `descricao` String(400),
  `genero` String(15),
  `temporadas` Int(4),
  `episodios` Int(5)
);

CREATE TABLE `USUARIOS` (
  `id_usuario` Int(11)-PK,
  `tipo_usuário` int(1),
  `nome` String(50),
  `status` Char(1),
  `data_nascimento` Date(10),
  `email` String(30),
  `senha` String(15)
);

CREATE TABLE `LISTA_ANIMES` (
  `id_lista` Int(11)-PK,
  `id_usuario` Int(11)-FK,
  `id_anime` Int(11)-FK,
  `avaliacao` Int(1)
);

