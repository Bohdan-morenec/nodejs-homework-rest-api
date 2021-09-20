const joi = require('joi')

const JoiPostContacts = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  phone: joi.string().required(),
  favorite: joi.boolean().default(false),
})

module.exports = JoiPostContacts
