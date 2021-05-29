const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const getUser = require('../middleware/getUser')
const session = require('../middleware/session')

router.get('/', getUser, session, async (req, res) => {
  try {
    hash = res.user.password
    bcrypt.compare(req.query.password, hash, function(err, result) {
      if (err) { throw (err); }
      if (result == true) {
        res.status(202).json({message: res.user.uname})        
      } else if (result == false) {
        res.status(401).json({message: "Wrong Credentials!"})
      }
  });

  } catch (error) {
      res.status(500).json("Error Logging in!")
  }
})


module.exports = router