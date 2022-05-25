"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _theme = require("../../theme/theme");

var _Colors = require("../../style/Colors/Colors");

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Components/Switch',
  component: _material.Switch,
  argTypes: {
    color: {
      options: ['default', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['small', 'medium'],
      control: {
        type: 'select'
      }
    },
    label: {
      control: 'text'
    },
    state: {
      options: ['Default', 'hover', 'focus'],
      control: {
        type: 'radio'
      }
    },
    disabled: {
      control: 'boolean'
    },
    checked: {
      control: 'boolean'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_material.ThemeProvider, {
    theme: _theme.lightTheme
  }, /*#__PURE__*/_react.default.createElement(_material.FormControlLabel, {
    control: /*#__PURE__*/_react.default.createElement(_material.Switch, args),
    label: args.label
  }));
};

var Default = Template.bind({}); // More on args: https://storybook.js.org/docs/react/writing-stories/args

exports.Default = Default;
Default.args = {
  color: "primary",
  size: "medium",
  label: "Label",
  state: "Default",
  disabled: false
};