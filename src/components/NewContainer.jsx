import {Tabla} from './Tabla'
import {useContext} from 'react'
import {ProductoContext} from '../context/ProductContext'

//import {cuenta} from "../data/cuenta";


export function NewContainer() {
  const {cuenta} = useContext(ProductoContext)

  return (
    <div className='bg-gray-50 text-black py-[10px] px-[20px] flex-1 '>
      <div className='bg-gray-400'>
      <h1 className=' text-red-600 text-4xl font-bold text-center' >Cuenta</h1>
      </div>
      <div className='min-w-full items-center'>
      <Tabla cuenta={cuenta}/>
      </div>
      

    </div>
  )
}

export default NewContainer

  