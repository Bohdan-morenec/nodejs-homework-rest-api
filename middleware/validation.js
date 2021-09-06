const { BadRequest } = require("http-errors");

const medivarValidation = (schema) => {
  validation = (req, _, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      throw new BadRequest();
    }
    next();
  };

  return validation;
};

module.exports = medivarValidation;
