import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import {useState, useEffect} from "react"
import './App.css';



function App() {

  const [currentPage, setCurrentPage] = useState("Home")

  return (
    <div>
      <header class="linkRow" >
        <Header setCurrentPage={setCurrentPage}/>
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
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
