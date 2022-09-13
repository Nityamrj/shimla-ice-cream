import mongoose from 'mongoose';
import validator from 'validator';

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
        validate(value){
            if(value.length > 100){
                throw new Error("Message limit is 100 characters.")
            }
        }
    }
}, {
    timestamps: true
})

const Contact = mongoose.model('Contact', contactSchema)

export { Contact }