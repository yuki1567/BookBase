CREATE DATABASE IF NOT EXISTS `BookBase`;

USE `BookBase`;

CREATE TABLE `USERS` (
  `user_id` bigint(20) NOT NULL,
  `user_email` varchar(254) NOT NULL,
  `user_password` varchar(50) NOT NULL,
  `login_id` varchar(50),
  `user_name` varchar(30),
  `user_name_kana` varchar(30),
  `sex` int(1),
  `age` int(3),
  `birth` int(8),
  `phone_number` varchar(21),
  `post_code` varchar(8),
  `address` varchar(160),
  `user_status` int(1),
  `created_at` datetime(6),
  `updated_at` datetime(6),
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `BOOKS` (
  `book_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `title` varchar(50),
  `description` text(2048),
  `category_id` bigint(20) NOT NULL,
  `price` int(8),
  `book_status` int(1),
  `created_at` datetime(6),
  `updated_at` datetime(6),
  PRIMARY KEY (`book_id`),
  FOREIGN KEY (`user_id`) REFERENCES `USERS`(`user_id`)
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `USERS` VALUES 
(1, 'test@mail.com', 'password', NULL, 'テスト01', 
'テスト', NULL, NULL, NULL, NULL, NULL, NULL, '1', 
'2022-12-01 20:20:20', '2022-12-01 20:20:20');

INSERT INTO `BOOKS` VALUES
(1, '1', '本', '本の説明', '1', '1000', '1', 
'2022-12-01 20:20:20', '2022-12-01 20:20:20');