// Recibimos token --> si existe extraemos token --> verificamos que el usuario existe
import jwt from "jsonwebtoken";
import config from "../config.js";
import User from "../models/User.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ message: "Not token provided" });

    const decoded = jwt.verify(token, config.SECRET);
    // aqui extraigo el ID de usuario del token
    req.userId = decoded.id;
    console.log("DEC", decoded);

    // luego buscamos si existe el usuario por su ID
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.status(404).json({ message: "no user found" });
    console.log(user);

    next();
  } catch (error) {
    return res.status(401).json({ message: "not authorized" });
  }
};
