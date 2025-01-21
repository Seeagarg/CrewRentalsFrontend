import React from 'react'
import "../css/ThreedCard.css"

const ThreeCardmodel = () => {
  return (
    <div className="house-info">
    <h2>House Information</h2>
    <hr/>
    <ul>
      <li style={{fontWeight: 'bold'}}>Plot Area: 2400</li>
      <li >Total Builtup Area: 3590 sqft</li>
      <li>Width: 40 ft</li>
      <li>Length: 60 ft</li>
      <li>Building Type: Residential</li>
      <li>Style: Two Storey House</li>
      <li>Estimated Cost of Construction: 54 - 61 Lacs</li>
    </ul>
  </div>
  )
}

export default ThreeCardmodel