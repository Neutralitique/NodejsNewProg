const connection =require("../config/db");

const getAllUsers = (req, res) => {
    connection.query("SELECT * FROM user", (err, rows) => {
      if (err) throw err;
      res.json(rows);
    });
  };

module.exports={getAllUsers,}