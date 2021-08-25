const listContacts = require("./listContacts");

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();

    const contactSearch = contacts.find((item) => item.id === contactId);

    if (!contactSearch) {
      return null;
      // throw new Error(`contacts with id= ${contactId} not found`);
    }

    return contactSearch;
  } catch (error) {
    throw error;
  }
};

module.exports = getContactById;
