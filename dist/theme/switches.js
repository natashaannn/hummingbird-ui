"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switches = void 0;

var _Colors = require("../style/Colors/Colors");

var _material = require("@mui/material");

//refer to https://mui.com/material-ui/customization/theme-components/
//refer to https://mui.com/material-ui/react-switch/
var switches = {
  MuiSwitch: {
    styleOverrides: {
      root: {
        '.Mui-disabled': {
          color: _Colors.neutrals[200]
        },
        '.MuiSwitch-colorPrimary': {
          '&.Mui-focusVisible': {
            backgroundColor: (0, _material.alpha)(_Colors.primary[400], 0.2)
          },
          '&:hover': {
            backgroundColor: (0, _material.alpha)(_Colors.primary[400], 0.1)
          }
        }
      }
    },
    variants: [{
      props: {
        state: 'focus'
      },
      style: {
        '.MuiSwitch-colorPrimary': {
          backgroundColor: (0, _material.alpha)(_Colors.primary[400], 0.2)
        }
      }
    }, {
      props: {
        state: 'hover'
      },
      style: {
        '.MuiSwitch-colorPrimary': {
          backgroundColor: (0, _material.alpha)(_Colors.primary[400], 0.1)
        }
      }
    }]
  }
};
exports.switches = switches;