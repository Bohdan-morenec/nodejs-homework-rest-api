const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");

const { User } = require("../models");

const tokenVerification = async (req, _, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(" ");

    if (bearer !== "Bearer") {
      throw new Unauthorized();
    }

    const user = await User.findOne({ token });
    if (!user) {
      throw new Unauthorized();
    }

    req.user = user;
  } catch (error) {
    throw new Unauthorized();
  }

  next();
};

module.exports = tokenVerification;
