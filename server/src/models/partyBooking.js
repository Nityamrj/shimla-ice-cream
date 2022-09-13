import mongoose from 'mongoose';

const partyBookingSchema = new mongoose.Schema({
    customer_name: {
        type: String,
    },
    date: {
        type: String,
    },
    time: {
        type: String
    },
    mobile_number: {
        type: String
    },
    alternate_mobile_number: {
        type: String
    },
    address: {
        type: String
    },
    products: {
        type: String
    },
    total_price: {
        type: String
    },
    total_discount: {
        type: String
    },
    advance: {
        type: String
    },
    final_price: {
        type: String
    }
}, {
    timestamps: true
})

const PartyBooking = mongoose.model('PartyBooking', partyBookingSchema);

export { PartyBooking };