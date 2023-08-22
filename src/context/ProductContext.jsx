import { createContext, useState, useEffect } from "react";
import { productos as dataProducto } from "../data/productos";
import { cuenta as dataCuenta } from "../data/cuenta";

export const ProductoContext = createContext();

export function ProductContextProvider(props) {
  const [cuenta, setCuenta] = useState([]);
  const [productos, setProductos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  };

  function createCuenta(producto) {
    setCuenta([
      ...cuenta,
      {
        id: cuenta.length,
        producto: producto.producto,
        precio: producto.precio,
      },
    ]);
  }

  function createProducto(producto) {
    console.log(producto)
    setProductos([
      ...productos,
      {
        id: productos.length,
        producto: producto.productName,
        precio: producto.precio,
        imgURL: "src/assets/images/product.png"
      }
    ])
  }

  function deleteCuenta(productoID) {
    setCuenta(cuenta.filter((producto) => producto.id !== productoID));
  }

  function deleteProducto(idProducto) {
    setProductos(productos.filter((producto)=> producto.id !== idProducto))
  }

  useEffect(() => {
    setCuenta(dataCuenta);
    setProductos(dataProducto)
  }, []);
  console.log(productos)
  return (
    <ProductoContext.Provider
      value={{
        cuenta,
        productos,
        deleteCuenta,
        createCuenta,
        openModal,
        closeModal,
        modalOpen,
        createProducto,
        deleteProducto
      }}
    >
      {props.children}
    </ProductoContext.Provider>
  );
}

export default ProductContextProvider;
