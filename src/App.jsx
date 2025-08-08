// import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { MovieProvider } from "./context/MovieContext";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MovieProvider>
      {/* <div> */}
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
      {/* </div> */}
      <div>
        <Footer />
      </div>
    </MovieProvider>
  );
}

export default App;
