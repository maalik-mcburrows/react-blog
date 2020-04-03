require('dotenv').config();

const pgp = require('pg-promise')({
    query: function(e) {
        console.log('QUERY:', e.query);
    }
});

const options = {
    host: process.env['DB-HOST'],
    database: process.env['DB-NAME']
};

const db = pgp(options);

module.exports = db;