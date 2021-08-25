const listContacts = require("./listContacts");
const removeContact = require("./removeContact");
const getContactById = require("./getContactById");
const { updateFile } = require("./options");

const updateContact = async (id, updateData) => {
  try {
    const ContactById = await getContactById(id);

    if (!ContactById) {
      return null;
    }

    const renewableСontact = { ...ContactById, ...updateData };

    await removeContact(id);

    const contacts = await listContacts();

    console.log(contacts);

    contacts.push(renewableСontact);

    updateFile(contacts);

    return renewableСontact;
  } catch (error) {
    throw error;
  }
};

module.exports = updateContact;
