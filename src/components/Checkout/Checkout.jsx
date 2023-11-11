import { useState, useEffect, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/config';
import { collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellid] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const [carrito, vaciarCarrito, total, totalCantidad] = useContext(CarritoContext); 
  return (
    <div className='flex h-screen'>
      <div className='w-screen'>
        <h1 className='mt-[100px] flex items-center justify-center font-paytone text-2xl'>Detalles de tu orden</h1>

       <form>
         {
            carrito.map(producto => (
              <div key={producto.item.id}>
                <p> {producto.item.nombre} x {producto.cantidad}</p>
                <p>{producto.item.precio}</p>
                <hr/>
              </div>
            ))
          }
       </form>


      </div>
    </div>
  )
}

export default Checkout