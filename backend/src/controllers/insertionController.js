const db = require('../sqlConnection');
const crypto = require('crypto');
const {awaitableDbQuery} = require('../services/awaitWrappers.js');
const {saveImage} = require('../services/imageHandler.js');

/**
 * @typedef {Request} express.Request 
 * @typedef {Request} express.Response
 * @param {Request} req 
 * @param {Response} res 
 */
async function newExemplo(req, res) {

    const imageLink = await saveImage(req.body.id, req.body.base64image.replace(/^data:image\/png;base64,/,""),);

    //TODO: tratar envio de imagens
    const sqlData1 = 
    [
        req.body.id,
        req.body.firstname,
        req.body.lastname,
        req.body.placeoforigin,
        req.body.tags,
        req.body.briefing,
        req.body.podcastlink,
        imageLink,
        req.body.insertiondate
    ];
    
    //TODO: Use Auth0 for credentials

    // CREDENTIALS HANDLING
    const hash = crypto.createHash('sha256');
    if (!req.body.passwd) return res.status(403).send({errorCode: "ER_UNAUTHORIZED"});
    if (hash.update(req.body.passwd).digest('hex') != '221a4cf3f48684ce0cd886d04820d25259e6f066fbb087cb323e9a0f60dc9897')
        return res.status(403).send({errorCode: "ER_UNAUTHORIZED"});

    // EXEMPLO BASIC INFO INSERTION

    const sqlCommand1 = 'INSERT INTO exemploBasicInfo values (?,?,?,?,?,?,?,?,?);';
    try {
        await awaitableDbQuery(sqlCommand1, sqlData1);
    }
    catch (error){
        if (error.code == "ER_DUP_ENTRY") {
            return res.status(400).json({errorCode: "ER_DUP_ENTRY"});
        }
        console.log("@newExemplo: Insertion SQL error: " + error.code);
        //TODO: report this error someway when in production (avoid showing to users)
        return res.status(400).json({errorCode:"ER_UNKNOWN"});
    }
        
    // IF THERE IS ANY, INSERT ALL TIMELINE INFO ASWELL

    if (!req.body.timelineinfo || !(Symbol.iterator in req.body.timelineinfo) || req.body.timelineinfo.length <= 0) return res.json({message: 'OK, but no timelineinfo provided, ignoring'});

    const sqlCommand2 = 'INSERT INTO exemploTimelineItem (exemploID_FKEY, eventTitle, eventDescription) values (?, ?, ?)';

    for (let timelineItem of req.body.timelineinfo) {
        if (!timelineItem.title || !timelineItem.description)
            return res.status(400).json({errorCode: "ER_INVALID_VALUE", message: 'Why are you sending your own requisitions to my server? this is illegal you know'})

        try {
            await awaitableDbQuery(sqlCommand2, [req.body.id, timelineItem.title, timelineItem.description]);
        } catch (error) {
            console.log('@newExemplo: ');
            console.log(error);
            return res.status(500).json({errorCode: 'ER_UNKNOWN'});
        }
    }

    res.json({message: 'OK (basic + timelineinfo)'});      
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