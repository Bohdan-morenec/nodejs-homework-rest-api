const joi = require("joi");

const JoiPatchContacts = joi.object({
  favorite: joi.boolean().required(),
});

module.exports = JoiPatchContacts;
