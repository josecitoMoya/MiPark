const express = require("express");
const config = require("./config");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const db = require("./db");

//CONSTANTES
const PORT = config.PORT;
const app = express();

//MIDLEWARES
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));

db.sync({ force: false }).then(() => {
  console.log("db connected");
  app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
  });
});
