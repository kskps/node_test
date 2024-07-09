const sql = require('mysql')


const pool = sql.createPool({
    host: '172.20.6.22',
    user: 'dev',
    password: 'Kggroup@123',
    database: 'internal_sso_db',
    connectionLimit: 10
})

module.exports = pool;