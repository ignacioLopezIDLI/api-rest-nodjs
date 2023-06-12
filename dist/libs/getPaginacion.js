"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPaginacion = void 0;
var getPaginacion = function getPaginacion(page, size) {
  var limit = size ? +size : 3; // Si exite size se asigna  si no se establece 3 documentos por pag
  var offset = page ? page * limit : 0; // Determina desde donde empieza a mostar los documentos y salta los vistos 
  return {
    limit: limit,
    offset: offset
  };
};
exports.getPaginacion = getPaginacion;