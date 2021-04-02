const jwt = require('jsonwebtoken');

const checkAuth = (req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token,'secret');
        const userData = decodedToken;
        next();

    }catch(e){
        return res.status(401).json({
            'message': "invalid or expired token",
            'error':e
        })
    }
}

module.exports = {
    checkAuth:checkAuth
    }