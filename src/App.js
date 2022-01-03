import "./App.css";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SingUp/SignUp";
import PrivetRoute from "./Component/Login/PrivetRoute/PrivetRoute";
import About from "./Component/About/About";

import Product from "./Component/Product/Product";
import Booking from "./Component/Booking/Booking/Booking";
import AddService from "./Component/AddService/AddService";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/booking/:BookingId" element={<Booking />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/addService" element={<AddService />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />

            <Route path="invoices" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
