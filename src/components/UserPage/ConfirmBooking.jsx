import React from "react";
import { Box, Typography, Grid,Link, } from "@mui/material";
import { useLocation } from "react-router-dom";
import data from "../db.json"
import { useNavigate } from 'react-router-dom';
// import design from '/public/assets/Images/headerbackblue.png'
// import logo from "./image 1 (1).png"
import { useState,useEffect } from "react";

export const ConfirmBooking = () => {
  const location = useLocation();
  const { checkin, checkout, room, guest, guestHouse,roomType } = location.state || {};

  // Now you can use those variables in your component.
  // console.log(checkIn, checkOut, noOfRoom, noOfGuest, guestHouse, room);
  const item = data.find(
    (item) => item.name && item.name.toLowerCase() === guestHouse.toLowerCase()
  );
  
  // console.log("Matched Item:", item);
  const navigate=useNavigate()
  const[active,setActive]=useState("Home")
  const handleNavigation = (index, path) => {
    setActive(index);
    navigate(path);
  };
      
      
       
  return (
    <Box sx={{height:"100%",width:'100%'}}>
      {/* HEADER */}
      <Grid sx={{width:"100%",height:"100px",display:"flex",justifyContent:"center"}}>
              <Grid sx={{width:"300px",height:"70px",position:"absolute",left:"40px",top:"20px",backgroundImage:`url(${process.env.PUBLIC_URL}/assets/Images/kklogo.png)`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></Grid>
              <Grid sx={{width:"45%",height:"80px",backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Images/headerbackblue.png)`,backgroundPosition:"top",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundSize: "100% 100%",display:"flex",alignItems:"center"}}>
              {/* GOV LOGO */}
                <Grid sx={{width:"80px",height:'65px',marginLeft:"100px",backgroundImage:`url(${process.env.PUBLIC_URL}/assets/Images/Gov_Logo.png)`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></Grid>
                <Grid sx={{width:"380px",height:"50px",marginLeft:"10px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                  {
                    [
                      { name: "Home", path: "/" },
                      { name: "Gallery", path: "/Gallary" },
                      { name: "Location", path: "/Location" }
                    ].map((item, index) => (
                      <Grid 
                        key={index}
                        sx={{
                          fontSize: "18px",
                          color: "white",
                          fontWeight: active === index ? "600" : "400", 
                          cursor: "pointer",
                          borderBottom:active===index?"1px solid blue":null
                        }} 
                        onClick={() => handleNavigation(index, item.path)}
                      >
                        {item.name}
                      </Grid>
                    ))
                  }
                </Grid>
              </Grid>
            </Grid>
      {/* BODY */}
        <Box sx={{width:"100%",height:"370px",display:'flex',justifyContent:'center',alignItems:"center"}}>
        <Box sx={{width:"94%",height:"300px",borderRadius:"5px",overflow:"hidden",display:"flex",justifyContent:"center",boxShadow:"2"}}>
          <Box sx={{width:"95%",height:"100%"}}>
            <Box sx={{width:"100%",height:"80px",display:'flex',flexDirection:"column",justifyContent:"center"}}>
              <Typography variant="h5">Your Booking</Typography>
              <Box sx={{width:"140px",height:"2px",bgcolor:"grey"}}></Box>
            </Box>
            <Box sx={{width:"100%",height:"220px",display:"flex",alignItems:"center"}}>
              <Grid container sx={{width:"100%",height:"190px",display:"flex",justifyContent:"space-between"}}>
                <Grid items size={{lg:2}} sx={{width:"100%",height:"100%",borderRadius:"20px"}} component="img" src={item ? item.image : "https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg"} alt="Room"></Grid>
                <Grid items size={{lg:6.5}} sx={{width:"100%",height:"100%"}}>
                  <Typography variant="h6" sx={{fontWeight:"500"}}>{guestHouse}</Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {item ? item.location : "No Guest House Found"}
                  </Typography>
                  <Grid container sx={{width:"50%",height:"50px",display:"flex",justifyContent:'space-between',position:"relative"}}>
                    <Grid items size={{lg:5}} sx={{width:'100%',height:"100%"}}>
                      <Typography sx={{color:"green"}}>Check In</Typography>
                      <Typography>{checkin||"Not Selected"}</Typography>
                    </Grid>
                    <Grid items size={{lg:5}} sx={{width:'100%',height:"100%"}}>
                      <Typography sx={{color:"red"}}>Check Out</Typography>
                      <Typography>{checkout||"Not Selected"}</Typography>
                    </Grid>
                    <Box sx={{height:"48px",width:"1px", bgcolor:"grey",position:"absolute",left:"130px"}}></Box>
                  </Grid>
                  <Grid sx={{width:"280px",height:"50px",bgcolor:"#FFE602",borderRadius:"10px",marginTop:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Typography>Current Status:Waiting for Approval</Typography>
                  </Grid>
                </Grid>
                <Grid items size={{lg:2}} sx={{width:"100%",height:"100%"}}>
                  <Box sx={{width:"100%",height:"30%"}}></Box>
                    <Box sx={{width:"100%",height:"50%"}}>
                      <Grid sx={{width:"70%",height:"40px",display:'flex',justifyContent:"flex-end",alignItems:"center",color:"grey",}}>
                        <Typography sx={{fontSize:"12px"}}>Selected Room Type</Typography>
                      </Grid>
                      <Grid sx={{width:"100%",height:"40px",display:'flex',justifyContent:"flex-start",alignItems:"center"}}>
                        <Typography sx={{fontSize:"14px"}}>{room || "Room not Selected"} Room / {guest ||0} Guest</Typography>
                      </Grid>
                      <Grid sx={{width:"100%",height:"40px",display:'flex',justifyContent:"flex-start",alignItems:"center"}}>
                        <Typography sx={{color:"#0081FF",fontWeight:"600"}}>Total Tariff : 2000/-</Typography>
                      </Grid>
                    </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    
  );
};


