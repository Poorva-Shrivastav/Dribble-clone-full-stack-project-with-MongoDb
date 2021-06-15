require("dotenv").config;
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')

console.log(process.env.SERVER_SIDE_SECURITY_KEY);
//require ('crypto').randomBytes(64).toString('hex') for creating key

let authTokenDb = [];

const loginUsers = 
{
    username: "Diana",
    password: "test123"
}

app.use(express.json())

// app.get("/singup", (req, res) => {
//     res.send("Home")
// })


// app.get("/signup", (req, res) => {
//     res.status(200).json({loginUser})
// })
app.post("/login", (req, res) =>{
    const {username} = req.body;
    const name = {name: username}
    const authToken = generateAuthToken(name)
    const refreshToken = jwt.sign(name, process.env.REFRESH_TOKEN_SECRET)
    res.status(200).json({
        loggedIn: true,
        authToken,
        refreshToken
        expiresIn:15*1000 //15 sec
    })
})

app.delete('/unAuthenticate', (req, res) => {
    const {refreshToken} = res.headers
    refreshTokenDb = refreshTokenDb.filter(token => (token !== refreshToken){
        res.status(200).json{
            message: "Un-authentication successful"
        }
    })
})


app.post('/token', (req, res) => {
    const refreshToken = req.body;

    if(!authTokenDb.find(token => (token == refreshToken)){
        res.status(403).json({
            message: "Not allowed to create auth token"
        })
    })


    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(error){
            res.status(403).json({
                message: "Token creation not allowed"
            })
        }

        const authToken = generateAuthToken({name: user.name})
        res.status(200).json({
            message: "Updated Auth Token",
            authToken
        })
    })
})

app.use(authenticator); //using authenticator as the middleware

app.get("/secure-posts", authenticator, (req, res) => {
    
    res.status(200).json({
        message: "Success",
        loginUsers: loginUsers.find( loginUser => (loginUser.user == req.user))
    }) 

    console.log(req.headers, req.header)
    console.log({authorization});
    res.send("Hey Boy")

})

function generateAuthToken(user){
    return jwt.sign(user, process.env.SERVER_SIDE_SECURITY_KEY, {expiresIn: "15s"})
}



app.listen(process.env.SERVER_SIDE_SECURITY_KEY, ()=> {
    console.log("Server is running at", process.env.PORT)
})