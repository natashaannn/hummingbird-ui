"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkbox = void 0;

var _Colors = require("../style/Colors/Colors");

//refer to https://mui.com/material-ui/customization/theme-components/
//refer to https://mui.com/material-ui/react-switch/
//cannot change any color/background color even in root...
var checkbox = {
  MuiCheckbox: {
    styleOverrides: {
      root: {
        "&.Mui-focusVisible": {
          backgroundColor: _Colors.secondary[400]
        },
        '&:hover': {
          backgroundColor: _Colors.secondary[100]
        } // '&:focus' : {
        //   backgroundColor : 'black',
        // }

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
exports.checkbox = checkbox;