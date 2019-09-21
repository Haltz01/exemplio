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
	eventTitleList tinytext NOT NULL,
	eventDateList tinytext NOT NULL,
	eventDescriptionList text NOT NULL,
	FOREIGN KEY (exemploID_FKEY) REFERENCES exemploBasicInfo(exemploID)
);

	
insert into exemploBasicInfo (exemploID, exefirstName,lastName,placeOfOrigin,tags,briefing,podcastLink,imageLink,insertionDate) 
	values (0, 'Bob', 'O Construtor', 'Santos', 'Pedreiro', 'constroi', 'https://boboconstrutor.com','https://i.ytimg.com/vi/9JMO2fq7yWQ/maxresdefault.jpg', '2019-09-21');

insert into exemploTimelineInfo (exemploID_FKEY, eventTitleList,  eventDateList, eventDescriptionList) values 
	(0, '?', '?', '?')