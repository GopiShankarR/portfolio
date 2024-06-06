import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import { Routes, Route} from "react-router-dom";
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
