const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

UserSchema.statics.verifyPassword = function (password, savedPassword) {
  // todo verify
}

UserSchema.methods.verifyPassword = function (password) {
  return bcrypt.compare(password, this.password).then(res => res)
}

UserSchema.pre('save', async function (next) {
  try {
    let salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  } catch (e) {
    throw new Error(e)
  }
  next()
})

module.exports = mongoose.model('User', UserSchema)