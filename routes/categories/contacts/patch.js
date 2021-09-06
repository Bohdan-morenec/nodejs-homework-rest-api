const { NotFound } = require("http-errors");

const { contact } = require("../../../models");

const patch = async (req, res) => {
  const { contactId } = req.params;

  const updatesElement = await contact.findOneAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!updatesElement) {
    throw new NotFound();
  }

  res.status(200).json({
    status: "success",
    code: 200,
    result: {
      data: updatesElement,
    },
  });
};

module.exports = patch;
