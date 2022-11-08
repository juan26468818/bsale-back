const mysql = require("mysql");

const mysqlConnection = mysql.createPool({
    connectionLimit: 5,
    host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
    user: "bsale_test",
    password: "bsale_test",
    database: "bsale_test"
});

// mysqlConnection.connect(function (err){
//     if(err){
//         console.error(err);
//         return
//     } else{
//         console.log("La base de datos está conectada.")
//     }
// });

module.exports = mysqlConnection;