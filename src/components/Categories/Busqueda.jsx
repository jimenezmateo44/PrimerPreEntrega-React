import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchSVG from '../SVGIcons/SearchSVG';


const Busqueda = () => {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSearchClick = () => {
    // Navegar a la ruta de búsqueda con el parámetro de consulta
    navigate(`/busqueda?query=${encodeURIComponent(busqueda)}`);
  };

  return (
    <div className='flex items-center gap-3'>
      <input
        type="text"
        placeholder="Buscar"
        className="border rounded-l px-2 py-1 w-80"
        value={busqueda}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}><SearchSVG /></button>
    </div>
  );
};

export default Busqueda;
