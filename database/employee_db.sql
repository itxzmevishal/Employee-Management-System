-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: employee_db
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `salary` float DEFAULT NULL,
  `date_joined` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (24,'Akshay Sharma','akshay1@example.com','Software Engineer',50000,'2022-01-10'),(25,'Rohit Verma','rohit2@example.com','Product Manager',60000,'2022-02-15'),(26,'Sneha Gupta','sneha3@example.com','UX Designer',45000,'2022-03-05'),(27,'Priya Singh','priya4@example.com','QA Engineer',40000,'2022-04-12'),(28,'Ankit Kumar','ankit5@example.com','DevOps Engineer',55000,'2022-05-20'),(29,'Ravi Yadav','ravi6@example.com','Software Engineer',50000,'2022-06-18'),(30,'Pooja Mehta','pooja7@example.com','HR Manager',60000,'2022-07-22'),(31,'Amit Joshi','amit8@example.com','Team Lead',65000,'2022-08-10'),(32,'Sonal Patil','sonal9@example.com','Software Engineer',48000,'2022-09-15'),(33,'Karan Malhotra','karan10@example.com','Product Manager',62000,'2022-10-05'),(34,'Neha Sharma','neha11@example.com','UX Designer',46000,'2022-11-01'),(35,'Vikram Singh','vikram12@example.com','QA Engineer',42000,'2022-11-20'),(36,'Divya Gupta','divya13@example.com','DevOps Engineer',54000,'2022-12-12'),(37,'Manish Verma','manish14@example.com','Software Engineer',50000,'2023-01-05'),(38,'Richa Patel','richa15@example.com','HR Manager',61000,'2023-01-25'),(39,'Suresh Kumar','suresh16@example.com','Team Lead',66000,'2023-02-15'),(40,'Anjali Sharma','anjali17@example.com','Software Engineer',49000,'2023-03-05'),(41,'Rahul Yadav','rahul18@example.com','Product Manager',63000,'2023-03-20'),(42,'Megha Gupta','megha19@example.com','UX Designer',47000,'2023-04-10'),(43,'Abhishek Jain','abhishek20@example.com','QA Engineer',43000,'2023-04-25'),(44,'Ritu Sharma','ritu21@example.com','DevOps Engineer',55000,'2023-05-10'),(45,'Vikas Mehta','vikas22@example.com','Software Engineer',51000,'2023-05-22'),(46,'Kavita Singh','kavita23@example.com','HR Manager',62000,'2023-06-05'),(47,'Nitin Sharma','nitin24@example.com','Team Lead',67000,'2023-06-18'),(48,'Priyanka Yadav','priyanka25@example.com','Software Engineer',50000,'2023-07-01'),(49,'Deepak Verma','deepak26@example.com','Product Manager',64000,'2023-07-12'),(50,'Sneha Patil','sneha27@example.com','UX Designer',48000,'2023-07-25'),(51,'Ankit Sharma','ankit28@example.com','QA Engineer',44000,'2023-08-05'),(52,'Rashmi Gupta','rashmi29@example.com','DevOps Engineer',56000,'2023-08-18'),(53,'Sanjay Kumar','sanjay30@example.com','Software Engineer',52000,'2023-09-01'),(54,'Rohit Sharma','rohit31@example.com','HR Manager',63000,'2023-09-12'),(55,'Shweta Mehta','shweta32@example.com','Team Lead',68000,'2023-09-25'),(56,'Vivek Singh','vivek33@example.com','Software Engineer',51000,'2023-10-05'),(57,'Pooja Sharma','pooja34@example.com','Product Manager',65000,'2023-10-18'),(58,'Karan Gupta','karan35@example.com','UX Designer',49000,'2023-11-01'),(59,'Neha Jain','neha36@example.com','QA Engineer',45000,'2023-11-12'),(60,'Amit Sharma','amit37@example.com','DevOps Engineer',57000,'2023-11-25'),(61,'Divya Singh','divya38@example.com','Software Engineer',52000,'2023-12-05'),(62,'Ravi Kumar','ravi39@example.com','HR Manager',64000,'2023-12-18'),(63,'Sonal Sharma','sonal40@example.com','Team Lead',69000,'2024-01-01'),(64,'Manish Patel','manish41@example.com','Software Engineer',53000,'2024-01-12'),(65,'Richa Yadav','richa42@example.com','Product Manager',66000,'2024-01-25'),(66,'Vikram Sharma','vikram43@example.com','UX Designer',50000,'2024-02-05'),(67,'Anjali Mehta','anjali44@example.com','QA Engineer',46000,'2024-02-18'),(68,'Rahul Kumar','rahul45@example.com','DevOps Engineer',58000,'2024-03-01'),(69,'Neha Sharma','neha46@example.com','Software Engineer',53000,'2024-03-12'),(70,'Amit Verma','amit47@example.com','HR Manager',65000,'2024-03-25'),(71,'Priya Patel','priya48@example.com','Team Lead',70000,'2024-04-05'),(72,'Deepak Sharma','deepak49@example.com','Software Engineer',54000,'2024-04-18'),(73,'Kavita Gupta','kavita50@example.com','Product Manager',67000,'2024-05-01'),(74,'Aditya Sharma','aditya51@example.com','Software Engineer',55000,'2024-05-12'),(75,'Ritika Verma','ritika52@example.com','Product Manager',68000,'2024-05-25'),(76,'Siddharth Gupta','siddharth53@example.com','UX Designer',50000,'2024-06-05'),(77,'Tanya Singh','tanya54@example.com','QA Engineer',47000,'2024-06-18'),(78,'Harsh Kumar','harsh55@example.com','DevOps Engineer',59000,'2024-07-01'),(79,'Neha Yadav','neha56@example.com','Software Engineer',54000,'2024-07-12'),(80,'Pranav Mehta','pranav57@example.com','HR Manager',66000,'2024-07-25'),(81,'Shreya Joshi','shreya58@example.com','Team Lead',71000,'2024-08-05'),(82,'Vikas Patil','vikas59@example.com','Software Engineer',55000,'2024-08-18'),(83,'Aishwarya Malhotra','aishwarya60@example.com','Product Manager',69000,'2024-09-01'),(84,'Rohit Sharma','rohit61@example.com','UX Designer',52000,'2024-09-12'),(85,'Divya Singh','divya62@example.com','QA Engineer',48000,'2024-09-25'),(86,'Amit Gupta','amit63@example.com','DevOps Engineer',60000,'2024-10-05'),(87,'Pooja Sharma','pooja64@example.com','Software Engineer',55000,'2024-10-18'),(88,'Karan Verma','karan65@example.com','HR Manager',67000,'2024-11-01'),(89,'Sneha Mehta','sneha66@example.com','Team Lead',72000,'2024-11-12'),(90,'Vivek Sharma','vivek67@example.com','Software Engineer',56000,'2024-11-25'),(91,'Richa Yadav','richa68@example.com','Product Manager',70000,'2024-12-05'),(92,'Manish Gupta','manish69@example.com','UX Designer',53000,'2024-12-18'),(93,'Neha Sharma','neha70@example.com','QA Engineer',49000,'2025-01-01'),(94,'Amit Verma','amit71@example.com','DevOps Engineer',61000,'2025-01-12'),(95,'Priya Patel','priya72@example.com','Software Engineer',56000,'2025-01-25'),(96,'Rahul Sharma','rahul73@example.com','HR Manager',68000,'2025-02-05'),(97,'Anjali Gupta','anjali74@example.com','Team Lead',73000,'2025-02-18'),(98,'Saurabh Kumar','saurabh75@example.com','Software Engineer',57000,'2025-03-01'),(99,'Ritu Sharma','ritu76@example.com','Product Manager',71000,'2025-03-12'),(100,'Vikram Patel','vikram77@example.com','UX Designer',54000,'2025-03-25'),(101,'Tanya Mehta','tanya78@example.com','QA Engineer',50000,'2025-04-05'),(102,'Ankit Sharma','ankit79@example.com','DevOps Engineer',62000,'2025-04-18'),(103,'Rashmi Verma','rashmi80@example.com','Software Engineer',57000,'2025-05-01'),(104,'Deepak Gupta','deepak81@example.com','HR Manager',69000,'2025-05-12'),(105,'Sonal Sharma','sonal82@example.com','Team Lead',74000,'2025-05-25'),(106,'Manish Patel','manish83@example.com','Software Engineer',58000,'2025-06-05'),(107,'Richa Sharma','richa84@example.com','Product Manager',72000,'2025-06-18'),(108,'Vikas Gupta','vikas85@example.com','UX Designer',55000,'2025-07-01'),(109,'Neha Mehta','neha86@example.com','QA Engineer',51000,'2025-07-12'),(110,'Amit Sharma','amit87@example.com','DevOps Engineer',63000,'2025-07-25'),(111,'Priya Singh','priya88@example.com','Software Engineer',58000,'2025-08-05'),(112,'Rahul Verma','rahul89@example.com','HR Manager',70000,'2025-08-18'),(113,'Anjali Sharma','anjali90@example.com','Team Lead',75000,'2025-09-01'),(114,'Saurabh Gupta','saurabh91@example.com','Software Engineer',59000,'2025-09-12'),(115,'Ritu Patel','ritu92@example.com','Product Manager',73000,'2025-09-25'),(116,'Vikram Sharma','vikram93@example.com','UX Designer',56000,'2025-10-05'),(117,'Tanya Gupta','tanya94@example.com','QA Engineer',52000,'2025-10-18'),(118,'Ankit Verma','ankit95@example.com','DevOps Engineer',64000,'2025-11-01'),(119,'Rashmi Sharma','rashmi96@example.com','Software Engineer',59000,'2025-11-12'),(120,'Deepak Patel','deepak97@example.com','HR Manager',71000,'2025-11-25'),(121,'Sonal Gupta','sonal98@example.com','Team Lead',76000,'2025-12-05'),(122,'Manish Sharma','manish99@example.com','Software Engineer',60000,'2025-12-18'),(123,'Richa Patel','richa100@example.com','Product Manager',74000,'2026-01-01'),(124,'Vishal Sanap','sanapvishal128@gmail.com','Tester',67000,'2002-05-30');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-13 23:10:29
