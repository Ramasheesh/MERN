import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./Component/js/Header";
import Home from "./Component/js/Home";
import Projects from "./Component/js/Projects";
import Contacts from "./Component/js/Contacts";
import About from "./Component/js/About";
import Skills from "./Component/js/Skills";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />  
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <div>
           <footer className="footer">
               <section className="section">
                 <p>© 2024 RamAsheesh Chauhan. All rights reserved.</p>{" "}
               </section>
              </footer>
        </div>
    </>
  );
}

export default App;
