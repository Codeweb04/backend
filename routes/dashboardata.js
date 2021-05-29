const express = require('express');
const router = express.Router();
const session = require('../middleware/session')

router.get('/', session, (req, res) => {
    console.log(res.user)
    if(req.session.user) {
        res.status(200).json({uname : req.session.user})
    } else {
        res.status(401).json({message: "Not Allowed"})
    }
})

module.exports = router