import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contect";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Resume from "./components/Resume";
import Service from "./components/Service";
import SideBar from "./components/Sidebar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      {/* https://youtu.be/o3IP5HeFRO0?t=8426 */}
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
