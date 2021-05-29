const express = require('express')
const router = express.Router()
const  Register = require('../models/register')
const bcrypt = require('bcrypt')
const session = require('../middleware/session')

router.post('/', session, async (req, res) => {


bcrypt.hash(req.body.password, 10, async function(err, hash) {
  const hashedPassword = hash
  const user = new Register({
    uname: req.body.uname,
    email: req.body.email,
    password: hashedPassword
  })

  try {
    const newUser = await user.save()
    res.status(500).json("User Created")
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

  
})

module.exports = router