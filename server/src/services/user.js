import { User } from '../models/user.js'

const add = async (model) => {
    const user = new User(model)
    await user.save()
    const token = await user.generateAuthToken();
    console.log("service : user, token", user, token)
    return { user, token }
}

const findByEmail = async (email) => {
    const user = await User.findOne({ email })
    console.log("findByEmail",email, user)
    return { user }
}

const login = async (model) => {
    const user = await User.findByCredentials(model.email, model.password)
    const token = await user.generateAuthToken()
    return { user, token }
}

const logout = async (model) => {
    console.log("model before:", model.user)
    model.user.tokens = model.user.tokens.filter((token) => {
        return token.token !== model.token
    })
    console.log("model after:",model.token, model.user)
    await model.user.save()
}

const update = async (model) => {
    const updates = Object.keys(model.body)
    updates.forEach((update) => model.user[update] = model.body[update])
    console.log("model.user", model.user)
    console.log("model.body", model.body)
    await model.user.save()
}

const userService = {
    add,
    login,
    logout,
    update,
    findByEmail
}

export {
    userService
}