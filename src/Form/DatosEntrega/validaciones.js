export const validarDireccion = (direccion) =>{
    const length = direccion.length;
    return (length > 1 && length < 30 ) ? true : false
};


export const validarCiudad = (ciudad) =>{
    const length = ciudad.length;
    return (length > 1 && length < 30 ) ? true : false
};

export const validarEstado = (estado) =>{
    const length = estado.length;
    return (length > 1 && length < 30) ? true : false
}