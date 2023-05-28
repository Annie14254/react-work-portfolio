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
      <header class="linkRow" >
        <ul className='row'>
          <h1>Annie Ashley</h1>
            <li onClick={() => setCurrentPage("Resume")}>Resume</li>
            <li onClick={() => setCurrentPage("Portfolio")}>Portfolio</li>
            <li onClick={() => setCurrentPage("Contact")}>Contact</li>
            <li onClick={() => setCurrentPage("Home")}>Home</li>
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

      <footer>
        <ul>
          <li><a href = "https://www.linkedin.com/in/annie-ashley-902056200/">LinkedIn</a></li>
          <li><a href = "https://github.com/Annie14254">GitHub</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
