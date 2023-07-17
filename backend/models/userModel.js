const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 10
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
  isSent: {
    type: Boolean,
    default: false,
  },
});


const User = mongoose.model("User", userSchema)

module.exports = User