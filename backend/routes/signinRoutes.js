const express = require('express');
require("dotenv").config;
const bcrypt = require('bcrypt')
const signinRouter = express.Router();
const signuptemplate  = require('../models/signupModel') 
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
import auth from '../middlewares/middleware.js'


router.use(bodyParser.json())
outer.post('/signin',async(req, res)=>{
    const {email, password} = req.body;

    try{
        const existingUser = await signuptemplate.findOne({ email })
        if(!existingUser) {
            return res.status(404).json({ message : "User doesn't exist"})
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect){
            return res.status(400).json({ message: "Invalid credentials"})
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, process.env.SERVER_SIDE_SECURITY_KEY, {expiresIn: 60*1000})

        res.status(200).json({  result: existingUser, token })   
    
    } catch(error){
        res.status(500).json({message : "Something went wrong"})

    }
})




// signinRoutes.post('/signin', 
//     body('username').isString(),
    // body('email').custom(value => {
    //     return signuptemplate.findUserByEmail(value)
    //         .then(user => {
    //             if(user){
    //                 return Promise.reject('Email already in use')
    //             }
    //         })
    // }),
    // body('password').isLength({ min: 6 }),
    // (req, res) => {
    //     const error = validationResult(req);
    //     if(!error.isEmpty()){
    //         return res.status(400).json({error: error.array()})
    //     }
    // }
    

// )

// router.post('/signup', 
//     body('email').custom(value => {
//         return signuptemplate.findUserByEmail(value)
//             .then(user => {
//                 if(user){
//                     return Promise.reject('Email already in use')
//                 }
//             })
//     }))