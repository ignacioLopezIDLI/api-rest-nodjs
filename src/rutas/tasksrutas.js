// Importo de Express la funcion Router - Definir rutas y agruparlas
import { Router } from "express";
import Task from "../models/Task";
import { getPaginacion } from "../libs/getPaginacion";
const router = Router();

// Ruta GET
router.get("/", async (req, res) => {
  try {
    const {size, page,title} = req.query   // Extraigo los parámetros de paginación (limit y offset) del query

    const condicion = title 
    ? {
      title: {$regex: new RegExp(title), $options : "i"}
      } 
    : {}

    const {limit, offset} = getPaginacion(page, size ) // Agrego los datos extraidos del Query y los valido 

    const data = await Task.paginate(condicion,{offset, limit});
    res.json({
      totalItems: data.totalDocs,
      documentos: data.docs,
      totalPaginas: data.totalPages,
      paginaActual : data.page


    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al ejecutar la peticion ",
    });
  }
});

// Ruta POST
router.post("/", async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Error al crear la peticion ",
    });
  }
});

// Ruta GET X ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task)
      return res
        .status(404)
        .json({ message: `La peticion con el Id ${id} no existe ` });

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error con la peticion con el Id ${id}`,
    });
  }
});

// Ruta DELETE Eliminar
router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
    const data = await Task.findByIdAndDelete(id);
    res.json({
    mensaje: `${data.title} Eliminado Correctamente`,
  });
  } catch (error) {
    res.status(500).json({
        message: error.message || `Error al eliminar la peticion  el Id ${id}`,
      });
  }
});

// Ruta PUT
router.put("/:id", async (req, res) => {
    const { id } = req.params
    try {
    const updatedTask = await Task.findByIdAndUpdate(id, req.body);
    res.json({ mensaje: `Se actualizo ${updatedTask.title} Correctamente` });
  } catch (error) {
    res.status(500).json({
        message: error.message || `Error al actualizar ${id}`,
      });
  }
});

export default router;
