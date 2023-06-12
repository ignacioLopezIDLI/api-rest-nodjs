"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _tasksrutas = _interopRequireDefault(require("./rutas/tasksrutas"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Importo Express - Rutas importadas

// Creo Instancia de APP
var app = (0, _express["default"])();

// Settings
app.set("puerto", process.env.PORT || 3000); // Si el puerto esta definido usa ese por Defecto

// Middlewares
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev")); // Ver Peticiones HTTP
app.use(_express["default"].json()); // Para que pueda leer Archivos Json
app.use(_express["default"].urlencoded({
  extended: false
})); // Formularios HTML

// Rutas
app.get("/", function (req, res) {
  res.json({
    mesage: "Bienvenido a la Aplicacion!"
  });
});
app.use("/api/tasks", _tasksrutas["default"]);
var _default = app;
exports["default"] = _default;