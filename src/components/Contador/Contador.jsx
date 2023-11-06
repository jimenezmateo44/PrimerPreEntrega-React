import { useState} from "react";


const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <container className="flex items-center gap-1">
            <div>
                <button onClick={restarContador}> - </button>
                <strong> {contador} </strong>
                <button onClick={sumarContador}> + </button>
            </div>
            <button onClick={()=> funcionAgregar(contador)} className="bg-[#1f1f1f] text-white font-bold py-2 px-4 rounded-full lg:ml-2 mt-2 lg:mt-0"> Agregar al Carrito </button>
        </container>

    )
}

export default Contador