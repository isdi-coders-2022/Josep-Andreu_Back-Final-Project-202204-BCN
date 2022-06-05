require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization.includes("Bearer ")) {
      throw new Error("Bearer missing");
    }
    const token = authorization.replace("Bearer ", "");
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = id;

    next();
  } catch (error) {
    error.code = 401;
    error.customMessage = "invalid token";

    next(error);
  }
};

module.exports = auth;
