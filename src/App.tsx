import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home title="Travel App" subtitle="subtitle goes here" />}
          />
          <Route path="/about" element={<About textbox="test123" />} />
          <Route
            path="/contact"
            element={<Contact email="test123@email.com" phone="911-911-6969" />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
