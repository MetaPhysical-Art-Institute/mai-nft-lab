import { Select , MenuItem, FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react'
import Mai from './artists/mai/mai';
import './Marketplace.css';
import bodega from "../assets/images/Bodega.svg"
import Gyasi from './artists/gyasi/gyasi';
import tba from "../assets/images/tba.svg"
import Kynadams from './artists/kynadams/kynadams';
import Alana from './artists/alana/alana';
import Milt from './artists/milton/milt';



const Marketplace = () => {
const [value , setValue] = useState("");


const handleChange = e => setValue(e.target.value)

  return (
    <>
    
    <div className='marketplace'>
     <div className='bodega'> 
      <img src={bodega} alt="bodega"></img>
    </div>
    

    <div class="parent" className='dropdownmenu'>
    <FormControl sx= {{ m:4, minWidth: 250, }} size="small" >
      <InputLabel>Select a Creative</InputLabel>
    <Select onChange={handleChange}>
    <MenuItem value={<Mai />}>MAI</MenuItem>
    <MenuItem value={<Gyasi />}>Gyasi</MenuItem>
    <MenuItem value={<img src={tba}></img>}>Haru SaySo</MenuItem>
    <MenuItem value={<Alana />}>Alana Enfinity</MenuItem>
    <MenuItem value={<Milt />}>Milton Madison</MenuItem>
    <MenuItem value={<Kynadams /> }>KynAdams.eth</MenuItem>

    </Select>
    </FormControl>

<div   className='art'>
    {value}
    </div>
    </div>
    </div>
    </>
    
  )
}

export default Marketplace


