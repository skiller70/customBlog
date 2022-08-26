import React from 'react';
import { IconButton as MuiIconButton } from '@mui/material';

function IconButton(props) {
    const  {children,size,onClick} = props
    return (
        <MuiIconButton onClick={onClick} size={size}>
           {children} 
        </MuiIconButton>
    );
}

export default IconButton;