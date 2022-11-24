import { Router } from 'express'
import * as authController from '../controllers/auth.controller'
import { verifySignUp } from '../middlewares'
const router = Router()

router.post(
  '/login',
  awtJwt.verifyToken,
  [
    awtJwt.isAdmin,
    verifySignUp.checkRolesExisted,
    verifySignUp.checkDuplicateEmail,
    verifySignUp.checkDuplicateUsername
  ],
  authController.login
)

router.post(
  '/signup',
  [
    verifySignUp.checkDuplicateEmail,
    verifySignUp.checkDuplicateUsername,
    verifySignUp.checkRolesExisted
  ],
  authController.signUp
)

export default router
