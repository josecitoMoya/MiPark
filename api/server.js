const express = require("express");
const config = require("./config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes");
const Reserves = require("./models/Reserves");
const Users = require("./models/Users.js");
const Parkings = require("./models/Parkings");
const db = require("./db");

//CONSTANTES
const PORT = config.PORT;
const app = express();

//MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  console.log("db connected");
  app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
  });
});
