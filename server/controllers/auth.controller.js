const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const config = require('../../config/config')

module.exports = {
  login: (req, res, next) => {
    User.findOne({email: req.body.email})
      .then(savedUser => {
        if(!savedUser) {
          res.json({error: true, msg: "Votre email ou mot de passe est invalide"})
        }
        savedUser.verifyPassword(req.body.password).then(isValid => {
          if (isValid) {
           const token = jwt.sign({
             email: savedUser.email
           }, config.jwtSecret)
            return res.json({data: {token, email: savedUser.email}, error: false})
          } else {
            res.json({error: true, msg: "Votre email ou mot de passe est invalide"})
          }
        })
      }).catch((e) => console.log(e))
  }
}
