import { Header } from "./components/Header";
import {MainProducto} from './components/MainProducto'
import {NewContainer} from './components/NewContainer'
import {Footer} from './components/Footer'
import "./App.css";

function App() {
  return(
    <main >
      <Header/>
      <div className="sm:flex sm:gap-8">
      <MainProducto/>
      <NewContainer/>
      </div>
      <Footer/>
      
    </main>
  )
}

export default App;