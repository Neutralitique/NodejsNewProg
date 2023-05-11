const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/usersRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000.");
});