import React, { useState } from 'react';
import { Grid,Box, Button } from '@mui/material';
import {Dialog,DialogTitle,DialogContent }from '@mui/material';
const TestFun = (props) => {
    const [openPopup,setOpenPopup] = useState(false)
    return (
        <>


<Dialog open={openPopup}>
<DialogTitle>
title goes here
</DialogTitle>
<DialogContent>
    content goes here
</DialogContent>
</Dialog>


<Button onClick={()=>{setOpenPopup(true)}} >clickme</Button>




{props.children}





        {/* <Grid mx={5} container rowSpacing={5}>
        <Grid  xs item>
        <Box  bgcolor="primary.light"> hellos</Box>

        </Grid>
        <Grid xs item>
        <Box> hellos</Box>

        </Grid>
        <Grid xs item>
        <Box> hellos</Box>

        </Grid>

        </Grid>
             */}
        </>
    );
};

export default TestFun;