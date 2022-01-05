import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./container/pages/header/Header";
import Home from "./container/pages/home/Home";
import Footer from "./container/pages/footer/Footer";
import MyMusic from "./container/pages/myMusic/MyMusic";
import Contact from "./container/pages/contact/Contact";
import Login from "./container/pages/login/Login";
import Register from "./container/pages/register/Register";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/my-music" element={<MyMusic />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
