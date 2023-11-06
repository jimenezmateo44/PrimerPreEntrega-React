import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CarritoItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div className="flex flex-row gap-3 items-center w-screen bg-slate-600">
        <img src={item.imagen} />
        <h4> {item.nombre} </h4>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: {item.precio} </p>
        <button onClick={()=> eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}
export default CarritoItem