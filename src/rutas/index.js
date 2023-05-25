// Importo de Express la funcion Router - Definir rutas y agruparlas
import {Router} from "express";
const router = Router()


// Rutas
router.get("/tasks",(req,res)=>{
    res.send("Tasks")
})


export default router;