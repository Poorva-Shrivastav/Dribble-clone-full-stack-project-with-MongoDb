const jwt = require('jsonwebtoken')

function authenticator(req, res, next){
    const {authorization} = req.headers;
    if(!authorization){
        res.send(400, ).json({
            message: "Authorization parameter absent"
        })
    }

    const authToken = authorization.split(" ")[1] //[0] is the string called bearer ,[1] is authtoken

    jwt.verify(authToken, process.env.SERVER_SIDE_SECURITY_KEY, (error, user)=>{
        console.log(user, error);
        if(error){
            res.status(403).json({
                message: "Invalid Auth"
            })
        }
        req.user = user.name;
        next();
    })
}

module.exports = authenticator;