"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Set 'strictQuery' is only to remove console warning
_mongoose["default"].set('strictQuery', false).connect('mongodb+srv://main_user:5TDz0sE3kyiIE1zR@cluster0.xgbqbgq.mongodb.net/dronesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  //useFindAndModify: true,
  //useCreateIndex: true,
}).then(function (db) {
  return console.log('DB connected');
})["catch"](function (err) {
  return console.log('Error connecting', err);
});