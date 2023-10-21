import { useState } from 'react';
import { getProductos } from '../../asyncmock';

const ProductCard = () => {
    const [productos, setProductos] = useState([]);

    const pedirDatos = async () => {
        const inventario = await getProductos();
        setProductos(inventario);
    }
    pedirDatos();

  return (
    <div className='p-10 flex items-center justify-evenly flex-wrap gap-10 mt-10'>
        {productos.map(producto => (
            <div key={producto.id}  className="border p-4 rounded shadow-md">
                <img className='h-[300px] cursor-pointer'src={producto.imagen} alt={producto.nombre} />
                <h1 className="text-lg text-center font-semibold">{producto.nombre}</h1>
                  <div className="flex justify-between items-center mt-5">
                    <h2 className='text-[1.5rem] text-center font-bold'>${producto.precio}</h2>
                    <button className='border border-gray-500 px-4 py-2 rounded'>Agregar al carrito</button>
                  </div>
            </div>
        ))}
    </div>
  )
}

export default ProductCard