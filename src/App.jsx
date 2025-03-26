import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./Component/About";
import Footer from "./Component/Footer";
import { Header } from "./Component/Header";
import { Hero } from "./Component/Hero";
import { Projects } from "./Component/Projects";
import { Service } from "./Component/Service";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Footer />}/>
      </Routes>
    </Router>
  );
};

export default App;
