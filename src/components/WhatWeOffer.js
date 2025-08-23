import React from 'react'
import OfferItem from './OfferItem'

const WhatWeOffer = () => {
  return (
    <div>
     <h2 className='offer-header'>What We Offer</h2>
      <div className="offer">
        <OfferItem icon= "🎯" title="Skill building workshops" description="Master data interpretation, financial modeling, and behavioral insights"/>
        <OfferItem icon="🏆" title="Mock Case competitions" description="Stimulate real consulting challenges with timed cases and feedback from industry experts"/>
        <OfferItem icon="🤝" title="Networking and Mentorship" description="Connect with alumni and consultants from local firms through guest speaker sessions"/>
      </div>
    </div>
  )
}

export default WhatWeOffer
