import Role from '../models/Role'
import User from '../models/User'

export const checkDuplicateUsername = async (req, res, next) => {
  const { username } = req.body

  console.log(username)

  const foundUsername = await User.findOne({ username })

  if (foundUsername) {
    return res.status(400).json({ message: 'Duplicate username' })
  }
  next()
}

export const checkDuplicateEmail = async (req, res, next) => {
  const { email } = req.body

  const foundEmail = await User.findOne({ email })

  if (foundEmail) return res.status(400).json({ message: 'Duplicate email' })
  next()
}
export const checkRolesExisted = async (req, res, next) => {
  if (req.body.roles) {
    const { roles } = req.body
    const rolesFromDB = await Role.find()
    const rolesNamesFromDb = rolesFromDB.map(({ name }) => name)

    for (const role of roles) {
      if (!rolesNamesFromDb.includes(role)) {
        return res.status(400).json({ message: `Role ${role} does not exist` })
      }
    }
  }

  next()
}
