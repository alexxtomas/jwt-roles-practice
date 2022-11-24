import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
mongoose
  .connect(
    'mongodb+srv://atomas:24022004llimos@cluster0.tmiizuq.mongodb.net/companydb?retryWrites=true&w=majority'
  )
  .then(() => 'Connected to MongoDB')
  .catch((e) => console.error(e))
