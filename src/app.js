// Importo Express - Rutas importadas
import Express from "express"
import morgan from "morgan"
import cors from "cors"
import TasksRutas from "./rutas/tasksrutas"



// Creo Instancia de APP
const app = Express()

// Settings
app.set("puerto", process.env.PORT || 3000) // Si el puerto esta definido usa ese por Defecto

// Middlewares
app.use(cors())
app.use(morgan("dev"))  // Ver Peticiones HTTP
app.use(Express.json()) // Para que pueda leer Archivos Json
app.use(Express.urlencoded({extended: false})) // Formularios HTML


// Rutas
app.get("/",(req,res)=>{
    res.json({mesage:"Bienvenido a la Aplicacion!"})
})

app.use("/api/tasks",TasksRutas)
    


export default app