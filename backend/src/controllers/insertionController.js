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
    const exemplo = 
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

    let sqlCommand1 = 'INSERT INTO exemploBasicInfo values (?,?,?,?,?,?,?,?,?);';
    db.query(sqlCommand1, [...exemplo] ,(error, result) => {
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