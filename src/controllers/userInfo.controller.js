// Para crear, eleminar  ..., usuarios

import info from '../models/userInfo';

export const createUser = async (req, res) => {
  console.log(req.body);
  const { name, description, state, done } = req.body;
  const newUser = new info({ name, description, state, done });
  const userSaved = await newUser.save();
  res.json(userSaved);

  //res.status(201).json(userSaved);
  //   const {
  //     name,
  //     alias,
  //     country,
  //     city,
  //     email,
  //     password,
  //     img,
  //     role,
  //     description,
  //     state,
  //   } = req.body;

  //   const newUser = new User({
  //     name,
  //     alias,
  //     country,
  //     city,
  //     email,
  //     password,
  //     img,
  //     role,
  //     description,
  //     state,
  //   });

  //const userSaved = await newUser.save();

  //res.status(201).json(userSaved);
};

export const getUsers = async (req, res) => {
  const users = await info.find();
  res.send(users);
};

export const getUserById = async (req, res) => {
  const getUser = await info.findById(req.params.userId);
  res.status(200).json(getUser);
};

export const updateUserById = async (req, res) => {
  const updatedUser = await info.findByIdAndUpdate(
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
  const deletedUser = await info.findByIdAndDelete(userId);
  res.status(204).json();
};
