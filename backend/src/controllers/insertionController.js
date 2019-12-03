const mysql = require('mysql');
const db = require('../sqlConnection');
const express = require('express');

const crypto = require('crypto');
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

    const hash = crypto.createHash('sha256');

    //TODO: check if pass is 221a4cf3f48684ce0cd886d04820d25259e6f066fbb087cb323e9a0f60dc9897 sha256

    if (!req.body.passwd) return res.status(403).send({errorCode: "ER_UNAUTHORIZED"});

    if (hash.update(req.body.passwd).digest('hex') != '221a4cf3f48684ce0cd886d04820d25259e6f066fbb087cb323e9a0f60dc9897')
        return res.status(403).send({errorCode: "ER_UNAUTHORIZED"});

    let sqlCommand1 = 'INSERT INTO exemploBasicInfo values (?,?,?,?,?,?,?,?,?);';
    db.query(sqlCommand1, sqlData ,(error, result) => {
        if (error) {
            if (error.code == "ER_DUP_ENTRY") {
                return res.status(400).json({errorCode: "ER_DUP_ENTRY"});
            }
            console.log(": " + error.code);
            //TODO: report this error someway when in production
            return res.status(400).json({errorCode:"ER_UNKNOWN"});
        }
        
        return res.json({message:"ok"});
    });
        
}

/**
 * @typedef {Request} express.Request 
 * @typedef {Request} express.Response
 * @param {Request} req 
 * @param {Response} res 
 */
function addTimelineInfo(req, res) {
    const sqlData = 
    [
        req.body.exemploID_FKEY,
        req.body.eventTitle,
        req.body.eventDescription
    ];

    const sqlCommand1 = 'INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) VALUES(?, ?, ?);';
    db.query(sqlCommand1, sqlData, (error, result) => {
        if (error) {
            console.log("Error on query execution: " + error.code);
            return res.status(400).json({message:"you've probably given incorrect parameters"})
        }

        //TODO: return inserted item id
        return res.json({ok:true, /*itemID: JSON.parse(JSON.stringify(result))[0]["timelineItemId"]*/});
    })


}

module.exports = {
    newExemplo,
    addTimelineInfo
};