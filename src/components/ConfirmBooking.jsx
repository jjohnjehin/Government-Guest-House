import React from "react";
import { Box, Typography, Grid, Card, CardMedia, Chip } from "@mui/material";
import { useLocation } from "react-router-dom";
import data from "./db.json"

export const ConfirmBooking = () => {
  const location = useLocation();
  const { checkIn, checkOut, noOfRoom, noOfGuest, guestHouse, room } = location.state || {};

  // Now you can use those variables in your component.
  console.log(checkIn, checkOut, noOfRoom, noOfGuest, guestHouse, room);
  const item = data.find(
    (item) => item.name && item.name.toLowerCase() === guestHouse.toLowerCase()
  );
  
  console.log("Matched Item:", item);
  return (
    <Box sx={{width:"100%",height:"350px",display:'flex',justifyContent:'center',alignItems:"center"}}>
      <Box sx={{width:"80%",height:"300px",borderRadius:"20px",overflow:"hidden",display:"flex",justifyContent:"center",boxShadow:"5"}}>
        <Box sx={{width:"95%",height:"100%"}}>
          <Box sx={{width:"100%",height:"80px",display:'flex',flexDirection:"column",justifyContent:"center"}}>
            <Typography variant="h5">Your Booking</Typography>
            <Box sx={{width:"140px",height:"2px",bgcolor:"grey"}}></Box>
          </Box>
          <Box sx={{width:"100%",height:"220px",display:"flex",alignItems:"center"}}>
            <Grid container sx={{width:"100%",height:"200px",display:"flex",justifyContent:"space-between"}}>
              <Grid items size={{lg:2}} sx={{width:"100%",height:"100%",borderRadius:"20px"}} component="img"
  src={item ? item.image : "No Guest House Is Selected"} // Default image if item doesn't exist
  alt="Room"></Grid>
              <Grid items size={{lg:6.5}} sx={{width:"100%",height:"100%"}}>
                <Typography variant="h6" sx={{fontWeight:"500"}}>{guestHouse}</Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {item ? item.location : "No Guest House Found"}
                </Typography>
                <Grid container sx={{width:"50%",height:"50px",display:"flex",justifyContent:'space-between',position:"relative"}}>
                  <Grid items size={{lg:5}} sx={{width:'100%',height:"100%"}}>
                    <Typography sx={{color:"green"}}>Check In</Typography>
                    <Typography>{checkIn}</Typography>
                  </Grid>
                  <Grid items size={{lg:5}} sx={{width:'100%',height:"100%"}}>
                    <Typography sx={{color:"red"}}>Check Out</Typography>
                    <Typography>{checkOut}</Typography>
                  </Grid>
                  <Box sx={{height:"48px",width:"1px", bgcolor:"grey",position:"absolute",left:"130px"}}></Box>
                </Grid>
                <Grid sx={{width:"280px",height:"50px",bgcolor:"#FFE602",borderRadius:"10px",marginTop:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <Typography>Current Status:Waiting for Approval</Typography>
                </Grid>
              </Grid>
              <Grid items size={{lg:3}} sx={{width:"100%",height:"100%"}}>
                <Box sx={{width:"100%",height:"40%"}}></Box>
                <Box sx={{width:"100%",height:"60%"}}>
                  <Grid sx={{width:"100%",height:"40px",display:'flex',justifyContent:"flex-end",alignItems:"center",color:"grey"}}>
                    <Typography>Selected Room Type</Typography>
                  </Grid>
                  <Grid sx={{width:"100%",height:"40px",display:'flex',justifyContent:"flex-end",alignItems:"center",}}>
                    <Typography>{room} Room / {noOfGuest} Guest</Typography>
                  </Grid>
                  <Grid sx={{width:"100%",height:"40px",display:'flex',justifyContent:"flex-end",alignItems:"center",}}>
                    <Typography sx={{color:"#0081FF",fontWeight:"600"}}>Total Tariff:2000</Typography>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// export default BookingCard;
