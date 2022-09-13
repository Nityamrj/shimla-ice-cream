import mongoose from 'mongoose';

const salesmanBillingSchema = new mongoose.Schema({
    salesman_id : {
        type: String
    },
    salesman_name: {
        type: String
    },
    date: {
        type: String
    },
    day: {
        type: String
    },
    products: {
        type: String
    },
    total_price: {
        type: String
    },
    returned: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const SalesmanBilling = mongoose.model('SalesmanBilling', salesmanBillingSchema)

export { SalesmanBilling };