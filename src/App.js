import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import About from "./pages/About";
import Courses from "./pages/Courses";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/404" element={<NotFound />}/>
      </Routes>

      <div className="container-fluid p-0 ">
        <Footer />
      </div>
      <BackToTop />
    </Router>
  );
}

export default App;
