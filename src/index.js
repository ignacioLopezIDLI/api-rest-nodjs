import app from "./app"
import "./database"

app.listen(app.get("puerto"))
console.log("Servidor en el puerto  ", app.get("puerto"))