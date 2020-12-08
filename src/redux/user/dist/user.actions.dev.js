"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailSignInStart = exports.signInFailure = exports.signInSuccess = exports.googleSignInStart = void 0;

var _user = _interopRequireDefault(require("./user.types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var googleSignInStart = function googleSignInStart() {
  return {
    type: _user["default"].GOOGLE_SIGN_IN_START
  };
};

exports.googleSignInStart = googleSignInStart;

var signInSuccess = function signInSuccess(user) {
  return {
    type: _user["default"].SIGN_IN_SUCCESS,
    payload: user
  };
};

exports.signInSuccess = signInSuccess;

var signInFailure = function signInFailure(error) {
  return {
    type: _user["default"].SIGN_IN_FAILURE,
    payload: error
  };
};

exports.signInFailure = signInFailure;

var emailSignInStart = function emailSignInStart(emailAndPassword) {
  return {
    type: _user["default"].EMAIL_SIGN_IN_START,
    payload: emailAndPassword
  };
};

exports.emailSignInStart = emailSignInStart;