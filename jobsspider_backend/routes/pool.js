const mysql = require('mysql')
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'jobsspider',
    multipleSatements: true,//joins aur multiple query lagane k liye use krte hai
    connectionLimit: 100
})
module.exports = pool