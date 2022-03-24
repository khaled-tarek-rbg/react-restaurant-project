import React from "react";
import {BrowserRouter , Route , Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'
import Bride from "./components/Bride/Bride";
import Products from "./components/Products/Products";
import Testmonial from "./components/Testmonial/Testmonial";
import Questions from "./components/Questions/Questions";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";




const App = ()=>{
    return(
           
       <BrowserRouter>

      <Navbar/>
           <Routes>
                <Route path="/" element = {<Home/>}></Route>
                <Route path="/about" element = {<Bride/>}></Route>
                <Route path="/products" element = {<Products/>}></Route>
                <Route path="/testmonial" element = {<Testmonial/>}></Route>
                <Route path="/questions" element = {<Questions/>}></Route>
            </Routes>
            <Form/>
            <Footer/>
            </BrowserRouter>
         
        
    ) 
}
export default App