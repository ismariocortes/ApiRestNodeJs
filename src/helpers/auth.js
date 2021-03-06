const jwt = require('jsonwebtoken')
const User = require('../models/user')

const helpers = {};

/* Comprueba que la petición reciba un token válido */
helpers.isAuthenticated = async (req, res, next) => {
    try {
        console.log(req.header('Authorization'));
        const token = req.header('Authorization').replace('Bearer ', '')
        const data = jwt.verify(token, 'secret123')
        console.log(data);
        console.log(token);
        const user = await User.findOne({ _id: data._id, 'token': token })
        if (!user) {
            throw new Error()
        }
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })        
    }

}
module.exports = helpers;