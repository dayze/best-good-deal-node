const express = require('express')
const expressJwt = require('express-jwt')
const config = require('../../config/config')
const userController = require('../controllers/user.controller')
const router = express.Router()

router.route('/')
/** POST /api/users - Create new user */
/**
 * data: user
 * error: false
 * msg: ""
 */
  .post(userController.create)

router.route('/testToken')
/** GET /api/user/testToken - Test function for token authorization*/
  .get(expressJwt({secret: config.jwtSecret}),userController.testToken)

/*  /!** PUT /api/users/:userId - Update user *!/
  .put(validate(paramValidation.updateUser), userCtrl.update)
  /!** DELETE /api/users/:userId - Delete user *!/
  .delete(userController.remove);*/

module.exports = router