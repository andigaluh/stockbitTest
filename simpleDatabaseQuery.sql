-- Table structure for table `user`
CREATE TABLE IF NOT EXISTS `user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `userName` varchar(250) NOT NULL,
    `parent` int(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `userName`, `parent`) VALUES
(1, 'Ali', 2),
(2, 'Budi', 0),
(3, 'Cecep', 1);

-- SQL query
SELECT a.id as ID, a.userName as UserName, b.userName as ParentUserName FROM `user` a LEFT JOIN `user` b ON a.parent = b.id;