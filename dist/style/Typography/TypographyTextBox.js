"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CssBaseline = _interopRequireDefault(require("@mui/material/CssBaseline"));

var _styles = require("@mui/material/styles");

var _theme = require("../../theme/theme");

var _material = require("@mui/material");

function TypographyTextBox(props) {
  return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: _theme.lightTheme
  }, /*#__PURE__*/_react.default.createElement(_CssBaseline.default, null), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: props.type
  }, " ", props.text, " "));
}

var _default = TypographyTextBox;
exports.default = _default;