-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16-Mar-2021 às 11:22
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `gamedb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `play`
--

CREATE TABLE `play` (
  `id` int(11) NOT NULL,
  `winner` varchar(4) NOT NULL,
  `p1` varchar(1) DEFAULT NULL,
  `p2` varchar(1) DEFAULT NULL,
  `p3` varchar(1) DEFAULT NULL,
  `p4` varchar(1) DEFAULT NULL,
  `p5` varchar(1) DEFAULT NULL,
  `p6` varchar(1) DEFAULT NULL,
  `p7` varchar(1) DEFAULT NULL,
  `p8` varchar(1) DEFAULT NULL,
  `p9` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `play`
--

INSERT INTO `play` (`id`, `winner`, `p1`, `p2`, `p3`, `p4`, `p5`, `p6`, `p7`, `p8`, `p9`) VALUES
(171, 'O', NULL, 'O', NULL, 'X', 'O', NULL, 'X', 'O', 'X'),
(172, 'DRAW', 'X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O'),
(173, 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'O', 'X', 'X'),
(174, 'X', 'X', NULL, 'O', 'O', 'X', NULL, 'X', 'O', 'X');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `play`
--
ALTER TABLE `play`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `play`
--
ALTER TABLE `play`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
