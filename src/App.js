import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import Hero from "./componenets/Hero";
import Products from"./componenets/Products";
import { productData} from  "./componenets/Products/data"
import Feature from "./componenets/Feature";


function App() {
  return (
    
    <Router>
    <GlobalStyle/>
    <Hero/>
    <Products heading='Choose your favorite' data={productData} />
<Feature/>
    </Router>
  );
}

export default App;
