// Importo Schema y Model 
import { Schema,model } from "mongoose"


// Creo Esquema para organizar los datos

const taskSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true 
    },
    description:{
        type: String,
        trim: true
    },
    done:{
       type: Boolean,
       default: false
    },
},{
    versionKey: false,
    timestamps: true
})

// Configuro Model - Interfaz para manipular datos  

export default model("Task",taskSchema)