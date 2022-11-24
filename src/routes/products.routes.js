import { Router } from 'express'
import * as productsController from '../controllers/products.controller'
import { awtJwt } from '../middlewares'
const router = Router()

router.get('/', productsController.getProducts)

router.post('/', awtJwt.verifyToken, productsController.createProduct)

router.get('/:id', productsController.getProductByID)

router.put(
  '/:id',
  [awtJwt.verifyToken, awtJwt.isAdmin],
  productsController.updateProductById
)

router.delete(
  '/:id',
  [awtJwt.verifyToken, awtJwt.isModerator],
  productsController.deleteProductById
)

export default router
