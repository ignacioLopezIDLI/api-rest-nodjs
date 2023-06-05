// Importo mongoose - Config para leer varible entorno 
import mongoose from "mongoose"
import config from "./config"

// Funcion Async Await

(async () => {
    const db = await mongoose.connect(config.mongodbURL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    console.log("Base de datos conectada:", db.connection.name)
})()