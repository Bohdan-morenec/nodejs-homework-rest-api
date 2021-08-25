const data = require("../../../model/contactsData");

const contactId = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const contact = await data.getContactById(contactId);

    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      result: { data: contact },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = contactId;
