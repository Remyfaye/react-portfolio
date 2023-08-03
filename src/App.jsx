
// import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
