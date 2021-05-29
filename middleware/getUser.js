const Register = require('../models/register')

async function getUser(req, res, next) {
    let user
    try {
      user = await Register.findOne({ uname: req.query.uname })
      if (user == null) {
        user = await Register.findOne({ uname: req.body.uname })   
      }
      if (user == null) {
        return res.status(404).json({ message: "here" })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.user = user
    next()
  }

  module.exports = getUser