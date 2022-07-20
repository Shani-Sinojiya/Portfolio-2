import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contect/Contact";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Pricing from "./components/Pricing/Pricing";
import Resume from "./components/Resume/Resume";
import Service from "./components/Service/Service";
import SideBar from "./components/sidebar/SideBar";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
    {/* https://youtu.be/o3IP5HeFRO0?t=3988 */}
      <SideBar />
      <main className="main">
        <Home />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
