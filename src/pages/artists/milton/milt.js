import React from 'react'
import milt1 from "./milt1.svg"
import milt2 from "./milt2.svg"
import milt3 from "./milt3.svg"
import list from "./art.svg"
import quote from "./miltquote.svg"

const Milt = () => {
  return (
    
<div className='art'>

<img alt='milt' src={milt1}></img>
<img alt='milt2' src={milt2}></img>
<img alt='milt3' src={milt3}></img>
<a href='https://www.metaphysicalartinstitute.com/post/artist-exchange-003'><img src={quote}></img></a>

 
 
 <div className="bio">
 <img className='img' src={list}></img>
 </div>
 </div>
  )
}
export default Milt 
  

