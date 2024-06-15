import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    userInfo: {
        meno: { type: String, required: true },
        priezvisko: { type: String, required: true },
        email: { type: String, required: true },
        mobil: { type: String, required: true },
        adresa: { type: String, required: true },
        mesto: { type: String, required: true },
        psc: { type: String, required: true },
    },
    orderSummary: [
        {
            id: { type: Number, required: true },
            title: { type: String, required: true },
            price: { type: Number, required: true },
            discountedPrice: { type: Number, required: true }
        }
    ],
    totalPrice: { type: Number, required: true },
    totalDPHPrice: {type: Number, required: true},
    orderNumber: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);

export { Order };
