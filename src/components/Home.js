import React from 'react';
import Carousel from './Carousel';

const Home = () => {
  return (
    <div>
      <div className="homepage-content">
        <h1>Start your <mark className="orange">consulting <br />journey</mark> with us!</h1>
        <p>Langara's first and only consulting club</p>
      </div>
      <Carousel />
    </div>
  );
};

export default Home;