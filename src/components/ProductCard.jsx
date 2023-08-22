import {useState, useContext} from 'react'
import {ProductoContext} from '../context/ProductContext'
export function ProductCard({producto}) {
  function handleCard() {
    console.log("click en producto")
  }
  //console.log(producto)
  const {deleteProducto} = useContext(ProductoContext)
  return (
    
    <div className="w-50 h-60 bg-pink-200 rounded-lg shadow-md p-4 hover:bg-blue-600 " 
    onClick={handleCard}>
      <img
        src= {producto.imgURL}
        alt={producto.producto}
        className="w-40 h-auto object-cover mb-2 "
      />
      <h2 className="text-gray-800 font-semibold text-center">{producto.producto}</h2>
      <button className="bg-gray-600 hover:bg-red-600 rounded " onClick={() => deleteProducto(producto.id)}>Eliminar</button>
    </div>
  );
}

export default ProductCard;
