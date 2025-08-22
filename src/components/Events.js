import React from 'react';
import consumerBehaviour from '../assets/images/consumer-behaviour.jpg';
import quantAnalysis from '../assets/images/quant-analysis.png';

const Events = () => {
  return (
    <section id="events" className="events">
      <h2>Events</h2>
      <div className="event-card">
        <img src={consumerBehaviour} width={200}  alt="Qualitative analysis" className="event-img" />
        <h3>Qualitative analysis</h3>
        <div className="venue">
          <p>📆 Friday, June 20 </p>
          <p>⏱️: 3:30pm–4:30pm</p>
          <p>📍Room B152 </p>
        </div>
        <p className="event-desc">
          Explore non-numerical data to understand the context, nuances, and underlying <br />
          factors influencing a business situation. <br />
          Learn to explore ideas, opinions, and <br /> behaviors to develop effective solutions.
        </p>
        <button className="register-button">Register</button>
      </div>

      <div className="event-card">
        <img src={quantAnalysis}  alt="Quantitative analysis" className="event-img"  />
        <h3>Quantitative analysis</h3>
        <div className="venue">
          <p>📅 Monday, June 9 </p>
          <p>🕠 5:30 PM – 6:30 PM</p>
          <p>📍 Room B152 </p>
        </div>
        <p className="event-desc">
          Master the quantitative skills to analyze business cases, build winning financial models, and impress judges with 
          data-driven recommendations in <br />  this workshop using real competition examples.
        </p>
        <button className="register-button">Register</button>
      </div>
    </section>
  );
};

export default Events;