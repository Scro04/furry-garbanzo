# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.49-0ubuntu0.14.04.1)
# Database: taoKongress
# Generation Time: 2016-05-17 06:00:47 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table appEinheiten
# ------------------------------------------------------------

DROP TABLE IF EXISTS `appEinheiten`;

CREATE TABLE `appEinheiten` (
  `id` int(11) unsigned NOT NULL,
  `TagId` int(11) DEFAULT NULL,
  `BezeichnungGER` varchar(70) DEFAULT NULL,
  `BezeichnungENG` varchar(70) DEFAULT NULL,
  `Uhrzeit` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table appKongresse
# ------------------------------------------------------------

DROP TABLE IF EXISTS `appKongresse`;

CREATE TABLE `appKongresse` (
  `id` int(11) unsigned NOT NULL,
  `BezeichnungGer` varchar(80) DEFAULT NULL,
  `BezeichnungENG` varchar(80) DEFAULT NULL,
  `UntertitelGER` varchar(200) DEFAULT NULL,
  `UntertitelENG` varchar(200) DEFAULT NULL,
  `Von` timestamp NULL DEFAULT NULL,
  `Bis` timestamp NULL DEFAULT NULL,
  `Ort` varchar(100) DEFAULT NULL,
  `BeschreibungGER` text,
  `BeschreibungENG` text,
  `FruehbucherBis` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `appKongresse` WRITE;
/*!40000 ALTER TABLE `appKongresse` DISABLE KEYS */;

INSERT INTO `appKongresse` (`id`, `BezeichnungGer`, `BezeichnungENG`, `UntertitelGER`, `UntertitelENG`, `Von`, `Bis`, `Ort`, `BeschreibungGER`, `BeschreibungENG`, `FruehbucherBis`)
VALUES
	(1,'TCM 2016','TCM 2016','TAO Kongress - Aus der Praxis für die Praxis','TAO Congress','0000-00-00 00:00:00','0000-00-00 00:00:00','Vorklinik der Medizinischen Universität Graz\nHarrachgasse 21\n8010 Graz','In diesem Jahr haben wir unter dem Titel \"Aus der Praxis für die Praxis\" folgende Schwerpunktthemen für Sie vorbereitet: Burn-out - Klimakterium - Reizdarm - Allergie - Schlafstörungen - Begleitung bei Chemotherapie. Dies und noch viel mehr gibt es bei unserem Kongress zu sehen und zu hören.\n\nAm Donnerstag, den 22. September 2016 werden vier Themenbereiche bearbeitet, wobei jedes Thema mit jeweils einem Workshop zu Syndromdiagnostik, Akupunktur, chinesischen Kräutern und westlichen Kräutern über den ganzen Tag abgehandelt wird. Durch die  spezielle Aufteilung ist es möglich, ein Thema entweder den ganzen Tag von allen Seiten beleuchtet zu hören, oder aber vier Themen aus Sicht der Akupunktur oder chinesischen Kräuter-Medizin oder der westlichen Kräuter-Medizin zu erfahren.\n\nWeiters wird wieder eine neue Art der Akupunktur, die SaAm Akupunktur aus Korea, vorgestellt.\n\nAn allen drei Kernkongress-Tagen (22.-24.09.2016) werden ganztägig praxisorientierte WORKSHOPS abgehalten. Wir bitten Sie, sich für die gewünschten Workshops anzumelden. Nach Maßgabe freier Plätze können Sie natürlich auch andere Workshops besuchen. Bei Workshops mit Teilnehmerbegrenzung ist eine fixe Anmeldung unbedingt erforderlich. Die Vergabe der Plätze erfolgt nach Einlangen der Anmeldung.\n\nAm Samstag, veranstaltet der Verein g5e wieder einen ERNÄHRUNGSTAG. Für Kongressteilnehmer sind die Workshops in der Kongressgebühr inkludiert.\n\nFrühbucherbonus bis 31. Mai 2016!\n\nNeu ist, dass die PLENUMSVORTRÄGE nun am Freitag in der Zeit von 08.30 - 12.30 Uhr und am Samstag von 10.30 - 12.30 Uhr stattfinden werden.\n\nSowohl bei den Workshops, als auch bei den Vorträgen ist der Zutritt nur TeilnehmerInnen mit gültigem Kongressausweis (Namenskärtchen) gestattet!\n\nDie Handouts aller Workshops werden im pdf Format auf der Kongress Homepage in einem gesicherten Bereich veröffentlicht. Kurz vor Kongressbeginn bekommen Sie per Mail/Post einen Link, unter dem Sie die Handouts herunterladen und ausdrucken können. Die CD mit den Handouts aller Workshops erhalten Sie am Kongress gratis.\n\nFür die 3-Tageskarte wird um 24 DFP Punkte bei der ÖÄK angesucht. Um die DFP-Punkte direkt an die ÖÄK melden zu können, benötigen wir Ihre Arztnummer.','Practical workshops will be held throughout the day. On Friday and Saturday morning there will be a plenary.\n\nFor reasons of organisation we would kindly request you to enrol for the workshops you wish to take part in. Depending on free capacities you may certainly take part in other workshops as well. Please note, that an enrolment is obligatory for all workshops with a limited number of participants. You will be granted a place in the workshop after having enrolled for it.\n\nWe are pleased to inform you that the handouts of all workshops will be published on the website of the congress as a pdf file in secure mode. We will provide a link for you to download and print the handouts. You will receive this link by e-mail approximately two weeks before the Congress. Furthermore you will get a DVD containing all handouts as part of your congress folder directly at the congress. Taking part in this congress will count for 24 Austrian Credit Points (DFP).','0000-00-00 00:00:00');

/*!40000 ALTER TABLE `appKongresse` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table appPreise
# ------------------------------------------------------------

DROP TABLE IF EXISTS `appPreise`;

CREATE TABLE `appPreise` (
  `id` int(11) unsigned NOT NULL,
  `KongressId` int(11) DEFAULT NULL,
  `BezeichnungGER` varchar(50) DEFAULT NULL,
  `BezeichnungENG` varchar(50) DEFAULT NULL,
  `PreisGruppeId` int(11) DEFAULT NULL,
  `Preis` int(11) DEFAULT NULL,
  `PreisFruehbucher` int(11) DEFAULT NULL,
  `Tage` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Secondary` (`KongressId`),
  CONSTRAINT `appPreise_ibfk_1` FOREIGN KEY (`id`) REFERENCES `appKongresse` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `appPreise` WRITE;
/*!40000 ALTER TABLE `appPreise` DISABLE KEYS */;

INSERT INTO `appPreise` (`id`, `KongressId`, `BezeichnungGER`, `BezeichnungENG`, `PreisGruppeId`, `Preis`, `PreisFruehbucher`, `Tage`)
VALUES
	(1,1,'Normalpreis','Regular',1,190,2016,1);

/*!40000 ALTER TABLE `appPreise` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table appPreisGruppen
# ------------------------------------------------------------

DROP TABLE IF EXISTS `appPreisGruppen`;

CREATE TABLE `appPreisGruppen` (
  `id` int(11) unsigned NOT NULL,
  `BezeichnungGER` varchar(50) DEFAULT NULL,
  `BezeichnungENG` varchar(50) DEFAULT NULL,
  `BeschreibungGER` varchar(200) DEFAULT NULL,
  `BeschreibungENG` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table appReferenten
# ------------------------------------------------------------

DROP TABLE IF EXISTS `appReferenten`;

CREATE TABLE `appReferenten` (
  `id` int(11) unsigned NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Vorname` varchar(100) DEFAULT NULL,
  `AkadgradPre` varchar(40) DEFAULT NULL,
  `AkadGradPost` varchar(40) DEFAULT NULL,
  `Land` varchar(50) DEFAULT NULL,
  `BeschreibungGER` text,
  `BeschreibungENG` text,
  PRIMARY KEY (`id`),
  CONSTRAINT `appReferenten_ibfk_1` FOREIGN KEY (`id`) REFERENCES `appReferentenBilder` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table appReferentenBilder
# ------------------------------------------------------------

DROP TABLE IF EXISTS `appReferentenBilder`;

CREATE TABLE `appReferentenBilder` (
  `id` int(11) unsigned NOT NULL,
  `Bild` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table appTage
# ------------------------------------------------------------

DROP TABLE IF EXISTS `appTage`;

CREATE TABLE `appTage` (
  `id` int(11) unsigned NOT NULL,
  `KongressId` int(11) DEFAULT NULL,
  `Datum` timestamp NULL DEFAULT NULL,
  `BeschreibungGER` varchar(1000) DEFAULT NULL,
  `BeschreibungENG` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table appWorkshopReferenten
# ------------------------------------------------------------

DROP TABLE IF EXISTS `appWorkshopReferenten`;

CREATE TABLE `appWorkshopReferenten` (
  `id` int(11) unsigned NOT NULL,
  `WorkshopId` int(11) DEFAULT NULL,
  `ReferentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table appWorkshops
# ------------------------------------------------------------

DROP TABLE IF EXISTS `appWorkshops`;

CREATE TABLE `appWorkshops` (
  `id` int(11) unsigned NOT NULL,
  `EinheitId` int(11) DEFAULT NULL,
  `Sprache` varchar(3) DEFAULT NULL,
  `TitelGER` varchar(200) DEFAULT NULL,
  `TitelENG` varchar(200) DEFAULT NULL,
  `BeschreibungGER` text,
  `BeschreibungENG` text,
  `Teil` int(11) DEFAULT NULL,
  `Zeit` varchar(200) DEFAULT NULL,
  `AKId` int(11) DEFAULT NULL,
  `Handout` text,
  `AKPunkte` int(11) DEFAULT NULL,
  `Reihung` int(11) DEFAULT NULL,
  `Seminarraum` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table appZusatzPreise
# ------------------------------------------------------------

DROP TABLE IF EXISTS `appZusatzPreise`;

CREATE TABLE `appZusatzPreise` (
  `id` int(11) unsigned NOT NULL,
  `ZusatzveranstaltungId` int(11) DEFAULT NULL,
  `BezeichnungGER` varchar(50) DEFAULT NULL,
  `BezeichnungENG` varchar(50) DEFAULT NULL,
  `PreisGruppeId` int(11) DEFAULT NULL,
  `Preis` int(11) DEFAULT NULL,
  `PreisFruehbucher` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table appZusatzveranstaltungen
# ------------------------------------------------------------

DROP TABLE IF EXISTS `appZusatzveranstaltungen`;

CREATE TABLE `appZusatzveranstaltungen` (
  `id` int(11) unsigned NOT NULL,
  `KongressId` int(11) DEFAULT NULL,
  `Datum` timestamp NULL DEFAULT NULL,
  `BezeichnungGER` varchar(50) DEFAULT NULL,
  `BezeichnungENG` varchar(50) DEFAULT NULL,
  `BeschreibungGER` text,
  `BeschreibungENG` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
