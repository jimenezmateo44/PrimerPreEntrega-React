import { useState } from 'react';
import { getProductoPorCategoria } from '../../asyncmock';
import{ Link } from 'react-router-dom'

const JordanCategory = () => {
    const [productos, setProductos] = useState([]);

    const pedirDatos = async () => {
        const categoria = await getProductoPorCategoria("Jordan");
        setProductos(categoria);
    }
    pedirDatos();


  return (
    <div className='p-[5rem] flex items-center justify-evenly flex-wrap gap-10  h-fit bg-[#f1f2f3]'>   
        {productos.map(producto => (
            <div key={producto.id}  className="p-4 bg-white">
              <Link to={`/producto/${producto.id}`}><img className='h-[300px] cursor-pointer'src={producto.imagen} alt={producto.nombre}/></Link>
                
                <h1 className="text-lg text-center font-semibold font-sans">{producto.nombre}</h1>
                  <div className="flex flex-col gap-2 items-start mt-5 ml-3">
                    <h2 className='text-[2rem] text-center font-antonio font-bold'>${producto.precio}</h2>
                    <p className='font-antonio'>3 cuotas sin interes de: ${Math.floor(producto.precio/3)}</p>
                    <p className='font-mono font-bold text-[#D24e01]'>ENVIO GRATIS</p>
                  </div>
            </div>
        ))}
    </div>
  )
}

export default JordanCategory