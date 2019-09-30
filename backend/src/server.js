const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// SCRIPT PARA INICIAR SERVIDOR: "yarn startServer": "nodemon src/server.js"

dotenv.config();
const app = express();

const routes = require('./routes');
const db = require('./sqlConnection');

// STORING SAFE CREDENTIALS: https://stackoverflow.com/questions/32209972/hardcoded-mysql-user-and-password-in-node-js

// https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786

db.connect((error) => {
    if (error) console.log("Error when trying to connect to DB: " + error) 
    else console.log("****** CONNECTED TO DB ******");
})

app.use(cors()); 
app.use(express.json());
app.use(routes);

const httpServer = app.listen(3333, () => {
    console.log(`Server listening on port ${3333}`);
    
    //Attempt to avoid nodemon's SIGTERM leaving zombie processes using port
    process.on('beforeExit', (l) => httpServer.close());
});

