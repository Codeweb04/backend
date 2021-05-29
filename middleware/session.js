const session = (req, res, next) => {
    req.session.uname = req.body.uname

    res.uname = req.session.uname
    next()
}

module.exports = session