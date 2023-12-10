function productoEsNuevo(fechaCreacion, fechaActual) {
    const fechaProducto = new Date(fechaCreacion);
    const unDiaAtras = new Date();
    unDiaAtras.setDate(unDiaAtras.getDate() - 1);
    return fechaProducto >= unDiaAtras && fechaProducto <= fechaActual;
}

module.exports = { productoEsNuevo };