import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;
  let verifiedToken;
  try {
    if (!token) {
      throw new Error("Login first");
    }
    verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = verifiedToken.id;
    console.log(verifiedToken);
    next();
  } catch (error) {
    next(error);
  }
};
