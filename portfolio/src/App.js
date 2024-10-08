import React, { useState, useEffect  } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/js/Header";
import Home from "./Component/js/Home";
import Projects from "./Component/js/Projects";
import Contacts from "./Component/js/Contacts";
import About from "./Component/js/About";
import Skills from "./Component/js/Skills";
import "./App.css";

import Loading from "./Component/js/Loading";
import ServerError from './Component/js/ServerError';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // console.log("Loading Started");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  } 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path ='*' element={<ServerError/>} />
      </Routes>
      <div>
        <footer className="footer">
          <section className="section-tag">
            <p>© 2024 RamAshish Chauhan. All rights reserved.</p>{" "}
          </section>
        </footer>
      </div>
    </>
  );
}

export default App;
