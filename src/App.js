import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {
  const theme = useSelector(state=>state.theme.value)
  
  let dark=theme

  return (
    <div style={{backgroundColor:`${dark?"black":"white"}`}}>
    <Navbar></Navbar>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;
