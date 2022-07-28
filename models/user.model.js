const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    unique: true,
    type: String,
    maxlength: 64,
    required: true,
    match: /[\w\d]+@[\w\s]+\.[\w\d]+/m,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  image: {
    type: String,
  },
  name: {
    type: String
  },
  admin: {
    type: Boolean,
    default: false, 
  }
});


userSchema.methods.comparePassword = function(password) {  
  return bcrypt.compareSync(password, this.password);
}

userSchema.methods.createAuthToken = () => {
  return jwt.sign(
    {
      _id: this._id
    },
    process.env.APP_SECRET
  );
}

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;