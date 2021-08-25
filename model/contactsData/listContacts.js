const fs = require("fs/promises");
const { contactsPath } = require("./options");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);

    const dataParse = JSON.parse(data);

    return dataParse;
  } catch (error) {
    throw error;
  }
};

module.exports = listContacts;
