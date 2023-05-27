import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import {useState, useEffect} from "react"
import './App.css';



function App() {

  const [currentPage, setCurrentPage] = useState("Home")

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setCurrentPage("Home")}>Home</li>
          <li onClick={() => setCurrentPage("Portfolio")}>Portfolio</li>
          <li onClick={() => setCurrentPage("Contact")}>Contact</li>
          <li onClick={() => setCurrentPage("Resume")}>Resume</li>
        </ul>
      </header>
      <main>
      {currentPage == "Home" && (
        <Home/>
      )}
      {currentPage == "Portfolio" && (
        <Portfolio/>
      )}
      {currentPage == "Contact" && (
        <Contact/>
      )}
      {currentPage == "Resume" && (
        <Resume/>
      )}
      </main>
    </div>
  );
}

export default App;
