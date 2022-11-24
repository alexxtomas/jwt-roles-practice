import bcrypt from 'bcryptjs'
import { model, Schema } from 'mongoose'
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    roles: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId
      }
    ]
  },
  { timestamps: true, versionKey: false }
)

userSchema.statics.encryptPassword = async (password) => {
  const salt = 10
  return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

export default model('User', userSchema)
