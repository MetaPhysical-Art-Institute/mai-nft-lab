import { useAddress, useDisconnect, useMetamask, useContract, useNetwork, } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import {   NFTBalance, Widget } from "web3uikit"
import { useState, useEffect } from "react";
import "./portal.css"
import lab from "../assets/images/lab.svg"
import cleanroom from "../assets/images/cleanroom.svg"
import { Button } from 'shards-react';
import nonft from "../assets/images/nonft.svg"
import addy from "../assets/images/addy.svg"
import schedule from "../assets/images/schedule.svg"
import pste from "../assets/images/pste.svg"
import spatial from "../assets/images/spatial.svg"
import Shape from '../components/shape';

function Portal() {

   const address = useAddress();
   const connectWithMetamask = useMetamask();
   const network = useNetwork();
   const disconnectWallet = useDisconnect();
   const edition = useContract("0x63C435B5fcC51eb1d5bA2fC9D6d1EB60348F018f", "edition").contract
   const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
   
   useEffect(() => {
     if (!address) {
         return;
     }
   
     const checkBalance = async () => {
            try {
             const nfts = await edition.getOwned(address);
             setHasClaimedNFT(nfts?.length > 0);
            } catch (error) {
             setHasClaimedNFT(false);
             
            }
          };
          checkBalance();
   }, [address , edition]);
     
  
  
  
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

     if (network?.[0].data.chain.id !== ChainId.Mainnet) {
      return (
        <div className="unsupported-network">
         <img src={pste}></img>
        
        </div>
      );
    }


    
    
    
     ///////***MEMBERS AREA *//////// THE CLEAN ROOM ***///**** */


   if (hasClaimedNFT) {
       return (
           <div className='signin'>
               <img src={cleanroom}></img>
               <div className='shape'>
               <Shape />
               </div>
             
               <br></br>  
               <button onClick={disconnectWallet}>Disconnect Wallet</button>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
             <a href='https://mai-vote-dao.vercel.app'> 
             <Button>Dao Dashboard</Button>
             </a>

             <br>
             </br>
             <p>Dashboard 2.0 Coming Soon!</p>
             
           
          
        
 
         
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