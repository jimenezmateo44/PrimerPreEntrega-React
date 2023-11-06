import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import TrashSVG from '../SVGIcons/TrashSVG'
import { Link } from "react-router-dom";

const CarritoItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div className="flex items-center justify-center mt-5 shadow">
        <div className="flex flex-row items-center gap-5 font-sans font-bold text-[1rem] p-3">
          <Link to={`/producto/${item.id}`}>
            <img src={item.imagen} alt={item.nombre} className="h-[75px] lg:h-[100px]" key={item.id}/>  
          </Link> 
          <h4> {item.nombre} </h4>
          <p>Cant: {cantidad} </p>
          <p>Precio: {item.precio} </p>
          <button onClick={()=> eliminarProducto(item.id)}><TrashSVG /></button>
        </div>     
    </div>
  )
}
export default CarritoItem