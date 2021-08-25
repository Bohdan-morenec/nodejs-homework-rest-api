const joi = require("joi");

const JoiPutContacts = joi.object({
  name: joi.string(),
  email: joi.string(),
  phone: joi.string(),
});

module.exports = JoiPutContacts;
