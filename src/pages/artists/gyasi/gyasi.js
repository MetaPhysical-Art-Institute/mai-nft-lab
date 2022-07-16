import React from 'react'
import { Button } from 'shards-react'
import gyasi from "./Gyasi.svg"
import "./gyasi.css"

const Gyasi = () => {
  return (
    <div class="parent" className='art'>

      <img alt='gyasi' src={gyasi}></img>
      
      <div class="child" className="bio">
      <p>Just a regular dude that likes a lot of different things. My first collection is a song, 10 copies. The art work is computer generated and is dynamic, so over time the image will change. Check out the full listing on MAI's Rarible Marketplace and click "Get Unlockable Content" to download the song. Enjoy!</p>
      </div>
      <div>
      <iframe
src="https://gateway.ipfscdn.io/ipfs/QmZ3UzARChNBBVdqcbibQ63nvtePkRfnyieb89sXTRMLxE/marketplace.html?contract=0xd50CeE77dff5A6506e7b95Cb3e4EeA1fD3128F49&chainId=1&listingId=1&primaryColor=teal"
width="300px"
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