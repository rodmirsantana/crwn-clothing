"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInWithGoogle = signInWithGoogle;
exports.signInWithEmail = signInWithEmail;
exports.onGoogleSignInStart = onGoogleSignInStart;
exports.onEmailSignInStart = onEmailSignInStart;
exports.userSagas = userSagas;

var _effects = require("redux-saga/effects");

var _user = _interopRequireDefault(require("./user.types"));

var _user2 = require("./user.actions");

var _firebase = require("../../firebase/firebase.utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(signInWithGoogle),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(signInWithEmail),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(onGoogleSignInStart),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(onEmailSignInStart),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(userSagas);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function signInWithGoogle() {
  var _ref, user, userRef, userSnapshot;

  return regeneratorRuntime.wrap(function signInWithGoogle$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _firebase.auth.signInWithPopup(_firebase.googleProvider);

        case 3:
          _ref = _context.sent;
          user = _ref.user;
          _context.next = 7;
          return (0, _effects.call)(_firebase.createUserProfileDocument, user);

        case 7:
          userRef = _context.sent;
          _context.next = 10;
          return userRef.get();

        case 10:
          userSnapshot = _context.sent;
          _context.next = 13;
          return (0, _effects.put)((0, _user2.signInSuccess)(_objectSpread({
            id: userSnapshot.id
          }, userSnapshot.data())));

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          _context.next = 19;
          return (0, _effects.put)((0, _user2.signInFailure)(_context.t0));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 15]]);
}

function signInWithEmail(_ref2) {
  var _ref2$payload, email, password, _ref3, user, userRef, userSnapshot;

  return regeneratorRuntime.wrap(function signInWithEmail$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _ref2$payload = _ref2.payload, email = _ref2$payload.email, password = _ref2$payload.password;
          _context2.prev = 1;
          _context2.next = 4;
          return _firebase.auth.signInWithEmailAndPassword(email, password);

        case 4:
          _ref3 = _context2.sent;
          user = _ref3.user;
          _context2.next = 8;
          return (0, _effects.call)(_firebase.createUserProfileDocument, user);

        case 8:
          userRef = _context2.sent;
          _context2.next = 11;
          return userRef.get();

        case 11:
          userSnapshot = _context2.sent;
          _context2.next = 14;
          return (0, _effects.put)((0, _user2.signInSuccess)(_objectSpread({
            id: userSnapshot.id
          }, userSnapshot.data())));

        case 14:
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](1);
          (0, _effects.put)((0, _user2.signInFailure)(_context2.t0));

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[1, 16]]);
}

function onGoogleSignInStart() {
  return regeneratorRuntime.wrap(function onGoogleSignInStart$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeLatest)(_user["default"].GOOGLE_SIGN_IN_START, signInWithGoogle);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function onEmailSignInStart() {
  return regeneratorRuntime.wrap(function onEmailSignInStart$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeLatest)(_user["default"].EMAIL_SIGN_IN_START, signInWithEmail);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function userSagas() {
  return regeneratorRuntime.wrap(function userSagas$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.all)([(0, _effects.call)(onGoogleSignInStart), (0, _effects.call)(onEmailSignInStart)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}