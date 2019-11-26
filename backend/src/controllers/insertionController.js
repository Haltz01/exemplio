const mysql = require('mysql');
const db = require('../sqlConnection');
const express = require('express');

/**
 * @typedef {Request} express.Request 
 * @typedef {Request} express.Response
 * @param {Request} req 
 * @param {Response} res 
 */
async function newExemplo(req, res) {
    //TODO: tratar envio de imagens
    const sqlData = 
    [
        req.body.id,
        req.body.firstname,
        req.body.lastname,
        req.body.placeoforigin,
        req.body.tags,
        req.body.briefing,
        req.body.podcastlink,
        req.body.imagelink,
        req.body.insertiondate
    ];

    //TODO: check if pass is 221a4cf3f48684ce0cd886d04820d25259e6f066fbb087cb323e9a0f60dc9897 sha256


    let sqlCommand1 = 'INSERT INTO exemploBasicInfo values (?,?,?,?,?,?,?,?,?);';
    db.query(sqlCommand1, sqlData ,(error, result) => {
        if (error) {
            if (error.code == "ER_DUP_ENTRY") {
                return res.status(400).json({errorCode: "ER_DUP_ENTRY", errorMessage: "duplicated entry"});
            }
            console.log("Error on query execution: " + error.code);
            return res.status(400).json({errorMessage:"invalid insertion"});
        }
        
        return res.json({message:"ok"});
    });
        
}

/**
 * @param {Request} req 
 * @param {Response} res 
 */
function addTimelineInfo(req, res) {
    //TODO: rebake DB
}

module.exports = {
    newExemplo,
    addTimelineInfo
};