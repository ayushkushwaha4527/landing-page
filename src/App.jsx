import React from "react";
import { Header } from "./Header";
import Contact from "./Contact";
import { Footer } from "./Footer";
import About from "./About"
import FocusAreas from "./Focusareas";


export const App = () => {
  return (
    <div className="app">
      
      <Header />
      <About/>
      <FocusAreas/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
