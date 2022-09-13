import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    category_id: {
        type: String,
        required: true
    },
    category_name: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
    },
    price: {
        type: Number,
    },
    image_name: {
        type: String,
    },
    image_url: {
        type: String,
    },
    status: {
        type: Boolean
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);

export { Product };