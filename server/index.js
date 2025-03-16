import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { UserRouter } from './routes/pouzivatel.js';
import { OrderRouter } from './routes/order.js';
import  MeetingRouter  from './routes/meeting.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from './config/passport.js';
import 'dotenv/config';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use(passport.initialize());

app.use('/auth', UserRouter);
app.use('/api', OrderRouter);
app.use('/meeting', MeetingRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});