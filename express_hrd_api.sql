-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2024 at 07:17 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_hrd_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `gender` char(25) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(25) NOT NULL,
  `status` varchar(25) NOT NULL,
  `hired_on` date NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `gender`, `phone`, `address`, `email`, `status`, `hired_on`, `timestamp`) VALUES
(2, 'Fatih', 'Laki-Laki', '08823497', 'Jl sholeh iskandar', 'fatih@gmail.com', 'active', '2023-04-02', '2024-01-19 04:02:44'),
(3, 'Muhammad Furqon Rizqi', 'Laki-Laki', '08152351524', 'Jl BSI 2', 'furqon@gmail.com', 'active', '2023-04-02', '2024-01-19 03:54:34'),
(4, 'Muhammad Faiz Hadi Kuntoro', 'Laki-Laki', '085215243', 'Jl Jakarta', 'faiz@gmail.com', 'active', '2022-08-05', '2024-01-19 03:54:37'),
(5, 'Nur Afif Raihan', 'Laki-Laki', '087481274', 'Jl Depok', 'rai@gmail.com', 'active', '2021-10-11', '2024-01-19 03:54:43'),
(6, 'Muhammad Faisal Nurhakim', 'Laki-Laki', '084252511', 'Jl Pondok Cina', 'ical@gmail.com', 'inactive', '2022-08-12', '2024-01-19 03:54:51'),
(7, 'Rizki Ahmad Fauzi', 'Laki-Laki', '088214111', 'Jl Jonggol', 'fauzi@gmail.com', 'inactive', '2022-08-12', '2024-01-19 03:54:56'),
(8, 'Siti Nur Halizah', 'Perempuan', '0852131122', 'Jl Parung', 'siti@gmail.com', 'inactive', '2024-01-01', '2024-01-19 03:55:00'),
(9, 'Aisyah Hanani', 'Perempuan', '080912845', 'Jl Pekansar', 'aisyah@gmail.com', 'terminated', '2024-01-01', '2024-01-19 03:55:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
