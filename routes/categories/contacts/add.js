const { contact } = require("../../../models");

const {
  contactsShema: { JoiPostContacts },
} = require("../../../validate");

const data = require("../../../model/contactsData");

const add = async (req, res, next) => {
  console.log(JoiPostContacts);
  try {
    const { error } = JoiPostContacts.validate(req.body);

    if (error) {
      return res.status(400).json({
        result: {
          message: error.message,
        },
      });
    }
    // const { name, phone, email } = req.body;

    // const addContact = await data.addContact(name, email, phone);

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
