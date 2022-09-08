import React from 'react'
import kyn from "./Kynadams.svg"
import teckno from "./mancer.svg"
import gif from "./mancers.gif"



import "./kynadams.css"


const Kynadams = () => {
  return (
    <div className='art'>

     <img alt='kyn' src={kyn}></img> 
      
      
      <div className="bio">
      <p>-------------------------------------------------------------------------------------------------------------------------</p>
      </div>
      <div>

        <div className='teckno'>
        <img alt='teckno' src={teckno}></img>
        </div>
        <div className='gif'>
        <img alt='gif' src={gif}></img>
        </div>
       
     
        
     
      </div>


      </div>

  )
}

export default Kynadams   