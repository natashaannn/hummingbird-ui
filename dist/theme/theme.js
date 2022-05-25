"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lightTheme = exports.darkTheme = void 0;

var _styles = require("@mui/material/styles");

var _utils = require("@mui/utils");

var _typography = require("./typography");

var _switches = require("./switches");

var _icon = require("./icon");

var _colorpalette = require("./colorpalette");

var _radiobutton = require("./radiobutton");

var _checkbox = require("./checkbox");

var _fonts = require("./fonts");

//MUI imports
//local imports
// Theme overrides for components
var components = {
  components: Object.assign({}, _fonts.fonts, _checkbox.checkbox, _switches.switches, _icon.icon, _radiobutton.radiobutton)
}; // Common settings across both light and dark themes

var commonSettings = Object.assign({}, _typography.typography, components); // Merging light theme palette and common settings

var lightTheme = (0, _styles.createTheme)((0, _utils.deepmerge)(_colorpalette.lightcolorpalette, commonSettings)); // Merging dark theme palette and common settings

exports.lightTheme = lightTheme;
var darkTheme = (0, _styles.createTheme)((0, _utils.deepmerge)(_colorpalette.darkcolorpalette, commonSettings));
exports.darkTheme = darkTheme;