const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const authRequired = (req, res, next) => {
   const { token } = req.cookies;

   if (!token) 
    return res.status(401).json({ message: "No token, authorization deniend" });

   jwt.verify(token, JWT_SECRET, (err, user) => {
    if(err) return res.status(403).json({ message: "Invalid token" });

        req.usuario = user;
   })
    next();
};

module.exports = {authRequired};
