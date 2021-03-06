-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_project
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ratings`
--

DROP TABLE IF EXISTS `ratings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ratings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `likes` tinyint(1) NOT NULL,
  `score` float NOT NULL,
  `comment` varchar(45) DEFAULT NULL,
  `user_id` int NOT NULL,
  `restaurant_id` int NOT NULL,
  `created` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  `patron_pid` int DEFAULT NULL,
  `restaurant_rid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `restaurant_id` (`restaurant_id`),
  KEY `FKp9ltca1nd9051r5tj77qxa0hf` (`patron_pid`),
  KEY `FK4cknwj9g75s53ommql79fji8r` (`restaurant_rid`),
  CONSTRAINT `FK4cknwj9g75s53ommql79fji8r` FOREIGN KEY (`restaurant_rid`) REFERENCES `restaurants` (`rid`),
  CONSTRAINT `FKp9ltca1nd9051r5tj77qxa0hf` FOREIGN KEY (`patron_pid`) REFERENCES `patrons` (`pid`),
  CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `patrons` (`pid`),
  CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurants` (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ratings`
--

LOCK TABLES `ratings` WRITE;
/*!40000 ALTER TABLE `ratings` DISABLE KEYS */;
INSERT INTO `ratings` VALUES (1,1,5,'best homemade pasta and super cheap',1,2,'2021-04-23 16:42:33','2021-04-23 16:42:33',NULL,NULL),(2,0,2,'not as good as the food in france',1,4,'2021-04-23 16:42:33','2021-04-23 16:42:33',NULL,NULL),(3,1,4,'pretty good dim sum!',1,3,'2021-04-23 16:42:33','2021-04-23 16:42:33',NULL,NULL),(4,0,1,'i\'ve had better from home',2,3,'2021-04-23 16:42:33','2021-04-23 16:42:33',NULL,NULL),(5,1,5,'best fast food mexican food near campus!',2,1,'2021-04-23 16:42:33','2021-04-23 16:42:33',NULL,NULL),(6,1,3,'really good service, food mediocre',2,4,'2021-04-23 16:42:33','2021-04-23 16:42:33',NULL,NULL),(7,1,4,'good food and very fun with friends!',3,3,'2021-04-23 16:42:33','2021-04-23 16:42:33',NULL,NULL),(8,1,3,'pasta is good, but sauce needs more flavor',3,2,'2021-04-23 16:42:33','2021-04-23 16:42:33',NULL,NULL),(9,4,1,'the burgers and fries are sooooo good',3,5,'2021-04-23 16:42:33','2021-04-23 16:42:33',NULL,NULL);
/*!40000 ALTER TABLE `ratings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-27 23:40:54
