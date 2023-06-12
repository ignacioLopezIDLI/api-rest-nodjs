"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Importo Schema y Model 

// Creo Esquema para organizar los datos

var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  versionKey: false,
  timestamps: true
});

// Configuro Model - Interfaz para manipular datos  

taskSchema.plugin(_mongoosePaginateV["default"]);
var _default = (0, _mongoose.model)("Task", taskSchema);
exports["default"] = _default;