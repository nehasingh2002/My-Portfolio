import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css'; // Import custom CSS file
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Home/>
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;

