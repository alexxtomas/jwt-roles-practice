"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _package = _interopRequireDefault(require("../package.json"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.set('jsonPackage', _package["default"]);
app.use((0, _morgan["default"])('dev'));
app.get('/', function (req, res) {
  res.json({
    name: app.get('jsonPackage').name,
    author: app.get('jsonPackage').author,
    versopm: app.get('jsonPackage').version,
    description: app.get('jsonPackage').description
  });
});
app.use('/products', _products["default"]);
var _default = app;
exports["default"] = _default;