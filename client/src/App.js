import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/Navbar";

import Register from "./page/Register";

import Footer from "./components/Footer";

const App = () => {

  return (

    <>
      
      <BrowserRouter>
        
      <NavBar/>
      
        <Routes><Route path='signup' element = {<Register />}></Route></Routes>
        
        <Footer />
        
      </BrowserRouter>
      
    </>

  )

}

export default App
