import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Work from './components/Work';

function App() {
  return (
    <div className ="App">
       <Navbar/>  
       <Home/>  
       <About/>
       <Skills/>
       <Work/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
