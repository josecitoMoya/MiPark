const validateToken = require("../utils/Token");

function validateAuth(req, res, next) {
  console.log("SOY LO QUE RECIBO DE PERSISTENCIA EN AUTH", res);
  const token = req.cookies;
  if (!token) return res.sendStatus(401);

  const { user } = new validateToken(token);
  if (!user) return res.sendStatus(401);

  req.user = user;
  // console.log("SOY EL TOKEN DE AUTH", req);

  next();
}

module.exports = { validateAuth };
