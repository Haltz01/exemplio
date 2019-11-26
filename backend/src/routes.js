const express = require('express');
const router = express.Router();

const readingController = require('./controllers/readingController');
const insertionController = require('./controllers/insertionController');

router.post('/exemplos/insert/new/basicInfo', insertionController.newExemplo);
router.put('/exemplos/insert/:exemploID/timelineItem', insertionController.addTimelineInfo);

// https://nemethgergely.com/async-function-best-practices/ LER ISSO!!

// ---------- PEGANDO LISTA DE EXEMPLOS COM TODAS (BASIC + TIMELINE) AS INFORMAÇÕES DELES ----------
router.get('/exemplos/fullList', readingController.getFullList);

// ---------- PEGANDO LISTA DE EXEMPLOS (BASIC apenas) ----------
router.get('/exemplos/basicList', readingController.getBasicList);

// ---------- PEGANDO INFORMAÇÕES DE UM EXEMPLOS ESPECÍFICO ----------
router.get('/exemplos/:exemploID', readingController.getSpecificExemplo);

// If the table has a primary key with auto_increment, the value of that will be returned in the results.insertId value: (error, result, fields) => {}

// let tag = req.query.exemploID; // itens da 'query' vem após ? na url (ex.: param1=Teste => req.query.param1 = Teste)

// ---------- INSERINDO NO BANCO DE DADOS OS DADOS DE UM NOVO EXEMPLO ----------
// router.post(); TO DO!


module.exports = router;