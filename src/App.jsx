import React from "react";
import { Header } from "./Header";
import Contact from "./Contact";
import { Footer } from "./Footer";
import About from "./About"


export const App = () => {
  return (
    <div className="app">
      
      <Header />
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
