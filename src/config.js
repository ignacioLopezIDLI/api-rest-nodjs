// Permite que las variables de entorno se puedan Ejecutar
import {config} from "dotenv"
config()

// Exporto la varible con un nombre mas facil
export default{
    mongodbURL: process.env.MONGODB_URI || "mongodb://localhost/tasksdb"
}