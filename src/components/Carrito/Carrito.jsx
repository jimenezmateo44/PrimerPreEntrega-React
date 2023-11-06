import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CarritoItem from "../CarritoItem/CarritoItem";

const Carrito = () => {
 const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito. Compra o vete! </h2>
                <Link to="/">Ver Productos</Link>
            </>
        )
    }

    return (
        <div className="mt-[150px]">
            {
                carrito.map(producto => <CarritoItem key={producto.id} {...producto} />)
            }
            <h3>Total: ${total} </h3>
            <h3>Cantidad Total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()} > Vaciar Carrito </button>
            <Link to="/checkout">Finalizar Compra</Link>
        </div>
    )
}
export default Carrito