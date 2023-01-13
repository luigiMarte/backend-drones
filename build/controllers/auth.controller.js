"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserById = exports.updateFavorites = exports.signUp = exports.signIn = exports.removeFavorite = exports.getUsers = exports.getUserById = exports.getPilotsByCity = exports.getPilots = exports.deleteUser = void 0;
var _User = _interopRequireDefault(require("../models/User.js"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _config = _interopRequireDefault(require("../config.js"));
var _Role = _interopRequireDefault(require("../models/Role.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//import userInfo from '../models/userInfo';

// *****  SIGN UP ***************************************
var signUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, username, email, password, roles, avatar, alias, country, city, postalCode, phone, aboutMe, haveDrone, droneBrand, droneModel, latitude, longitude, price, webpage, video, youtube, instagram, tiktok, twitter, facebook, rating, enabled, state, newUser, foundRoles, role, saveUser, token;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // pasar aqui la referencia, o todos los datos si no
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, roles = _req$body.roles, avatar = _req$body.avatar, alias = _req$body.alias, country = _req$body.country, city = _req$body.city, postalCode = _req$body.postalCode, phone = _req$body.phone, aboutMe = _req$body.aboutMe, haveDrone = _req$body.haveDrone, droneBrand = _req$body.droneBrand, droneModel = _req$body.droneModel, latitude = _req$body.latitude, longitude = _req$body.longitude, price = _req$body.price, webpage = _req$body.webpage, video = _req$body.video, youtube = _req$body.youtube, instagram = _req$body.instagram, tiktok = _req$body.tiktok, twitter = _req$body.twitter, facebook = _req$body.facebook, rating = _req$body.rating, enabled = _req$body.enabled, state = _req$body.state;
            _context.t0 = _User["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 6;
            return _User["default"].encryptPassword(password);
          case 6:
            _context.t3 = _context.sent;
            _context.t4 = avatar;
            _context.t5 = alias;
            _context.t6 = country;
            _context.t7 = city;
            _context.t8 = postalCode;
            _context.t9 = phone;
            _context.t10 = aboutMe;
            _context.t11 = haveDrone;
            _context.t12 = droneBrand;
            _context.t13 = droneModel;
            _context.t14 = latitude;
            _context.t15 = longitude;
            _context.t16 = price;
            _context.t17 = webpage;
            _context.t18 = video;
            _context.t19 = youtube;
            _context.t20 = instagram;
            _context.t21 = tiktok;
            _context.t22 = twitter;
            _context.t23 = facebook;
            _context.t24 = rating;
            _context.t25 = enabled;
            _context.t26 = state;
            _context.t27 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3,
              avatar: _context.t4,
              alias: _context.t5,
              country: _context.t6,
              city: _context.t7,
              postalCode: _context.t8,
              phone: _context.t9,
              aboutMe: _context.t10,
              haveDrone: _context.t11,
              droneBrand: _context.t12,
              droneModel: _context.t13,
              latitude: _context.t14,
              longitude: _context.t15,
              price: _context.t16,
              webpage: _context.t17,
              video: _context.t18,
              youtube: _context.t19,
              instagram: _context.t20,
              tiktok: _context.t21,
              twitter: _context.t22,
              facebook: _context.t23,
              rating: _context.t24,
              enabled: _context.t25,
              state: _context.t26
            };
            newUser = new _context.t0(_context.t27);
            if (!roles) {
              _context.next = 39;
              break;
            }
            _context.next = 35;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });
          case 35:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 43;
            break;
          case 39:
            _context.next = 41;
            return _Role["default"].findOne({
              name: "user"
            });
          case 41:
            role = _context.sent;
            newUser.roles = [role._id];
          case 43:
            console.log(newUser);
            _context.next = 46;
            return newUser.save();
          case 46:
            saveUser = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: saveUser._id
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            res.json(token);
          case 49:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// ****** SIGN IN  **************************************
exports.signUp = signUp;
var signIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var userFound, matchPassword, token;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              email: req.body.email
            }).populate("roles");
          case 2:
            userFound = _context2.sent;
            if (userFound) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", res.status(400).json({
              message: "error.user_not_found"
            }));
          case 5:
            _context2.next = 7;
            return _User["default"].validatePassword(req.body.password, userFound.password);
          case 7:
            matchPassword = _context2.sent;
            if (matchPassword) {
              _context2.next = 10;
              break;
            }
            return _context2.abrupt("return", res.status(401).json({
              message: "error.invalid_password"
            }));
          case 10:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            res.json({
              token: token,
              userId: userFound._id
            });
            console.log("token + id", userFound, userFound._id);
          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// ****** GET, POST, PUT, DELETE **************************************
exports.signIn = signIn;
var getUsers = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _User["default"].find();
          case 2:
            users = _context3.sent;
            res.send(users);
          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function getUsers(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getUsers = getUsers;
var getUserById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var getUser;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _User["default"].findById(req.params.userId);
          case 2:
            getUser = _context4.sent;
            res.status(200).json(getUser);
          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function getUserById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getUserById = getUserById;
var getPilots = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var data, getUser;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log("getPilots");
            data = req.params.pilots;
            if (!data) {
              _context5.next = 6;
              break;
            }
            _context5.next = 5;
            return _User["default"].find({
              haveDrone: true
            });
          case 5:
            getUser = _context5.sent;
          case 6:
            res.status(200).send("legal");
          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function getPilots(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getPilots = getPilots;
var getPilotsByCity = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var data, getUser;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            data = req.params.city;
            _context6.next = 3;
            return _User["default"].find({
              city: data
            }).find({
              haveDrone: true
            });
          case 3:
            getUser = _context6.sent;
            res.status(200).json(getUser);
          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function getPilotsByCity(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getPilotsByCity = getPilotsByCity;
var updateUserById = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var updatedUser;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _User["default"].findByIdAndUpdate(req.params.userId, req.body, {
              "new": true
            });
          case 2:
            updatedUser = _context7.sent;
            res.status(200).json(updatedUser);
          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function updateUserById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.updateUserById = updateUserById;
var updateFavorites = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var updatedFavorite;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _User["default"].findOne({
              _id: req.params.userId
            });
          case 2:
            updatedFavorite = _context8.sent;
            console.log(req.body);
            updatedFavorite.favorites.push(req.body);
            _context8.next = 7;
            return updatedFavorite.save();
          case 7:
            res.status(200).json(updatedFavorite);
          case 8:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return function updateFavorites(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.updateFavorites = updateFavorites;
var removeFavorite = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var userId, favoriteId, deleteFavorite;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            console.log("req params", req.params);
            userId = req.params.userId;
            favoriteId = req.body.params.id;
            console.log("userId params", userId);
            console.log("favorite params", favoriteId);
            _context9.next = 7;
            return _User["default"].findOneAndUpdate({
              _id: userId
            }, {
              $pull: {
                favorites: {
                  id: favoriteId
                }
              }
            });
          case 7:
            deleteFavorite = _context9.sent;
            _context9.next = 10;
            return deleteFavorite.save();
          case 10:
            res.status(200).json("ok");
          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return function removeFavorite(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.removeFavorite = removeFavorite;
var deleteUser = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var userId, deletedUser;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            userId = req.params.userId;
            _context10.next = 3;
            return _User["default"].findByIdAndDelete(userId);
          case 3:
            deletedUser = _context10.sent;
            res.status(204).json();
          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return function deleteUser(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.deleteUser = deleteUser;