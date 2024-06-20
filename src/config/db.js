const { Pool } = require('pg');

const db = new Pool ({
    user: 'user',
    host: 'localhost',
    database: 'db',
    password: 'psw',
    port: 5432,
});

module.exports = db;