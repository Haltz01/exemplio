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

        try {
            await db.query(sqlCommand1, (error, result) => {
                if (error) {
                    console.log("@getFullList: Error on query execution: ", error);
                    return res.status(500).json({message: 'Internal Server Error'})
                }
                
                return res.json(result);
            });
        } catch (error) {
            console.error('@getFullList: Something really bad happened');
            console.error(error);
            return res.status(500).json({message: 'Internal Server Error'});
        }
    },

    /**
    * 
    * @param {express.Request} req 
    * @param {express.Response} res 
    */
    async getSpecificExemplo(req, res) {
        const exemploID = req.params.exemploID;
        let sqlQuery = "select * from exemploBasicInfo INNER JOIN exemploTimelineItem ON exemploBasicInfo.exemploID = exemploTimelineItem.exemploID_FKEY AND exemploBasicInfo.exemploID = ?";
        let insertOnQuery = [exemploID];
    
        sqlQuery = mysql.format(sqlQuery, insertOnQuery); // evitando SQL  Injection :)
    
        try {
            await db.query(sqlQuery, (error, queryResult) => {
                if (error) {
                    console.log("Error on query execution: " + error);
                    throw error;
                }
                
                let response = {
                    tags: [],
                    eventDescriptionList: [],
                    eventDateList: [],
                    eventTitleList: []
                };

                if (queryResult.length != 0) {
                    
                    let firstRow = JSON.parse(JSON.stringify(queryResult))[0]
                    response["firstName"] = firstRow["firstName"];
                    response["lastName"] = firstRow["lastName"];
                    response["placeOfOrigin"] = firstRow["placeOfOrigin"];
                    response["briefing"] = firstRow["briefing"];
                    response["podcastLink"] = firstRow["podcastLink"];
                    response["imageLink"] = firstRow["imageLink"];
                    response["insertionDate"] = firstRow["insertionDate"];
                    response["tags"] = firstRow["tags"].split('|');
                    for (let i = 0; i < queryResult.length; i++) {   
                        let currentRow = JSON.parse(JSON.stringify(queryResult))[i];
                    
                        response["eventDescriptionList"].push(currentRow["eventDescription"]);
                        response["eventTitleList"].push(currentRow["eventTitle"]);
                    }
                    return res.json(response);
                }
                else {
                    return res.status(404).json({message: "Nenhum exemplo encontrado"});
                }
            
            });
        } catch (error) {
            return res.status(500).json({message: 'Internal server error'});
        }
    },

    /**
     * 
     * @param {express.Request} req 
     * @param {express.Response} res 
     */
    async getBasicList(req, res) {
        let sqlQuery = "select exemploID, firstName, lastName, placeOfOrigin, tags, imageLink, insertionDate from exemploBasicInfo order by insertionDate desc, exemploID desc;";
    
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