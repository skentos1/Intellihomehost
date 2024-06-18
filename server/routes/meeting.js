import express from 'express';
import Meeting from '../models/Meeting.js';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/book-meeting', async (req, res) => {
    const { date, timeSlot, firstName, lastName, email, phoneNumber, city } = req.body;
  
    console.log(`Request to book meeting received: ${JSON.stringify(req.body)}`);
  
    try {
      const existingMeeting = await Meeting.findOne({ date, timeSlot, city });
      if (existingMeeting) {
        console.log('Time slot is already booked.');
        return res.status(400).json({ message: 'Time slot je zablokovaný' });
      }
  
      const newMeeting = new Meeting({
        date,
        timeSlot,
        firstName,
        lastName,
        email,
        phoneNumber,
        city,
      });
  
      await newMeeting.save();
  
      console.log('Meeting saved successfully:', newMeeting);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kentos.simon@gmail.com',
        pass: 'oqhe kvjg rjmo uvgr'
      },
    });

    const mailOptions = {
      from: 'kentos.simon@gmail.com',
      to: email,
      subject: 'Potvrdenie schôdzky',
      text: `Hello ${firstName},\n\nYour meeting is booked for ${date} at ${timeSlot} in ${city}.\n\nThank you!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Mail odoslaný ' + info.response);
      }
    });

    res.status(200).json({ message: 'Meeting úspešne booknutý', meeting: newMeeting });
  } catch (error) {
    res.status(500).json({ message: 'Booknutie zlyhalo', error });
  }
});

router.get('/booked-slots', async (req, res) => {
    const { date, city } = req.query;
  
    console.log(`Request to get booked slots received: date=${date}, city=${city}`);
  
    try {
      const meetings = await Meeting.find({ date, city });
      const bookedSlots = meetings.map(meeting => meeting.timeSlot);
      console.log('Booked slots retrieved:', bookedSlots);
      res.status(200).json({ bookedSlots });
    } catch (error) {
      console.error('Error fetching booked slots:', error);
      res.status(500).json({ message: 'Fetching booked slots failed', error });
    }
  });

export default router;
