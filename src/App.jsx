import React, { useState, useEffect } from "react";
import Home from "./routes/home";
import About from "./routes/about";
import Preloader from "./components/Pre";
import DarkModeToggle from "./buttons/darkmodetoggle";
import DraggableNavbarToggle from "./buttons/navbar";
import Contacttoggle from "./buttons/contact";
import Hometoggle from "./buttons/hometoggle";
import Resume from "./routes/resume";
import ScrollToTop from "./components/ScrollToTop";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router  basename="/portfolio/">
      <Preloader load={load} />
      <div className="App overflow-hidden" id={load ? "no-scroll" : "scroll"}>
        <DraggableNavbarToggle />
        <Contacttoggle />
        <Hometoggle />
        <ScrollToTop />
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
