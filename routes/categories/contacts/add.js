const { contact } = require('../../../models')

const add = async (req, res) => {
  const newContact = { ...req.body, owner: req.user._id }

  const addContact = await contact.create(newContact)

  res.status(201).json({
    status: 'success',
    code: '201',
    result: {
      data: addContact,
    },
  })
}

module.exports = add
