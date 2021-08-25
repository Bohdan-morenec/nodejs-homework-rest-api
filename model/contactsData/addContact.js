const { v4: uuidv4 } = require("uuid");

const listContacts = require("./listContacts");
const { updateFile } = require("./options");

const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();

    const newConta = { name, email, phone, id: uuidv4() };

    contacts.push(newConta);

    updateFile(contacts);

    return newConta;
  } catch (error) {
    throw error;
  }
};

module.exports = addContact;
