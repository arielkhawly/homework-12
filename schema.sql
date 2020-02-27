DROP DATABASE IF EXISTS office_db;
CREATE DATABASE office_db;
USE office_db;

CREATE TABLE department (
id INTEGER NOT NULL auto_increment,
dept_name VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE employee (
id INTEGER NOT NULL auto_increment,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER,
manager_id INTEGER,
PRIMARY KEY (id)
);

CREATE TABLE job (
id INTEGER NOT NULL auto_increment,
title VARCHAR(30),
salary DECIMAL,
deparment_id INTEGER,
PRIMARY KEY (id)
);

