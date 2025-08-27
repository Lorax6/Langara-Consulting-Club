import React from 'react';
import consumerBehaviour from '../assets/images/consumer-behaviour.jpg';
import quantAnalysis from '../assets/images/quant-analysis.png';
import EventCard from './EventCard';

const Events = () => {
  return (
    
    <div>
      <h2 className='section-title'>Events</h2>
      <div className="events">
        <EventCard 
          eventImg={consumerBehaviour} 
          eventTitle="Qualitative Analysis"
          date="Friday, June 20"
          time="3:30pm - 4:30pm"
          location="Room B152" 
          eventDesc="Explore non-numerical data to understand the context, nuances, and factors influencing a business situation. Learn to explore ideas, opinions, and
          behaviors to develop effective solutions." />

        <EventCard
          eventImg={quantAnalysis}
          eventTitle="Quantitative Analysis"
          date="Monday, June 9"
          time="5:30pm - 6:30pm"
          location="Room B152"
          eventDesc=" Master the quantitative skills to analyze business cases, build winning financial models, and impress judges with 
          data-driven recommendations in this workshop using real competition examples"
        />
        
    </div>
    </div>
  );
};

export default Events;