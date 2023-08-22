import burgerMenu from "../assets/images/icon-menu.svg";
import {useState} from 'react'
import {ProductoModal} from './ProductoModal'
export function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
    function openModal() {
      setModalOpen(true)
    }
    const closeModal = () => {
      setModalOpen(false);
    };
  return (
    
    <>
      <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        
        <li>
          <button onClick={openModal}>Registrar Producto</button>
          <ProductoModal isOpen={modalOpen} onClose={closeModal} />
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
      <img
        className="w-10 h-4 cursor-pointer sm:hidden"
        src={burgerMenu}
        alt="Menu Hamburguesa"
      />
    </>
  );
}
