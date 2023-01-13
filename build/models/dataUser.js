"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var dataUserSchema = new _mongoose.Schema({
  avatar: {
    type: String,
    required: true,
    trim: true
  },
  name: {
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
  postalCode: {
    type: String,
    required: true,
    trim: true
  },
  aboutMe: {
    type: String,
    required: true,
    trim: true
  },
  haveDrone: {
    type: Boolean,
    "default": false
  },
  droneBrand: {
    type: String,
    required: true,
    trim: true
  },
  droneModel: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: String,
    required: true,
    trim: true
  },
  enabled: {
    type: Boolean,
    "default": true
  }
}, {
  versionKey: false
});

//moongose agrega una s al nombre de la coleccion
var _default = (0, _mongoose.model)('dataUser', dataUserSchema);
exports["default"] = _default;