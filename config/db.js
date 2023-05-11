const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "cournodejs",
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données : " + err.stack);
    return;
  }

  console.log("Connecté à la base de données.");
});

module.exports = connection;