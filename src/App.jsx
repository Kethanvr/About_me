import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LearningPath from './pages/LearningPath';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen flex flex-col bg-[#161616] text-gray-200 font-mono select-none">
        <Navbar />
        <main className="w-full max-w-none">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
           {/* <section id="experience">
              <Experience />
            </section> 
           <section id="blog">
              <Blog />
            </section>  */}
          <section id="learningpath">
            <LearningPath />
          </section>
          <ToastContainer />
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;