function productoEsNuevo(fechaCreacion, fechaActual) {
    const fechaProducto = new Date(fechaCreacion);
    const unaSemanaAtras = new Date();
    unaSemanaAtras.setDate(unaSemanaAtras.getDate() - 3);
    return fechaProducto >= unaSemanaAtras && fechaProducto <= fechaActual;
}

module.exports = { productoEsNuevo };