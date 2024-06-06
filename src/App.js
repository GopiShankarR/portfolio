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
      <Routes>
        <Route path="/portfolio" element={<Header />} />
        <Route path="/#about" element={<About />} />
        <Route path="/#skills" element={<Skills />} />
        <Route path="/#education" element={<Education />} />
        <Route path="/#experience" element={<Experience />} />
        <Route path="/#projects" element={<Projects />} />
        <Route path="/#contact" element={<Contact />} />

      </Routes>
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
