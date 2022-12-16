import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';
//import Role from '../models/Role';

// *****  SIGN UP ***************************************
export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;
  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: 'user' });
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
    'roles'
  );
  if (!userFound) return res.status(400).json({ message: 'User not found' });

  const matchPassword = await User.validatePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(401).json({ message: 'Invalid Password' });

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });
  res.json({ token, userId: userFound._id });

  console.log('token + id', userFound, userFound._id);
};
