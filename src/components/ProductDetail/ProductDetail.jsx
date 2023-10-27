import React from 'react';
import { Link } from 'react-router-dom';
import ArrowLeftSVG from '../SVGIcons/ArrowLeftSVG'

const ProductDetail = ({ id, nombre, marca, precio, imagen, stock }) => {
  return (
    <div className="flex flex-col mt-[5rem] lg:flex-row justify-center items-center lg:items-start lg:justify-evenly m-4 min-[550px]:p-[2rem]">
      <div className="lg:w-1/2 lg:mr-4">
        <Link to='/'>
          <button className=" mt-[4rem] mb-5 bg-[#fafafa] border border-[#1f1f1f] font-bold py-2 px-4 rounded-full">
            <ArrowLeftSVG />
          </button>
        </Link>
        <img src={imagen} alt={nombre} className="border shadow-lg max-h-[500px] w-full object-cover" />
      </div>
      <div className="w-full lg:w-1/2 p-4 mt-[4.5rem]">
        <h1 className="text-2xl font-semibold text-center lg:text-left mb-2">{nombre}</h1>
        <h2 className="mb-2">Marca: {marca}</h2>
        <p className="mb-4">Quedan {stock} unidades</p>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-3xl font-semibold text-center lg:text-left mb-2">${precio}</h2>
          <button className="bg-[#1f1f1f] text-white font-bold py-2 px-4 rounded-full lg:ml-2 mt-2 lg:mt-0">
            Agregar al carrito
          </button>
        </div>
        <hr className="my-4" />
        <p>Descripcion: Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati nam, ratione voluptatem doloribus expedita. Deserunt quos, iure similique nesciunt eligendi sint placeat pariatur dicta, laudantium necessitatibus ducimus unde earum.</p>
      </div>
    </div>
  );
}

export default ProductDetail;
