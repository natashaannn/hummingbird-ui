"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _theme = require("../../theme/theme");

var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));

var _default = {
  title: 'Components/Icon',
  component: _material.Icon,
  argTypes: {
    fontSize: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select'
      }
    },
    color: {
      options: ['inherit', 'default', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: {
        type: 'select'
      }
    },
    state: {
      options: ['Default', 'hover', 'focus'],
      control: {
        type: 'radio'
      }
    },
    disabled: {
      control: 'boolean'
    }
  }
}; // Take icon from https://fonts.google.com/icons

exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_material.ThemeProvider, {
    theme: _theme.lightTheme
  }, /*#__PURE__*/_react.default.createElement(_material.IconButton, args, /*#__PURE__*/_react.default.createElement(_Delete.default, {
    fontSize: args.fontSize
  })));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  color: "primary",
  fontSize: "medium",
  state: "Default",
  disabled: false
};