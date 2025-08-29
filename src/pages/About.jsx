import React from 'react';
import groupPhoto from '../assets/images/groupPhoto.jpg';

const About = () => {
  return (
    <section id="aboutus" className="Aboutus">
      <div className="about-content">
        <img src={groupPhoto} alt="Group Photo" width="550" height="550" className="group-photo" />
        <div className="about-text">
          <h2>WHO WE ARE</h2>
          <p>
            LSM Consulting Club is a student-led community that empowers students <br />
            to build real-world skills, grow through hands-on experience, and <br />
            compete with confidence in business case competitions​. Through skill <br />
            development workshops, mock case competitions, and instructor sessions, <br />
            <mark className="prepare">we prepare students for success in various business case competitions.</mark>
          </p>
        </div>
      </div>

      <div className="success">
        {/* <h2>Our Success</h2> */}
        <ul className="achievements">
          <li>
            <p>
              <strong><mark className="impact">70+</mark></strong><br />
              Impacted students from <br />all areas of study
            </p>
          </li>
          <li>
            <p>
              <strong><mark className="CPA">2nd</mark></strong><br />
              Place from 2023 CPABC Case <br />Competition in the Final <br />Round
            </p>
          </li>
          <li>
            <p>
              <strong><mark className="LAC">2 of 3</mark></strong><br />
              Teams placed in the LAC x CAA <br />Case Competition were members <br />
              who have actively participated in <br />club workshops
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;