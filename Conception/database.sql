SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Base de données : `hazel_photographie`

-- Structure de la table `admin`

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure de la table `a_propos`

DROP TABLE IF EXISTS `a_propos`;
CREATE TABLE IF NOT EXISTS `a_propos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) DEFAULT NULL,
  `contenu` text DEFAULT NULL,
  `image_profil` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure de la table `contact_mariage`

DROP TABLE IF EXISTS `contact_mariage`;
CREATE TABLE IF NOT EXISTS `contact_mariage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom_conjoints` varchar(255) DEFAULT NULL,
  `date_mariage` date DEFAULT NULL,
  `lieu_ceremonie` varchar(255) DEFAULT NULL,
  `lieu_reception` varchar(255) DEFAULT NULL,
  `ville_residence` varchar(255) DEFAULT NULL,
  `nombre_invites` varchar(50) DEFAULT NULL,
  `budget_approx` varchar(100) DEFAULT NULL,
  `message_projet` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure de la table `contact_standard`

DROP TABLE IF EXISTS `contact_standard`;
CREATE TABLE IF NOT EXISTS `contact_standard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prenom` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `telephone` varchar(50) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `type_seance` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure de la table `contenu_mariage`

DROP TABLE IF EXISTS `contenu_mariage`;
CREATE TABLE IF NOT EXISTS `contenu_mariage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `approche_texte` text DEFAULT NULL,
  `image_header` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- Structure de la table `demandes_bon_cadeau`

DROP TABLE IF EXISTS `demandes_bon_cadeau`;
CREATE TABLE IF NOT EXISTS `demandes_bon_cadeau` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom_offrant` varchar(255) DEFAULT NULL,
  `email_offrant` varchar(255) DEFAULT NULL,
  `nom_beneficiaire` varchar(255) DEFAULT NULL,
  `formule_souhaitee` varchar(255) DEFAULT NULL,
  `message_personnalise` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure de la table `formules_mariage`

DROP TABLE IF EXISTS `formules_mariage`;
CREATE TABLE IF NOT EXISTS `formules_mariage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `prix` varchar(255) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `couleur_fond` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Structure de la table `formules_standard`

DROP TABLE IF EXISTS `formules_standard`;
CREATE TABLE IF NOT EXISTS `formules_standard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `prix` varchar(255) DEFAULT NULL,
  `details` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- Déchargement des données de la table `formules_standard`

INSERT INTO `formules_standard` (`id`, `nom`, `prix`, `details`) VALUES
(1, 'L\'essentiel', '130€', '10 photos retouchées | environ 30min de séance'),
(2, 'L\'inoubliable', '220€', '20 photos retouchées | environ 1h de séance'),
(3, 'L\'expérience', '300€', 'Entre 30 à 50 photos retouchées | environ 1h30 de séance');


-- Structure de la table `image`

DROP TABLE IF EXISTS `image`;
CREATE TABLE IF NOT EXISTS `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url_image` varchar(255) DEFAULT NULL,
  `categorie` varchar(50) DEFAULT NULL,
  `seance_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `seance_id` (`seance_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- Structure de la table `seances_standard`

DROP TABLE IF EXISTS `seances_standard`;
CREATE TABLE IF NOT EXISTS `seances_standard` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) DEFAULT NULL,
  `image_presentation` varchar(255) DEFAULT NULL,
  `description_modale` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Déchargement des données de la table `seances_standard`

INSERT INTO `seances_standard` (`id`, `titre`, `image_presentation`, `description_modale`) VALUES
(1, 'Couple ', 'couple-home.jpg', 'Séances Photo Couple'),
(2, 'Famille', 'famille-home.jpg', 'Séances Photo Famille'),
(3, 'Grossesse', 'grossesse-home.jpg', 'Séances Photo Grossesse'),
(4, 'Femme', 'femme-home.jpg', 'Séances Photo Femme'),
(5, 'Nouveau né', 'nouveauné-home.jpg', 'Séances Photo Nouveau né');


-- Structure de la table `seance_formules`

DROP TABLE IF EXISTS `seance_formules`;
CREATE TABLE IF NOT EXISTS `seance_formules` (
  `seance_id` int(11) NOT NULL,
  `formule_id` int(11) NOT NULL,
  PRIMARY KEY (`seance_id`,`formule_id`),
  KEY `fk_formule` (`formule_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Déchargement des données de la table `seance_formules`

INSERT INTO `seance_formules` (`seance_id`, `formule_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(5, 2),
(1, 3),
(2, 3),
(3, 3),
(4, 3),
(5, 3);

-- Contraintes pour les tables déchargées
--
-- Contraintes pour la table `seance_formules`
--
ALTER TABLE `seance_formules`
  ADD CONSTRAINT `fk_formule` FOREIGN KEY (`formule_id`) REFERENCES `formules_standard` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_seance` FOREIGN KEY (`seance_id`) REFERENCES `seances_standard` (`id`) ON DELETE CASCADE;
COMMIT;
