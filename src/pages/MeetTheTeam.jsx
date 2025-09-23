import React from 'react'
import Team from '../components/Team'
import mateus from '../assets/images/team/mateus.jpg'
import wendy from '../assets/images/team/wendy.jpg'
import peter from '../assets/images/team/peter.jpg'
import jamie from '../assets/images/team/jamie.jpg'
import olivia from '../assets/images/team/olivia.jpg'


const MeetTheTeam = () => {
  return (
    <section id='team'>
        <div>
            <h2 className="section-title">Meet The Team</h2>
            <div className="team">
                <Team name="Mateus Mota" photo={mateus} title="President and Co Founder" linkedIn="https://www.linkedin.com/in/mateus-boson-mota/"/>
                <Team name="Peter Kim" photo={peter} title="Co Founder" linkedIn="https://www.linkedin.com/in/peter-kim-13592b197/"/>
                <Team name="Anastasia Wendy" photo={wendy} title="Vice President" linkedIn="https://www.linkedin.com/in/anastasia-wendy-surya/"/>
                <Team name="Jamie Chan" photo={jamie} title="Director of Communications" linkedIn="https://www.linkedin.com/in/jamiechan20020421/"/>
                <Team name="Olivia Chen" photo={olivia} title="HR Director" linkedIn="https://www.linkedin.com/in/olivia-chen1/"/>
            </div>
        
        
        </div>
    </section>
  )
}

export default MeetTheTeam
