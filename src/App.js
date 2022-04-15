import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-700 via-slate-900 to-slate-700 font-anybody px-20">
      {/* <!-- NAVBAR --> */}
      <nav className="py-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-cyan-300">CyberPunk</h1>
        <div className="text-lg text-white w-2/5 flex justify-between">
          <Link to="/">
            <h1 className="hover:border-b-4 border-cyan-600">Home</h1>
          </Link>
          <Link to="movies">
            <h1 className="hover:border-b-4 border-cyan-600">Movies</h1>
          </Link>
          <a href="#about" className="hover:border-b-4 border-cyan-600">
            About us
          </a>
          <a href="#contact" className="hover:border-b-4 border-cyan-600">
            Contact us
          </a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
      <footer className="flex flex-col items-center justify-center text-slate-400 py-4">
        <h1>Developed by Ankush & Rohit </h1>
        <h1>No Copyrights &copy; 2022</h1>
      </footer>
    </div>
  );
}

export default App;
