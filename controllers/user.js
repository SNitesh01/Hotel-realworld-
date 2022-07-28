const { response } = require("express");
const { request } = require("express");
const bcrypt = require('bcrypt');
const upload = require('../config/cloudinary.config');
const userModel = require("../models/user.model");

/**
 * 
 * @param {response} res 
 * @param {string} err
 */
function _error(res, err) {
  console.log(err)
  return res.status(404).send({
    status: false,
    err: err
  })
}

/**
 * 
 * @param {response} res 
 * @param {any} 
 * @param {number} code
 */
 function _success(res, data, code = 200) {
  return res.status(code).send({
    status: true,
    data
  })
}

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
async function signup(req, res) {
    const { email, name, image, password: plainPassword } = req.body;
    console.log(req.body)
    const password = bcrypt.hashSync(plainPassword, 10);

    try {
      await userModel.create({
        email,
        image: image,
        password,
        name,
        admin: false
      }).then((user) => _success(res, { token: user.createAuthToken() }, 201))
      .catch(err => _error(res, err))
    } catch (err) {
      return _error(res, err.message);
    }
}

/**
 * 
 * @param {request} req 
 * @param {response} res 
 */
async function login(req, res) {
  const { email, password: plainPassword } = req.body?.user;

  try {
    await userModel.findOne({ email: email })
    .exec()
    .then(
      (user) => { 
        console.log(user)
        if (!user) 
          return _success(res, { isAdmin: false })
        
        else if (user.comparePassword(plainPassword))
          return _success(res, { token: user.createAuthToken(), isAdmin: user.admin })

        else return _success(res, { isAdmin: false })
      }
    )
    .catch(err => _error(res, err.message));
  } catch (err) {
    _error(res, err.message);
  }
}

module.exports = {
  signup: signup,
  login: login
}