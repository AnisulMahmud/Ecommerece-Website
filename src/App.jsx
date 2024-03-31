import { Home } from "./components/Home";
import { SignUp } from "./components/SignUp";
import { Navbar } from "./components/Navbar";
import { NotFoundPage } from "./components/NotFoundPage";
import { ProductDetails } from "./components/ProductDetails";
import { AddProductPage } from "./components/AddProductPage";
import {Routes, Route} from 'react-router-dom';

function App() {



  return (
    <>
      <div className='App'>
        <Navbar />

        <Routes>

         <Route  path="/" element={<Home />} />

         <Route path="/signup" element={<SignUp />}/>
         
         <Route path="*" element={<NotFoundPage/>}/>

         <Route path="/products/:id" element={<ProductDetails />}/>

         <Route path="/addProduct" element={< AddProductPage /> } />
        
        </Routes>
    
      </div>
    </>
  )
}

export default App
