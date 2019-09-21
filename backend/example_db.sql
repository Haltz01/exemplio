CREATE DATABASE exemplio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- OBS: I don't know what kind of specialized utf8 this charset is (but it was recomended)

-- TODO: testar caracteres (meu terminal não aceita utf8)

USE exemplio_db;

CREATE TABLE exemploBasicInfo (
	exemploID int NOT NULL AUTO_INCREMENT,
	firstName varchar(20) NOT NULL,
	lastName varchar(50),
	placeOfOrigin varchar(70) NOT NULL,
	tags varchar(40) NOT NULL,
	briefing text NOT NULL,
	podcastLink varchar(200),
	imageLink varchar(60) NOT NULL,
	insertionDate date NOT NULL,
	PRIMARY KEY (exemploID)
);

CREATE TABLE exemploTimelineInfo (
	exemploID_FKEY int NOT NULL,
	eventTitleList varchar(1000) NOT NULL,
	eventDateList varchar(1000) NOT NULL,
	eventDescriptionList varchar(12000) NOT NULL,
	FOREIGN KEY (exemploID_FKEY) REFERENCES exemploBasicInfo(exemploID)
);

	
insert into exemploBasicInfo (exemploID, firstName,lastName,placeOfOrigin,tags,briefing,podcastLink,imageLink,insertionDate) 
	values (1, 'Bob', 'O Construtor', 'Santos', 'Pedreiro', 'constrói', 'https://boboconstrutor.com','https://i.ytimg.com/vi/9JMO2fq7yWQ/maxresdefault.jpg', '2019-09-21');

insert into exemploBasicInfo values 
	(2, '自殺 (Jisatsu)', '佐藤 (Satou)', '東京 (Tokyo)', '日本人', 'dss', 'aáśáśśééŕggýrýýhýhújúkí8ḱ´5ŕ', 'none', '2019-09-21');

insert into exemploTimelineInfo (exemploID_FKEY, eventTitleList,  eventDateList, eventDescriptionList) values 
	(1, '?', '?', '?');