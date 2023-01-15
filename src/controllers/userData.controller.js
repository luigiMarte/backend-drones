// Para crear, eleminar  ..., usuarios

//import dataUserSchema from '../models/DataUser';
import User from '../models/User.js';

export const createUser = async (req, res) => {
  console.log(req.body);
  const {
    avatar,
    name,
    country,
    city,
    postalCode,
    phone,
    aboutMe,
    haveDrone,
    droneBrand,
    droneModel,
    longitude,
    latitude,
    rating,
    price,
    webpage,
    enabled,
    other1,
    other2,
    state,
    currency,
  } = req.body;
  const newUser = new dataUserSchema({
    avatar,
    name,
    country,
    city,
    postalCode,
    phone,
    aboutMe,
    haveDrone,
    droneBrand,
    droneModel,
    longitude,
    latitude,
    rating,
    price,
    webpage,
    enabled,
    other1,
    other2,
    state,
    currency,
  });
  const userSaved = await newUser.save();
  console.log(newUser);
  res.json(userSaved);
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

export const getUserById = async (req, res) => {
  const getUser = await User.findById(req.params.userId);
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

export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  const deletedUser = await User.findByIdAndDelete(userId);
  res.status(204).json();
};
