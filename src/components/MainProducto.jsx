import { ProductCard } from "./ProductCard";
import { useContext } from "react";
import { ProductoContext } from "../context/ProductContext";
import { productos as data } from "../data/productos";

export function MainProducto() {
  const {productos} = useContext(ProductoContext)

  if (productos.length === 0){
    return <h1 className='text-red-900 text-4xl font-bold text-center'>No hay productos registrados</h1>
  }
  return (
    <div className="grid grid-cols-4 gap-4 ml-4 ms:grid ms:grid-cols-1 ">
      {productos.map((item) => (
        <ProductCard key= {item.id} producto={item} />
      ))}
    </div>
  );
}
