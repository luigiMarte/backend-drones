import { Schema, model } from 'mongoose';

const userInfoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    state: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
  }
);

//moongose agrega una s al nombre de la coleccion
export default model('info', userInfoSchema);
