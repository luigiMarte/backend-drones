import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
    },
    roles: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId,
      },
    ],
    avatar: {
      type: String,
      unique: true,
    },
    alias: {
      type: String,
      unique: true,
    },
    country: {
      type: String,
      unique: true,
    },
    city: {
      type: String,
      unique: true,
    },
    postalCode: {
      type: String,
      unique: true,
    },
    phone: {
      type: Number,
      unique: true,
    },
    aboutMe: {
      type: String,
      unique: true,
    },
    haveDrone: {
      type: Boolean,
      unique: true,
    },
    droneBrand: {
      type: String,
      unique: true,
    },
    droneModel: {
      type: String,
      unique: true,
    },
    latitude: {
      type: String,
      unique: true,
    },
    longitude: {
      type: String,
      unique: true,
    },
    price: {
      type: Number,
      unique: true,
    },
    webpage: {
      type: String,
      unique: true,
    },
    enabled: {
      type: Boolean,
      unique: true,
    },
    rating: {
      type: Number,
      unique: true,
    },
    state: {
      type: Boolean,
      unique: true,
    },
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

// formas de crear metodos sin instanciar  un objeto:
// - userSchema.methods.
// otra forma:
// userSchema.methods.encryptPassword = async (pass) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(pass, salt);
// };

// userSchema.methods.checkPassword = async (password, receivePassword) => {
//   //return await bcrypt.comparePassword(password, receivePassword);
//   return 'checked';
// };

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
userSchema.statics.validatePassword = async (password, receivePassword) => {
  return await bcrypt.compare(password, receivePassword);
};

export default model('User', userSchema);
