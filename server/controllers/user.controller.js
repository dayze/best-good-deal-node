const User = require('../models/user.model')
module.exports = {
  create: (req, res) => {
    const user = new User(req.body)
    user.save()
      .then((savedUser) => res.json({data: savedUser, error: false}))
      .catch(e => {
        if (e.errmsg !== undefined) {
          res.json({error: true, msg: "Votre email à déjà été utilisé"})
        }
        else if (e.name === 'ValidationError') {
          res.json({error: true, msg: "Vous devez renseigné un email et un mot de passe"})
        }
        else {
          res.json(e)
        }
      })
  },
  testToken: (req, res) => {
    res.json('token look good')
  }

  // todo implements update
}