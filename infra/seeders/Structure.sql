CREATE DATABASE  IF NOT EXISTS `practical` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `practical`;
-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: localhost    Database: practical
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `monthPlayers`
--

DROP TABLE IF EXISTS `monthPlayers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `monthPlayers` (
  `monthId` int(11) NOT NULL,
  `playerId` int(11) NOT NULL,
  `points` int(11) DEFAULT '0',
  `starts` int(11) DEFAULT '0',
  `subs` int(11) DEFAULT '0',
  `goals` int(11) DEFAULT '0',
  `ownGoals` int(11) DEFAULT '0',
  `assists` int(11) DEFAULT '0',
  `concedes` int(11) DEFAULT '0',
  `cleansheets` int(11) DEFAULT '0',
  `redCards` int(11) DEFAULT '0',
  `yellowCards` int(11) DEFAULT '0',
  `penSaves` int(11) DEFAULT '0',
  `penMisses` int(11) DEFAULT '0',
  `savesTier1` int(11) DEFAULT '0',
  `savesTier2` int(11) DEFAULT '0',
  `passesTier1` int(11) DEFAULT '0',
  `passesTier2` int(11) DEFAULT '0',
  `tacklesTier1` int(11) DEFAULT '0',
  `tacklesTier2` int(11) DEFAULT '0',
  `shotsTier1` int(11) DEFAULT '0',
  `shotsTier2` int(11) DEFAULT '0',
  `motms` int(11) DEFAULT '0',
  `added` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`monthId`,`playerId`),
  KEY `monthId_idx` (`monthId`),
  KEY `playerId_idx` (`playerId`),
  CONSTRAINT `fk_month_players_players_playerId` FOREIGN KEY (`playerId`) REFERENCES `players` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(45) NOT NULL,
  `teamId` int(11) DEFAULT '0',
  `firstName` varchar(128) DEFAULT NULL,
  `lastName` varchar(128) DEFAULT NULL,
  `position` enum('GK','DEF','MID','FOR') DEFAULT NULL,
  `added` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid_UNIQUE` (`uuid`),
  KEY `teamId_idx` (`teamId`),
  CONSTRAINT `fk_players_teams_teamId` FOREIGN KEY (`teamId`) REFERENCES `teams` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=742 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `seasonPlayers`
--

DROP TABLE IF EXISTS `seasonPlayers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `seasonPlayers` (
  `playerId` int(11) NOT NULL,
  `points` int(11) DEFAULT '0',
  `starts` int(11) DEFAULT '0',
  `subs` int(11) DEFAULT '0',
  `goals` int(11) DEFAULT '0',
  `ownGoals` int(11) DEFAULT '0',
  `assists` int(11) DEFAULT '0',
  `concedes` int(11) DEFAULT '0',
  `cleansheets` int(11) DEFAULT '0',
  `redCards` int(11) DEFAULT '0',
  `yellowCards` int(11) DEFAULT '0',
  `penSaves` int(11) DEFAULT '0',
  `penMisses` int(11) DEFAULT '0',
  `savesTier1` int(11) DEFAULT '0',
  `savesTier2` int(11) DEFAULT '0',
  `passesTier1` int(11) DEFAULT '0',
  `passesTier2` int(11) DEFAULT '0',
  `tacklesTier1` int(11) DEFAULT '0',
  `tacklesTier2` int(11) DEFAULT '0',
  `shotsTier1` int(11) DEFAULT '0',
  `shotsTier2` int(11) DEFAULT '0',
  `motms` int(11) DEFAULT '0',
  `added` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`playerId`),
  KEY `playerId_idx` (`playerId`),
  CONSTRAINT `fk_season_players_players_playerId` FOREIGN KEY (`playerId`) REFERENCES `players` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `teams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(45) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `shortName` varchar(64) DEFAULT NULL,
  `abbr` varchar(3) DEFAULT NULL,
  `added` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid_UNIQUE` (`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `weekPlayers`
--

DROP TABLE IF EXISTS `weekPlayers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `weekPlayers` (
  `weekId` int(11) NOT NULL,
  `playerId` int(11) NOT NULL,
  `points` int(11) DEFAULT '0',
  `starts` int(11) DEFAULT '0',
  `subs` int(11) DEFAULT '0',
  `goals` int(11) DEFAULT '0',
  `ownGoals` int(11) DEFAULT '0',
  `assists` int(11) DEFAULT '0',
  `concedes` int(11) DEFAULT '0',
  `cleansheets` int(11) DEFAULT '0',
  `redCards` int(11) DEFAULT '0',
  `yellowCards` int(11) DEFAULT '0',
  `penSaves` int(11) DEFAULT '0',
  `penMisses` int(11) DEFAULT '0',
  `savesTier1` int(11) DEFAULT '0',
  `savesTier2` int(11) DEFAULT '0',
  `passesTier1` int(11) DEFAULT '0',
  `passesTier2` int(11) DEFAULT '0',
  `tacklesTier1` int(11) DEFAULT '0',
  `tacklesTier2` int(11) DEFAULT '0',
  `shotsTier1` int(11) DEFAULT '0',
  `shotsTier2` int(11) DEFAULT '0',
  `motms` int(11) DEFAULT '0',
  `added` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`weekId`,`playerId`),
  KEY `weekId_idx` (`weekId`),
  KEY `playerId_idx` (`playerId`),
  CONSTRAINT `fk_week_players_players_playerId` FOREIGN KEY (`playerId`) REFERENCES `players` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;