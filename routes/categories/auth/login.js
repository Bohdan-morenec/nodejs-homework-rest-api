const { BadRequest } = require("http-errors");
const jwt = require("jsonwebtoken");

const { User } = require("../../../models");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !user.verificationPassword(password)) {
    throw new BadRequest("wrong password or email");
  }

  const payload = {
    id: user._id,
  };

  const { SECRET_KEY } = process.env;

  const token = jwt.sign(payload, SECRET_KEY);

  res.status(200).json({
    token,
  });
};

module.exports = login;
