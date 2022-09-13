import { Contact } from '../models/contact.js'

const create = (model) => {
    const contact = new Contact(model);
    contact.save();
    return contact;
}

const getAll = () => {
    const contact = Contact.find({}).sort({ "updatedAt": -1});
    return contact;
}


const contactService = {
    create,
    getAll
}

export {
    contactService
}