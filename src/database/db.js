const Pool = require('pg').Pool

const db = new Pool({
    user: 'postgres',
    password: '12345',
    host: 'localhost',
    port: 5400,
    database: 'doe'
})

module.exports = db