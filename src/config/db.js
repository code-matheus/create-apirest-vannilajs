const { Pool } = require('pg');

const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'laxio',
    port: 5432,
});

module.exports = db;