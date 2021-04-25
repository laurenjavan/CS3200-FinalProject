-- Creating a table for the users of the application
create table patrons (
	`pid` int not null auto_increment,
	`first_name` varchar(45) not null,
    `last_name` varchar(45) not null,
    `username`varchar(45) not null,
    `password` varchar(45) not null,
    `email` varchar(45) not null,
    `dateOfBirth` date,
    primary key (pid)
    );

-- Creates cuisine type enumeration
-- ENUM('Italian', 'Chinese', 'French', 'American', 'Thai')
create table cuisine (
	`id` int not null auto_increment,
    `cuisine` varchar(20),
    primary key (id)
    );
    
insert into cuisine (id, cuisine)
values 
(1, 'Italian'),
(2, 'Chinese'),
(3, 'French'),
(4, 'American'),
(5, 'Mexican');

-- Creates a table of restaurants that can be reviewed by patrons
create table restaurants (
	`rid` int not null auto_increment ,
	`name` varchar(45) not null,
    `location` varchar(45) not null,
    `cuisine` int,
    `created` date,
    `updated` date,
	primary key (rid),
    foreign key (cuisine) references cuisine(id)
    );

-- Creating a table for the ratings given to restaurants by patrons
create table ratings (
	`id` int not null auto_increment,
    `likes` boolean not null,
    `score` float not null, -- make so must be between 0 and 5
    `review` varchar(45),
    `user_id` int not null,
    `restaurant_id` int not null,
    `created` datetime,
    `updated` datetime,
    primary key (id),
    foreign key (user_id) references patrons(pid),
    foreign key (restaurant_id) references restaurants(rid)
    );
    
