import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      {/* <h1 className="text-5xl font-bold font-signature">Hello world</h1> */}
      <NavBar />
      <Hero />
      <SocialLinks />
    </>
  );
}

export default App;
