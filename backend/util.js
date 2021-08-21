const jwt = require('jsonwebtoken');
const config = require('./config')

const getToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    },
        config.JWT_SECRET_TOKEN,
        { expiresIn: '48h' })
}

const isAuth = (req, res, next) => {
    const token = req.header.authorization;
    if (token) {
        const onlyToken = token.slice(7, token.lenght);
        jwt.verify(onlyToken, config.JWT_SECRET_TOKEN, (err, decode) => {
            if (err) {
                return res.status(401).send({ msg: 'Invalid Token' })
            }
            req.user = token;
            next()
            return
        })
    }
    return res.status(401).send({ msg: 'Token is not supplied' })
}

const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        return next()
    }
    return res.status(401).send({ msg: 'Unauthorize Admin User' })
}

module.exports = { getToken, isAdmin, isAuth }