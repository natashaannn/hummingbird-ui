"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fonts = void 0;

var _LatoBlack = _interopRequireDefault(require("../assets/fonts/LatoBlack.ttf"));

var _LatoBold = _interopRequireDefault(require("../assets/fonts/LatoBold.ttf"));

var _LatoLight = _interopRequireDefault(require("../assets/fonts/LatoLight.ttf"));

var _LatoRegular = _interopRequireDefault(require("../assets/fonts/LatoRegular.ttf"));

var _LatoThin = _interopRequireDefault(require("../assets/fonts/LatoThin.ttf"));

var fonts = {
  MuiCssBaseline: {
    styleOverrides: "\n            @font-face{\n            font-family: 'LatoBlack';\n            src: local('LatoBlack'), url(".concat(_LatoBlack.default, ") format('truetype');\n            }\n\n            @font-face{\n            font-family: 'LatoBold';\n            src: local('LatoBold'), url(").concat(_LatoBold.default, ") format('truetype');\n            }\n           \n            @font-face{\n            font-family: 'LatoLight';\n            src: local('LatoLight'), url(").concat(_LatoLight.default, ") format('truetype');\n            }\n     \n            @font-face{\n            font-family: 'LatoRegular';\n            src: local('LatoRegular'), url(").concat(_LatoRegular.default, ") format('truetype');\n            }\n               \n            @font-face{\n            font-family: 'LatoThin';\n            src: local('LatoThin'), url(").concat(_LatoThin.default, ") format('truetype');\n            }\n\n        ")
  }
};
exports.fonts = fonts;