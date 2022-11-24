import express from 'express'
import morgan from 'morgan'
import jsonPackage from '../package.json'
import authRouter from './routes/auth.routes'
import productsRouter from './routes/products.routes'
import userRouter from './routes/user.routes'
import { createRoles } from './shared/initialRoles'
const app = express()

createRoles()

app.set('jsonPackage', jsonPackage)

app.use(morgan('dev'))
app.use(express.json())

app.get('/api', (req, res) => {
  res.json({
    name: app.get('jsonPackage').name,
    author: app.get('jsonPackage').author,
    versopm: app.get('jsonPackage').version,
    description: app.get('jsonPackage').description
  })
})

app.use('/api/products', productsRouter)

app.use('/api/auth', authRouter)

app.use('/api/users', userRouter)

export default app
