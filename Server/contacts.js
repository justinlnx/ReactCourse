const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  contacts: [
    {
      id: 'jeremy',
      name: 'Jeremy Lin',
      email: 'jeremy@nba.com',
      avatarURL: config.origin + '/jeremy.jpeg'
    },
    {
      id: 'raptors',
      name: 'Toronto Raptors',
      email: 'torontoRaptors@nba.com',
      avatarURL: config.origin + '/raptors.png'
    },
    {
      id: 'lgd',
      name: 'LGD Gaming',
      email: 'lgd@dota.com',
      avatarURL: config.origin + '/lgd.png'
    }
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, contact) => {
  if (!contact.id) {
    contact.id = Math.random().toString(36).substr(-8)
  }

  get(token).contacts.push(contact)

  return contact
}

const remove = (token, id) => {
  const data = get(token)
  const contact = data.contacts.find(c => c.id === id)

  if (contact) {
    data.contacts = data.contacts.filter(c => c !== contact)
  }

  return { contact }
}

module.exports = {
  get,
  add,
  remove
}
