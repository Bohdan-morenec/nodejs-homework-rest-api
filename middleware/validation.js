const medivarValidation = (schema) => {
  validation = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        result: {
          message: error.message,
        },
      });
    }
    next();
  };

  return validation;
};

module.exports = medivarValidation;
