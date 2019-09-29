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
	values (1, 'Guilherme', 'David', 'Cubatão - SP', 'Ciências|Causas Sociais', 'Guilherme David é um jovem cubatense de 20 anos de idade. É co-fundador da exemplio e do OrgulhoFederal. Por meio de uma doação de livros didáticos de um professor de educação Física, ele passou a estudar química por conta própria e a se apaixonar por ciências. Tendo sempre estudado em escolas públicas, Guilherme desenvolveu diversas iniciativas para aprimorar a comunidade à sua volta. O seu maior sonho é ampliar o acesso à educação holística aos estudantes de todo o Brasil.','https://castbox.fm/episode/Guilherme-David-id2209666-id187554028?country=br','https://exempl.io/images/GuilhermeDavid.jpg', '2019-09-21');

insert into exemploTimelineInfo (exemploID_FKEY, eventTitleList, eventDateList, eventDescriptionList) 
	values (1, 'Infância no Vale da Morte|Usina Henry Borden|Céu Azul|Doação de livros|Instituto Federal|Assalto epifânico|Grêmio|Preparatório Avançado de Física|OrgulhoFederal|Primeiras Medalhas|LaunchX|LALA|Hoje', '1999|2004|20XX|20XX|2015|201X|2017|201X|201X|2017|201X|2019|2019+','Em 1999, Guilherme nasce no município de Santos, no litoral paulista. No entanto, passa a viver em uma cidade vizinha chamada Cubatão. Devido à intensa atividade industrial, Cubatão era considerada pela ONU a cidade mais poluída do mundo nos anos 80. Por muito tempo, este município foi conhecido como “Vale da morte”.|Em 2004, Guilherme inicia o seu ensino fundamental na escola municipal “Usina Henry Borden”, em uma região dentro da Mata Atlântica no pé da Serra do Mar.|Quando criança, Guilherme adorava perturbar a sua mãe com perguntas sobre tudo (como o porquê do céu ser azul e a terra ser redonda). Quando a sua mãe não sabia alguma resposta, respondia-lhe que quando ele fosse mais velho iria entender. Inconformado, ele passa a fazer perguntas no Yahoo Respostas. Assim, passou a desenvolver o interesse pela ciência.|Por não ser bom em futebol, ele passa a ser colocado no banco de reservas nas aulas de educação Física. Para aproveitar o tempo livre, ele passa a ler livros sobre filosofia e ciências. Então, começa a se aproximar de seu professor e discutir sobre assuntos complexos. Certo dia, o seu professor decide doar livros didáticos governamentais de ensino médio que seriam jogados no lixo. Assim, Guilherme passa a se apaixonar por Química e decide estudar toda a matéria em menos de um ano.|No ano de 2015, Guilherme é aprovado no Instituto Federal de São Paulo - Campus Cubatão. Ele conta que o seu processo de adaptação foi díficil, mas que eventualmente conseguiu superar. Logo no seu primeiro ano, ele passa a ser um dos poucos alunos a se engajar com olímpiadas científicas.|No seu segundo ano, Guilherme consegue ser aprovado para diversas finais das Olímpiadas Científicas. Assim, ele recebe a proposta de uma bolsa integral em um prestigiado colégio privado da sua região com uma vaga garantida na turma dos melhores alunos e uma participação no Torneio Internacional de Física. Porém, após voltar de uma reunião neste colégio e ter sido assaltado em um ônibus lotado, ele tem uma epifania. Ele conta que este evento o fez refletir sobre a “condição compartilhada” nas comunidades à sua volta. Assim, Guilherme decide rejeitar a bolsa e criar um curso avançado de física para os alunos de seu colégio.|Depois de uma campanha criativa em 2017, Guilherme é eleito para o Grêmio estudantil com votação recorde: 82% dos votos. Ele conta que essa foi a atividade que mais sentiu orgulho de ter feito no seu ensino médio.|Por causa do assalto, Guilherme inicia um curso gratuito de Física, chamado de “Preparatório Avançado de Física”, para dezenas alunos que tinham a pretensão de serem aceitos em universidades seletivas ou conquistarem medalhas em olímpiadas científicas.|Ao ver a mudança acontecendo em nível local, Guilherme decide dar um passo além. Assim, funda o OrgulhoFederal, uma organização estudantil que dá visibilidade a estudantes de institutos federais de todo o Brasil.|Em 2017, Guilherme também é premiado em ouro na olímpiada de Física das Escolas Públicas e da Olímpiada Brasileira de Astronomia.|Um ano depois, Guilherme é aceito no LaunchX, um programa de empreendedorismo com duração de um mês, no Instituto de tecnologia de Massachussets (MIT).|Em 2019, Guilherme é aceito no Latin American Leadership Academy (LALA). Junto com outros participantes, ele co-funda a exemplio. Apaixonado pelo programa, Guilherme é aceito para atuar como voluntário de Staff na sexta edição do programa em São Paulo.|Atualmente, o seu maior sonho é ampliar o acesso a uma educação ativa aos estudantes de todo o Brasil. Para isso, atua como chefe de produto na exemplio e almeja ver o crescimento expressivo do projeto.')


insert into exemploBasicInfo (exemploID, firstName,lastName,placeOfOrigin,tags,briefing,podcastLink,imageLink,insertionDate) 
	values (2, 'Bob', 'O Construtor', 'Santos', 'Pedreiro', 'constrói', 'https://boboconstrutor.com','https://i.ytimg.com/vi/9JMO2fq7yWQ/maxresdefault.jpg', '19-09-29');
