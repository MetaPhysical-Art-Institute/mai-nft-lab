import { useAddress, useDisconnect, useMetamask, useEdition } from '@thirdweb-dev/react';
import {   NFTBalance, Widget } from "web3uikit"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./portal.css"
import lab from "../assets/images/lab.svg"
import cleanroom from "../assets/images/cleanroom.svg"
import { Button } from 'shards-react';
import nonft from "../assets/images/nonft.svg"
import nft from "../assets/images/nfts.svg"


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
            <img src={lab}></img>
            {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
        </>
      ) : (
        <div>
        <button onClick={connectWithMetamask}>Connect with Metamask</button>

        
        </div>
      )}
      </div>
             </>
         )
     }


    
    
    
     ///////***MEMBERS AREA *////////
   if (hasClaimedNFT) {
       return (
           <div className='signin'>
               <img src={cleanroom}></img>
               
               <p>Welcome to the Lab. This is the main membership screen where event sign up widgets, your current wallets NFT holdings, and the link to the DAO dashboard will be. </p>
               
               <button onClick={disconnectWallet}>Disconnect Wallet</button>
               &nbsp;&nbsp;&nbsp;
          
           <Link to="/pages/dao">
             <Button>Dao Dashboard</Button>
           </Link>



           <div className='widget'>
           <div style={{ display: 'grid', gap: '20px', padding: '40px 20px' }}>
        <section style={{ display: 'flex', gap: '20px' }}>
           <Widget>

             <div className='nft'>
               <img src={nft}></img>
             <NFTBalance address={address} chain="eth" />
             </div>
           </Widget>
            </section>
            <section>
           <Widget info="July 29th-31st -- The Urban Nerd Con, Montgomery, Alabama " title="MAI's Scheduled Events">
           
            <Button>
             <a href="https://discord.gg/GgAYeUpVkW">Volunteer</a> 
           </Button>
      
           </Widget>
           
           </section>
           </div>
          </div>
 
         
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
      <img src={nonft}></img>
   
     
      <center>
      <button onClick={disconnectWallet}>Disconnect Wallet</button>
      
      </center>
      </div>
    </>
   );
  };

export default Portal;