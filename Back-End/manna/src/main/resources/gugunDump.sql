-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: enjoytrip
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `gugun`
--

--
-- Dumping data for table `gugun`
--

LOCK TABLES `gugun` WRITE;
/*!40000 ALTER TABLE `gugun` DISABLE KEYS */;
INSERT INTO `gugun` (sido_id, name) VALUES (1,'강남구'),(1,'강화군'),(1,'대덕구'),(1,'남구'),(1,'광산구'),(1,'강서구'),(1,'중구'),(1,'세종특별자치시'),(1,'가평군'),(1,'강릉시'),(1,'괴산군'),(1,'공주시'),(1,'경산시'),(1,'거제시'),(1,'고창군'),(1,'강진군'),(1,'남제주군'),(2,'강동구'),(2,'계양구'),(2,'동구'),(2,'달서구'),(2,'남구'),(2,'금정구'),(2,'남구'),(2,'고양시'),(2,'고성군'),(2,'단양군'),(2,'금산군'),(2,'경주시'),(2,'거창군'),(2,'군산시'),(2,'고흥군'),(2,'북제주군'),(3,'강북구'),(3,'미추홀구'),(3,'서구'),(3,'달성군'),(3,'동구'),(3,'기장군'),(3,'동구'),(3,'과천시'),(3,'동해시'),(3,'보은군'),(3,'논산시'),(3,'고령군'),(3,'고성군'),(3,'김제시'),(3,'곡성군'),(3,'서귀포시'),(4,'강서구'),(4,'남동구'),(4,'유성구'),(4,'동구'),(4,'북구'),(4,'남구'),(4,'북구'),(4,'광명시'),(4,'삼척시'),(4,'영동군'),(4,'당진시'),(4,'구미시'),(4,'김해시'),(4,'남원시'),(4,'광양시'),(4,'제주시'),(5,'관악구'),(5,'동구'),(5,'중구'),(5,'북구'),(5,'서구'),(5,'동구'),(5,'울주군'),(5,'광주시'),(5,'속초시'),(5,'옥천군'),(5,'보령시'),(5,'군위군'),(5,'남해군'),(5,'무주군'),(5,'구례군'),(6,'광진구'),(6,'부평구'),(6,'서구'),(6,'동래구'),(6,'구리시'),(6,'양구군'),(6,'음성군'),(6,'부여군'),(6,'김천시'),(6,'마산시'),(6,'부안군'),(6,'나주시'),(7,'구로구'),(7,'서구'),(7,'수성구'),(7,'부산진구'),(7,'군포시'),(7,'양양군'),(7,'제천시'),(7,'서산시'),(7,'문경시'),(7,'밀양시'),(7,'순창군'),(7,'담양군'),(8,'금천구'),(8,'연수구'),(8,'중구'),(8,'북구'),(8,'김포시'),(8,'영월군'),(8,'진천군'),(8,'서천군'),(8,'봉화군'),(8,'사천시'),(8,'완주군'),(8,'목포시'),(9,'노원구'),(9,'옹진군'),(9,'사상구'),(9,'남양주시'),(9,'원주시'),(9,'청원군'),(9,'아산시'),(9,'상주시'),(9,'산청군'),(9,'익산시'),(9,'무안군'),(10,'도봉구'),(10,'중구'),(10,'사하구'),(10,'동두천시'),(10,'인제군'),(10,'청주시'),(10,'성주군'),(10,'양산시'),(10,'임실군'),(10,'보성군'),(11,'동대문구'),(11,'서구'),(11,'부천시'),(11,'정선군'),(11,'충주시'),(11,'예산군'),(11,'안동시'),(11,'장수군'),(11,'순천시'),(12,'동작구'),(12,'수영구'),(12,'성남시'),(12,'철원군'),(12,'증평군'),(12,'천안시'),(12,'영덕군'),(12,'의령군'),(12,'전주시'),(12,'신안군'),(13,'마포구'),(13,'연제구'),(13,'수원시'),(13,'춘천시'),(13,'청양군'),(13,'영양군'),(13,'진주시'),(13,'정읍시'),(13,'여수시'),(14,'서대문구'),(14,'영도구'),(14,'시흥시'),(14,'태백시'),(14,'태안군'),(14,'영주시'),(14,'진해시'),(14,'진안군'),(15,'서초구'),(15,'중구'),(15,'안산시'),(15,'평창군'),(15,'홍성군'),(15,'영천시'),(15,'창녕군'),(16,'성동구'),(16,'해운대구'),(16,'안성시'),(16,'홍천군'),(16,'계룡시'),(16,'예천군'),(16,'창원시'),(16,'영광군'),(17,'성북구'),(17,'안양시'),(17,'화천군'),(17,'울릉군'),(17,'통영시'),(17,'영암군'),(18,'송파구'),(18,'양주시'),(18,'횡성군'),(18,'울진군'),(18,'하동군'),(18,'완도군'),(19,'양천구'),(19,'양평군'),(19,'의성군'),(19,'함안군'),(19,'장성군'),(20,'영등포구'),(20,'여주시'),(20,'청도군'),(20,'함양군'),(20,'장흥군'),(21,'용산구'),(21,'연천군'),(21,'청송군'),(21,'합천군'),(21,'진도군'),(22,'은평구'),(22,'오산시'),(22,'칠곡군'),(22,'함평군'),(23,'종로구'),(23,'용인시'),(23,'포항시'),(23,'해남군'),(24,'중구'),(24,'의왕시'),(24,'화순군'),(25,'중랑구'),(25,'의정부시'),(26,'이천시'),(27,'파주시'),(28,'평택시'),(29,'포천시'),(30,'하남시'),(31,'화성시');
/*!40000 ALTER TABLE `gugun` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-31 14:11:17
