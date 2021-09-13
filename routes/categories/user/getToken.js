const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");

const { User } = require("../../../models");

const getToken = async (req, res) => {
  const [bearer, token] = req.headers.authorization.split(" ");

  if (bearer !== "Bearer") {
    throw new Unauthorized();
  }

  const { SECRET_KEY } = process.env;

  const { id } = jwt.verify(token, SECRET_KEY);

  const user = await User.findById(id);
  if (!user) {
    throw new Unauthorized();
  }

  res.status(202).json({
    result: user,
    status: "success",
    code: 200,
  });
};

module.exports = getToken;
