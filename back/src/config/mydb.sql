CREATE DATABASE videojuegos;

USE videojuegos;

CREATE TABLE juegos(id int not null auto_increment, titulo varchar(100) not null, desarrollador varchar(60) not null,
genero varchar(50), lanzamiento varchar(4),  
primary key(id));

insert into juegos (titulo,desarrollador,genero, lanzamiento) values("Valorant","Riot games","Shooter tactico segun","2020");
insert into juegos (titulo,desarrollador,genero, lanzamiento) values("Minecraft","Mojanng","Sandbox","2009");
insert into juegos (titulo,desarrollador,genero, lanzamiento) values("Stardew Valley"," Eric ConcernedApe ","Granja","2016");

select * from juegos