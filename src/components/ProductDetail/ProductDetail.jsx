import React from 'react'
import { Link } from 'react-router-dom';

const ProductDetail = ({id, nombre, marca, precio, imagen, stock}) => {
  return (
    <container className="flex items-center justify-evenly mt-[150px]">
      <div>
       <Link to='/'>
       <button className="mb-5 bg-[#fafafa] border border-[#1f1f1f] font-bold py-2 px-4 rounded-full">Volver</button>
        </Link>
        <img src={imagen} alt={nombre} className='border shadow h-[500px] w-full'/>
      </div>
     <div className=" w-[50%] h-[35vh] p-4 flex flex-row flex-wrap justify-between items-start">
      <div>
        <h1 className="text-2xl font-semibold text-center mb-2">{nombre}</h1>
        <h2 className="mb-2">Marca: {marca}</h2>
        <p className="mb-4">Quedan {stock} unidades</p>
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className="text-3xl font-semibold text-center mb-2">${precio}</h2>
        <button className="bg-[#1f1f1f] text-white font-bold py-2 px-4 rounded-full">
          Agregar al carrito
        </button>
      </div>
      <div>
        <hr/>
        <p className='mt-2'>Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati nam, ratione voluptatem doloribus expedita. Deserunt quos, iure similique nesciunt eligendi sint placeat pariatur dicta, laudantium necessitatibus ducimus unde earum.</p>
      </div>
     
</div>
    </container>
  );
}

export default ProductDetail