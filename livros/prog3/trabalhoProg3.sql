drop database if exists livrosProg3;

create database livrosProg3;

use livrosProg3;

create table autor(id int not null auto_increment primary key,
	nome varchar(60) not null,
    dataNasci date not null,
    nacionalidade varchar(50),
	dataMorte date not null,
	pontuação dacimal(3,2));

create table livros(id int not null auto_increment primary key,
	nome varchar(80) not null,
    dataLancamento date not null,
    id_autor int not null,
    idiomaOriginal varchar(50) not null,
    categoria varchar(40) not null,
	quantidadePagina int,
	pontuação dacimal(3,2),
    foreign key (id_autor) references autor(id));