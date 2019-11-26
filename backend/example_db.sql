CREATE DATABASE exemplio_db;
# OBS: I dont know what kind of specialized utf8 this charset is (but it was recomended)

# TODO: testar caracteres (meu terminal não aceita utf8)

USE exemplio_db;

CREATE TABLE exemploBasicInfo (
	exemploID varchar(80) NOT NULL,
	firstName varchar(20) NOT NULL,
	lastName varchar(60),
	placeOfOrigin varchar(70) NOT NULL,
	tags varchar(40) NOT NULL,
	briefing text NOT NULL,
	podcastLink varchar(250),
	imageLink varchar(100) NOT NULL,
	insertionDate date NOT NULL,
	PRIMARY KEY (exemploID)
);

CREATE TABLE exemploTimelineItem (
    timelineItemId int PRIMARY KEY AUTO_INCREMENT,
	exemploID_FKEY varchar(80) NOT NULL,
	eventTitle varchar(1000) NOT NULL,
	eventDescription varchar(12000) NOT NULL,

	FOREIGN KEY (exemploID_FKEY) REFERENCES exemploBasicInfo(exemploID)
);
	
# Robson Silva


INSERT INTO exemploBasicInfo (exemploID, firstName,lastName,placeOfOrigin,tags,briefing,podcastLink,imageLink,insertionDate)
    VALUES ('robsonsilva', 'Robson', 'Silva', 'Suzano - SP', 'Tecnologia|Negócios', 'Robson Amorim é um jovem de 20 anos de Suzano, São Paulo. Foi um dos dois brasileiros aceitos em 2018 para participar do programa de empreendedorismo LaunchX no Massachussets Institute of Technology (MIT)​, ​uma das universidades mais conceituadas do mundo. Em sua infância, Robson apresentou imensas dificuldades de aprendizado, sendo obrigado a refazer um ano letivo de seu ensino fundamental. Apaixonado por tecnologia, ele fez parte da quinta melhor equipe de Robótica de todo o país em 2017. Sem condições financeiras para bancar os seus sonhos ambiciosos, Robson decidiu criar uma ​foodbike e vender trufas de chocolate na porta de sua escola. Atualmente, ele coordena uma equipe de robótica em uma escola pública de sua região. O seu maior sonho é construir uma forte indústria de tecnologia no Brasil.','https://castbox.fm/app/castbox/player/id2209666/id172923374?v=8.11.2&autoplay=0&hide_list=1','https://exempl.io/images/ref_robson.jpg', '2019-10-01');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
    VALUES ('robsonsilva', 'Nascimento', 'Robson nasce em 1999, no munícipio Suzano, no interior do estado de São Paulo.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
    VALUES ('robsonsilva', 'Primeiras dificuldades', 'Em 2006, inicia o seu Ensino Fundamental na escola Cruzeirinho. Começa a apresentar dificuldades de aprendizado e então passa a ser acompanhado por uma psicopedagoga');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
    VALUES ('robsonsilva', 'Ingressa no SESI', 'Em 2007, já no segundo ano do Ensino Fundamental, recebe uma bolsa para ser aluno no Sesi de Suzano, com a condição de voltar um ano letivo.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
    VALUES ('robsonsilva', 'A primeira falha', 'Em seu sétimo ano, um professor apresenta-o a possibilidade de participar do time de robótica da escola. Então, Robson inscreve-se para participar da First Lego League, um campeonato de robótica internacional, porém é rejeitado no processo seletivo.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
    VALUES ('robsonsilva', 'Resiliência', 'Um ano depois, decide reinscrever-se no First Lego League, e desta vez passa no processo seletivo, participando da competição.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
    VALUES ('robsonsilva', 'Inicia o Ensino médio', 'Em 2015, no seu primeiro ano do ensino médio, começa a interessar-se sobre faculdades no exterior. Porém, por não ter condições financeiras para pagar aulas de inglês, começa a aprender o idioma sozinho por meio do YouTube e aplicativos móveis. Além disso, participa pela primeira vez da Olimpíada Brasileira de Robótica e recebe o prêmio de quarta melhor equipe no campeonato regional. Também participa de um campeonato estadual de robótica na Faculdade de Engenharia Industrial (FEI), onde sua equipe garante a trigésima posição entre as sessenta equipes do estado de São Paulo.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
    VALUES ('robsonsilva', '2º Ano', 'Novamente participa da Olimpíada Brasileira de Robótica e ganha medalha de prata no campeonato regional, classificando-se para a etapa estadual. Assim, sua equipe classifica-se como a quinta melhor do estado de São Paulo, porém não é aprovada para a etapa nacional.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
    VALUES ('robsonsilva', '3º Ano', 'Já no último ano do Ensino Médio, Robson começa a vender trufas na porta de sua escola para bancar o custo do processo seletivo de universidades americanas. Em maio de 2018, ele convida a sua equipe de robótica a fazer o mesmo para ajudar a pagar as despesas das competições. Novamente, ele participa da Olimpíada Brasileira de Robótica e, desta vez, classifica-se para a etapa nacional. Sua equipe recebe o prêmio de quinta melhor equipe de todo o Brasil. No final do ano, ele termina o ensino médio e inscreve-se para o LaunchX, um programa de empreendedorismo de um mês que ocorre no Massachussets Institute of Technology (MIT).');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
    VALUES ('robsonsilva', 'Gap year', 'Após terminar o ensino médio, decide tirar um gap year (ano sabático). Em abril de 2018, recebe a notícia de que foi aprovado no LaunchX com uma bolsa de 98%. Como a bolsa não contemplava os custos de alimentação e passagens aéreas, ele decide comprar uma bicicleta e utilizá-la para vender trufas de chocolate e outros doces (apelida-a de foodbike). Com isso, a sua história ganha imensa visibilidade na mídia, aparecendo em portais renomados como o G1. Assim, também recebe o apoio financeiro de diversas pessoas. Em julho de 2018, ele embarca rumo ao MIT para participar do programa por um mês.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
    VALUES ('robsonsilva', 'Hoje', 'Em 2019, Robson passou a coordenar uma equipe de robótica em uma escola pública de sua região. O seu maior sonho é construir uma forte indústria de tecnologia no Brasil.');
# Alicia Aguiar


INSERT INTO exemploBasicInfo (exemploID, firstName,lastName,placeOfOrigin,tags,briefing,podcastLink,imageLink,insertionDate)
    VALUES('aliciaaguiar', 'Alicia', 'Aguiar', 'Cubatão - SP', 'Artes', 'Alicia Aguiar é uma jovem dançarina de 19 anos de Santos, São Paulo. Foi uma das participantes do quadro “Dança de Grupo” do programa “Domingão do Faustão”. Ainda criança quando já fazia aulas de Ginástica Rítmica, ela sofreu um atropelamento que a fez ficar em repouso por dois anos. Após isso, começou a fazer ballet clássico no Conservatório Municipal de Cubatão. Em 2018, Alicia participou do Festival de Joinville - o maior festival do mundo em número de participantes - e o seu grupo foi premiado como o melhor do festival. No Ensino Médio, Alicia teve que se adaptar à uma rotina intensa como aluna do Instituto Federal e dançarina no Conservatório. Atualmente, Alicia mora em Cubatão e é integrante do grupo “Companhia de Dança de Cubatão”. Seu maior sonho é mudar a perspectiva que as pessoas de sua comunidade têm sobre a arte.','https://castbox.fm/app/castbox/player/id2209666/id173075576?v=8.11.2&autoplay=0&hide_list=1','https://exempl.io/images/ref_alicia.png', '2019-10-02');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)  
    VALUES('aliciaaguiar', 'Nascimento', 'Alicia nasce em Santos, no litoral paulista, em 1999.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)  
    VALUES('aliciaaguiar', 'Mudança', 'Em 2000, Alicia se muda para Cubatão, cidade vizinha a Santos.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)  
    VALUES('aliciaaguiar', 'Primeiro contato com a dança', 'Aos quatro anos de idade, começa a praticar Ginástica Rítmica.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)  
    VALUES('aliciaaguiar', 'Primeiras dificuldades', 'Aos doze anos, sofre um atropelamento e quebra a perna. Para se recuperar, Alicia se afasta dos treinos de Ginástica Rítmica.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)  
    VALUES('aliciaaguiar', 'Recuperada', 'Em 2013, dois anos após o acidente, Alicia volta a dançar ao se inscrever no curso de ballet clássico no Conservatório Municipal de Cubatão.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)  
    VALUES('aliciaaguiar', 'Palco & Cia', 'Em 2014, como parte das atividades que fazia no Conservatório Municipal, Alicia começa a participar do curso técnico de dança. Ela é selecionada para fazer parte do grupo “Palco & Cia” e começa a fazer performances em público.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)  
    VALUES('aliciaaguiar', 'Inicia o Ensino médio', 'É aprovada no Instituto Federal de São Paulo (IFSP) - Campus Cubatão em 2015. Continua a dedicar-se ao Palco & Cia e ao curso técnico de dança, aprofundando-se no estudo de Dança Contemporânea.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)  
    VALUES('aliciaaguiar', '2º Ano', 'Junta-se à Banda Marcial de Cubatão. Além disso, Alicia é convidada a fazer parte do Grêmio Estudantil do IFSP - Campus Cubatão como coordenadora de cultura.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)  
    VALUES('aliciaaguiar', 'Reconhecimento nacional', 'Em 2018, Alicia ingressa na Banda Escola Cubatão (BEC). Então, passa a ter aulas de música, dança e canto. Também é convidada a fazer parte da “Companhia de Dança de Cubatão”, um grupo de dança famoso na cidade. Em julho, o grupo participa do Festival de Dança de Joinville - o maior festival do mundo em número de participantes. Lá, eles ganham o primeiro lugar na categoria conjunto de jazz e são premiados como o melhor grupo do festival.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)  
    VALUES('aliciaaguiar', 'Hoje', 'Em 2019, Alicia começa a fazer aulas de teatro com o objetivo de expandir o seu conhecimento do mundo artístico. Como parte do grupo “Palco & Cia”, Alicia é convidada a participar da competição “Festival de Livorno”, na Itália. Além disso, ela e os outros integrantes da “Companhia de Dança de Cubatão” são convidados a participar do quadro “Dança de grupo do Faustão”, no programa Domingão do Faustão, da Rede Globo. Seu maior sonho é mudar a perspectiva que as pessoas de sua comunidade têm sobre a arte.');

# Miguel Fabrin


INSERT INTO exemploBasicInfo (exemploID, firstName,lastName,placeOfOrigin,tags,briefing,podcastLink,imageLink,insertionDate)
    VALUES ('miguelfabrin', 'Miguel', 'Fabrin', 'Ipumirim - SC', 'Ciências|Voluntariado', 'Miguel Fabrin é um jovem de 19 anos de uma Ipumirim, uma pequena cidade no interior de Santa Catarina. Foi o primeiro colocado no curso de Medicina na Universidade Federal de Santa Catarina (UFSC) por meio do Sistema de Cotas de Escola Pública. Sempre tendo estudado em escolas públicas, ele foi um dos jovens selecionados para participar do Programa Jovens Embaixadores por causa do seu espírito empreendedor e capacidade de liderança em 2017. Atualmente, Miguel é vice-presidente da Federação Internacional dos Estudantes de Medicina (IFSMA - UFSC). Seu maior sonho é mostrar para os jovens brasileiros como a educação pode ser uma ferramenta de transformação da sua realidade.','https://castbox.fm/app/castbox/player/id2209666/id172921231?v=8.11.2&autoplay=0&hide_list=1','https://exempl.io/images/ref_miguel.jpeg', '2019-10-03');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('miguelfabrin', 'Nascimento', 'Miguel nasce em Ipumirim em 2000, uma cidade no interior do estado de Santa Catarina.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('miguelfabrin', 'Entrada na escola', 'Em 2004, começa o ensino primário em uma escola municipal.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('miguelfabrin', 'Amor pelo esporte', 'Com apenas seis anos de idade, começa a jogar futebol recreativamente, esporte pelo qual ele apaixona-se rapidamente.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('miguelfabrin', 'Atletismo', 'Em 2012, Miguel começa a praticar atletismo.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('miguelfabrin', 'Bombeiro voluntário', 'Durante a oitava série, participa do Programa Bombeiro Voluntário Mirim da sua cidade, onde ele começa a ter experiências como um profissional da área.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('miguelfabrin', 'Inicia o Ensino médio', 'No primeiro ano do Ensino Médio, Miguel muda de escola, tendo que se adaptar a uma nova realidade. Então, dedica-se a aprender computação por meio de um curso do SENAI.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('miguelfabrin', 'Vai ao céu', 'Ainda participando do Bombeiro Voluntário, Miguel e os seus amigos se engajam em um projeto de construção de uma sonda atmosférica. A sonda é então lançada pela primeira vez em maio de 2015, sendo relançada exitosamente diversas outras vezes.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('miguelfabrin', 'Experiência no exterior', 'Em janeiro de 2016, é selecionado ao programa “Jovens Embaixadores”, um intercâmbio de três semanas nos Estados Unidos para estudantes brasileiros. No restante do ano, ele começa a fazer cursinho e dedicar-se a passar no vestibular.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('miguelfabrin', 'Inicia a faculdade', 'Em 2017, é o primeiro colocado no curso de medicina da Universidade Federal de Santa Catarina (UFSC) por meio do Sistema de Cotas de Escola Pública. No início do curso, torna-se presidente da Federação Internacional dos Estudantes de Medicina (IFMSA - UFSC).');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('miguelfabrin', 'Hoje', 'Em 2019, Miguel atua como vice-presidente do IFMSA Brazil - UFSC. Seu maior sonho é mostrar aos jovens brasileiros como a educação pode ser uma ferramenta de transformação da sua realidade.');

# João Abdalla


INSERT INTO exemploBasicInfo (exemploID, firstName,lastName,placeOfOrigin,tags,briefing,podcastLink,imageLink,insertionDate)
    VALUES ('joaoabdalla', 'João', 'Abdalla', 'Rio de Janeiro - RJ', 'Política|Educação', 'João Abdalla é um jovem carioca de 19 anos. Em 2019, foi um dos poucos brasileiros aceitos em Harvard, uma das melhores universidades do mundo. João é co-fundador da RioMUN, uma simulação da ONU que atrai jovens de todo o Brasil. Formado no Colégio Militar do Rio de Janeiro, João foi responsável por reativar o grêmio estudantil e criar um clube para jovens interessados em aplicar para as universidades americanas. Atualmente, João se prepara para se mudar para os Estados Unidos e começar o primeiro ano na universidade. O seu maior sonho é mudar a política brasileira.','https://castbox.fm/app/castbox/player/id2209666/id174942043?v=8.11.2&autoplay=0&hide_list=1','https://exempl.io/images/JoaoAbdalla.jpg', '2019-10-04');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('joaoabdalla','Nascimento', 'Em 2000, João nasce na cidade do Rio de Janeiro.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('joaoabdalla','Infância', 'Influenciado pela mãe, que é professora de português, João se destaca na escola Jardim Escola Rosa Alves Moreira por ir bem nos estudos.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('joaoabdalla','Colégio militar', 'Em 2012, João ingressa no Colégio Militar do Rio de Janeiro para o seu Ensino fundamental II.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('joaoabdalla','Simulações da ONU e Olimpíadas', 'João inicia o Ensino Médio no ano de 2016. Nesse mesmo ano, João começa a participar de Simulações da Organização das Nações Unidas (ONU), uma atividade acadêmica que reproduz na prática o modo como são realizadas as reuniões nas Nações Unidas. Ele identifica-se bastante com a atividade e por conta disso torna-se um dos alunos a convencer o seu colégio a oficializar as simulações como uma atividade extracurricular. Ao longo do seu Ensino Médio, João participa de diversas simulações no Rio e em outros estados do Brasil. Também começa a participar de Olimpíadas Científicas e ganha uma menção honrosa na Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP) e na Olimpíada Brasileira de Física das Escolas Públicas (OBFEP).');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('joaoabdalla','RioMUN e Grêmio Escolar', 'Em 2017, João se torna um dos co-fundadores da RioMUN, uma simulação da ONU que ocorre dentro do seu colégio. João atua como um dos principais organizadores do evento, que atraía participantes de todos os estados do Brasil. Nesse ano, João também se dedica a reviver o Grêmio Estudantil de seu colégio, uma vez que a união dos estudantes para tal fim havia sido proibida pela diretoria. Em 2018, ele consegue a permissão para formar uma chapa do Grêmio e é eleito como Vice-Presidente.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('joaoabdalla','Etapa final', 'Em 2018, João começa a dar aulas de inglês para crianças em comunidades carentes próximas ao local onde ele morava. Também é aceito em julho no programa de Mentoria da Associação de Estudantes Brasileiros no Exterior (BRASA). Além disso, ele se voluntaria para ajudar na campanha política do deputado estadual Renan Ferreirinha e é nomeado coordenador de mobilização da campanha. Já no final do ano, João cria um clube denominado “Clube do Application” em seu colégio, onde alunos compartilham conhecimento sobre o processo seletivo para a entrada em universidades americanas.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription)
	VALUES('joaoabdalla','Hoje', 'João se prepara para começar os estudos na Universidade de Harvard, uma das instituições mais prestigiadas do mundo. Seu maior sonho é mudar a política no Brasil.');

# João Quintanilha


INSERT INTO exemploBasicInfo (exemploID, firstName,lastName,placeOfOrigin,tags,briefing,podcastLink,imageLink,insertionDate)
    VALUES ('joaoquintanilha', 'João', 'Quintanilha', 'Goiânia - GO', 'Sustentabilidade|Tecnologia', 'João Quintanilha, 19 anos. Natural de Goiânia, Goiás, João é criador do Sullivan, um tablet que cria imagens tridimensionais por meio de pinos, permitindo a acessibilidade para deficientes visuais por meio do tato. Este projeto foi um dos vários que João desenvolveu ao longo de seu Ensino Médio. Entre eles, estão o Plastisseiro (um travesseiro sustentável feito de plástico reciclado) e o Bolmoringa (uma bolsa com sementes que impede o fenômeno da eutrofização nos rios e lagos). Este último garantiu a ele um convite para ir à NASA, a agência espacial americana. No início de 2019, foi aprovado na Tufts University, onde irá estudar Ciência da Computação e Biotecnologia.','https://castbox.fm/app/castbox/player/id2209666/id174926576?v=8.11.2&autoplay=0&hide_list=1','https://exempl.io/images/JoaoQuintanilha.jpg', '2019-10-05');

INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('joaoquintanilha','Nascimento', 'Em 1999, João nasce em Goiânia - GO em um dos bairros mais perigosos da cidade.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('joaoquintanilha','Ensino Fundamental', 'No sexto ano do Ensino Fundamental na escola SESI, João começa a participar de aulas de teatro. A experiência como diretor de uma peça o encoraja a desenvolver o espírito de liderança desde cedo.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('joaoquintanilha','Ben 10', 'Apaixonado pelo programa de Televisão Ben 10, João decide criar um blog sobre o desenho animado. A partir daí, João passa a escrever diariamente e a alcançar cada vez mais pessoas, tornando-se eventualmente o blog mais popular de Ben 10 de toda a América Latina. Com isso, João é obrigado a recrutar pessoas para ajudá-lo nas publicações, reinforçando a sua pré-disposição para liderança.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('joaoquintanilha','Início do Ensino Médio', 'Em 2014, João inicia o Ensino médio na escola SESI. Além disso, ele ingressa no curso técnico em processos gráficos no SENAI. Nesse mesmo ano, João desenvolve um projeto chamado Sullivan, uma plataforma que permite deficientes visuais utilizar tablets por meio do tato. Graças a esse projeto, o grupo é selecionado para participar do torneio de robótica First Lego League em 2015.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('joaoquintanilha','Plastisseiro', 'Ainda em 2015, João desenvolve um prisma que produz hologramas tridimensionais a partir de um smartphone. Porém, eles não dão continuação ao projeto devido ao fato de quererem criar iniciativas com impacto ambiental. Portanto, ele decide criar o Plastisseiro, um travesseiro sustentável feito de plástico reciclado. O sucesso do projeto é tanto que, no ano seguinte, o projeto ganha o prêmio de solução mais inovadora do torneio First Lego League.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('joaoquintanilha','Bolmoringa', 'Em 2016, João se torna um dos co-fundadores do projeto Bolmoringa, uma bolsa que combate o fenômeno da eutrofização, que provoca a morte de diversas espécies animais e vegetais devido à falta de oxigênio na água. No mesmo ano, o projeto ganha o quarto lugar entre os 300 participantes da Olimpíada do Conhecimento, a maior competição de educação profissional e tecnológica das Américas.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('joaoquintanilha','Reconhecimento internacional', 'Em 2017, o sucesso do projeto Bolmoringa garante a João uma vaga em um programa da NASA, a agência espacial americana. Nesse mesmo período, ele é convidado para palestrar em duas universidades nos Estados Unidos. Umas dessas, a Bluefield College, oferece-lhe uma bolsa que cobriria 100% dos custos da graduação. Porém, ele nega a oferta pois decide continuar os seus projetos ambientais no Brasil.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('joaoquintanilha','Primeiro emprego', 'Em 2018, João começa a trabalhar para a Liaison America, uma empresa norte-americana que desenvolve programas de educação internacional para alunos nos Estados Unidos. Então, João passa a oferecer mentoria para sete jovens cientistas brasileiros que foram aceitos para participar do programa. Ele também é selecionado para o programa de mentoria da Associação de Estudantes Brasileiros no Exterior (BRASA) para aplicar para universidades americanas.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('joaoquintanilha','Admissão nos Estados Unidos', 'Mesmo estando dois anos fora do ensino médio, João aplica para as universidades americanas. Então, ele é Aprovado na Tufts University, uma das melhores universidades dos Estados Unidos.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('joaoquintanilha','Hoje', 'Em 2019, João se torna uma das primeiras pessoas a receberem uma bolsa do programa da BRASA para custear a faculdade. Atualmente, ele deseja seguir na área de Ciência da Computação e Biotecnologia e continuar desenvolvendo projetos que visem o desenvolvimento sustentável no Brasil.');

# Myllena Cristyna


INSERT INTO exemploBasicInfo (exemploID, firstName,lastName,placeOfOrigin,tags,briefing,podcastLink,imageLink,insertionDate)
    VALUES ('myllenacristyna', 'Myllena', 'Cristyna', 'Iracema - CE', 'Ciências|Sustentabilidade', 'Myllena Cristyna é uma das jovens cientistas de mais destaque do Brasil. Nascida em Iracema - CE, em um povoado de apenas 300 habitantes, ela diz que sempre enfrentou limitações para acreditar em si mesma e correr atrás dos seus objetivos. Aos 16 anos, foi uma das responsáveis por uma pesquisa sobre formas de impedir a transmissão do zika vírus. Com isso, Myllena foi selecionada para a Intel ISEF, a feira de ciências mais importante do mundo. Devido ao seu destaque, Myllena estreou na “Science Fair”, um documentário da National Geographic que foi indicado ao Emmy em 2019. Hoje, ela mora na Califórnia, onde está aprendendo inglês. Seu maior sonho é atuar como jornalista para contribuir para a divulgação científica.', 'https://castbox.fm/app/castbox/player/id2209666/id176285359?v=8.11.2&autoplay=0&hide_list=1','https://exempl.io/images/MyllenaCristyna.jpg.png', '2019-10-06');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('myllenacristyna', 'Origem', 'Em 1999, Myllena nasce no distrito de Ema, na cidade cearense de Iracema. Morando em um povoado com aproximadamente 300 habitantes, ela cresce em meio à uma comunidade onde os habitantes não acreditavam que grandes conquistas poderiam ser alcançadas. Segundo ela, esse foi um dos fatores que impulsionaram-na a querer ir além e a mostrar a todos que eles estavam errados.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('myllenacristyna', 'Histórias em quadrinhos', 'Aos 10 anos, Myllena torna-se coordenadora de uma atividade em sua escola. Apaixonada por matemática, ela passa a orientar os colegas a criarem histórias em quadrinhos cujo enredo tinha como base a resolução de um problema matemático. Com isso, ela esperava estimular os demais alunos a compreenderem e a se interessarem pela área da mesma forma que ela.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('myllenacristyna', 'Amor pela ciência', 'Em 2013, no seu 9° ano, Myllena apresenta um projeto sobre a reutilização da água em uma feira de ciências na sua escola. Apesar de ter sido apenas uma campanha de conscientização, Myllena enfatiza a importância que esse projeto teve na sua vida. Segundo ela, foi graças a uma pesquisa feita para elaborar o projeto que fez com que notasse a importância da ciência e da divulgação científica.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('myllenacristyna', 'Primeiro projeto científico', 'Em 2014, ela inicia o Ensino Médio na Escola Deputado Joaquim de Figueiredo Correia. No seu primeiro ano, assume a liderança de uma atividade extracurricular cujo principal objetivo era incentivar e apoiar projetos científicos existentes na escola. Em uma feira de ciências, que ocorre no final do ano, ela apresenta a sua visão sobre o projeto, explicando o impacto que planejava causar no ambiente escolar. Ela garante o primeiro lugar na feira e passa para a etapa regional. Aos 15 anos, Myllena também começa o seu primeiro emprego na rádio de sua cidade. Lá, ela tem a oportunidade de narrar este acontecimento como a primeira vez. Assim, descobre uma outra paixão além da ciência: a área da comunicação.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('myllenacristyna', 'Zika Vírus', 'Em 2016, acompanhada pelo seu colega de pesquisa, Gabriel Moura, Myllena torna-se responsável pela criação de uma pesquisa sobre maneiras de inibir a transmissão do zika vírus. Com esse projeto, os dois decidem tentar realizar um grande sonho: serem selecionados para participar da Intel International Science and Engineering Fair (Intel ISEF), a maior feira de ciências para estudantes do Ensino Médio do mundo. Para conseguirem o reconhecimento nacional necessário para a classificação, eles inscrevem-se e ganham premiações em diversas feiras de ciências na América do Sul. Eles também começam a vender rifas para arrecadar o dinheiro necessário para a viagem.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('myllenacristyna', 'A maior feira de ciências do mundo', 'Ainda no Brasil, o projeto é premiado nas seguintes feiras: Feira Nordestina de Ciências e Tecnologia (FENECIT) em Recife; Ceará faz Ciência; FEBRACE (São Paulo); e na Mostratec (Rio Grande do Sul). Para poder viajar apresentando seu projeto pelo Brasil, Myllena não recebe nenhum tipo de apoio de sua escola ou de sua comunidade. Contando apenas com os esforços próprios, o projeto ganha a visibilidade devida e, ela e Gabriel são selecionados para participar da edição de 2017 da Intel ISEF com todas as despesas pagas. Lá, cineastas americanos tiveram grande interesse pela história de Myllena, uma vez que ela apresentava um dos projetos de destaque na feira e não sabia falar inglês.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('myllenacristyna', 'Estreia no documentário da National Geographic', 'Após voltar ao Brasil, cineastas americanos que a conheceram na Intel ISEF convidam-na para ser uma das estrelas de um documentário intitulado “Science Fair”, que buscava mostrar a realidade dos estudantes participantes da Intel ISEF. Assim, uma equipe de cineastas viaja até Iracema para realizar as filmagens, que mais tarde seriam compradas pela National Geographic. Myllena também inicia outra pesquisa científica, um método de reciclagem do isopor, transformando-o em um material capaz de impedir o vazamento de petróleo no mar. Com esse projeto, ela estabelece como meta ir pela segunda vez para a Intel ISEF. Porém, Myllena já havia se formado no ensino médio e um dos critérios de participação era estar ainda no ensino secundário. Então, ela entra em um curso técnico no IFCE (Campus Limoeiro do Norte) para ser capaz de se candidatar novamente. Após muito esforço, ela ganha o primeiro lugar de projetos da área de biológicas na feira da FEBRACE, premiação que a classificava como uma das participantes da edição de 2018 da Intel ISEF.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('myllenacristyna', 'Fama internacional', 'Ainda em 2018, Myllena é convidada para retornar a Hollywood, nos Estados Unidos, para o lançamento do filme em que estreou. Ela passa uma semana convivendo com pessoas de alta influência e sendo recebida nos eventos como uma estrela de cinema. Em 2019, ela é convidada para ir pela terceira vez ao Intel ISEF, dessa vez como representante do National Geographic. Devido à fama do documentário nos Estados Unidos, Mylenna recebe uma bolsa completa para estudar inglês em uma escola em Los Angeles.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('myllenacristyna', 'Hoje', 'Myllena continua estudando inglês e recebe uma bolsa na Arizona State University, onde irá estudar Jornalismo. Seu maior sonho é tornar-se uma jornalista investigativa e com isso contribuir para a divulgação do conhecimento científico.');

# Deborah Alves


INSERT INTO exemploBasicInfo (exemploID, firstName,lastName,placeOfOrigin,tags,briefing,podcastLink,imageLink,insertionDate)
    VALUES ('deborahalves', 'Deborah', 'Alves', 'São Paulo - SP', 'Tecnologia|Negócios', 'Deborah Alves é uma jovem empreendedora formada pela Universidade de Harvard e co-fundadora da BRASA, a maior associação brasileira de estudantes no exterior. Em seu ensino médio, ela foi medalhista de várias olimpíadas internacionais de matemática, como a International Mathematical Olympiad (IMO) e a Romanian Master of Mathematics (RMM). Atualmente, Deborah é co-fundadora e CTO da Cuidas, uma startup que conecta empresas com médicos de família para atendimentos no próprio local de trabalho.','https://castbox.fm/app/castbox/player/id2209666/id176976930?v=8.11.2&autoplay=0&hide_list=1','https://exempl.io/images/DeborahAlves.jpeg', '2019-10-07');

INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('deborahalves', 'Infância', 'Nascida em São Paulo - SP, Deborah demonstra desde cedo o seu interesse pela área de tecnologia e matemática. Com apenas 10 anos, Deborah decide estudar apostilas de um curso de HTML que sua mãe fazia e começar a programar blogs e sites em seu tempo livre. Para ela, esse foi o primeiro momento que começou a se interessar pela área de computação.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('deborahalves', 'Primeira Olímpiada', 'Com apenas 11 anos, Deborah passa a se preparar para as competições científicas. Um ano depois, ela consegue a sua primeira medalha de bronze na Olimpíada Brasileira de Matemática (OBM).');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('deborahalves', 'Primeiro ano', 'Em 2008, Deborah recebe uma bolsa de estudos para iniciar o ensino médio no Colégio Etapa. Em seu primeiro ano, ela participa de várias atividades extracurriculares, como aulas de jogos, inglês e filosofia. Aos finais de semana, Deborah atua voluntária no projeto Vontade Olímpica de Aprender (VOA), em que oferecia aulas de matemática, astronomia, informática e outras disciplinas para alunos da rede pública.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('deborahalves', 'Medalhista internacional', 'No seu segundo e terceiro ano, o amor de Deborah pela matemática rende-lhe várias premiações. Assim, recebe uma medalha de prata na Olimpíada de Matemática do Cone Sul, medalha de bronze na Romanian Masters of Mathematics (RMM) e menção honrosa na Olimpíada Internacional de Matemática (IMO).');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('deborahalves', 'Application corrido', 'Por conta do seu grande foco nas competições internacionais, Deborah só consegue iniciar a sua aplicação para as universidades americanas em Outubro – apenas dois meses antes do prazo de entrega. Assim, restringe sua lista de faculdades para cinco escolhas e esforça-se muito na escrita das redações.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('deborahalves', 'Mais medalhas', 'Depois de enviar o application, ela continua se dedicando às olimpíadas internacionais. Assim, consegue duas medalhas de bronze: uma na Olimpíada Internacional de Matemática (IMO) e outra na Romanian Masters of Mathematics (RMM)');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('deborahalves', 'Aceita em Harvard', 'Em 2011, Deborah recebe a notícia de que foi aprovada em quatro das cinco universidades que aplicou: Harvard, Yale, Columbia e MIT (sendo apenas rejeitada em Princeton). Então, ela opta por Harvard, onde passa a estudar Ciências da Computação e Matemática.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('deborahalves', 'BSCUE', 'Movida pelo desejo de ajudar outros brasileiros, ela participa da criação do The BRASA Student Community for Undergraduate Education (BSCUE). Este é um grupo no Facebook, que reúne mais de vinte mil membros, para trocar informações sobre o processo de admissão de universidades no exterior.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('deborahalves', 'BRASA', 'Um ano antes de terminar a graduação, Deborah é aceita em um programa de estágio da startup Quora no Vale do Silício em 2014. Nessa mesma época, ela também co-funda a Associação de Estudantes Brasileiros no Exterior (BRASA), a maior associação brasileira de estudantes no exterior.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('deborahalves', 'Brazil Conference', 'Em 2015, ela ajuda a fundar o Brazil Conference at Harvard & MIT, uma conferência anual que tem como missão promover o encontro com líderes e representantes da diversidade do Brasil.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('deborahalves', 'Cuidas', 'Em 2017, Deborah decide largar o seu emprego no Vale do Silício para empreender no Brasil. Assim, ela co-funda a Cuidas, uma startup que conecta empresas com médicos de família para atendimentos no próprio local de trabalho. Atualmente, ela atua como Chefe de Tecnologia e carrega o sonho grande de ver a sua empresa decolar.');

# Guilherme David


INSERT INTO exemploBasicInfo (exemploID, firstName,lastName,placeOfOrigin,tags,briefing,podcastLink,imageLink,insertionDate)
    VALUES ('guilhermedavid', 'Guilherme', 'David', 'Cubatão - SP', 'Ciências|Causas Sociais', 'Guilherme David é um jovem cubatense de 20 anos de idade. É co-fundador da exemplio e do OrgulhoFederal. Por meio de uma doação de livros didáticos de um professor de educação Física, ele passou a estudar química por conta própria e a se apaixonar por ciências. Tendo sempre estudado em escolas públicas, Guilherme desenvolveu diversas iniciativas para aprimorar a comunidade à sua volta. O seu maior sonho é ampliar o acesso à educação holística aos estudantes de todo o Brasil.','https://castbox.fm/app/castbox/player/id2209666/id187554028?v=8.11.2&autoplay=0&hide_list=1','https://exempl.io/images/GuilhermeDavid.jpg', '2019-10-08');

INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'Infância no Vale da Morte', 'Em 1999, Guilherme nasce no município de Santos, no litoral paulista. No entanto, passa a viver em uma cidade vizinha chamada Cubatão. Devido à intensa atividade industrial, Cubatão era considerada pela ONU a cidade mais poluída do mundo nos anos 80. Por muito tempo, este município foi conhecido como “Vale da morte”.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'Usina Henry Borden', 'Em 2004, Guilherme inicia o seu ensino fundamental na escola municipal “Usina Henry Borden”, em uma região dentro da Mata Atlântica no pé da Serra do Mar.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'Céu Azul', 'Quando criança, Guilherme adorava perturbar a sua mãe com perguntas sobre tudo (como o porquê do céu ser azul e a terra ser redonda). Quando a sua mãe não sabia alguma resposta, respondia-lhe que quando ele fosse mais velho iria entender. Inconformado, ele passa a fazer perguntas no Yahoo Respostas. Assim, passou a desenvolver o interesse pela ciência.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'Doação de livros', 'Por não ser bom em futebol, ele passa a ser colocado no banco de reservas nas aulas de educação Física. Para aproveitar o tempo livre, ele passa a ler livros sobre filosofia e ciências. Então, começa a se aproximar de seu professor e discutir sobre assuntos complexos. Certo dia, o seu professor decide doar livros didáticos governamentais de ensino médio que seriam jogados no lixo. Assim, Guilherme passa a se apaixonar por Química e decide estudar toda a matéria em menos de um ano.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'Instituto Federal', 'No ano de 2015, Guilherme é aprovado no Instituto Federal de São Paulo - Campus Cubatão. Ele conta que o seu processo de adaptação foi díficil, mas que eventualmente conseguiu superar. Logo no seu primeiro ano, ele passa a ser um dos poucos alunos a se engajar com olímpiadas científicas.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'Assalto epifânico', 'No seu segundo ano, Guilherme consegue ser aprovado para diversas finais das Olímpiadas Científicas. Assim, ele recebe a proposta de uma bolsa integral em um prestigiado colégio privado da sua região com uma vaga garantida na turma dos melhores alunos e uma participação no Torneio Internacional de Física. Porém, após voltar de uma reunião neste colégio e ter sido assaltado em um ônibus lotado, ele tem uma epifania. Ele conta que este evento o fez refletir sobre a “condição compartilhada” nas comunidades à sua volta. Assim, Guilherme decide rejeitar a bolsa e criar um curso avançado de física para os alunos de seu colégio.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'Grêmio', 'Depois de uma campanha criativa em 2017, Guilherme é eleito para o Grêmio estudantil com votação recorde: 82% dos votos. Ele conta que essa foi a atividade que mais sentiu orgulho de ter feito no seu ensino médio.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'Preparatório Avançado de Física', 'Por causa do assalto, Guilherme inicia um curso gratuito de Física, chamado de “Preparatório Avançado de Física”, para dezenas alunos que tinham a pretensão de serem aceitos em universidades seletivas ou conquistarem medalhas em olímpiadas científicas.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'OrgulhoFederal', 'Ao ver a mudança acontecendo em nível local, Guilherme decide dar um passo além. Assim, funda o OrgulhoFederal, uma organização estudantil que dá visibilidade a estudantes de institutos federais de todo o Brasil.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'Primeiras Medalhas', 'Em 2017, Guilherme também é premiado em ouro na olímpiada de Física das Escolas Públicas e da Olímpiada Brasileira de Astronomia.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'LaunchX', 'Um ano depois, Guilherme é aceito no LaunchX, um programa de empreendedorismo com duração de um mês, no Instituto de tecnologia de Massachussets (MIT).');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'LALA', 'Em 2019, Guilherme é aceito no Latin American Leadership Academy (LALA). Junto com outros participantes, ele co-funda a exemplio. Apaixonado pelo programa, Guilherme é aceito para atuar como voluntário de Staff na sexta edição do programa em São Paulo.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('guilhermedavid', 'Hoje', 'Atualmente, o seu maior sonho é ampliar o acesso a uma educação ativa aos estudantes de todo o Brasil. Para isso, atua como chefe de produto na exemplio e almeja ver o crescimento expressivo do projeto.');


# Augusta Saraiva


INSERT INTO exemploBasicInfo (exemploID, firstName,lastName,placeOfOrigin,tags,briefing,podcastLink,imageLink,insertionDate)
    VALUES ('augustasaraiva', 'Augusta', 'Saraiva', 'Rio Grande - RS', 'Política|Educação', 'Augusta Saraiva tem 21 anos e é nascida na cidade de Rio Grande, no Rio Grande do Sul. Ela estudou a vida inteira em escolas pública. Recebeu premiações em Olimpíadas, participou do Grêmio Estudantil durante o Ensino Médio, fez intercâmbio nos Estados Unidos e na Argentina, e foi aceita para estudar Jornalismo e Relações Internacionais na Northwestern University, nos Estados Unidos.', 'https://castbox.fm/app/castbox/player/id2209666/id197869542?v=8.11.2&autoplay=0&hide_list=1', 'https://exempl.io/images/AugustaSaraiva.jpeg', '2019-10-09');

INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('augustasaraiva', 'Origem', 'Augusta nasceu na cidade de Rio Grande – RS, uma cidade pequena de 200 mil habitantes. A mãe dela era contadora e o pai era eletricista. Além disso, o pai também tinha uma locadora de filmes, o que ofereceu a Augusta o acesso tanto a filmes de Hollywood, quanto filmes nacionais, em que podia aprender sobre a cultura do seu e de outros páises. Adorava escrever e amava ler.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('augustasaraiva', 'Ensino Fundamental', 'Augusta sempre estudou em escola pública. Ela participou de algumas olimpíadas, como de matemática e de história. No sexto ano, ganhou uma menção honrosa na OBMEP (Olimpíada Brasileira de Matemática das Escolas Públicas). Essa olimpíada foi a primeira oportunidade que Augusta teve de obter mais mobilidade acadêmica. Ou seja, ir além do solicitado em sala de aula. No ano seguinte, Augusta ganhou uma medalha. Devido a isso, foi convidada para participar do PIC OBMEP e passou a receber uma bolsa de R$ 100,00 por mês para estudar matemática. Embora fossem necessárias viagens para outras cidades e os custos das passagens ultrapassasse o que ela recebia, ainda assim Augusta reconhecia tal bolsa como um incentivo para estudar matemática.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('augustasaraiva', 'Blogs', 'Em seu ensino fundamental, Augusta passou a criar blogs. Utilizava HTML (HyperText Markup Language) e escrevia textos sobre os mais diversos assuntos. Fazia colunas de opinião, postagens sobre maquiagem, viagens, dentre outros tópicos. Naquela época, Augusta utilizava o Blogspot.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('augustasaraiva', 'Ensino Médio', 'Augusta conseguiu ser aprovada para estudar no Instituto Federal do Rio Grande do Sul, no câmpus Rio Grande, onde realizaria seu Ensino Médio com um curso Técnico Integrado em Informática. Ela continuou participando de olimpíadas de matemática até o último ano do ensino médio. No IFRS ela também teve a oportunidade de praticar esportes, como vôlei. No primeiro ano, trabalhou num projeto de pesquisa a respeito de como foi a situação do IFRS na época da ditadura. Ainda durante o ensino médio, ela também trabalhou na Justiça Federal por 2 anos. Embora gostasse de Direito, ela não se via trabalhando nessa área. Segundo ela, durante seu Ensino Médio, “tentou fazer um pouco de tudo e tudo ao mesmo tempo”, o que a mostrou as mais diversas possibilidades do que poderia fazer no futuro.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('augustasaraiva', 'Grêmio Estudantil', 'Augusta também trabalhou no Grêmio Estudantil, onde atuou com a parte política. Começou como Diretora de Comunicação, depois foi Secretária, Vice-Presidente e também Presidente do Grêmio. Durante seus anos de atuação, o Grêmio conseguiu restaurar um programa de bolsas na Escola, realizou campanhas do agasalho e de arrecadação de alimentos, fez parcerias com professores para oferecer bolsas a alunos que se destacavam em disciplinas, dentre outras atividades.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('augustasaraiva', 'Jovens Embaixadores', 'Augusta se inscreveu no programa “Jovens Embaixadores”. Ela foi aceita e pôde participar como representante do Rio Grande do Sul. Por meio desse programa, Augusta fez um intercâmbio nos Estados Unidos.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('augustasaraiva', 'Do Blog ao Youtube', 'Augusta manteve seu blog até o penúltimo ano do ensino médio, quando realizou uma transição para um canal do Youtube. Dentre alguns dos vídeos postados por ela houve alguns sobre aprender inglês, outro sobre o ACT, um dos principais exames de admissões universitárias nos Estados Unidos. Outro vídeo também publicado foi a respeito de como ela conseguiu realizar um intercâmbio com tudo pago.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('augustasaraiva', 'Buenos Aires', 'No último ano do Ensino Médio Augusta ganhou uma bolsa de um ano ano para fazer Intercâmbio na Argentina. Ela não falava espanhol, e precisou, portanto, estudar Espanhol todos os dias. Conhecer a cultura do país despertou ainda mais o interesse dela pela cultura Latino-Americana.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('augustasaraiva', 'Oportunidades Acadêmicas', 'Augusta conheceu o programa Oportunidades Acadêmicas por meio do Jovens Embaixadores e candidatou-se ao programa. Ela conseguiu ser selecionada, e passou a receber dicas e suporte, realizando testes online, recebendo orientações de mentores, obtendo auxílio com o pagamento de provas e viagens, tudo isso para se preparar para poder estudar fora. Após participar do programa por aproximadamente um ano, ao final desse período ela se candidatou à Northwestern University. Augusta fez sua candidatura em novembro e, em dezembro, foi aprovada para o curso de Jornalismo e Relações Internacionais, na universidade em que tanto queria.');
INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) 
	VALUES ('augustasaraiva', 'Atualmente', 'Augusta hoje está trabalhando em Washington D.C., onde todos os seus colegas de trabalho falam espanhol, e também está cursando Jornalismo e Relações Internacionais na Northwestern University, nos Estados Unidos.');
