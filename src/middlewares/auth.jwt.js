import jwt from 'jsonwebtoken'
import Role from '../models/Role'
import User from '../models/User'

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']

    if (!token) return res.status(403).json({ message: 'No token provided' })

    const decoded = jwt.verify(token, process.env.SECRET)

    req.userId = decoded.id

    const user = await User.findById(req.userId)

    if (!user) return res.status(404).json({ message: 'no user found' })

    next()
  } catch (e) {
    return res.status(401).json({ error: 'unauthorized' })
  }
}

export const isModerator = async (req, res, next) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({ _id: { $in: user.roles } })

  const thereIsModeratorRole = roles.find((role) => role.name === 'moderator')

  if (!thereIsModeratorRole)
    return res.status(403).json({
      message: 'Require moderator role'
    })

  next()
}

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({ _id: { $in: user.roles } })

  const thereIsAdmin = roles.find((role) => role.name === 'admin')

  if (!thereIsAdmin)
    return res.status(403).json({
      message: 'Require admin role'
    })

  next()
}
