import { useAddress, useDisconnect, useMetamask, useEdition } from '@thirdweb-dev/react';
import {  NFTBalance } from "web3uikit"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./portal.css"


function Portal() {

   const address = useAddress();
   const connectWithMetamask = useMetamask();
   const disconnectWallet = useDisconnect();
   const Edition = useEdition("0x63C435B5fcC51eb1d5bA2fC9D6d1EB60348F018f")
   const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
   
   useEffect(() => {
     if (!address) {
         return;
     }
   
     const checkBalance = async () => {
            try {
             const nfts = await Edition.getOwned(address);
             setHasClaimedNFT(nfts?.length > 0);
            } catch (error) {
             setHasClaimedNFT(false);
             
            }
          };
          checkBalance();
   }, [address , Edition]);
     
  
  
  
   //////**SIGN IN AREA */
  
   if (!address) {
         return (
             <>
             <div className='signin'>
            <p>welcome sign in!</p> 
            {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect with Metamask</button>
      )}
      </div>
             </>
         )
     }


    
    
    
     ///////***MEMBERS AREA *////////
   if (hasClaimedNFT) {
       return (
           <div className='member'>
               <p>congrats you are a member</p>
               <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
           <Link to="/pages/dao">DAO Dashboard</Link>

 
      
         
         <NFTBalance address={address} chain="eth" />
         
         
            </div>
          


           
       )
   }

   
   
   
   
   
   
   
   
   
   
   
   
   ////***NON - MEMBERS AREA *//////
   
   function truncateAddress(address) {
       return `${address.slice(0, 6)}...${address.slice(-4)}`;
   }

   return (
    <>
    <div className='signin'>
      <p className="address">
        There are no Membership NFTs held by:{" "}
        <span className="value">{truncateAddress(address)}</span>
      </p>
      <div>
        
      </div>
      <center>
      <button onClick={disconnectWallet}>Disconnect Wallet</button>
      <p>Purchase A Membership NFT From Our Marketplace To Gain Access To Our Members Only Portal!!</p>
      </center>
      </div>
    </>
   );
  };

export default Portal;