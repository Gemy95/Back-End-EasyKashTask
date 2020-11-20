CREATE DATABASE  IF NOT EXISTS `easykashtaskdb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `easykashtaskdb`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: easykashtaskdb
-- ------------------------------------------------------
-- Server version	5.7.29-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `offer`
--

DROP TABLE IF EXISTS `offer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offer` (
  `offer_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `seller_id` int(10) unsigned NOT NULL,
  `offer_type` varchar(30) NOT NULL,
  `offer_code` varchar(30) NOT NULL,
  `offer_discount` double(30,5) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`offer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offer`
--

LOCK TABLES `offer` WRITE;
/*!40000 ALTER TABLE `offer` DISABLE KEYS */;
INSERT INTO `offer` VALUES (1,1,'promo','xyz123',20.00000,'2020-11-18 23:33:16','2020-11-18 23:33:16');
/*!40000 ALTER TABLE `offer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seller` (
  `seller_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone_number` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`seller_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` VALUES (1,'ali','gamall','ali.gamal95880@gmail.com','01017431767','assiut','2020-11-17 20:42:30','2020-11-17 20:42:49');
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaction` (
  `transaction_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `seller_id` int(10) unsigned NOT NULL,
  `offer_id` int(10) unsigned NOT NULL,
  `title` varchar(30) NOT NULL,
  `fees` double(30,5) NOT NULL,
  `amount` double(30,5) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`transaction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (1,1,1,'payment',30.00000,500.00000,'2020-11-17 21:51:54','2020-11-20 18:01:54'),(2,1,1,'deposit',20.00000,500.00000,'2020-11-17 21:51:54','2020-11-20 18:02:52'),(3,1,1,'payment',70.00000,500.00000,'2020-11-17 22:09:55','2020-11-20 18:01:54'),(4,1,1,'deposit',10.00000,500.00000,'2020-11-17 22:09:56','2020-11-20 18:02:52'),(5,1,1,'payment',40.00000,500.00000,'2020-11-17 22:09:56','2020-11-20 18:01:54'),(6,1,1,'payment',20.00000,500.00000,'2020-11-17 22:09:56','2020-11-19 00:55:17'),(7,1,1,'deposit',20.00000,500.00000,'2020-11-17 22:09:56','2020-11-20 18:02:52'),(8,1,1,'payment',80.00000,500.00000,'2020-11-17 22:09:56','2020-11-20 18:01:54'),(9,1,1,'payment',10.00000,500.00000,'2020-11-17 22:09:57','2020-11-20 18:03:31'),(10,1,1,'deposit',20.00000,500.00000,'2020-11-17 22:09:57','2020-11-20 18:02:52'),(11,1,1,'payment',20.00000,500.00000,'2020-11-17 22:09:57','2020-11-19 00:55:17'),(12,1,1,'payment',80.00000,500.00000,'2020-11-17 22:09:57','2020-11-20 18:03:31'),(13,1,1,'deposit',20.00000,500.00000,'2020-11-17 22:09:57','2020-11-20 18:02:52'),(14,1,1,'payment',20.00000,500.00000,'2020-11-17 22:09:57','2020-11-19 00:55:17'),(15,1,1,'payment',90.00000,500.00000,'2020-11-17 22:09:58','2020-11-20 18:03:31'),(16,1,1,'payment',20.00000,500.00000,'2020-11-17 22:09:58','2020-11-19 00:55:17'),(17,1,1,'deposit',20.00000,500.00000,'2020-11-17 22:09:58','2020-11-20 18:02:52'),(18,1,1,'payment',50.00000,500.00000,'2020-11-17 22:09:58','2020-11-20 18:02:52'),(19,1,1,'payment',20.00000,500.00000,'2020-11-17 22:09:58','2020-11-19 00:55:17'),(20,1,1,'payment',20.00000,500.00000,'2020-11-17 22:09:59','2020-11-19 00:55:17'),(21,1,1,'payment',70.00000,500.00000,'2020-11-17 22:09:59','2020-11-20 18:02:52'),(22,1,1,'payment',20.00000,500.00000,'2020-11-17 22:10:02','2020-11-19 00:55:17'),(23,1,1,'payment',50.00000,500.00000,'2020-11-17 22:10:02','2020-11-20 18:03:31'),(24,1,1,'payment',20.00000,500.00000,'2020-11-17 22:10:02','2020-11-19 00:55:17'),(25,1,1,'payment',20.00000,500.00000,'2020-11-17 22:10:03','2020-11-19 00:55:17'),(26,1,1,'payment',60.00000,500.00000,'2020-11-17 22:10:03','2020-11-20 18:02:52'),(27,1,1,'payment',20.00000,500.00000,'2020-11-17 22:10:03','2020-11-19 00:55:17'),(28,1,1,'payment',20.00000,500.00000,'2020-11-17 22:10:04','2020-11-19 00:55:17'),(29,1,1,'payment',20.00000,500.00000,'2020-11-17 22:10:04','2020-11-19 00:55:17'),(30,1,1,'payment',20.00000,500.00000,'2020-11-17 22:10:05','2020-11-19 00:55:17'),(31,1,1,'payment',80.00000,500.00000,'2020-11-17 22:10:05','2020-11-20 18:02:52'),(32,1,1,'payment',70.00000,500.00000,'2020-11-17 22:10:05','2020-11-20 18:02:52'),(33,1,1,'payment',90.00000,500.00000,'2020-11-17 22:10:05','2020-11-20 18:02:52'),(34,1,1,'payment',20.00000,500.00000,'2020-11-17 22:10:06','2020-11-19 00:55:17'),(35,1,1,'payment',20.00000,500.00000,'2020-11-17 22:10:06','2020-11-19 00:55:17'),(36,1,1,'payment',20.00000,500.00000,'2020-11-17 22:10:06','2020-11-19 00:55:17'),(37,1,1,'payment',70.00000,500.00000,'2020-11-17 22:10:06','2020-11-20 18:03:31'),(38,1,1,'payment',100.00000,500.00000,'2020-11-17 22:10:06','2020-11-20 18:02:52'),(39,1,1,'payment',20.00000,500.00000,'2020-11-17 22:10:07','2020-11-19 00:55:17'),(40,1,1,'payment',30.00000,500.00000,'2020-11-17 22:10:07','2020-11-20 18:03:31'),(41,1,1,'payment',20.00000,500.00000,'2020-11-17 22:10:07','2020-11-19 00:55:17'),(42,1,1,'payment',40.00000,500.00000,'2020-11-17 22:10:07','2020-11-20 18:03:31');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'easykashtaskdb'
--

--
-- Dumping routines for database 'easykashtaskdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-20 20:08:07
