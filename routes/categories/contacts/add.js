const { contact } = require("../../../models");

const {
  contactsShema: { JoiPostContacts },
} = require("../../../validate");

const add = async (req, res, next) => {
  try {
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
