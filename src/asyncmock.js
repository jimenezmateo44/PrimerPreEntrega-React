// import { productos } from "./assets/productos";

// export const getProductos = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(productos);
//         }, 1000);
//     })
// }

// export const getUnProducto = (id) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const producto = productos.find(x => x.id === id);
//             resolve(producto);
//         }, 500)
//     })
// }

// export const getProductoPorCategoria = (categoria) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const producto = productos.filter(producto => producto.marca === categoria);
//             resolve(producto);
//         }, 500)
//     })
// }