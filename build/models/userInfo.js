"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var userInfoSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  done: {
    type: Boolean,
    "default": false
  },
  state: {
    type: Boolean,
    "default": true
  }
}, {
  versionKey: false
});

//moongose agrega una s al nombre de la coleccion
var _default = (0, _mongoose.model)('info', userInfoSchema);
exports["default"] = _default;