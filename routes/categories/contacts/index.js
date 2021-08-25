const getAll = require("./getAll");
const contactId = require("./byId");
const addContact = require("./add");
const updateContact = require("./update");
const deleteContact = require("./delete");

module.exports = {
  getAll,
  contactId,
  deleteContact,
  addContact,
  updateContact,
};
