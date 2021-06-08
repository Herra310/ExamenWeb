const mysql = require('mysql');

const objectConnection = {
    "host": "localhost",
    "port": "3306",
    "user": "root",
    "password": "Hr123456",
    "database": "videojuegos"
}

// Crear conexion
const myConn = mysql.createConnection(objectConnection);

//Conectar
myConn.connect((err) => {
    if (err) {
        console.log("Error en la Base de datos: ", err);
    } else {
        console.log("Base de datos conectada!")
    }
});

module.exports = myConn;