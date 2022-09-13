import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    category: {
        type: String,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})

const Category = mongoose.model('Category', categorySchema);

export { Category };