-- phpMyAdmin SQL Dump
-- version 4.0.10.9
-- http://www.phpmyadmin.net
--
-- Host: 127.3.126.2:3306
-- Generation Time: Apr 11, 2015 at 03:51 AM
-- Server version: 5.5.41
-- PHP Version: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `acis5504project`
--

-- --------------------------------------------------------

--
-- Table structure for table `METAL`
--

CREATE TABLE IF NOT EXISTS `METAL` (
  `METAL_ID` int(11) NOT NULL AUTO_INCREMENT,
  `METAL_LENGTH` decimal(10,2) NOT NULL,
  `METAL_WIDTH` decimal(10,2) NOT NULL,
  `METAL_THICKNESS` decimal(10,2) NOT NULL,
  `METAL_PRICE` decimal(10,2) NOT NULL,
  `METAL_TYPE_ID` int(11) NOT NULL,
  `METAL_QUANTITY` int(11) NOT NULL,
  `SHOP_ID` int(11) NOT NULL,
  PRIMARY KEY (`METAL_ID`),
  KEY `SHOP_ID` (`SHOP_ID`),
  KEY `METAL_TYPE_ID` (`METAL_TYPE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `METAL`
--

INSERT INTO `METAL` (`METAL_ID`, `METAL_LENGTH`, `METAL_WIDTH`, `METAL_THICKNESS`, `METAL_PRICE`, `METAL_TYPE_ID`, `METAL_QUANTITY`, `SHOP_ID`) VALUES
(1, '10.40', '3.00', '0.75', '1.49', 2, 4, 3),
(2, '4.00', '5.00', '1.00', '8.99', 3, 16, 8),
(3, '18.00', '2.00', '0.75', '2.99', 6, 89, 3);

-- --------------------------------------------------------

--
-- Table structure for table `METAL_TYPE`
--

CREATE TABLE IF NOT EXISTS `METAL_TYPE` (
  `METAL_TYPE_ID` int(11) NOT NULL AUTO_INCREMENT,
  `METAL_TYPE` varchar(100) NOT NULL,
  PRIMARY KEY (`METAL_TYPE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `METAL_TYPE`
--

INSERT INTO `METAL_TYPE` (`METAL_TYPE_ID`, `METAL_TYPE`) VALUES
(1, 'BRONZE'),
(2, 'BRASS'),
(3, 'COLD STEEL'),
(4, 'ALUMINUM'),
(5, 'COPPER'),
(6, 'NICKEL');

-- --------------------------------------------------------

--
-- Table structure for table `SHOP`
--

CREATE TABLE IF NOT EXISTS `SHOP` (
  `SHOP_ID` int(255) NOT NULL AUTO_INCREMENT,
  `SHOP_OPEN_HOUR` int(2) NOT NULL,
  `SHOP_CLOSED_HOUR` int(2) NOT NULL,
  `SHOP_SPACE` int(20) NOT NULL,
  `SHOP_TYPE_ID` int(11) NOT NULL,
  PRIMARY KEY (`SHOP_ID`),
  KEY `SHOP_TYPE_ID` (`SHOP_TYPE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `SHOP`
--

INSERT INTO `SHOP` (`SHOP_ID`, `SHOP_OPEN_HOUR`, `SHOP_CLOSED_HOUR`, `SHOP_SPACE`, `SHOP_TYPE_ID`) VALUES
(1, 9, 17, 20000, 1),
(2, 10, 18, 10000, 1),
(3, 11, 19, 9000, 2),
(4, 10, 17, 10000, 1),
(5, 8, 20, 5000, 2),
(6, 7, 15, 6000, 1),
(7, 8, 19, 6500, 1),
(8, 6, 17, 90000, 2),
(9, 6, 20, 24000, 1),
(10, 9, 17, 21000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `SHOP_TYPE`
--

CREATE TABLE IF NOT EXISTS `SHOP_TYPE` (
  `SHOP_TYPE_ID` int(11) NOT NULL AUTO_INCREMENT,
  `SHOP_TYPE` varchar(100) NOT NULL,
  PRIMARY KEY (`SHOP_TYPE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `SHOP_TYPE`
--

INSERT INTO `SHOP_TYPE` (`SHOP_TYPE_ID`, `SHOP_TYPE`) VALUES
(1, 'WOODWORKING'),
(2, 'AUTO');

-- --------------------------------------------------------

--
-- Table structure for table `TOOL`
--

CREATE TABLE IF NOT EXISTS `TOOL` (
  `TOOL_ID` int(11) NOT NULL AUTO_INCREMENT,
  `TOOL_NAME` varchar(100) NOT NULL,
  `TOOL_DESC` varchar(255) NOT NULL,
  `TOOL_TYPE_ID` int(11) NOT NULL,
  `TOOL_QUANTITY` int(11) NOT NULL,
  `SHOP_ID` int(11) NOT NULL,
  PRIMARY KEY (`TOOL_ID`),
  KEY `SHOP_ID` (`SHOP_ID`),
  KEY `TOOL_TYPE_ID` (`TOOL_TYPE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `TOOL`
--

INSERT INTO `TOOL` (`TOOL_ID`, `TOOL_NAME`, `TOOL_DESC`, `TOOL_TYPE_ID`, `TOOL_QUANTITY`, `SHOP_ID`) VALUES
(1, 'thickness planer', 'used for planning the thickness of wood', 1, 4, 1),
(2, 'jointer', '6" jointer for creating flat planes and edges', 1, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `TOOL_TYPE`
--

CREATE TABLE IF NOT EXISTS `TOOL_TYPE` (
  `TOOL_TYPE_ID` int(11) NOT NULL AUTO_INCREMENT,
  `TOOL_TYPE` varchar(100) NOT NULL,
  PRIMARY KEY (`TOOL_TYPE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `TOOL_TYPE`
--

INSERT INTO `TOOL_TYPE` (`TOOL_TYPE_ID`, `TOOL_TYPE`) VALUES
(1, 'POWER'),
(2, 'HAND');

-- --------------------------------------------------------

--
-- Table structure for table `WOOD`
--

CREATE TABLE IF NOT EXISTS `WOOD` (
  `WOOD_ID` int(100) NOT NULL AUTO_INCREMENT,
  `WOOD_LENGTH` decimal(10,2) NOT NULL,
  `WOOD_WIDTH` decimal(10,2) NOT NULL,
  `WOOD_THICKNESS` decimal(10,2) NOT NULL,
  `WOOD_PRICE` decimal(10,2) NOT NULL,
  `WOOD_TYPE_ID` int(11) NOT NULL,
  `WOOD_QUANTITY` int(11) NOT NULL,
  `SHOP_ID` int(11) NOT NULL,
  PRIMARY KEY (`WOOD_ID`),
  KEY `WOOD_TYPE_ID` (`WOOD_TYPE_ID`),
  KEY `SHOP_ID` (`SHOP_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `WOOD`
--

INSERT INTO `WOOD` (`WOOD_ID`, `WOOD_LENGTH`, `WOOD_WIDTH`, `WOOD_THICKNESS`, `WOOD_PRICE`, `WOOD_TYPE_ID`, `WOOD_QUANTITY`, `SHOP_ID`) VALUES
(1, '6.60', '4.00', '0.75', '2.99', 4, 79, 1),
(2, '10.00', '12.00', '1.00', '8.00', 3, 9, 6);

-- --------------------------------------------------------

--
-- Table structure for table `WOOD_TYPE`
--

CREATE TABLE IF NOT EXISTS `WOOD_TYPE` (
  `WOOD_TYPE_ID` int(11) NOT NULL AUTO_INCREMENT,
  `WOOD_TYPE` varchar(100) NOT NULL,
  PRIMARY KEY (`WOOD_TYPE_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `WOOD_TYPE`
--

INSERT INTO `WOOD_TYPE` (`WOOD_TYPE_ID`, `WOOD_TYPE`) VALUES
(1, 'CHERRY'),
(2, 'WHITE OAK'),
(3, 'RED OAK'),
(4, 'HICKORY'),
(5, 'RED CEDAR'),
(6, 'SYCAMORE');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `METAL`
--
ALTER TABLE `METAL`
  ADD CONSTRAINT `METAL_ibfk_1` FOREIGN KEY (`METAL_TYPE_ID`) REFERENCES `METAL_TYPE` (`METAL_TYPE_ID`),
  ADD CONSTRAINT `METAL_ibfk_2` FOREIGN KEY (`SHOP_ID`) REFERENCES `SHOP` (`SHOP_ID`);

--
-- Constraints for table `SHOP`
--
ALTER TABLE `SHOP`
  ADD CONSTRAINT `SHOP_ibfk_1` FOREIGN KEY (`SHOP_TYPE_ID`) REFERENCES `SHOP_TYPE` (`SHOP_TYPE_ID`);

--
-- Constraints for table `TOOL`
--
ALTER TABLE `TOOL`
  ADD CONSTRAINT `TOOL_ibfk_1` FOREIGN KEY (`TOOL_TYPE_ID`) REFERENCES `TOOL_TYPE` (`TOOL_TYPE_ID`),
  ADD CONSTRAINT `TOOL_ibfk_2` FOREIGN KEY (`SHOP_ID`) REFERENCES `SHOP` (`SHOP_ID`);

--
-- Constraints for table `WOOD`
--
ALTER TABLE `WOOD`
  ADD CONSTRAINT `WOOD_ibfk_1` FOREIGN KEY (`WOOD_TYPE_ID`) REFERENCES `WOOD_TYPE` (`WOOD_TYPE_ID`),
  ADD CONSTRAINT `WOOD_ibfk_2` FOREIGN KEY (`SHOP_ID`) REFERENCES `SHOP` (`SHOP_ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
