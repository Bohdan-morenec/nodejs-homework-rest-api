const { BadRequest } = require("http-errors");

const { User } = require("../../../models");

const { sendMessageVerify } = require("../../../utils");

const reDispatchVerifyToken = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new BadRequest("missing required field email");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new BadRequest("missing required field email");
  }

  if (user.verify) {
    console.log(user.verify);
    throw new BadRequest("Verification has already been passed");
  }

  sendMessageVerify({
    to: email,
    subject: "verify",
    html: `<p>please confirm account verification<p>
    <a href=http://localhost:3000/api/auth/verify/${user.verificationToken}>click here</a>`,
  });

  res.status(200).json({
    Status: 200,
    message: "Verification email sent",
  });
};

module.exports = reDispatchVerifyToken;
