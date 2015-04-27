-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 27, 2015 at 03:52 AM
-- Server version: 5.5.38
-- PHP Version: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `acis5504project`
--

-- --------------------------------------------------------

--
-- Table structure for table `LOCATION`
--

CREATE TABLE `LOCATION` (
`LOCATION_ID` int(11) NOT NULL,
  `LOCATION_NAME` varchar(30) NOT NULL,
  `LOCATION_DESC` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `LOCATION`
--

INSERT INTO `LOCATION` (`LOCATION_ID`, `LOCATION_NAME`, `LOCATION_DESC`) VALUES
(1, 'SOFT TOOLBAG ', 'IN BOTTOM DRAWER OF BIG TOOL BOX'),
(2, 'CABINET ONE', 'LEFT MOST CABINET HANGING ON WALL'),
(3, 'CABINET TWO', 'SECOND TO THE LEFT CABINET HANGING ON WALL'),
(4, 'CABINET THREE', 'THIRD MOST CABINET FROM LEFT HANGING ON WALL'),
(5, 'CABINET FOUR', 'FAR RIGHT CABINET HANGING ON WALL'),
(6, 'BIG TOOLBOX', 'THIRD DRAWER'),
(7, 'BIG TOOLBOX ', 'FOURTH DRAWER'),
(8, 'BIG TOOL BOX', 'SECOND DRAWER'),
(9, 'PEG BOARD', 'UPPER LEFT QUADRANT'),
(10, 'PEG BOARD ', 'LOWER LEFT QUADRANT'),
(11, 'BORROWED FRIEND', ''),
(12, 'BORROWED NEIGHBOR', ''),
(13, 'BORROWED UNKNOWN', 'SOMEONE I DONT KNOW HAS ITEM NOW'),
(14, 'SOLD', 'SOLD TO SOMEONE'),
(15, 'RACK ON WALL', 'RACK HANGING ON WALL'),
(16, 'SCRAP BIN', '');

-- --------------------------------------------------------

--
-- Table structure for table `SHOP`
--

CREATE TABLE `SHOP` (
`SHOP_ID` int(255) NOT NULL,
  `SHOP_DESC` varchar(40) NOT NULL,
  `SHOP_OPEN_HOUR` int(2) NOT NULL,
  `SHOP_CLOSED_HOUR` int(2) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `SHOP`
--

INSERT INTO `SHOP` (`SHOP_ID`, `SHOP_DESC`, `SHOP_OPEN_HOUR`, `SHOP_CLOSED_HOUR`) VALUES
(1, 'HOME GARAGE', 9, 17);

-- --------------------------------------------------------

--
-- Table structure for table `TOOL`
--

CREATE TABLE `TOOL` (
`TOOL_ID` int(11) NOT NULL,
  `TOOL_NAME` varchar(100) NOT NULL,
  `TOOL_DESC` varchar(255) NOT NULL,
  `TOOL_TYPE_ID` int(11) NOT NULL,
  `TOOL_QUANTITY` int(11) NOT NULL,
  `SHOP_ID` int(11) NOT NULL,
  `LOCATION_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `TOOL`
--

INSERT INTO `TOOL` (`TOOL_ID`, `TOOL_NAME`, `TOOL_DESC`, `TOOL_TYPE_ID`, `TOOL_QUANTITY`, `SHOP_ID`, `LOCATION_ID`) VALUES
(1, 'thickness planer', 'used for planning the thickness of wood', 1, 1, 1, 3),
(2, 'jointers', '6" jointer for creating flat planes and edges', 1, 2, 1, 7),
(3, 'CIRCULAR SAW', '7 INCH CIRCULAR SAW CORDED', 1, 1, 1, 3),
(4, 'PHILLIPS HEAD', '#2', 2, 2, 1, 9),
(5, 'CHANNEL LOCKS LARGE', 'PLYERS WITH CHANNELS FOR ADJUSTING SIZE ', 2, 2, 1, 5),
(6, 'VISE GRIPS', 'LOCKING PLYERS ', 2, 2, 1, 6),
(7, 'DRILL', 'CORDED POWER DRILL WITH 3/8" CHUCK', 1, 1, 1, 2),
(8, 'ROUTER', 'TOOL USED FOR ROUTING WOOD', 1, 2, 1, 4),
(9, 'HAND PLANE ', 'HAND PLANE #3 ', 2, 1, 1, 10),
(10, 'RABBET PLANE', 'RABBET PLANE FOR MAKING RABBET JOINTS BY HAND', 2, 1, 1, 10),
(13, 'bandsaw', 'saw for making bands', 1, 0, 1, NULL),
(14, 'test1', 'test1', 2, 0, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `TOOL_TYPE`
--

CREATE TABLE `TOOL_TYPE` (
`TOOL_TYPE_ID` int(11) NOT NULL,
  `TOOL_TYPE` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `TOOL_TYPE`
--

INSERT INTO `TOOL_TYPE` (`TOOL_TYPE_ID`, `TOOL_TYPE`) VALUES
(1, 'POWER'),
(2, 'HAND'),
(3, 'Nuematic'),
(4, 'Air'),
(5, 'Horse Drawn'),
(6, 'Gas Powered'),
(7, 'Solar'),
(8, 'Wind'),
(9, 'WATER'),
(10, 'HEAT\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `WOOD`
--

CREATE TABLE `WOOD` (
`WOOD_ID` int(100) NOT NULL,
  `WOOD_LENGTH` decimal(10,2) NOT NULL,
  `WOOD_WIDTH` decimal(10,2) NOT NULL,
  `WOOD_THICKNESS` decimal(10,2) NOT NULL,
  `WOOD_PRICE` decimal(10,2) NOT NULL,
  `WOOD_TYPE_ID` int(11) NOT NULL,
  `WOOD_QUANTITY` int(11) NOT NULL,
  `LOCATION_ID` int(11) NOT NULL,
  `SHOP_ID` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `WOOD`
--

INSERT INTO `WOOD` (`WOOD_ID`, `WOOD_LENGTH`, `WOOD_WIDTH`, `WOOD_THICKNESS`, `WOOD_PRICE`, `WOOD_TYPE_ID`, `WOOD_QUANTITY`, `LOCATION_ID`, `SHOP_ID`) VALUES
(3, 8.40, 5.50, 0.75, 2.99, 3, 4, 15, 1),
(6, 7.00, 10.00, 1.00, 3.99, 2, 8, 15, 1),
(7, 4.00, 8.00, 3.00, 5.00, 6, 19, 15, 1),
(9, 5.00, 3.00, 0.75, 2.00, 3, 4, 15, 1),
(10, 1.50, 3.00, 0.75, 3.00, 3, 8, 16, 1),
(11, 4.00, 6.00, 1.00, 3.99, 6, 2, 13, 1),
(12, 10.00, 12.00, 1.00, 10.00, 3, 2, 13, 1),
(15, 3.00, 5.00, 0.75, 2.00, 10, 4, 6, 1),
(16, 5.00, 10.00, 1.00, 3.00, 12, 4, 13, 1),
(17, 9.00, 6.00, 0.75, 1.99, 9, 10, 15, 1);

-- --------------------------------------------------------

--
-- Table structure for table `WOOD_TYPE`
--

CREATE TABLE `WOOD_TYPE` (
`WOOD_TYPE_ID` int(11) NOT NULL,
  `WOOD_TYPE` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `WOOD_TYPE`
--

INSERT INTO `WOOD_TYPE` (`WOOD_TYPE_ID`, `WOOD_TYPE`) VALUES
(1, 'CHERRY'),
(2, 'WHITE OAK'),
(3, 'RED OAK'),
(4, 'HICKORY'),
(5, 'RED CEDAR'),
(6, 'SYCAMORE'),
(7, 'WALNUT'),
(8, 'WHITE CEDAR'),
(9, 'BALTIC BIRCH'),
(10, 'WHITE BIRCH'),
(11, 'ASH'),
(12, 'SEPELE\r\n');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `LOCATION`
--
ALTER TABLE `LOCATION`
 ADD PRIMARY KEY (`LOCATION_ID`);

--
-- Indexes for table `SHOP`
--
ALTER TABLE `SHOP`
 ADD PRIMARY KEY (`SHOP_ID`);

--
-- Indexes for table `TOOL`
--
ALTER TABLE `TOOL`
 ADD PRIMARY KEY (`TOOL_ID`), ADD KEY `SHOP_ID` (`SHOP_ID`), ADD KEY `TOOL_TYPE_ID` (`TOOL_TYPE_ID`), ADD KEY `FK_LOCATION_ID` (`LOCATION_ID`);

--
-- Indexes for table `TOOL_TYPE`
--
ALTER TABLE `TOOL_TYPE`
 ADD PRIMARY KEY (`TOOL_TYPE_ID`);

--
-- Indexes for table `WOOD`
--
ALTER TABLE `WOOD`
 ADD PRIMARY KEY (`WOOD_ID`), ADD KEY `WOOD_TYPE_ID` (`WOOD_TYPE_ID`), ADD KEY `SHOP_ID` (`SHOP_ID`), ADD KEY `FK_WOOD_LOCATION` (`LOCATION_ID`);

--
-- Indexes for table `WOOD_TYPE`
--
ALTER TABLE `WOOD_TYPE`
 ADD PRIMARY KEY (`WOOD_TYPE_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `LOCATION`
--
ALTER TABLE `LOCATION`
MODIFY `LOCATION_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `SHOP`
--
ALTER TABLE `SHOP`
MODIFY `SHOP_ID` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `TOOL`
--
ALTER TABLE `TOOL`
MODIFY `TOOL_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `TOOL_TYPE`
--
ALTER TABLE `TOOL_TYPE`
MODIFY `TOOL_TYPE_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `WOOD`
--
ALTER TABLE `WOOD`
MODIFY `WOOD_ID` int(100) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `WOOD_TYPE`
--
ALTER TABLE `WOOD_TYPE`
MODIFY `WOOD_TYPE_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `TOOL`
--
ALTER TABLE `TOOL`
ADD CONSTRAINT `FK_LOCATION_ID` FOREIGN KEY (`LOCATION_ID`) REFERENCES `LOCATION` (`LOCATION_ID`),
ADD CONSTRAINT `TOOL_ibfk_1` FOREIGN KEY (`TOOL_TYPE_ID`) REFERENCES `TOOL_TYPE` (`TOOL_TYPE_ID`),
ADD CONSTRAINT `TOOL_ibfk_2` FOREIGN KEY (`SHOP_ID`) REFERENCES `SHOP` (`SHOP_ID`);

--
-- Constraints for table `WOOD`
--
ALTER TABLE `WOOD`
ADD CONSTRAINT `FK_WOOD_LOCATION` FOREIGN KEY (`LOCATION_ID`) REFERENCES `LOCATION` (`LOCATION_ID`),
ADD CONSTRAINT `WOOD_ibfk_1` FOREIGN KEY (`WOOD_TYPE_ID`) REFERENCES `WOOD_TYPE` (`WOOD_TYPE_ID`),
ADD CONSTRAINT `WOOD_ibfk_2` FOREIGN KEY (`SHOP_ID`) REFERENCES `SHOP` (`SHOP_ID`);
