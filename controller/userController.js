const connection =require("../config/db");

const getAllUsers = (req, res) => {
    connection.query("SELECT * FROM user", (err, rows) => {
        if (err) throw err;
      res.json(rows);
    });
  };

  const getUserById=(req,res)=>{
    connection.query("SELECT * FROM user WHERE id= ? ",[req.params.id], (err, rows) => {
        if (err) throw err;
      res.json(rows);
    });
  }

  const createUser=(req,res)=>{
    const payload=req.body
    connection.query("INSERT INTO user(Nom,Email,Password) VALUES (?,?,?) ",[payload.Nom,payload.Email,payload.Password], (err, rows) => {
        if (err) throw err;
        res.send(
            {
                statut:"OK",
                message:"Creation de l'utilisateur effectuee avec succes"
            }
        )
    });
}

  const updateUser=(req,res)=>{
    const payload=req.body
    connection.query("UPDATE user SET Nom = ?,Email=?,Password=? WHERE id =?"
    ,[payload.Nom,payload.Email,payload.Password,req.params.id], (err, rows) => {
        if (err) throw err;
        res.send(
            {
                statut:"OK",
                message:"Mise a jour de l'utilisateur effectuee avec succes"
            }
        )
    });
  }
  const deleteUser=(req,res)=>{
    connection.query("DELETE FROM user WHERE id= ? ",[req.params.id], (err, rows) => {
        if (err) throw err;
        res.send(
            {
                statut:"OK",
                message:"Suppression de l'utilisateur effectuee avec succes"
            }
        )
    });
  }

module.exports={getAllUsers,getUserById,createUser,updateUser,deleteUser}