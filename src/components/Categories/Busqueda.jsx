import SearchSVG from '../SVGIcons/SearchSVG'
import { useState } from 'react'

const Busqueda = () => {
    const [busqueda, setBusqueda] = useState('');

    const handleInputChange = (e) => {
        setBusqueda(e.target.value);
    };

    const handleSearchClick = () => {
        // Aquí puedes realizar la lógica de búsqueda o cualquier acción que desees con el valor de búsqueda (busqueda)
        console.log('Valor de búsqueda:', busqueda);
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
  )
}

export default Busqueda