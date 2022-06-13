import { useAddress, useDisconnect, useMetamask, useEdition } from '@thirdweb-dev/react';
import { ConnectButton, NFTBalance, WalletModal, Widget } from "web3uikit"
import { useState, useEffect } from "react";


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
            <p>welcome sign in!</p> 
            {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect with Metamask</button>
      )}
             </>
         )
     }


    
    
    
     ///////***MEMBERS AREA *////////
   if (hasClaimedNFT) {
       return (
           <div>
               <p>congrats you are a member</p>
               <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>

          <div style={{ display: 'grid', gap: '20px', padding: '40px 20px' }}>
        <section style={{ display: 'flex', gap: '20px' }}>
            <Widget info="Mainnet" title="ENVIRONMENT" />
            <Widget info="15" title="Active Memberships">
                <div>Welcome to MAI's DAO Portal</div>
            </Widget>
        </section>
        <section style={{ display: 'flex', gap: '20px' }}>
            <Widget info="72%" title="CPU" />
            <Widget info="0 Bytes" title="NETWORK" />
            <Widget info="Aug. 24th 2022" title="Next Event" />
            <Widget info="24%" title="DISK" />
 
         </section>
         <NFTBalance
  address={address}
  chain="eth"
/>
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
    </>
   );
  };

export default Portal;