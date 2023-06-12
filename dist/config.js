"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
// Permite que las variables de entorno se puedan Ejecutar

(0, _dotenv.config)();

// Exporto la varible con un nombre mas facil
var _default = {
  mongodbURL: process.env.MONGODB_URI || "mongodb://localhost/tasksdb"
};
exports["default"] = _default;