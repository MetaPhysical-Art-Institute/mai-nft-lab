import React from 'react'
import { Widget } from 'web3uikit'
import dao from "../assets/images/DAO.svg"

const Dao = () => {




 return (
    <>
    
       <img src={dao}></img>
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
    
    </div>
    

</>
  )
}

export default Dao

