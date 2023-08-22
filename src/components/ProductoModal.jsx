

import { useState } from "react";
import "../design/App.css";
import { useContext } from "react";
import { ProductoContext } from "../context/ProductContext";

export function ProductoModal({ isOpen, onClose }) {
  const {createProducto} = useContext(ProductoContext)
  const [productName, setProductName] = useState("");
  //const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createProducto({
      productName,
      precio
    });
    setProductName('')
    setPrecio('')
    onClose();
  };
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Registrar Producto</h2>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Precio del producto"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button onClick={handleSubmit}>Registrar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ProductoModal;