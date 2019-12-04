const db = require('../sqlConnection');

function awaitableDbQuery(sqlCommand, values) {
    return new Promise((res, rej) => {
        db.query(sqlCommand, values, (err, results, fields)=> {
            if (err) rej(err);
            res({results, fields});
        })
    })
}

module.exports = {
    awaitableDbQuery,
}