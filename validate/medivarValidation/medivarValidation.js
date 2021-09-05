const medivarValidation = (schema) => {
  console.log(1);
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
  console.log(2);
  return validation;
};

module.exports = medivarValidation;
