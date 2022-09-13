import { contactService } from '../services/contact.js'

const create = async (req, res) => {
    try {
        const contact = await contactService.create(req.body);
        res.status(201).send(contact)
    } catch (error) {
        res.status(400).send(error);
    }
}

const getAll = async (req, res) => {
    try {
        const contact = await contactService.getAll();
        res.status(200).send(contact)
    } catch (error) {
        res.status(400).send(error);
    }
}

const contactController = {
    create,
    getAll
}

export { contactController };