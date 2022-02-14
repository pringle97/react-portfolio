// import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navbar";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Skills from "./pages/Skills";

function App() {
  return (
    <main className="bg text-gray-400 bg-gray-900 body-font">
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
