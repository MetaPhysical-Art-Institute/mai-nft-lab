import { Select , MenuItem, FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react'
import Mai from './artists/mai/mai';
import './Marketplace.css';



const Marketplace = () => {
const [value , setValue] = useState("");

const handleChange = e => setValue(e.target.value)

  return (

    <div className='dropdownmenu'>
    <FormControl sx={{ m:4, minWidth: 400}} size="small" >
      <InputLabel>Select a Creative</InputLabel>
    <Select onChange={handleChange}>
    <MenuItem value={<Mai />}>MAI</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>
    <MenuItem value={"coming soon"}>TBA</MenuItem>

    </Select>
    </FormControl>

    {value}
    </div>
    
    
  )
}

export default Marketplace


