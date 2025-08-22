import React from 'react';
import './assets/styles/style.css';
import Header from './components/Header';
import Home from './components/Home';
import Newsletter from './components/Newsletter';
import About from './components/About';
import Events from './components/Events';
import WhatWeOffer from './components/WhatWeOffer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Newsletter />
        <About />
        <Events />
        <WhatWeOffer/>
        
      </main>
    </div>
  );
}

export default App;