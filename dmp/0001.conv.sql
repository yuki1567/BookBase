CREATE DATABASE IF NOT EXISTS `BookBase`;

USE `BookBase`;

CREATE TABLE `User` (
  `user_id` varchar(8) NOT NULL,
  `username` varchar(8),
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;