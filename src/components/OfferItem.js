import React from 'react'


const OfferItem = ({icon,title,description}) => {
  return (
    <div>
      <div className="offer-box">
        {icon && <div className="offer-icon">{icon}</div>}
        <h3>{title}</h3>                            
        <p>{description}</p>
      </div>
    </div>
  )
}

export default OfferItem;
