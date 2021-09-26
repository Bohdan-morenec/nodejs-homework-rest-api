const { NotFound } = require('http-errors')

const { contact } = require('../../../models')

const del = async (req, res, _) => {
  const { contactId } = req.params

  const del = await contact.findByIdAndRemove(contactId)

  if (!del) {
    throw new NotFound()
  }

  res.status(200).json({
    message: 'contact deleted',
    status: 'success',
    code: 200,
    result: {
      data: del,
    },
  })
}

module.exports = del
