import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';   
import store from './store';              
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Goldplan from './Goldplan';
import Book from './Book';
import Cart from './Cart';
import Product from './Product';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/goldplan" element={<Goldplan />} />
          <Route path="/book" element={<Book />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        </Routes>  
      </BrowserRouter>

  );
}

export default App;
