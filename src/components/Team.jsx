import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Team = ({name,photo,title,linkedIn}) => {
  return (
    <div>
      <div className="team-item">
            <img src={photo} className="team-img" alt='team pic'/>
            <h3>{name}</h3>
            <div className="team-info">
                <p>{title}</p>
                <a href={linkedIn}>
                   <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
      </div>
    </div>
  )
}

export default Team
