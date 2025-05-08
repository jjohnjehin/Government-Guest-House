import { Box,Grid, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import {useNavigate} from 'react-router-dom'


export const Location = () => {
    const location=[
        {img:"/assets/Images//ngl.png",name:"Nagercoil Guest House",address:"Nagercoil,Tamilnadu",map:"https://maps.app.goo.gl/GArqHPh5Wj2Qovsp9"},
        {img:"/assets/Images//kk.png",name:"Kanniyakumari Guest House",address:"Kanniyakumari,Tamilnadu",map:"https://maps.app.goo.gl/yQEjfuAsaB1h2rJP8"}
    ]
    const nav=useNavigate()
  return (
    <Box id='location' sx={{height:"698px",width:"100%",backgroundImage:"linear-gradient(to top,rgb(229, 250, 245) ,rgb(251, 254, 255))"}}>
        <Grid container sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <Grid size={11}>
            <Typography variant='h4' sx={{ background: 'linear-gradient(to bottom,rgb(133, 133, 130),rgb(27, 27, 26))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',mt:2}}> Location </Typography>
        </Grid>
            <Grid size={{lg:11}} sx={{display:"flex",py:3}}>
              
                {location.map((location,index)=>(
                    <Card sx={{ width:"380px",backgroundColor:"rgb(244, 244, 241)",mr:4}} key={index} >
      <CardActionArea onClick={() => window.open(location.map, '_blank')}>
        <CardMedia
          component="img"
          height="380"
          image='/assets/Images//location.png'
          alt={location.name}
          sx={{objectFit:"cover",position:"relative"}}
        />
        <CardMedia
        component="img"
        height="300"
        image={location.img}
        alt={location.name}
        sx={{position:"absolute",width:"300px",top:"8%",left:"12%",borderRadius:"10px"}}
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {location.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {location.address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box  sx={{height:"65px",width:"70%",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px"}}>
        <Button variant='contained' sx={{height:"80%",width:"90%",borderRadius:"10px",background: 'linear-gradient(to bottom, #76EDD2, #0E76D6)',color: '#fff',fontWeight:"bold",fontSize:"27px",textTransform:"none"}} onClick={()=>nav('/bookingdetails')}>Book Now</Button>

        </Box>
        
      </CardActions>
    </Card>
                ))}
            
            </Grid>
        </Grid>
        
    </Box>
  )
}
