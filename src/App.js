import React from 'react';
import './assets/styles/style.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Newsletter from './pages/Newsletter';
import About from './pages/About';
import Events from './pages/Events';
import WhatWeOffer from './pages/WhatWeOffer';
import MeetTheTeam from './pages/MeetTheTeam';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Newsletter />
        <About />
        <WhatWeOffer/>
        <Events />
        <MeetTheTeam/>  
        <Contact/>
      </main>
    </div>
  );
}

export default App;