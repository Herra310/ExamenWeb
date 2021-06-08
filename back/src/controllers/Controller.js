const connection = require('../config/connection');

function index(req, res) {
    
    if (connection) {
        let sql = "SELECT * FROM juegos";
        connection.query(sql, (err, juegos) => {
            if (err) {
                res.json(err);
            } else {
                console.log(juegos);
                res.json(juegos);
            }
        });
    }
}

function show(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = `SELECT * FROM juegos WHERE id = ${connection.escape(id)}`;
        connection.query(sql, (err, juegos) => {
            if (err) {
                console.log(err);
            } else {
                var mensaje1 = "";
                if (juegos === undefined || juegos.length == 0)
                    mensaje1 = "Juego no encontrado";

                res.json({ data: juegos, mensaje: mensaje1 });
            }
        })
    }

}


function destroy(req, res) {
    if (connection) {
        const { id } = req.params;
        let sql = "DELETE FROM juegos WHERE id = ?";
        connection.query(sql, [id], (err, data) => {
            if (err) {
                res.json(err);
            } else {
                let mensaje = "";
                if (data.affectedRows === 0) {
                    mensaje = "juegos no encontrado";
                } else {
                    mensaje = "juego eliminado con éxito";
                }

                res.json({ error: false, data, mensaje });
            }
        })
    }
}

module.exports = {
   index,
   show,
   destroy,
}