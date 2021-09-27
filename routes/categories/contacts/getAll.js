const { contact } = require("../../../models");

const getAll = async (req, res) => {
  const { page = 1, limit = 5, favorite = "" } = req.query;

  const skip = (page - 1) * limit;

  if (favorite === "true") {
    const contacts = await contact.find({ favorite }, "", {
      skip,
      limit: +limit,
    });

    return res.status(200).json({
      status: "success",
      code: 200,
      result: {
        data: contacts,
      },
    });
  }

  const contacts = await contact.find({}, "", {
    skip,
    limit: +limit,
  });

  res.status(200).json({
    status: "success",
    code: 200,
    result: {
      data: contacts,
    },
  });
};

module.exports = getAll;
