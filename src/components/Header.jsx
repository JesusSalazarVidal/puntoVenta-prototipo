import {Navbar} from './Navbar'
import logo from '../assets/images/logoMichoacana.png'


export function Header() {
  return (
    <header className='bg-emerald-300 flex place-content-between items-center mb-5'>
        <img src={logo} alt="Logo" className='w-[80px] h-[60px] px-4' />
        <h1 className='text-red-600 text-4xl font-bold'>La Michoacana</h1>
        <Navbar/>
    </header>
  )
}