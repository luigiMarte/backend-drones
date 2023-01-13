import User from "../models/User.js";
import jwt from "jsonwebtoken.js";
import config from "../config.js";
import Role from "../models/Role.js";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;
  const newUser = new User({
    username,
    email,
    password: await newUser.encryptPassword(password),
  });
  res.json("ok");
  // let encryptPassword = await newUser.encryptPassword(password);
  // newUser.password = encryptPassword;

  // comporbamos si tiene roles antes de guardar en bd
  if (roles) {
    // $in para buscar si en todas las colecciones guardadas existe el role
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    // por defecto asignamos el role user
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  //const savedUser = await newUser.save();
  //console.log(savedUser);

  // le pasamos el id, la palabra secreta y el tiempo que dura el token
  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400,
  });

  //res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );

  if (!userFound) return res.status(400).json({ message: "User not found" });

  const matchPassword = await User.checkPassword();
  // { password: req.body.password },
  // userFound.password
  console.log("MP", matchPassword);
  if (!matchPassword)
    return res.status(401).json({ message: "Invalid password" });
  //   return res.status(401).json({ token: null, message: 'Invalid password' });

  console.log(userFound);
  res.json({ token: "" });

  // const token = jwt.sign({ id: userFound._id }, config.SECRET, {
  //   expiresIn: 86400,
  // });
  // res.json({ token });
};
