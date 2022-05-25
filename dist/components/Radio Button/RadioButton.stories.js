"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HoverState = exports.FocusState = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _theme = require("../../theme/theme");

var _Radio = _interopRequireDefault(require("@mui/material/Radio"));

var _FormControlLabel = _interopRequireDefault(require("@mui/material/FormControlLabel"));

var _Colors = require("../../style/Colors/Colors");

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var _default = {
  title: 'Components/RadioButton',
  component: _Radio.default,
  argTypes: {
    checked: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    label: {
      control: 'text'
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select'
      }
    },
    state: {
      options: ['Default', 'Focus', 'Hover'],
      control: 'radio'
    },
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: {
        type: 'select'
      }
    },
    disableRipple: {
      control: 'boolean'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_material.ThemeProvider, {
    theme: _theme.lightTheme
  }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
    control: /*#__PURE__*/_react.default.createElement(_Radio.default, args),
    label: args.label
  }));
};

var Default = Template.bind({}); // More on args: https://storybook.js.org/docs/react/writing-stories/args

exports.Default = Default;
Default.args = {
  color: 'primary',
  size: 'medium',
  label: 'Label',
  state: 'Default',
  disabled: false,
  disableRipple: false
};
var FocusState = Template.bind({});
exports.FocusState = FocusState;
FocusState.args = {
  color: 'primary',
  size: 'medium',
  label: 'Label',
  state: 'Default',
  disabled: false,
  disableRipple: false,
  sx: {
    backgroundColor: _Colors.secondary[400],
    '&:hover': {
      backgroundColor: _Colors.secondary[100]
    }
  }
};
var HoverState = Template.bind({}); // More on args: https://storybook.js.org/docs/react/writing-stories/args

exports.HoverState = HoverState;
HoverState.args = {
  color: 'primary',
  size: 'medium',
  label: 'Label',
  state: 'Default',
  disabled: false,
  disableRipple: false,
  sx: {
    backgroundColor: _Colors.secondary[100],
    '&:hover': {
      backgroundColor: _Colors.secondary[100]
    }
  }
};