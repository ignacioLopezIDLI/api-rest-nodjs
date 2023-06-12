"use strict";

var _app = _interopRequireDefault(require("./app"));
require("./database.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Importo App configuracion del servidor - Database config base datos

// Ejecuto la APP 
_app["default"].listen(_app["default"].get("puerto"));
console.log("Servidor en el puerto  ", _app["default"].get("puerto"));