import { FormControl, FormControlLabel, FormLabel, Radio,RadioGroup } from "@mui/material";
import React from "react";

function RadioGroups(props) {

  const {label,name,value,onChange,items} = props
  return (
    <>
      <FormControl>
        <FormLabel> {label}</FormLabel>
        <RadioGroup name={name} row={true} value={value} onChange={onChange}>
         {items.map((item,index)=>(
          <FormControlLabel key={index} value={item.id} control={<Radio />} label={item.tile} /> 
         ))}
        
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default RadioGroups;
