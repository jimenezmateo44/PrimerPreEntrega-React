import { productos } from "./assets/productos";

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000);
    })
}

export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = productos.find(x => x.id === id);
            resolve(producto);
        }, 500)
    })
}