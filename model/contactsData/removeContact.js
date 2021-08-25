const listContacts = require("./listContacts");
const { updateFile } = require("./options");

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();

    const idx = contacts.findIndex((item) => item.id === contactId);
    if (idx === -1) {
      return null;
      // throw new Error(`contacts with id=${contactId} not found`);
    }

    const sortContacts = contacts.filter((item) => item.id !== contactId);

    await updateFile(sortContacts);

    return contacts[idx];
  } catch (error) {
    throw error;
  }
};

module.exports = removeContact;
