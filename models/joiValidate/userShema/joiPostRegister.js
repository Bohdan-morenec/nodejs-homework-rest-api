const joi = require("joi");

const joiPostRegister = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

module.exports = joiPostRegister;
