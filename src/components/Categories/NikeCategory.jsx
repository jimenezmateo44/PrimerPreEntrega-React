import { useState, useEffect } from 'react';
import{ Link } from 'react-router-dom'

import { db } from '../../services/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

const NikeCategory = () => {
    const [productos, setProductos] = useState([]);

    const idCategoria = "Nike";

    useEffect( () => {
      const misProductos = idCategoria ? query(collection(db, "inventario"), where("marca", "==", idCategoria)) : collection(db, "inventario");

      getDocs(misProductos)
        .then(res => {
          const nuevosProductos = res.docs.map(doc => {
            const data = doc.data()
            return {id:doc.id, ...data}
          })
          setProductos(nuevosProductos);
        })
        .catch(error => console.log(error))
    }, [idCategoria])


  return (
    <div className='flex flex-row flex-wrap justify-evenly p-[2rem] mt-[5rem] gap-5 bg-[#F1F2F3] lg:p-[4rem]'>
      <h1 className=' lg:hidden font-paytone font-bold text-2xl text-center block w-screen'>NIKE</h1>     
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

export default NikeCategory