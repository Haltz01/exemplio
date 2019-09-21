const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// SCRIPT PARA INICIAR SERVIDOR: "yarn startServer": "nodemon src/server.js"

dotenv.config();
const app = express();

const exemploController = require('./controllers/exemploController');
const routes = require('./routes');
const db = require('./sqlConnection');

// STORING SAFE CREDENTIALS: https://stackoverflow.com/questions/32209972/hardcoded-mysql-user-and-password-in-node-js

// https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786

db.connect((error) => {
    (error) ? console.log("Error when trying to connect to DB: " + error) : console.log("****** CONNECTED TO DB ******");
})

// ---------- PEGANDO LISTA DE EXEMPLOS COM TODAS AS INFORMAÇÕES DELES ----------
routes.get('/getAllExemplos', exemploController.getAllExemplos);

// https://nemethgergely.com/async-function-best-practices/ LER ISSO!!

// ---------- PEGANDO INFORMAÇÕES DE UM EXEMPLOS ESPECÍFICO ----------
routes.get('/exemplos/:exemploID', exemploController.getSpecificExemplo);

// ---------- PEGANDO LISTA DE EXEMPLOS ----------
routes.get('/exemplosList', exemploController.getExemplosList);

// If the table has a primary key with auto_increment, the value of that will be returned in the results.insertId value: (error, result, fields) => {}

// TO DO: FUNÇÃO PARA PEGAR SOMENTE OS EXEMPLOS COM DETERMINADA CARACTERISTICA (data de inserção, tags...)!!
// let tag = req.query.exemploID; // itens da 'query' vem após ? na url (ex.: param1=Teste => req.query.param1 = Teste)

routes.get('/teste_inicial', (req, res) => {
    res.json({ message: "OK", status: 200});
});

app.use(cors()); 
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
