const getAll = require('./getAll')
const findById = require('./findById')
const add = require('./add')
const update = require('./update')
const patch = require('./patch')
const del = require('./del')

module.exports = {
  getAll,
  findById,
  del,
  add,
  update,
  patch,
}
