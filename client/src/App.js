import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/Navbar";

import Register from "./page/Register";

import Footer from "./components/Footer";
import { Schedule } from './page/Schedule';
import { Speakers } from './page/Speakers';

const App = () => {

  return (

    <>
      
      <BrowserRouter>
        
      <NavBar/>
      
        <Routes><Route path='signup' element = {<Register />}></Route></Routes>
        <Speakers/>
        <Schedule/>
        
        
        <Footer />
        
      </BrowserRouter>
      
    </>

  )

}

export default App
