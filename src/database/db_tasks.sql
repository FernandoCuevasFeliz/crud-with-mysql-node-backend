create database db_tasks;
use db_tasks

create table Tasks(
	id int primary key auto_increment,
	taskId varchar(100) not null,
    title varchar(100) not null,
    description varchar(200),
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp
    on update current_timestamp,
    unique i_taskId(taskId)
);

delimiter $$
create procedure createTask(
	in _taskId varchar(100),
    in _title varchar(100),
    in _description varchar(200)
)
begin
	insert into Tasks (taskId,title,description)
    values(_taskId,_title,_description);
	select distinct * from Tasks where taskId = _taskId;

end $$
delimiter ;

delimiter $$
create procedure updateTask(
	in _taskId varchar(100),
    in _title varchar(100),
    in _description varchar(200)
)
begin
	update Tasks 
	set title = _title, description = _description
    where taskId = _taskId;
	select distinct * from Tasks where taskId = _taskId;
end $$
delimiter ;

delimiter $$
create procedure deleteTaskByTaskId(
	in _taskId varchar(100)
)
begin
	select distinct * from Tasks where taskId = _taskId;
	delete from Tasks 
    where taskId = _taskId;
end $$
delimiter ;

delimiter $$
create procedure findTaskByTaskId(
	in _taskId varchar(100)
)
begin
	select distinct * from Tasks 
    where taskId = _taskId;
end $$
delimiter ;

delimiter $$
create procedure findTaskByTitle(
    in _title varchar(100)
)
begin
	select * from Tasks 
    where title = _title;
end $$
delimiter ;

delimiter $$
create procedure findAllTasks()
begin
	select * from Tasks;
end $$
delimiter ;
