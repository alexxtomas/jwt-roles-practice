"use strict";

var _app = _interopRequireDefault(require("./app.js"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
_mongoose["default"].connect('mongodb+srv://atomas:24022004llimos@cluster0.tmiizuq.mongodb.net/companydb?retryWrites=true&w=majority').then(function () {
  return 'Connected to MongoDB';
})["catch"](function (e) {
  return console.error(e);
});
_app["default"].listen(3000, function () {
  return console.log('Server running on port ' + 3000);
});