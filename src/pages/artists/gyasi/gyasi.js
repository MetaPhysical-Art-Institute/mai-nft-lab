import React from 'react'
import { Button } from 'shards-react'
import gyasi from "./Gyasi.svg"
import "./gyasi.css"
import list from "./art.svg"

const Gyasi = () => {
  return (
    <div className='art'>

     <img alt='gyasi' src={gyasi}></img>

      
      
      <div className="bio">
      <img src={list}></img>
      </div>
      <div>
      <iframe className='frame'
src="https://charts.mongodb.com/charts-project-0-hooke/embed/dashboards?id=11966216-5182-4b00-ba58-796d49e8f3b8&theme=dark&autoRefresh=true&maxDataAge=300&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=scale"
width="600px"
height="500px"
frameBorder="0"
></iframe>
      </div>
      <div className='rarible'>
      <Button>
             <a href="https://rarible.com/token/0xd6d1a5d34a8ffef48cf0ba131ab5c9632dfaa0b1:26?tab=details">View on Rarible</a> 
      </Button>
      </div>

    </div>
  )
}

export default Gyasi