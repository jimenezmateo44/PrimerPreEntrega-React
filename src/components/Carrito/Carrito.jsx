import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CarritoItem from "../CarritoItem/CarritoItem";
import { toast } from "react-toastify";


const Carrito = () => {
 const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="flex flex-col items-center justify-center gap-5 h-screen">
                <h1 className="text-[1.5rem] font-paytone lg:text-[3rem]">No hay productos en el carrito :/</h1>
                <Link to="/" className="bg-[#1f1f1f] text-white font-bold py-2 px-4 rounded-full lg:ml-2 mt-2 lg:mt-0 w-fit">Ver Productos</Link>
            </div>
        )
    }

    const vaciarCarritoToast = () => toast.info("Carrito vacio!");


    return (
        <div className="flex flex-col items-center mt-[100px] lg:mt-[150px] h-screen">
            <h1 className="flex items-center justify-center mb-[2rem] text-[3rem] font-antonio">CARRITO</h1>
         <div className="border shadow">
            <div className="border shadow w-fit p-3 max-h-[400px] overflow-auto">
                 {
                carrito.map(producto => <CarritoItem key={producto.id} {...producto} />)
            }
            </div>
           
            <div className="flex flex-col items-center mt-[50px]">
                <h3 className="text-xl font-paytone">TOTAL: ${total} </h3>
                <h3 className="text-xl font-paytone">CANT TOTAL: {cantidadTotal} </h3>
                <div className="flex gap-5 justify-between m-5">
                    <button onClick= {() => {
                                   vaciarCarrito();
                                   vaciarCarritoToast(); 
                            }}
                            className="bg-[#1f1f1f] text-white font-bold py-2 px-4 rounded-full lg:ml-2 mt-2 lg:mt-0 w-fit"> Vaciar Carrito </button>
                    <Link to="/checkout" className="bg-[#1f1f1f] text-white font-bold py-2 px-4 rounded-full lg:ml-2 mt-2 lg:mt-0 w-fit">Finalizar Compra</Link>
                </div>  
            </div>
        </div>
           
        </div>
    )
}
export default Carrito