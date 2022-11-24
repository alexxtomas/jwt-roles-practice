import Role from '../models/Role'
import User from '../models/User'

export const createUser = async (req, res) => {
  const { username, email, password, roles } = req.body

  const newUser = await new User({
    username,
    email,
    password
  })
  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } })
    newUser.roles = foundRoles.map((role) => role._id)
  } else {
    const role = await Role.findOne({ name: 'user' })
    newUser.roles = [role._id]
  }

  const savedUser = await newUser.save()

  res.status(201).json({ savedUser })
}
