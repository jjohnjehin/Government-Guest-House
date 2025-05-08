import { Box,Grid, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

export const CurrentBooking = ({setBookingopen}) => {
  return (
    <Box>
    <Grid container>
        <Grid size={12} display={"flex"} justifyContent={"space-between"} p={3} >
            <Typography fontSize={"24px"} fontWeight={"bold"}>Current Bookings - Nagercoil</Typography>
            <IconButton onClick={()=>setBookingopen(false)}>
            < CloseIcon sx={{fontSize:"28px"}}/>
            </IconButton>
        </Grid>
        <Grid size={12} sx={{height:"400px",borderRadius:"5px",backgroundColor:"#ECECEC",display:"flex",flexDirection:"column",pl:2,justifyContent:"space-evenly"}}>
            <Box >
                <Typography fontWeight={"bold"} fontSize={"20px"}>Suite Room</Typography>
                <Box pl={2} mt={1} pt={1.5}>
                <Typography>1. Mr. Dharmendra Pradhan, <span style={{color:"#B0B0B0"}}>Minister of Education</span></Typography>
                <Typography>2. Mr. Dharmendra Pradhan, <span style={{color:"#B0B0B0"}}>Minister of Education</span></Typography>
                <Typography>3. Mr. Dharmendra Pradhan, <span style={{color:"#B0B0B0"}}>Minister of Education</span></Typography>

            </Box>
            </Box>
            
            <Box>
                <Typography fontWeight={"bold"} fontSize={"20px"}>Deluxe Room</Typography>
                 <Box pl={2} mt={1} pt={1.5}>
                <Typography>1. Mr. Dharmendra Pradhan, <span style={{color:"#B0B0B0"}}>Minister of Education</span></Typography>
                <Typography>2. Mr. Dharmendra Pradhan, <span style={{color:"#B0B0B0"}}>Minister of Education</span></Typography>
                <Typography>3. Mr. Dharmendra Pradhan, <span style={{color:"#B0B0B0"}}>Minister of Education</span></Typography>

            </Box>
            </Box>
           
        </Grid>


    </Grid>
</Box> 
  )
}
