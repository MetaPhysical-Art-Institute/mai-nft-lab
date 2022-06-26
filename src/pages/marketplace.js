import { Select , MenuItem, FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react'
import Mai from './artists/mai/mai';
import './Marketplace.css';
import bodega from "../assets/images/Bodega.svg"
import Gyasi from './artists/gyasi/gyasi';



const Marketplace = () => {
const [value , setValue] = useState("");


const handleChange = e => setValue(e.target.value)

  return (
    <>
    
    <div className='marketplace'>
     <div className='bodega'> 
      <img src={bodega}></img>
    </div>
    

    <div className='dropdownmenu'>
    <FormControl sx= {{ m:4, minWidth: 400, }} size="small" >
      <InputLabel>Select a Creative</InputLabel>
    <Select onChange={handleChange}>
    <MenuItem value={<Mai />}>MAI</MenuItem>
    <MenuItem value={<Gyasi />}>Gyasi</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>

    </Select>
    </FormControl>
<div className='art'>
    {value}
    </div>
    </div>
    </div>
    </>
    
  )
}

export default Marketplace


