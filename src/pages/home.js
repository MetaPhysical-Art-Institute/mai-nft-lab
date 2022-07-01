
import React, { Component } from 'react'

import welcome from "../assets/images/welcome.svg"
import home1 from "../assets/images/home1.svg"
import home2 from "../assets/images/home2.svg"
import mobilestart from "../assets/images/mobilestart1.svg"
import "./home.css"

class Home extends Component {
  render() {


    return (
      <>
      <div>
        <div className='home'>
        <center>
        <img src={welcome}></img>
        <img src={home1}></img>
        <img src={home2}></img>
        <div className='mobile'>
          <p>* Tap the "🧪 " at the top of the screen to get started *</p>
        </div>
        </center>
      </div>
      </div>
      </>
    )
  }
}
export default Home