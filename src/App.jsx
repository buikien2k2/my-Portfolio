import React, { useState } from "react";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from './components/BackToTop/BackToTop';
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage onFinish={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact/>
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
}

export default App;
