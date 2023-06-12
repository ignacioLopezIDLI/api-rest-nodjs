// Importo App configuracion del servidor - Database config base datos
import app from "./app"
import "./database.js"

// Ejecuto la APP 
app.listen(app.get("puerto"))
console.log("Servidor en el puerto  ", app.get("puerto"))   