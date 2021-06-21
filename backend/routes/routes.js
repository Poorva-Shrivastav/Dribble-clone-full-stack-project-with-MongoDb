const express = require('express');
const router = express.Router();
const signuptemplate  = require('../models/signupModel') 
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')


router.use(bodyParser.json())
router.post('/signup', async (request, response) =>{
//     const saltPassword = await bcrypt.genSalt(10);
//     const securePassword = await bcrypt.hash(request.body.password, saltPassword)

//     const signedUpUser = new signuptemplate({
//         name: request.body.name,
//         username: request.body.username,
//         email: request.body.email,
//         // password: securePassword
//         password: request.body.password
//     })

    
    // signedUpUser.save()
    // .then(data => {
    //     response.json(data)})
    // .catch(error => {
    //     response.json(error)})


    // const signup = async(req, res) =>{
    const {name, username, email, password} = request.body;
     try{
        const existingUser = await signuptemplate.findOne({ username })
        if(existingUser) return response.status(400).json({ message : "Username already in use. Try another username"})

        const existingEmail = await signuptemplate.findOne({ email })
        if(existingEmail) return response.status(400).json({ message : "User already exists"})

        if(password.length < 6) return response.status(400).json({ message : "Password doesn't match the criteria"})

        const saltPassword = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(request.body.password, saltPassword)

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await signuptemplate.create({name, username, email, password: hashedPassword})
    
        const token = jwt.sign({ email: result.email, id: result._id}, "text", {expiresIn: 60*1000})

        response.status(200).json({result, token})
    }catch(error){
        console.log(error)
        response.status(500).json({message : "Something went wrong"})        
    }
    
})

module.exports = router;