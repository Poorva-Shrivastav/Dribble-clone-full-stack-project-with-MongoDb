import jwt, { decode } from 'jsonwebtoken';
const auth = async (req, res) => {
    try{
        const token = req.headers.authorization.split("")[1]
        const isCustomAuth = token.length < 500

        let decodedData;

        if(token && isCustomAuth){
            decodedData = jwt.veryfy(token, process.env.SERVER_SIDE_SECURITY_KEY)

            req.userId = decodedData?.id 
        }
        else{
            decodedData = jwt.decode(token)

            req.userId = decodedData?.sub
        }

        next();

    }catch(error){
        console.log(error);
    }

}

module.exports = auth;