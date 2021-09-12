const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");

const { User } = require("../models");

const tokenVerification = (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(" ");

    if (bearer !== "Bearer") {
      throw new Unauthorized();
    }
    console.log(1);
    const { SECRET_KEY } = process.env;

    const { id } = jwt.verify(token, SECRET_KEY);

    const user = User.findById({ id });

    req.user = user;
  } catch (error) {
    throw new Unauthorized();
  }
  next();
};

module.exports = tokenVerification;
