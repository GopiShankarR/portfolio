import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
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
      <Hero id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Education id="education" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
