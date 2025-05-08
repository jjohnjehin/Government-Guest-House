import { Box,Grid, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

export const OfficialconLetter = ({setOpen}) => {
  return (
<Box>
    <Grid container>
        <Grid size={12} display={"flex"} justifyContent={"space-between"} p={3} >
            <Typography fontSize={"20px"} fontWeight={"bold"}>Official Confirmation Letter</Typography>
            <IconButton onClick={()=>setOpen(false)}>
            < CloseIcon sx={{fontSize:"28px"}}/>
            </IconButton>
        </Grid>
        <Grid size={12} sx={{height:"400px",borderRadius:"5px",backgroundColor:"#ECECEC",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src="./sample.jpg" alt="not found" style={{height:"90%",width:"93%"}} />
        </Grid>


    </Grid>
</Box> 
)
}
