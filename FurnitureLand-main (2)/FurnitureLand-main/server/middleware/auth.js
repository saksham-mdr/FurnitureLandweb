const jwt = require("jsonwebtoken");

const jwtSecret = process.env.SECRET;

module.exports = (req, res, next) => {
  if(req.method === 'OPTIONS'){
    return next();
  }
  
  try {
    const token = req.headers.authorization.split("+")[1];
    if (!token) {
      return res.json({ Error: "Authentication Failed" });
    }
    const decodedToken = jwt.verify(token,jwtSecret);
    req.userData = {userId:decodedToken.id}
    next();
  } catch (err) {
    return res.json({ Error: err });
  }
};
