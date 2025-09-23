import React from 'react';
import consumerBehaviour from '../assets/images/consumer-behaviour.jpg';
import caseComp from '../assets/images/caseComp.png';
import quantAnalysis from '../assets/images/quant-analysis.png';
import EventCard from '../components/EventCard';
import Tabs from '../components/Tabs';


const Events = () => {
   const tabs = [
        {
            label: 'Fall 2025',
            content: <div className='events'> <EventCard 
                    eventImg={caseComp} 
                    eventTitle="Fall 2025 Case Competition"
                    date="Saturday, October 25"
                    time="TBD"
                    location="TBD" 
                    eventDesc="Experience the consulting process from start to finish.From understanding a client’s problem to brainstorming solutions and pitching your strategy. 
                    Get hands-on practice in critical thinking, structured problem-solving, and persuasive communication" 
                    eventLink={"https://docs.google.com/forms/d/e/1FAIpQLSeDs1J9U10hpDS6XbUYahcfyc40j_Og7MeJsu8xnEAFJwaEXw/viewform"}
                /></div>
        },
        {
            label : 'Summer 2025',
            content : <div className='summer-events'>
                <EventCard 
                    eventImg={consumerBehaviour} 
                    eventTitle="Qualitative Analysis"
                    date="Friday, June 20"
                    time="3:30pm - 4:30pm"
                    location="Room B152" 
                    eventDesc="Explore non-numerical data to understand the context, nuances, and factors influencing a business situation. Learn to explore ideas, opinions, and
                    behaviors to develop effective solutions." 
                />
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
        }, 
       
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    }

  return (
    <section id='events'>
        <div>
        <h2 className='section-title'>Events</h2>
        <Tabs tabsContent ={tabs} onChange={handleChange}/>
        </div>
    </section>
  );
};

export default Events;