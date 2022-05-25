"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightcolorpalette = exports.darkcolorpalette = void 0;

var _Colors = require("../style/Colors/Colors");

var lightcolorpalette = {
  palette: {
    mode: "light",
    background: {
      paper: '#fff',
      default: '#fff'
    },
    primary: {
      main: _Colors.primary[400],
      contrastText: _Colors.neutrals[50]
    },
    secondary: {
      main: _Colors.secondary[400],
      contrastText: _Colors.neutrals[1000]
    },
    success: {
      main: _Colors.green[600],
      contrastText: _Colors.neutrals[1000]
    },
    error: {
      main: _Colors.red[600],
      contrastText: _Colors.neutrals[50]
    },
    warning: {
      main: _Colors.yellow[600],
      contrastText: _Colors.neutrals[1000]
    },
    info: {
      main: _Colors.purple[600],
      contrastText: _Colors.neutrals[50]
    }
  }
};
exports.lightcolorpalette = lightcolorpalette;
var darkcolorpalette = {
  palette: {
    mode: 'dark',
    background: {
      paper: '#121212',
      default: '#121212'
    },
    primary: {
      main: _Colors.nPrimary[400],
      contrastText: _Colors.nNeutrals[50]
    },
    secondary: {
      main: _Colors.nSecondary[400],
      contrastText: _Colors.nNeutrals[900]
    },
    success: {
      main: _Colors.nGreen[600],
      contrastText: _Colors.nNeutrals[900]
    },
    error: {
      main: _Colors.nRed[600],
      contrastText: _Colors.nNeutrals[50]
    },
    warning: {
      main: _Colors.nYellow[600],
      contrastText: _Colors.nNeutrals[900]
    },
    info: {
      main: _Colors.nPurple[600],
      contrastText: _Colors.nNeutrals[50]
    }
  }
};
exports.darkcolorpalette = darkcolorpalette;