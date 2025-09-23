import React from 'react'

const EventCard = ({eventImg,eventTitle, date,time,location,eventDesc, eventLink }) => {
  return (
    <div>
      <div className="event-box">
        <img className="event-img" src={eventImg} alt='Event Thumbnail' width={170} height={90} />
        <h3>{eventTitle}</h3> 
        <p>{"📆" + date}</p>                           
        <p>{"⌚" + time}</p>                           
        <p>{"📍"+location}</p>                           
        <p className="description">{eventDesc}</p>
        <a href={eventLink} target='_blank' rel='noopener noreferrer'>
            <button className="register-button">Register</button>
        </a>
       
      </div>
    </div>
  )
}

export default EventCard
