import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ProductDetail from "../ProductDetail/ProductDetail"

const ProductDetailContainer = () => {
  const [producto, setProducto] = useState(null);

   useEffect(() => {
    getUnProducto('2') 
      .then((res) => setProducto(res))
      .catch((error) => console.error("Error al cargar el producto:", error));
  }, []);
  
  return (
    <div>
      <ProductDetail {...producto} />
    </div>
  )
}

export default ProductDetailContainer