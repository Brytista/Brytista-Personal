import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Apps from "./pages/Apps";
import Blogs from "./pages/Blogs";
import Resume from "./pages/Resume";
import Uni from "./pages/Uni";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/uni" element={<Uni />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
