import mongoose from 'mongoose';

const meetingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  timeSlot: {
    type: String,
    enum: ['09:00', '11:00', '13:00', '15:00'],
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  city: {
    type: String,
    enum: ['Bratislava', 'Kosice'],
    required: true,
  },
});

const Meeting = mongoose.model('Meeting', meetingSchema);

export default Meeting;
