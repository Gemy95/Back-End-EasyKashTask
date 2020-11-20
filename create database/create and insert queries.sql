create database if not exists easykashtaskdb;
use EasyKashTaskDB ;

CREATE TABLE IF Not Exists Seller (
seller_id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
email VARCHAR(50) NOT NULL,
phone_number VARCHAR(50) NOT NULL,
address VARCHAR(50) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON Update CURRENT_TIMESTAMP
);

Insert Into easykashtaskdb.seller(first_name,last_name,email,phone_number,address) values ("ali","gamal","ali.gamal95880@gmail.com","01017431767","assiut");            

CREATE TABLE IF Not Exists Transaction (
transaction_id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
seller_id INT(10) UNSIGNED NOT NULL,
offer_id INT(10) UNSIGNED NOT NULL,
title VARCHAR(30) NOT NULL,
fees DOUBLE(30,5) NOT NULL,
amount DOUBLE(30,5) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON Update CURRENT_TIMESTAMP
);            

Insert Into easykashtaskdb.transaction(seller_id,title,fees,amount) Values (1,"payment",20,500) ;

CREATE TABLE IF Not Exists Offer(
offer_id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
seller_id INT(10) UNSIGNED NOT NULL,
offer_type VARCHAR(30) NOT NULL,
offer_code VARCHAR(30) NOT NULL,
offer_discount DOUBLE(30,5) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON Update CURRENT_TIMESTAMP
);   


INSERT INTO `easykashtaskdb`.`offer` (`offer_id`, `seller_id`, `offer_type`, `offer_code`, `offer_discount`) VALUES ('1', '1', 'promo', 'xyz123', '20');
