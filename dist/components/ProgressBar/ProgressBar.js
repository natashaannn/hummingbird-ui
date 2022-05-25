"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));

var _material = require("@mui/material");

var _LinearProgress = require("@mui/material/LinearProgress");

var _styles = require("@mui/material/styles");

var OuterBoxStyle = {
  margin: "10px",
  marginLeft: "10%",
  marginRight: "10%"
};
var OuterText = {
  textAlign: "center"
};
ProgressBar.defaultProps = {
  BarBackgroundColor: "#385682",
  BarColor: "#5297FF",
  value: "84"
};

function ProgressBar(props) {
  var BarBackgroundColor = props.BarBackgroundColor;
  var BarColor = props.BarColor;
  var TextColor = props.TextColor;
  var BorderLinearProgress = (0, _styles.styled)(_material.LinearProgress)(function () {
    var _ref;

    return _ref = {
      height: 19,
      borderRadius: 10
    }, (0, _defineProperty2.default)(_ref, "&.".concat(_LinearProgress.linearProgressClasses.colorPrimary), {
      backgroundColor: BarBackgroundColor //"#385682"

    }), (0, _defineProperty2.default)(_ref, "& .".concat(_LinearProgress.linearProgressClasses.bar), {
      borderRadius: 10,
      backgroundColor: BarColor //'#5297FF'

    }), _ref;
  });
  return /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(BorderLinearProgress, {
    style: OuterBoxStyle,
    variant: "determinate",
    value: props.value
  }), /*#__PURE__*/React.createElement(_material.Box, {
    sx: {
      minWidth: 35
    }
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    style: OuterText,
    variant: "body2",
    color: props.textColor
  }, "".concat(Math.round(props.value), "%"), " Completed")));
}

var _default = ProgressBar;
exports.default = _default;