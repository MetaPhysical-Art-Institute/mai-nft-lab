import React from 'react' 
import MAIWhitepaper from "./MAI WHITEPAPER APRIL 2022.2.pdf"
import "./whitepaper.css"


export default function Whitepaper() {
  return (
    <>
    
    <div className='whitepaper'>
     
    <iframe title='Whitepaper' src={MAIWhitepaper} 
    width="800px"
    height="800px"
    > </iframe>
    
    </div>
    <div classname='mobilewhitepaper'>
   
     <p>Whitepaper PDF only avaliable on Desktop. Please go to our website to read our Whitepaper on your mobile device! Thank you!</p>

    </div>
    </>
  );
}