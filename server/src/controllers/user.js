import { userService } from '../services/user.js'

const add = async (req, res) => {
    let user = await userService.findByEmail(req.body.email);
    console.log("user controller:", user)
    if(user.user != null){
        res.status(409).send({params: 'error', message: 'Email address already registered! Try using another email.'});
    }else {
        try {
            const user = await userService.add(req.body);
            res.status(201).send({ user: user.user, token: user.token});
        } catch (error) {
            res.status(400).send(error);
        }
    }
    
    // try {
    //     const user = await userService.add(req.body);
    //     res.status(201).send({ user: user.user, token: user.token});
    // } catch (error) {
    //     res.status(400).send(error);
    // }
}

const login = async (req, res) => {
    try {
        const user = await userService.login(req.body);
        res.status(200).send({ user: user.user, token: user.token});
    } catch (error) {
        res.status(400).send(error);
    }
}

const logout = async (req, res) => {
    try {
        const user = await userService.logout(req);
        res.send()
    } catch (error) {
        res.status(500).send(error);
    }
}

const update = async (req, res) => {
    console.log("req.body",req.body)
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'dob']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await userService.update(req);
        res.send(req.user)
    } catch (error) {
        res.status(500).send(error);
    }
}

const userController = {
    add,
    login,
    logout,
    update
}


export { userController }