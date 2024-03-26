import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Ad from './components/pages/Ad';
import Footer from './components/Footer';

import Feedback from './components/pages/Feedback';
import  Get  from './components/pages/Get';
import Joureny from './components/pages/Joureny';


function App() {
  return (
    <>
<Router>
  <Navbar />
  <Routes>
    <Route path='/' exact Component={Home} />
    <Route path='/services' exact Component={Services} />
    <Route path='/contact' exact Component={Contact} />
    <Route path='/about' exact Component={About} />
    <Route path='/feedback' exact Component={Feedback} />
    <Route path='/ad' exact Component={Ad} />
    <Route path='/getintouch' exact Component={Get} />
    <Route path='/joureny' exact Component={Joureny} />
  </Routes>
  <Footer />
</Router>


    </>
  );
}
export default App;
