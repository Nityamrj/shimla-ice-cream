import jwt from 'jsonwebtoken'
import { User } from '../models/user.js'

const auth = async(req, res, next) => {
    console.log("BE:", req.header('Authorization'))
    console.log("BE:", req.header('Authorization').replace('Bearer ', ''))
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        console.log("BE token:", token)
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        console.log("auth : req:", user)

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        console.log("auth : req:", token, user)
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

export default auth;