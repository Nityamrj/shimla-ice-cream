import { PartyBooking } from '../models/partyBooking.js';

const create = (model) => {
    const partyBooking = new PartyBooking(model);
    partyBooking.save();
    return partyBooking;
}

const update = (model) => {
    return PartyBooking.findByIdAndUpdate(model.id, model );
}

const deletePartyBooking = (model) => {
    return PartyBooking.findByIdAndDelete({ _id: model.id });
}
 
const getAll = () => {
    return PartyBooking.find({}).sort({ "updatedAt": -1});
}

const getById = (model) => {
    return PartyBooking.findOne({ _id: model.id });
}

const getByPartyBooking = (model) => {
    return PartyBooking.find({ partyBooking: model.partyBooking.toLowerCase()})
}


const partyBookingService = {
    create,
    update,
    deletePartyBooking,
    getAll,
    getById,
    getByPartyBooking
}

export {
    partyBookingService
}