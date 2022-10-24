import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
