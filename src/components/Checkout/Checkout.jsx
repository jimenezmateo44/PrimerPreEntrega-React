import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';


const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellid] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const [error, setError] = useState("");


    const {carrito, vaciarCarrito} = useContext(CarritoContext); 

    const formHandler = (e) => {
      e.preventDefault();

      if(!nombre || !apellido || !telefono || !email || !emailConfirmation) {
        setError("* Completa todos los campos.");
        return;
      }

      if(email !== emailConfirmation) {
        setError("Los campos de email no coinciden");
        return;
      }

    }
  return (
    <div className='flex h-fit'>
      <div className='w-screen'>
        <h1 className='mt-[100px] flex items-center justify-center font-paytone text-2xl lg:mt-[150px]'>Detalles de tu orden</h1>

       <form onSubmit={formHandler}>

        {
          carrito.map(producto => (
            <div key={producto.item.id} className='flex items-center flex-row gap-5 shadow mt-5 lg:m-[5rem]'>
              <img src={producto.item.imagen} className='h-[100px] m-3 shadow rounded' />
              |
              <p className='font-antonio'>{producto.item.nombre} x {producto.cantidad}</p>
              |
              <p className='font-antonio'>${producto.item.precio}</p>
              <hr/>
            </div>
          ))
        }
        <div className='flex flex-col gap-5 items-center  mt-5 font-paytone lg:m-[5rem]'>
          <h1 className='font-antonio font-bold text-xl mt-[2rem] lg:mt-1'>Ingresa tu informacion</h1>
          <div className='flex flex-row gap-3'>
            <label htmlFor=''>Nombre</label>
            <input type="text" className='border rounded' onChange={(e) => setNombre(e.target.value)}/>
          </div>

          <div className='flex flex-row gap-3'>
            <label htmlFor=''>Apellido</label>
            <input type="text" className='border rounded' onChange={(e) => setApellid(e.target.value)} />
          </div>

          <div className='flex flex-row gap-3'>
            <label htmlFor=''>Telefono</label>
            <input type="text" className='border rounded' onChange={(e) => setTelefono(e.target.value)}/>
          </div>

          <div className='flex flex-row gap-3'>
            <label htmlFor=''>Email</label>
            <input type="text" className='border rounded' onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className='flex flex-row gap-3'>
            <label htmlFor=''>Confirmar Email</label>
            <input type="text" className='border rounded' onChange={(e) => setEmailConfirmation(e.target.value)}/>
          </div>
        </div>
          {
            error && <p className='flex justify-center mt-5 text-red-500 font-bold'> {error} </p>
          }

          <div className='flex justify-center lg:justify-end mr-5'>
            <Link to='/checkout-success' type='submit' onClick={vaciarCarrito} className='bg-[#1f1f1f] text-white font-bold py-2 px-4 rounded-full mt-5 mb-5 lg:ml-2 lg:mt-0 w-fit'>Confirmar compra</Link>

          </div>
          
       </form>


      </div>
    </div>
  )
}

export default Checkout