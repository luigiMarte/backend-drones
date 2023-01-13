"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _initialSetup = require("./libs/initialSetup.js");
var _userInfoRoutes = _interopRequireDefault(require("./routes/userInfo.routes.js"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// App.js --> Para configurar express

//import pack from "../package.json";

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
(0, _initialSetup.createRoles)();
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);

// usamos metodo set de express
//app.set("pack", pack);
app.set("path", _path["default"]);

// Morgan es un middleware de express xa mostrar GET, stados en consola
app.use((0, _morgan["default"])("dev"));

// para que express use json con los datos del servidor
app.use(_express["default"].json());
// app.get("/", (req, res) => {
//   res.json({
//     author: app.get("pack").author,
//     description: app.get("pack").description,
//     version: app.get("pack").version,
//   });
// });

app.get("/", function (req, res) {
  res.status(200).json("ok");
});
app.use("/api/users", _userInfoRoutes["default"]);
app.use("/api/auth", _authRoutes["default"]);
console.log(_path["default"].join(_dirname, "../dist"));
app.use(_express["default"]["static"](_path["default"].join(_dirname, "..", "..", "dist")));
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../dist', 'index.html'));
// });
var _default = app;
exports["default"] = _default;