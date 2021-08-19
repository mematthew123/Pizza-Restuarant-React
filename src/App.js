import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import Hero from "./componenets/Hero";
import Products from"./componenets/Products";
import { productData} from  "./componenets/Products/data"


function App() {
  return (
    
    <Router>
    <GlobalStyle/>
    <Hero/>
    <Products heading='Choose your favorite' data={productData} />

    </Router>
  );
}

export default App;
