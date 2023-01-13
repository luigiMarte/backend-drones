"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    // sirve para eliminar espacios
    trim: true
  },
  alias: {
    type: String,
    required: true,
    trim: true
  },
  country: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true
  },
  img: {
    type: String
  },
  role: {
    type: String,
    required: true,
    emun: ['ADMIN_ROLE', 'USER_ROLE', 'PILOT_ROLE']
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: Boolean,
    // Default si no la paso desde el front añade automaticamente
    "default": true
  }
}, {
  // si no quieres que mongoose añada automaticamente el versionKey
  versionKey: false
});
var _default = (0, _mongoose.model)('User', userSchema);
exports["default"] = _default;