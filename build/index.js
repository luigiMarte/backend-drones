"use strict";

var _app = _interopRequireDefault(require("./app.js"));
require("./database.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Index.js --> Para arrancar la aplicación

_app["default"].listen(3000);
console.log("Server running on port", 3000);