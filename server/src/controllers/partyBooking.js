import { partyBookingService } from '../services/partyBooking.js'

const create = async (req, res) => {
    try {
        const partyBooking = await partyBookingService.create(req.body);
        res.status(201).send(partyBooking);
    } catch (error) {
        res.status(400).send(error);
    }
}

const update = async (req, res) => {
    try {
        const partyBooking = await partyBookingService.update(req.body);
        res.status(201).send(partyBooking);
    } catch (error) {
        res.status(400).send(error);
    }
}

const deletePartyBooking = async (req, res) => {
    try {
        const partyBooking = await partyBookingService.deletePartyBooking(req.params);
        res.status(200).send(partyBooking);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getAll = async (req, res) => {
    try {
        const partyBooking = await partyBookingService.getAll();
        res.status(200).send(partyBooking);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getById = async (req, res) => {
    try {
        const partyBooking = await partyBookingService.getById(req.params);
        res.status(200).send(partyBooking);
    } catch (error) {
        res.status(400).send(error);
    }
}

const partyBookingController = {
    create,
    update,
    deletePartyBooking,
    getAll,
    getById,
}


export { partyBookingController }