const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "learning",
    host: "localhost",
    port: 8008,
    database: "LCT-userhub"
})



module.exports = pool 