
import React, { Component } from 'react'
import background from "../assets/videos/space.mp4"
import welcome from "../assets/images/Welcome1.svg"
import "./home.css"

class Home extends Component {
  render() {
    const myStyle={
      backgroundImage:`url(${background})`,
      height: "100vh",
      marginTop: "0px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      
    };

    return (
      <>
      <div style={myStyle}>
        <div className='home'>
        <center>
        <img src={welcome}></img>
        </center>
      </div>
      </div>
      </>
    )
  }
}
export default Home