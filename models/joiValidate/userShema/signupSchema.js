const joi = require("joi");

const signupSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
  owner: joi.string(),
  avatarURL: joi.string(),
});

module.exports = signupSchema;
