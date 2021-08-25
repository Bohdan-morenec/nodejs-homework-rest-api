const fs = require("fs/promises");

const contactsPath = require("./contactsPath");

const updateFile = async (value) => {
  const contactsStringify = JSON.stringify(value);

  await fs.writeFile(contactsPath, contactsStringify);
};

module.exports = updateFile;
