import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ProductDetail from "../ProductDetail/ProductDetail"
import { useParams } from "react-router-dom";

const ProductDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const {idProducto} = useParams();

   useEffect(() => {
    getUnProducto(idProducto) 
      .then((res) => setProducto(res))
      .catch((error) => console.error("Error al cargar el producto:", error));
  }, [idProducto]);
  
  return (
    <div>
      <ProductDetail {...producto} />
    </div>
  )
}

export default ProductDetailContainer