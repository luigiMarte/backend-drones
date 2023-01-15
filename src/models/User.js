import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    roles: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId,
      },
    ],
    avatar: {
      type: String,
      required: true,
      trim: true,
    },
    alias: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    postalCode: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    aboutMe: {
      type: String,
      required: false,
    },
    haveDrone: {
      type: Boolean,
      required: true,
    },
    droneBrand: {
      type: String,
      trim: true,
    },
    droneModel: {
      type: String,
      trim: true,
    },
    latitude: {
      type: String,
      trim: true,
    },
    longitude: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    webpage: {
      type: String,
      trim: true,
    },
    video: {
      type: String,
      trim: true,
    },
    youtube: {
      type: String,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
    tiktok: {
      type: String,
      trim: true,
    },
    twitter: {
      type: String,
      trim: true,
    },
    facebook: {
      type: String,
      trim: true,
    },
    enabled: {
      type: Boolean,
    },
    rating: {
      type: Number,
    },
    state: {
      type: Boolean,
    },
    favorites: {
      type: Array,
    },
    currency: {
      type: String,
      trim: true,
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
