import React from 'react'
import maibio from "./MAI-BIO.svg"
import list from "./art.svg"

const Mai = () => {
  return (
    <div>

    
    <img alt='mai' src={maibio}></img>


    <div className="bio">
      <img src={list}></img>
      </div>
    
     
    
      
     
      <iframe className='frame' title='membership token' src="https://bafybeic54udbggbhtn7nfjrrj7elrim4shfped7c3cco7neset7fdwpwmu.gateway.ipfscdn.io/marketplace.html?contract=0xd50CeE77dff5A6506e7b95Cb3e4EeA1fD3128F49&chain=%7B%22name%22%3A%22Ethereum+Mainnet%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fethereum.rpc.thirdweb.com%2Fa8a7f8aa7ddd8115bad1892b179be99f%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22eth%22%2C%22chainId%22%3A1%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22ethereum%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fethereum%2F512.png%22%2C%22height%22%3A512%2C%22width%22%3A512%2C%22format%22%3A%22png%22%7D%7D&listingId=4&primaryColor=purple" 
      width="600px"
       height="500px"
       frameborder="0">
       
       
       </iframe>
       
       &nbsp;&nbsp;&nbsp;
      

    </div>

   
  )
}

export default Mai