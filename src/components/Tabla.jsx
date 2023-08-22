import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useContext} from "react";
import {ProductoContext} from '../context/ProductContext'
import {cuenta as data} from '../data/cuenta'



export function Tabla({cuenta}) {
  const total = 0;
  const {deleteCuenta} = useContext(ProductoContext)
  const totalValues = cuenta.map(product => product.precio * product.cantidad);
  const grandTotal = totalValues.reduce((acc, value) => acc + value, 0);

  if (cuenta.length === 0){
    return <h1 className='text-red-900 text-4xl font-bold text-center'>No hay productos aun</h1>
  }
  
  return (
    <>
      <table className="w-full border-collapse border-gray-400 overflow-auto">
        <thead>
          <tr>
            <th className="">#</th>
            <th className="">Producto</th>
          </tr>
        </thead>
        <tbody>
          {cuenta.map((item) => (
            <tr className="border-b-2 border-gray-400 py-7 last:border-none text" key={item.id}>
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.producto}</td>
              <td className="p-2">{item.precio}</td>
              <td className="p-2">{item.cantidad}</td>
              <td key={item.id}>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => deleteCuenta(item.id)}
                  style={{ cursor: "pointer", color: "red" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end font-semibold text-2xl pt-10">
        <h1 className="text-right ">Total:</h1>
        <h2 className="text-red-600 px-4">{grandTotal} </h2>
      </div>
      <div className="flex justify-center items-center ">
        <button className="bg-green-400 w-[185px] h-[48px] uppercase text-black font-semibold hover:bg-blue-300 mt-5 rounded-xl">
          Pagar
        </button>
      </div>
    </>
  );
}

export default Tabla;
