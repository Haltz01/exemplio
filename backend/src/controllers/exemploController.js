const mysql = require('mysql');
const db = require('../sqlConnection');
const express = require('express');

module.exports = {

    /**
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    async getFullList(req, res) {
        let sqlCommand1 = 'select * from exemploBasicInfo INNER JOIN exemploTimelineInfo ON exemploBasicInfo.exemploID = exemploTimelineInfo.exemploID_FKEY;';

        await db.query(sqlCommand1, (error, result) => {
            if (error) {
                console.log("Error on query execution: " + error);
                throw error;
            }
    
            return res.json(result);
        });
    },

    /**
    * 
    * @param {express.Request} req 
    * @param {express.Response} res 
    */
    async getSpecificExemplo(req, res) {
        const exemploID = req.params.exemploID;
        let sqlQuery = "select * from exemploBasicInfo INNER JOIN exemploTimelineInfo ON exemploBasicInfo.exemploID = exemploTimelineInfo.exemploID_FKEY AND exemploBasicInfo.exemploID = ?";
        let insertOnQuery = [exemploID];
    
        sqlQuery = mysql.format(sqlQuery, insertOnQuery); // evitando SQL  Injection :)
    
        await db.query(sqlQuery, (error, queryResult) => {
            if (error) {
                console.log("Error on query execution: " + error);
                throw error;
            }
            
            if (queryResult.length != 0) {
                queryResult = JSON.parse(JSON.stringify(queryResult))[0];
    
                queryResult["tags"] = queryResult["tags"].split('|');
                queryResult["eventDescriptionList"] = queryResult["eventDescriptionList"].split('|');
                queryResult["eventDateList"] = queryResult["eventDateList"].split('|');
                queryResult["eventTitleList"] = queryResult["eventTitleList"].split('|');
            }
            else {
                queryResult = { "message" : "Nenhum exemplo encontrado"};
            }
    
            return res.json(queryResult);
        });
    },

    /**
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    async getBasicList(req, res) {
        let sqlQuery = "select exemploID, firstName, lastName, placeOfOrigin, tags, imageLink, insertionDate from exemploBasicInfo order by insertionDate desc  ;";
    
        await db.query(sqlQuery, (error, queryResult) => {
            if (error) {
                console.log("Error on query execution: " + error);
                throw error;
            }
    
            if (queryResult.length == 0)
                queryResult = { "message" : "Não há exemplos para serem exibidos aqui, desculpe :(" }
            else {
                queryResult.forEach((exemploData) => {
                    exemploData["tags"] = exemploData["tags"].split('|');
                });
            }
    
            res.json(queryResult);
        });
    }
};