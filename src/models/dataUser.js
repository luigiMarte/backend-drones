import { Schema, model } from 'mongoose';

const dataUserSchema = new Schema(
  {
    avatar: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
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
    aboutMe: {
      type: String,
      required: true,
      trim: true,
    },
    haveDrone: {
      type: Boolean,
      default: false,
    },
    droneBrand: {
      type: String,
      required: true,
      trim: true,
    },
    droneModel: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    enabled: {
      type: Boolean,
      default: true,
    },
    currency: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

//moongose agrega una s al nombre de la coleccion
export default model('dataUser', dataUserSchema);
