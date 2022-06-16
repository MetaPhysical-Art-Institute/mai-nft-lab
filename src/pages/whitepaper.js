import React from 'react' 
import MAIWhitepaper from "./MAI WHITEPAPER APRIL 2022.2.pdf"



export default function Whitepaper() {
  return (
    
    <div>
      <h3>MAI's Whitepaper</h3>
    <iframe src={MAIWhitepaper} 
    width="750px"
    height="1000px"
    > </iframe>
    </div>
  );
}