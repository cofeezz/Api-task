/*create database api_tasks;*/
/*use api_tasks;*/

/*create table tasks( 
  id int auto_increment primary key,
  tilte varchar(40) not null,
  created_at timestamp default current_timestamp
 );*/

/*show tables;*/
/*describe tasks;*/

insert into tasks (title) values ('Primeira task criada no Workbanch');

select * from tasks;

update tasks set title = "Atualizado pelo sql script" where id = 1;