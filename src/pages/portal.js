import { useAddress, useDisconnect, useMetamask, useEdition, useNetwork, } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import {   NFTBalance, Widget } from "web3uikit"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./portal.css"
import lab from "../assets/images/lab.svg"
import cleanroom from "../assets/images/cleanroom.svg"
import { Button } from 'shards-react';
import nonft from "../assets/images/nonft.svg"
import addy from "../assets/images/addy.svg"
import schedule from "../assets/images/schedule.svg"

function Portal() {

   const address = useAddress();
   const connectWithMetamask = useMetamask();
   const network = useNetwork();
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

     if (network?.[0].data.chain.id !== ChainId.Mainnet) {
      return (
        <div className="unsupported-network">
          <h2>Please switch to Ethereum</h2>
          <p>
            This dApp only works on the Ethereum network, please switch networks in
            your connected wallet.
          </p>
        </div>
      );
    }


    
    
    
     ///////***MEMBERS AREA *//////// THE CLEAN ROOM ***///**** */


   if (hasClaimedNFT) {
       return (
           <div className='signin'>
               <img src={cleanroom}></img>
               <div className='welcome'>
               <h4>Welcome to your creative hub!!<br></br>  This is the main membership area, 
                 check below for future events, your connected wallet's NFT balance, 
                 and the button to access the future DAO functions of this dApp. Below is a 
                 button to access our discord. If it is your first time signing up, please go to the #collabland-join 
                 channel and verify your membership NFT to activate all the channels! Once verified contact one of our team 
                 members to begin the minting consultation. Thanks for being here! </h4>
                 </div>
               
               <button onClick={disconnectWallet}>Disconnect Wallet</button>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
           <Link to="/pages/dao">
             <Button>Dao Dashboard</Button>
           </Link>



           <div className='widget'>
           <div style={{ display: 'grid', gap: '20px', padding: '40px 20px' }}>
        <section style={{ display: 'flex', gap: '20px' }}>
           <Widget>

             <div className='nft'>
               
             <NFTBalance address={address} chain="eth" />
             </div>
           </Widget>
            </section>
            <section>
           <Widget>
             
             <img src={schedule}></img>  
             
           </Widget>
           
           </section>
            <section>
           <Widget info="Aug 12th -- GWOP DROP // 22 million GWOP tokens released " title="MAI's governance token drop">
           
            </Widget>
           </section>

           <section>
             <Widget> <img title='addy' src={addy}></img> </Widget>
           </section>

           <Button>
             <a href="https://discord.gg/GgAYeUpVkW">Click here to join our Discord</a> 
           </Button>
          
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