const { BadRequest } = require("http-errors");
const jwt = require("jsonwebtoken");

const { User } = require("../../../models");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !user.verificationPassword(password)) {
    throw new BadRequest("wrong password or email");
  }

  if (user.verificationToken) {
    throw new BadRequest("please go through verification");
  }

  const payload = {
    id: user._id,
  };

  const { SECRET_KEY } = process.env;

  const token = jwt.sign(payload, SECRET_KEY);

  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    token,
  });
};

module.exports = login;
