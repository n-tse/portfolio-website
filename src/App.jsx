import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      {/* <h1 className="text-5xl font-bold font-signature">Hello world</h1> */}
      <NavBar />
      <Hero />
      <SocialLinks />
      <About />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
