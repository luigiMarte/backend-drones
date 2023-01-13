import User from "../models/User.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
import Role from "../models/Role.js";
//import userInfo from '../models/userInfo';

// *****  SIGN UP ***************************************
export const signUp = async (req, res) => {
  // pasar aqui la referencia, o todos los datos si no
  const {
    username,
    email,
    password,
    roles,
    avatar,
    alias,
    country,
    city,
    postalCode,
    phone,
    aboutMe,
    haveDrone,
    droneBrand,
    droneModel,
    latitude,
    longitude,
    price,
    webpage,
    video,
    youtube,
    instagram,
    tiktok,
    twitter,
    facebook,
    rating,
    enabled,
    state,
  } = req.body;
  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
    avatar,
    alias,
    country,
    city,
    postalCode,
    phone,
    aboutMe,
    haveDrone,
    droneBrand,
    droneModel,
    latitude,
    longitude,
    price,
    webpage,
    video,
    youtube,
    instagram,
    tiktok,
    twitter,
    facebook,
    rating,
    enabled,
    state,
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  console.log(newUser);

  const saveUser = await newUser.save();
  const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
    expiresIn: 86400,
  });
  res.json(token);
};

// ****** SIGN IN  **************************************
export const signIn = async (req, res) => {
  //let respo = await User.validate();
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );
  if (!userFound)
    return res.status(400).json({ message: "error.user_not_found" });

  const matchPassword = await User.validatePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({ message: "error.invalid_password" });

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });
  res.json({ token, userId: userFound._id });

  console.log("token + id", userFound, userFound._id);
};

// ****** GET, POST, PUT, DELETE **************************************

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

export const getUserById = async (req, res) => {
  const getUser = await User.findById(req.params.userId);
  res.status(200).json(getUser);
};

export const getPilots = async (req, res) => {
  console.log("getPilots");
  const data = req.params.pilots;
  if (data) {
    const getUser = await User.find({ haveDrone: true });
  }
  res.status(200).send("legal");
};

export const getPilotsByCity = async (req, res) => {
  const data = req.params.city;
  const getUser = await User.find({ city: data }).find({ haveDrone: true });
  res.status(200).json(getUser);
};

export const updateUserById = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedUser);
};

export const updateFavorites = async (req, res) => {
  const updatedFavorite = await User.findOne({ _id: req.params.userId });
  console.log(req.body);
  updatedFavorite.favorites.push(req.body);
  await updatedFavorite.save();
  res.status(200).json(updatedFavorite);
};

export const removeFavorite = async (req, res) => {
  console.log("req params", req.params);
  const userId = req.params.userId;
  const favoriteId = req.body.params.id;
  console.log("userId params", userId);
  console.log("favorite params", favoriteId);
  const deleteFavorite = await User.findOneAndUpdate(
    { _id: userId },
    { $pull: { favorites: { id: favoriteId } } }
  );
  await deleteFavorite.save();
  res.status(200).json("ok");
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  const deletedUser = await User.findByIdAndDelete(userId);
  res.status(204).json();
};
