import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { ConnectButton, NFTBalance, WalletModal, Widget } from "web3uikit"

function Membersonly() {

   const address = useAddress();
   const connectWithMetamask = useMetamask();
   const disconnectWallet = useDisconnect();
  return (
    <div>
      {address ? (
        <>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Your address: {address}</p>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect with Metamask</button>
      )}
       <ConnectButton />
      <div style={{ display: 'grid', gap: '20px', padding: '40px 20px' }}>
        <section style={{ display: 'flex', gap: '20px' }}>
            <Widget info="Mainnet" title="ENVIRONMENT" />
            <Widget info="233,182" title="NUMBER OF USERS">
                <div>CHART COMING SOON</div>
            </Widget>
        </section>
        <section style={{ display: 'flex', gap: '20px' }}>
            <Widget info="72%" title="CPU" />
            <Widget info="0 Bytes" title="NETWORK" />
            <Widget info="24%" title="RAM" />
            <Widget info="24%" title="DISK" />
 
         </section>
         <NFTBalance
  address="0x7870BE0Fd01D0EEEc3374B264498611e48Ce790b"
  chain="eth"
/>
    </div>


    </div>
    
  
  );
}

export default Membersonly;