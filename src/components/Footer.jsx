import { Box ,Grid, Typography} from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <Box sx={{height:"500px",width:"100%",backgroundColor:"black",marginTop:"50px"}}>
        <Grid container sx={{display:"flex",justifyContent:"center",py:10}} >
            <Grid size={10} sx={{height:"350px"}}>
                <Grid container justifyContent={"space-between"} alignItems={"center"}>
                    <Grid size={3} sx={{height:"350px",p:4}}>
                        <Typography color='#979797'>Contact Us</Typography>
                        <Box my={3}>
                            <Typography color='white'>Nagercoil</Typography>
                            <Typography variant='h6' color='white'>LANDLINE NO:</Typography>
                            <Typography variant='h6' color='white'>PHONE NO:</Typography>
                        </Box>
                        <Box my={3}>
                            <Typography color='white'>Kanniyakumari</Typography>
                            <Typography variant='h6' color='white'>LANDLINE NO:</Typography>
                            <Typography variant='h6' color='white'>PHONE NO:</Typography>
                        </Box>
                    </Grid>
                    <Grid size={3} sx={{height:"250px",width:"250px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                        <img src="/assets/Images/Frame 971.png" alt="not found" style={{height:"200px",width:"200px",objectFit:"contain"}}/>
                        <Typography variant='h5' color='white'>Kanniyakumari<span style={{fontSize:"15px"}}>.in</span></Typography>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>

    </Box>
  )
}