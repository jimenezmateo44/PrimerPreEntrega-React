import { useState, useEffect } from "react";
import ProductDetail from "../ProductDetail/ProductDetail"
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from 'firebase/firestore';

const ProductDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const {idProducto} = useParams();

   useEffect( () => {
    const nuevoDoc = doc(db, "inventario", idProducto);

    getDoc(nuevoDoc) 
      .then(res => {
        const data = res.data();
        const nuevoProducto = {id: res.id, ...data}
        setProducto(nuevoProducto);
      })
      .catch(error => console.log(error))
   }, [idProducto])
  
  return (
    <div>
      <ProductDetail {...producto} />
    </div>
  )
}

export default ProductDetailContainer