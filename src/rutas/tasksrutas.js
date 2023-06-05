// Importo de Express la funcion Router - Definir rutas y agruparlas
import {Router} from "express"
import Task from "../models/Task"
const router = Router()


// Rutas GET
router.get("/",async (req,res)=>{
    const tasks = await Task.find()
    res.json(tasks)
})

// Ruta POST
router.post("/", async (req,res)=>{
    const newTask = new Task({title: req.body.title, description: req.body.description})
    const taskSaved = await newTask.save()
    res.json(taskSaved)
})


export default router;