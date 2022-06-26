import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'shards-react'
import { Widget } from 'web3uikit'
import dao from "../assets/images/DAO.svg"
import "./dao.css"

const Dao = () => {




 return (
    <>
    
       <img src={dao}></img>
       <div className='widget'>
       <Widget info='Voting Contract and Governance Token Launch Coming Soon'>
        
       
       
       </Widget>
       

</div>
<div className="widget">
       <Link to="/pages/portal">
             <Button>back</Button>
           </Link>

</div>
         
      
    
  
    

</>
  )
}

export default Dao

