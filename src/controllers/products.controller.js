import Product from '../models/Product'

export const getProducts = async (req, res) => {
  const products = await Product.find()
  if (products.length === 0) res.status(204)

  res.status(200).json(products)
}
export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body
  if (!name || !category || !price || !imgURL)
    res.status(400).json({ error: 'Missing fields' })

  const newProduct = new Product({ name, category, price, imgURL })

  const savedProduct = await newProduct.save()

  res.status(201).json(savedProduct)
}
export const getProductByID = async (req, res) => {
  const { id } = req.params
  const product = await Product.findById(id)
  if (!product) res.status(204)
  res.status(200).json(product)
}
export const updateProductById = async (req, res) => {
  const { id } = req.params
  const { name, category, price, imgURL } = req.body

  if (!name || !category || !price || !imgURL)
    res.status(400).json({
      error:
        'Name, category, price and imgURL field are  needed to update a product'
    })
  const product = {
    name,
    category,
    price,
    imgURL
  }
  const updatedProduct = await Product.findByIdAndUpdate(id, product, {
    new: true
  })

  res.status(202).json(updatedProduct)
}
export const deleteProductById = async (req, res) => {
  const { id } = req.params

  const deletedProduct = await Product.findByIdAndRemove(id)

  if (!deleteProductById) res.status(204)

  res.status(200).json(deletedProduct)
}
