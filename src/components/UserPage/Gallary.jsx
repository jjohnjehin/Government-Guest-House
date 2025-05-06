import { Box ,Grid, Typography} from '@mui/material'
import React from 'react'

export const Gallary = () => {
    const rooms=[
        {image:"/assets/Images/image1.png"},
        {image:"/assets/Images/image2.png"},
        {image:"/assets/Images//image3.png"}
    ]
  return (
    <Box id='gallery' sx={{height:"698px",width:"100%",backgroundImage:"linear-gradient(to bottom,rgb(229, 250, 245) ,rgb(251, 254, 255))"}}>
        <Grid container sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Grid size={11} my={3} >
            <Typography variant='h4' sx={{ background: 'linear-gradient(to bottom,rgb(163, 163, 161),rgb(44, 44, 43))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',}}>Gallery</Typography>
            </Grid>
            <Grid size={{lg:11}}  sx={{height:"400px"}}>
                <Grid container sx={{display:"flex",alignItems:"center"}}>
                    {rooms.map((hotel,index)=>(
                    <Grid size={3.5} key={index}   sx={{
                        '& img': {
                          transition: '0.3s ease',
                          borderRadius: '10px',
                          height: '530px',
                          width: '95%',
                        },
                        '&:hover img': {
                          transform: 'scale(1.03)',
                        },
                      }}>
                        <img src={hotel.image} alt="not found" />
                    </Grid>

                    ))}
                    
                </Grid>
            </Grid>
        </Grid>

    </Box>
  )
}
