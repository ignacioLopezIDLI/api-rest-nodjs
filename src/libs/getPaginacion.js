export const  getPaginacion = (page, size) => {
    const limit = size ? +size : 3          // Si exite size se asigna  si no se establece 3 documentos por pag
    const offset = page ? page * limit : 0  // Determina desde donde empieza a mostar los documentos y salta los vistos 
    return { limit , offset}
}