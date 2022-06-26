import React from 'react'
import mai from "./MAI-MP.svg"
import maibio from "./MAI-BIO2.svg"

const Mai = () => {
  return (
    <div>

    
    <img src={maibio}></img>
     
     <div className="thirdwebcard">
      
      
      <iframe src="https://gateway.ipfscdn.io/ipfs/Qmb7uH1FozWt9zG15fYzmrBM9AvzvfQGU43hinmY4sEQTv/marketplace.html?contract=0xd50CeE77dff5A6506e7b95Cb3e4EeA1fD3128F49&chainId=1&listingId=0&rpcUrl=https%3A%2F%2Fspeedy-nodes-nyc.moralis.io%2F1eb60c18fc38af1c4ec7a096%2Feth%2Fmainnet" 
      width="430px"
       height="500px"
       frameborder="0"> 
       </iframe>
       &nbsp;&nbsp;&nbsp;
      
    

    </div>

    </div>
  )
}

export default Mai