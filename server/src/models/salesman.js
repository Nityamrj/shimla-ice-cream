import mongoose from 'mongoose';

const salesmanSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    status: { 
        type: Boolean
    }
}, {
    timestamps: true
})

const Salesman = mongoose.model('Salesman', salesmanSchema);

export { Salesman };