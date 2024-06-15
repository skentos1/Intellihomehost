import express, { json } from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/User.js'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

const router = express.Router()

router.post('/signup', async (req, res) =>{
    const {username, email, password} = req.body;
    const user = await User.findOne({email})
    if(user) {
        return res.json({message: "user already exists"})
    }

    const hashpassword = await bcrypt.hash(password, 10)
    const newUser = new User({
        username,
        email,
        password: hashpassword,

    })

    await newUser.save()
    return res.json({status: true, message: "record registered"})
})

router.post('/login', async (req, res) =>{
    const {email, password } = req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.json({message: "USER DOESNT EXIST"})
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword){
        return res.json({message: "password is incorrect"})
    }

    const token = jwt.sign({username: user.username}, process.env.KEY, {expiresIn: '5h'} )
    res.cookie('token', token, {httpOnly: true, maxAge: 360000})
    return res.json({status: true, message: "login sucessful"})

})

router.post('/forgot-password', async (req,res) => {
    const {email} = req.body;
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.json({message: "user not registered"})
        }

        const token = jwt.sign({id: user._id}, process.env.KEY, {expiresIn: '5m'});

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'kentos.simon@gmail.com',
              pass: 'oqhe kvjg rjmo uvgr' //app password google
            }
          });
          
          var mailOptions = {
            from: 'kentos.simon@gmail.com',
            to: email,
            subject: 'Reset your password',
            text: `Click this link for resetting your password! 
                    http://localhost:5173/reset-password/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                return res.json({ message: 'EMAIL SENDING ERROR'})
            } else {
              return res.json({status: true, message: 'email sent'})
            }
          });


    } catch(err){
        console.log(err)
    }
})

router.post('/reset-password/:token', async (req,res) => {
    const {token} = req.params;
    const {password} = req.body;

    try{
        const decoded =  jwt.verify(token, process.env.KEY);
        const id = decoded.id;
        const hashpassword = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate({_id: id}, {password: hashpassword})
        return res.json({status: true, message: 'updated password'})
        

    }catch(err){
        return res.json("invalid token")
    }
})

export {router as UserRouter}