import React from 'react'

const EventCard = ({eventImg,eventTitle, date,time,location,eventDesc }) => {
  return (
    <div>
      <div className="event-box">
        <img className="event-img" src={eventImg} alt='Event Thumbnail' width={200} />
        <h3>{eventTitle}</h3> 
        <p>{"📆" + date}</p>                           
        <p>{"⌚" + time}</p>                           
        <p>{"📍"+location}</p>                           
        <p className="description">{eventDesc}</p>
        <button className="register-button">Register</button>
      </div>
    </div>
  )
}

export default EventCard
