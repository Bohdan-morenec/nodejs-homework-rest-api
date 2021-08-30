const { contact } = require("../../../models");

const {
  contactsShema: { JoiPostContacts },
} = require("../../../validate");

const add = async (req, res, next) => {
  try {
    const { error } = JoiPostContacts.validate(req.body);

    if (error) {
      return res.status(400).json({
        result: {
          message: error.message,
        },
      });
    }

    const addContact = await contact.create(req.body);

    res.status(201).json({
      status: "success",
      code: "201",
      result: {
        data: addContact,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
