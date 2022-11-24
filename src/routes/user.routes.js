import { Router } from 'express'
import { createUser } from '../controllers/users.controller'
import { awtJwt, verifySignUp } from '../middlewares'

const router = Router()

router.post(
  '/',
  [
    awtJwt.verifyToken,
    awtJwt.isAdmin,
    verifySignUp.checkRolesExisted,
    verifySignUp.checkDuplicateEmail,
    verifySignUp.checkDuplicateUsername
  ],
  createUser
)

export default router
