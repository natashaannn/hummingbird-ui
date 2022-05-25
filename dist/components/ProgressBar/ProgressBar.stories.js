"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

var _Colors = require("../../style/Colors/Colors");

var _default = {
  title: 'Components/ProgressBar',
  component: _ProgressBar.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_ProgressBar.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  BarBackgroundColor: _Colors.neutrals[100],
  BarColor: _Colors.primary[400],
  TextColor: _Colors.primary[400]
};