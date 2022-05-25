"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icon = void 0;

var _Colors = require("../style/Colors/Colors");

var icon = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        // borderRadius: "50%",
        // padding : "5px",
        "&.Mui-focusVisible": {
          backgroundColor: _Colors.secondary[400]
        },
        ':hover': {
          backgroundColor: _Colors.secondary[100]
        }
      }
    },
    variants: [{
      props: {
        state: 'focus'
      },
      style: {
        backgroundColor: _Colors.secondary[400]
      }
    }, {
      props: {
        state: 'hover'
      },
      style: {
        backgroundColor: _Colors.secondary[100]
      }
    }]
  }
};
exports.icon = icon;