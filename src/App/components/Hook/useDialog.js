import React, { useState } from 'react';

function useDialog(props) {
  
    const [open,setOpen] = useState(props)
   
    const handleDialog = ()=>{
        setOpen(true)
    }
    return {
open,
handleDialog

    }
}

export default useDialog;