const gravatar = require("gravatar");
const fs = require("fs/promises");
const path = require("path");

const { sendMessageVerify } = require("../../../utils");

const { Conflict } = require("http-errors");

const { User } = require("../../../models");

const userDir = path.join(__dirname, "../../../public/avatars");

const createAwatarFile = async (id) => {
  const ditPath = path.join(userDir, id.toString());
  await fs.mkdir(ditPath);
};

const register = async (req, res) => {
  const { email, password } = req.body;

  const avatarURL = gravatar.url(email, { s: "200", protocol: "https" });

  const checkUniqueness = await User.findOne({
    email,
  });

  if (checkUniqueness) {
    throw new Conflict("Already register");
  }

  const newUser = new User({ email, avatarURL });

  createAwatarFile(newUser._id);

  newUser.sethashPassword(password);

  newUser.setVeriFyToken();

  sendMessageVerify({
    to: email,
    subject: "verify",
    html: `<p>please confirm account verification<p>
    <a href=http://localhost:3000/api/auth/verify/${newUser.verifyToken}>click here</a>`,
  });

  await newUser.save();

  res.json({
    status: "success",
    code: 200,
    result: {
      data: newUser,
    },
  });
};

module.exports = register;
