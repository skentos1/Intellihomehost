import express from 'express';
import mongoose from 'mongoose';
import { Order } from '../models/Order.js';
import { validateOrderData } from '../middleware/validateOrderData.js';
import { sendOrderConfirmation } from '../mailer.js';

const router = express.Router();

router.post('/orders', validateOrderData, async (req, res) => {
    try {
        const { userInfo, orderSummary, totalPrice, } = req.body;

        const totalDPHPrice = (parseFloat(totalPrice) * 1.2).toFixed(2);
        const orderNumber = Math.floor(1000000000 + Math.random() * 9000000000);

        const newOrder = new Order({
            userInfo,
            orderSummary,
            totalPrice,
            totalDPHPrice,
            orderNumber,
            user: req.user ? req.user._id : null
        });

        const savedOrder = await newOrder.save();

        sendOrderConfirmation(userInfo.email, {
            userInfo,
            orderNumber, // Assuming _id is used as order number
            orderSummary,
            totalPrice,
            totalDPHPrice,
          });

          
        res.status(201).json({ message: 'objednavka uspesna', order: savedOrder });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'objednavka neuspesna', error });
    }
});

router.get('/orders', async (req, res) => {
    try {
        const { email } = req.query;
        const query = email ? { 'userInfo.email': email } : { user: req.user._id };

        const orders = await Order.find(query);

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'error fetchovania objednavok', error });
    }
});

export { router as OrderRouter };