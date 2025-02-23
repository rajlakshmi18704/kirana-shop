import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
   <Header/>
   <ProductCard/>
   <Footer/>
      </div>
     
     
    </>
  )
}

export default App
