CREATE DATABASE users_db;
USE users_db;
CREATE TABLE users (
id INT AUTO_INCREMENT primary key,
email varchar(100) not null unique,
username varchar(50) not null unique,
password varchar(255) not null
);