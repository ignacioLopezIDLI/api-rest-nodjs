// Importo Express
import Express from "express"
import TasksRutas from "./rutas/tasksrutas"

// Creo Instancia de APP
const app = Express()

// Settings
app.set("puerto", process.env.PORT || 3000) // Si el puerto esta definido usa ese por Defecto

// Rutas
app.get("/",(req,res)=>{
    res.json({mesage:"Bienvenido a la Aplicacion"})
})

app.use("/api/tasks",TasksRutas)
    
export default app