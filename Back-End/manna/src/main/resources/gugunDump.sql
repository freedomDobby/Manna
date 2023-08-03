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
INSERT INTO `gugun`(sido_id,name) values
                                      ('11','종로구'),
                                      ('11','중구'),
                                      ('11','용산구'),
                                      ('11','성동구'),
                                      ('11','광진구'),
                                      ('11','동대문구'),
                                      ('11','중랑구'),
                                      ('11','성북구'),
                                      ('11','강북구'),
                                      ('11','도봉구'),
                                      ('11','노원구'),
                                      ('11','은평구'),
                                      ('11','서대문구'),
                                      ('11','마포구'),
                                      ('11','양천구'),
                                      ('11','강서구'),
                                      ('11','구로구'),
                                      ('11','금천구'),
                                      ('11','영등포구'),
                                      ('11','동작구'),
                                      ('11','관악구'),
                                      ('11','서초구'),
                                      ('11','강남구'),
                                      ('11','송파구'),
                                      ('11','강동구'),
                                      ('26','중구'),
                                      ('26','서구'),
                                      ('26','동구'),
                                      ('26','영도구'),
                                      ('26','부산진구'),
                                      ('26','동래구'),
                                      ('26','남구'),
                                      ('26','북구'),
                                      ('26','해운대구'),
                                      ('26','사하구'),
                                      ('26','금정구'),
                                      ('26','강서구'),
                                      ('26','연제구'),
                                      ('26','수영구'),
                                      ('26','사상구'),
                                      ('26','기장군'),
                                      ('27','중구'),
                                      ('27','동구'),
                                      ('27','서구'),
                                      ('27','남구'),
                                      ('27','북구'),
                                      ('27','수성구'),
                                      ('27','달서구'),
                                      ('27','달성군'),
                                      ('28','중구'),
                                      ('28','동구'),
                                      ('28','미추홀구'),
                                      ('28','연수구'),
                                      ('28','남동구'),
                                      ('28','부평구'),
                                      ('28','계양구'),
                                      ('28','서구'),
                                      ('28','강화군'),
                                      ('28','옹진군'),
                                      ('29','동구'),
                                      ('29','서구'),
                                      ('29','남구'),
                                      ('29','북구'),
                                      ('29','광산구'),
                                      ('30','동구'),
                                      ('30','중구'),
                                      ('30','서구'),
                                      ('30','유성구'),
                                      ('30','대덕구'),
                                      ('31','중구'),
                                      ('31','남구'),
                                      ('31','동구'),
                                      ('31','북구'),
                                      ('31','울주군'),
                                      ('36','세종특별자치시'),
                                      ('41','수원시'),
                                      ('41','수원시 장안구'),
                                      ('41','수원시 권선구'),
                                      ('41','수원시 팔달구'),
                                      ('41','수원시 영통구'),
                                      ('41','성남시'),
                                      ('41','성남시 수정구'),
                                      ('41','성남시 중원구'),
                                      ('41','성남시 분당구'),
                                      ('41','의정부시'),
                                      ('41','안양시'),
                                      ('41','안양시 만안구'),
                                      ('41','안양시 동안구'),
                                      ('41','부천시'),
                                      ('41','광명시'),
                                      ('41','평택시'),
                                      ('41','동두천시'),
                                      ('41','안산시'),
                                      ('41','안산시 상록구'),
                                      ('41','안산시 단원구'),
                                      ('41','고양시'),
                                      ('41','고양시 덕양구'),
                                      ('41','고양시 일산동구'),
                                      ('41','고양시 일산서구'),
                                      ('41','과천시'),
                                      ('41','구리시'),
                                      ('41','남양주시'),
                                      ('41','오산시'),
                                      ('41','시흥시'),
                                      ('41','군포시'),
                                      ('41','의왕시'),
                                      ('41','하남시'),
                                      ('41','용인시'),
                                      ('41','용인시 처인구'),
                                      ('41','용인시 기흥구'),
                                      ('41','용인시 수지구'),
                                      ('41','파주시'),
                                      ('41','이천시'),
                                      ('41','안성시'),
                                      ('41','김포시'),
                                      ('41','화성시'),
                                      ('41','광주시'),
                                      ('41','양주시'),
                                      ('41','포천시'),
                                      ('41','여주시'),
                                      ('41','연천군'),
                                      ('41','가평군'),
                                      ('41','양평군'),
                                      ('42','춘천시'),
                                      ('42','원주시'),
                                      ('42','강릉시'),
                                      ('42','동해시'),
                                      ('42','태백시'),
                                      ('42','속초시'),
                                      ('42','삼척시'),
                                      ('42','홍천군'),
                                      ('42','횡성군'),
                                      ('42','영월군'),
                                      ('42','평창군'),
                                      ('42','정선군'),
                                      ('42','철원군'),
                                      ('42','화천군'),
                                      ('42','양구군'),
                                      ('42','인제군'),
                                      ('42','고성군'),
                                      ('42','양양군'),
                                      ('43','청주시'),
                                      ('43','청주시 상당구'),
                                      ('43','청주시 서원구'),
                                      ('43','청주시 흥덕구'),
                                      ('43','청주시 청원구'),
                                      ('43','충주시'),
                                      ('43','제천시'),
                                      ('43','보은군'),
                                      ('43','옥천군'),
                                      ('43','영동군'),
                                      ('43','증평군'),
                                      ('43','진천군'),
                                      ('43','괴산군'),
                                      ('43','음성군'),
                                      ('43','단양군'),
                                      ('44','천안시'),
                                      ('44','천안시 동남구'),
                                      ('44','천안시 서북구'),
                                      ('44','공주시'),
                                      ('44','보령시'),
                                      ('44','아산시'),
                                      ('44','서산시'),
                                      ('44','논산시'),
                                      ('44','계룡시'),
                                      ('44','당진시'),
                                      ('44','금산군'),
                                      ('44','부여군'),
                                      ('44','서천군'),
                                      ('44','청양군'),
                                      ('44','홍성군'),
                                      ('44','예산군'),
                                      ('44','태안군'),
                                      ('45','전주시'),
                                      ('45','전주시 완산구'),
                                      ('45','전주시 덕진구'),
                                      ('45','군산시'),
                                      ('45','익산시'),
                                      ('45','정읍시'),
                                      ('45','남원시'),
                                      ('45','김제시'),
                                      ('45','완주군'),
                                      ('45','진안군'),
                                      ('45','무주군'),
                                      ('45','장수군'),
                                      ('45','임실군'),
                                      ('45','순창군'),
                                      ('45','고창군'),
                                      ('45','부안군'),
                                      ('46','목포시'),
                                      ('46','여수시'),
                                      ('46','순천시'),
                                      ('46','나주시'),
                                      ('46','광양시'),
                                      ('46','양산시'),
                                      ('46','포항시'),
                                      ('46','포항시 남구'),
                                      ('46','포항시 북구'),
                                      ('46','경주시'),
                                      ('46','김천시'),
                                      ('46','안동시'),
                                      ('46','구미시'),
                                      ('46','영주시'),
                                      ('46','영천시'),
                                      ('46','상주시'),
                                      ('46','문경시'),
                                      ('46','경산시'),
                                      ('46','군위군'),
                                      ('46','의성군'),
                                      ('46','청송군'),
                                      ('46','영양군'),
                                      ('46','영덕군'),
                                      ('46','봉화군'),
                                      ('46','울진군'),
                                      ('46','울릉군'),
                                      ('47','창원시'),
                                      ('47','창원시 의창구'),
                                      ('47','창원시 성산구'),
                                      ('47','창원시 마산합포구'),
                                      ('47','창원시 마산회원구'),
                                      ('47','창원시 진해구'),
                                      ('47','진주시'),
                                      ('47','통영시'),
                                      ('47','사천시'),
                                      ('47','김해시'),
                                      ('47','밀양시'),
                                      ('47','거제시'),
                                      ('47','양산시'),
                                      ('47','의령군'),
                                      ('47','함안군'),
                                      ('47','창녕군'),
                                      ('47','고성군'),
                                      ('47','남해군'),
                                      ('47','하동군'),
                                      ('47','산청군'),
                                      ('47','함양군'),
                                      ('47','거창군'),
                                      ('47','합천군'),
                                      ('50','제주시'),
                                      ('50','서귀포시');
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
