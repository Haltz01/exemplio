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

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({errorCode: "ER_UNAUTHORIZED"});
    }
    console.error(err.stack)
    return res.status(500).send('Something broke!')
})

const httpServer = app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
    
    //Attempt to avoid nodemon's SIGTERM leaving zombie processes using port
    process.on('beforeExit', (l) => httpServer.close());
});

