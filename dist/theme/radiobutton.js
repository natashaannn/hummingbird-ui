"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radiobutton = void 0;

var _Colors = require("../style/Colors/Colors");

var radiobutton = {
  MuiRadio: {
    styleOverrides: {
      root: {
        "&.Mui-focusVisible": {
          backgroundColor: _Colors.secondary[400]
        },
        '&:hover': {
          backgroundColor: _Colors.secondary[100]
        }
      }
    },
    variants: [{
      props: {
        state: 'Focus'
      },
      style: {
        ':hover': {
          backgroundColor: _Colors.secondary[100]
        },
        backgroundColor: _Colors.secondary[400]
      }
    }, {
      props: {
        state: 'Hover'
      },
      style: {
        ':hover': {
          backgroundColor: _Colors.secondary[400]
        },
        backgroundColor: _Colors.secondary[100]
      }
    }]
  }
};
exports.radiobutton = radiobutton;