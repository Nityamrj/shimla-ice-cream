import mongoose from 'mongoose';

const returnSalesmanBillingSchema = new mongoose.Schema({
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
    total_selling: {
        type: Number
    },
    commission_percent: {
        type: Number
    },
    our_commision: {
        type: Number
    }
}, {
    timestamps: true
})

const ReturnSalesmanBilling = mongoose.model('ReturnSalesmanBilling', returnSalesmanBillingSchema)

export { ReturnSalesmanBilling };