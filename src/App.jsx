import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About'
import Home from './Components/Home';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Works from './Components/Works';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

//import { useTheme } from './Components/ThemeContext';

function App(){
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
