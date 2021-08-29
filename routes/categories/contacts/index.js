const getAll = require("./getAll");
const byId = require("./byId");
const addContact = require("./add");
const updateContact = require("./update");
const patch = require("./patch");
const deleteContact = require("./delete");

module.exports = {
  getAll,
  byId,
  deleteContact,
  addContact,
  updateContact,
  patch,
};
