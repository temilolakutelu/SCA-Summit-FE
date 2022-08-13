import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/Navbar";

import Register from "./page/Register";

import Footer from "./components/Footer";

import Home from './page/Home';

const App = () => {

  return (

    <>
      
      <BrowserRouter>
        
        <NavBar />
        
       
        <Routes><Route index element = { <Home />}></Route></Routes>
        
        <Routes><Route path='signup' element = {<Register />}></Route></Routes>
        
        <Footer />
        
      </BrowserRouter>
      
    </>

  )

}

export default App
