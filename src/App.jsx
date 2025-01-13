import React from 'react';
import HeroSection from './HeroSection';
import Navbar from './navbar/Navbar';
import Cards from './cards/Cards';
import Promotional from './Promotional/Promotional';
import Choose from './choose/Choose';
import Collection from './collection/Collection';
import Subscribe from './subscribe/Subscribe';
import Footer from './footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './productdeatils/ProductDeatils';
import Product from './product/Product';
import Cart from './cart/Cart';
import Login from './Account/Login';
import Signup from './Account/Signup';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './auth/PrivateRoute';
import CreateContainer from './createContainer/CreateContainer';
import ManageProducts from './manageProducts/ManageProducts';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Cards />
                <Promotional />
                <Choose />
                <Collection />
                <Subscribe />
              </>
            }
          />
          <Route
            path="/product"
            element={
              <PrivateRoute>
                <Product />
              </PrivateRoute>
            }
          />
          <Route path="/productdeatils" element={
              <ProductDetails />
          } />
          <Route path="/cart" element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>

          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/CreateContainer" element={<CreateContainer />} />
          <Route path="/ManageProducts" element={<ManageProducts />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
