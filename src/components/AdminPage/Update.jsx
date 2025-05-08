import { Box, Button, Grid, IconButton, Typography,Link, Paper, Card, Divider, Dialog, DialogTitle,DialogContent} from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { useNavigate } from 'react-router-dom';
import { OfficialconLetter } from './OfficialconLetter';
import { CurrentBooking } from './CurrentBooking';
import { Confirmation } from './Confirmation';

export const Update = () => {
    const [guesthouse,setGuesthouse]=useState("Nagercoil Guest House")
    const [roomType,setRoomType]=useState("Deluxe Room")
    const [open,setOpen]=useState(false)
    const [bookingopen,setBookingopen]=useState(false)
    const [confirm,setConfirm]=useState(false)

    const nav=useNavigate()
    const Roomtypes=[
        {value:"Deluxe Room",label:"Deluxe Room",guesthouse:"Nagercoil Guest House"},
        {value:"Suite Room",label:"Suite Room",guesthouse:"Kanniyakumari Guest House"}
    ]
    const Roomavail=[
        {img:"./kk.png",guesthouse:"Kanniyakumari Guest House",suite:4,deluxe:2,roomType:["Suite Room","Deluxe Room"]},
        {img:"./ngl.png",guesthouse:"Nagercoil Guest House",suite:4,deluxe:4,roomType:["Suite Room","Deluxe Room"]}

    ]
  return (
    <Box>
        <Grid container display={"flex"} justifyContent={"center"}>
            <Grid size={{xs:9,md:12}} sx={{height:"100px",backgroundImage:"url(./kklogo.png)",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",mt:5}}>

            </Grid>
            <Grid size={12} my={5} >
                <Grid container justifyContent={"center"} spacing={2} sx={{gap:3}}>
                     {/* Main Content */}
                     <Grid size={{xs:11,lg:7.8}} sx={{height:"auto"}}>
                    <Paper elevation={3} sx={{backgroundColor:"#F2F2F3",borderRadius:"2px"}}>

                       <Grid container justifyContent={"center"}>
                            <Grid size={11.5} sx={{height:"auto"}}>
                                <Box  sx={{display:"flex",alignItems:"center",marginLeft:"-10px",mt:3}}>
                                    <IconButton onClick={()=>nav('/assign')}>
                                        <Box sx={{height:"30px",width:"30px",border:"1px solid blue",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}><KeyboardArrowLeftIcon sx={{color:"black",fontSize:"25px"}} /></Box>
                                    </IconButton>
                                    <Typography   sx={{font:"Roboto",fontSize:{xs:"30px",sm:"38px"},fontWeight:600,color:"#1945D2"}}>Update Booking</Typography>
                                </Box>
                                <Typography sx={{font:"Roboto",fontWeight:400,fontSize:{xs:"24px",md:"28px"},letterSpacing:"0.15px",color:"#000000"}} my={2}>Contact Details</Typography>
                                    <Grid container>
                                        <Grid size={4}>
                                        <Typography sx={{fontSize:{xs:"13px",sm:"17px"}}} color="#B0B0B0">Name / Designation</Typography>
                                        <Box mt={0.5}>
                                        <Typography sx={{fontSize:{xs:"12px",sm:"15px",md:"20px"}}}>Mr.Darmendhra Pradhan</Typography>
                                        <Typography color="#666666DE" sx={{fontSize:{xs:"12px",sm:"15px",md:"20px"}}}>Minister of Education</Typography>
                                        </Box>
                                        </Grid>
                                        <Grid size={4} >
                                            <Typography sx={{fontSize:{xs:"13px",sm:"17px"}}} color="#B0B0B0">Phone Number</Typography>
                                        <Box mt={0.5} display={"flex"}>
                                            <Typography sx={{fontSize:{xs:"12px",sm:"15px",md:"20px"}}}>12345</Typography><Typography sx={{fontSize:{xs:"12px",sm:"15px",md:"20px"},ml:1}}>67890</Typography>
                                        </Box>
                                        </Grid>
                                        <Grid size={4}><Typography sx={{fontSize:{xs:"13px",sm:"17px"}}} color="#B0B0B0">Email</Typography>
                                        <Box mt={0.5}>
                                            <Typography  sx={{fontSize:{xs:"12px",sm:"15px",md:"20px"}}}>abc@gmail.com</Typography>
                                        </Box>
                                        </Grid>

                                    </Grid>
                                    <Box sx={{ width: "100%", mt: 2 }}>
                               <Divider sx={{ height: "0.5px", backgroundColor: "#ccc" }} />
                                  </Box>                                
                                  {/* <Box sx={{height:"1.5px",width:"100%",backgroundColor:"rgb(115, 114, 114)",mt:2}}></Box> */}
                            </Grid>
                       </Grid>
                       <Grid container justifyContent={"center"}>
                            <Grid size={11.5} sx={{height:"auto"}}>
                            <Typography sx={{font:"Roboto",fontWeight:400,fontSize:{xs:"24px",md:"28px"},letterSpacing:"0.15px",color:"#000000"}} my={2}>Official Profile</Typography>
                                    <Grid container>
                                        <Grid size={4}>
                                        <Typography color="#B0B0B0" sx={{fontSize:{xs:"13px",sm:"17px"}}}>Serving in Tamilnadu</Typography>
                                        <Box mt={0.5}>
                                        <Typography sx={{fontSize:{xs:"12px",sm:"15px",md:"20px"}}}>Yes</Typography>
                                        </Box>
                                        </Grid>
                                        <Grid size={4} >
                                            <Typography color="#B0B0B0" sx={{fontSize:{xs:"13px",sm:"17px"}}}>Category / Guest Type</Typography>
                                            <Box mt={0.5}>
                                                <Typography sx={{fontSize:{xs:"12px",sm:"15px",md:"20px"}}}>Officials of TN Govt</Typography>
                                                <Typography color="#666666DE" sx={{fontSize:{xs:"12px",sm:"15px",md:"20px"}}}>Ministry</Typography>

                                            </Box>
                                            </Grid>
                                        <Grid size={4}>
                                            <Typography color="#B0B0B0" sx={{fontSize:{xs:"13px",sm:"17px"}}}>Purpose of Visit</Typography>
                                            <Box mt={0.5}>
                                                <Typography sx={{fontSize:{xs:"12px",sm:"15px",md:"20px"}}}>Official</Typography>

                                            </Box>
                                            </Grid>

                                    </Grid>
                                    <Grid container mt={4}>
                                        <Grid size={4}>
                                        <Typography color="#B0B0B0" sx={{fontSize:{xs:"13px",sm:"17px"}}}>Official Id</Typography>
                                        <Box  display={"flex"} alignItems={"center"}>
                                        <Button onClick={()=>setOpen(true)}>

                                            <img src="/ngl.png" alt="Not found" style={{height:"25px",width:"25px"}}/>
                                                < VisibilityIcon sx={{fontSize:"25px",color:"blue",ml:1}} />
                                            </Button>
                                            </Box>
                                        </Grid>
                                        <Grid size={4} >
                                            <Typography  color="#B0B0B0" sx={{fontSize:{xs:"13px",sm:"17px"}}}>Official Confirmation Letter</Typography>
                                            <Box  display={"flex"} alignItems={"center"}  >
                                            <Button onClick={()=>setOpen(true)}>

                                            <img src="/ngl.png" alt="Not found" style={{height:"25px",width:"25px"}}/>
                                                < VisibilityIcon sx={{fontSize:"25px",color:"blue",ml:1}} />
                                            </Button>
                                            </Box>
                                            <Dialog open={open} onClose={() => setOpen(false)} fullWidth >
                                           <DialogContent>
                                            <OfficialconLetter setOpen={setOpen}/>
                                       </DialogContent>
                                    </Dialog>
                                            </Grid>
                                        <Grid size={4}>
                                            <Typography color="#B0B0B0" sx={{fontSize:{xs:"13px",sm:"17px"}}}>Remarks</Typography>
                                            <Box mt={0.5}>
                                                <Typography sx={{color:"#3F3F3F",fontSize:{xs:"12px",sm:"15px",md:"20px"}}}><i>Officers of Central Services</i></Typography>

                                            </Box>
                                            </Grid>

                                    </Grid>
                                   
                                    <Box sx={{ width: "100%", mt: 2 }}>
                               <Divider sx={{ height: "0.5px", backgroundColor: "#ccc" }} />
                                  </Box> 
                                    
                                 {/* <Box sx={{height:"1.3px",width:"100%",backgroundColor:"rgb(115, 114, 114)",mt:2}}></Box> */}
                            </Grid>
                       </Grid>
                       <Grid container justifyContent={"center"}>
                            <Grid size={11.5} sx={{height:"auto"}}>
                            <Typography sx={{font:"Roboto",fontWeight:400,fontSize:{xs:"24px",md:"28px"},letterSpacing:"0.15px",color:"#000000"}} my={2}>Visit Details</Typography>
                                    <Grid container>
                                        <Grid size={4}>
                                        <Typography color="#B0B0B0" sx={{fontSize:{xs:"12.5px",sm:"17px"}}}>Check-in / Check-out</Typography>
                                        <Box mt={0.5}>
                                        <Typography sx={{color:"#37A702",fontSize:{xs:"16px",sm:"20px",md:"22px"}}}>12 April 2025</Typography>
                                        <Typography sx={{color:"#FF080C",fontSize:{xs:"16px",sm:"20px",md:"22px"}}}>12 April 2025</Typography>

                                        </Box>
                                        </Grid>
                                        <Grid size={4} >
                                            <Typography color="#B0B0B0" sx={{fontSize:{xs:"12.5px",sm:"17px"}}}>Rooms / Guests</Typography>
                                            <Box mt={0.5} display={"flex"}>
                                                <Typography color="#666666DE" sx={{fontSize:{xs:"14px",sm:"20px",md:"22px"}}} >Rooms : <span style={{color:"black"}}>1,</span></Typography>
                                                <Typography color="#666666DE" sx={{fontSize:{xs:"14px",sm:"20px",md:"22px"},ml:1}}>Guests : <span style={{color:"black"}}>1</span></Typography>

                                            </Box>
                                            </Grid>
                                        <Grid size={4}>
                                            <Typography color="#B0B0B0" sx={{fontSize:{xs:"13px",sm:"17px"}}}>No of Days</Typography>
                                            <Box mt={0.5}>
                                                <Typography sx={{fontSize:{xs:"20px",sm:"25px",md:"30px"},ml:4}} >4</Typography>

                                            </Box>
                                            </Grid>

                                    </Grid>
                                    <Grid container mt={4} mb={10}>
                                        <Grid size={4} sx={{display:"flex",flexDirection:"column"}}>

                                        <TextField 
                                        sx={{width:"90%",backgroundColor:"white"}}
                                        id="outlined-select-Guest house"
                                                    select
                                                    label="Selected Guest House"
                                                    defaultValue="Nagercoil Guest House"
                                                    onChange={(e)=>setGuesthouse(e.target.value)}
                                                   
        >
                                         {Roomtypes.map((option) => (
                                      <MenuItem key={option.guesthouse} value={option.guesthouse}>
                                      {option.guesthouse}
                                      </MenuItem>
                                             ))}
                                      </TextField>
                                      <Link href="#" variant="body2" m={1} onClick={()=>setBookingopen(true)} >
                                              View current bookings
                                       </Link>
                                        </Grid>
                                        <Grid size={4} sx={{display:"flex",flexDirection:"column"}} >
                                        <TextField 
                                        sx={{width:"90%",backgroundColor:"white"}}

                                        id="outlined-select-Room"
                                                    select
                                                    label="Selected Room Type"
                                                    defaultValue="Deluxe Room"
                                                    onChange={(e)=>setRoomType(e.target.value)}
                                                   
        >
                                         {Roomtypes.map((option) => (
                                      <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                      </MenuItem>
                                             ))}
                                      </TextField>
                                      <Link href="#" variant="body2" m={1} onClick={()=>setBookingopen(true)} >
                                              View current bookings
                                       </Link>
                                       <Dialog open={bookingopen} onClose={() => setBookingopen(false)} fullWidth >
                                           <DialogContent>
                                            <CurrentBooking setBookingopen={setBookingopen}/>
                                       </DialogContent>
                                    </Dialog>
                                            </Grid>
                                        <Grid size={4}>
                                            <Typography color="#B0B0B0">Tariff</Typography>
                                            <Box mt={0.5}>
                                                <Typography variant='h6'><span style={{color:"#B0B0B0",fontSize:"15px"}}>₹</span>2,000</Typography>

                                            </Box>
                                            </Grid>

                                    </Grid>
                            </Grid>
                       </Grid> 
                       </Paper>

                    </Grid> 
                   <Grid size={{xs:11,lg:3.5}}>
                     <Grid container spacing={2}>
                       {/* Room Availability Card */}
                        <Grid size={12}>
                         <Card elevation={3}>
                           <Grid container justifyContent="center"  p={2}>
                             <Grid size={11.5}>
                               <Typography sx={{fontSize:"30px",fontWeight:400,font:"Roboto"}} color="black">
                                 Room Availability
                               </Typography>
                               <Divider sx={{width:"70%", my: 1 }} />
                             </Grid>
                   
                             {Roomavail.map((room, index) => {
                     const isSelected = room.guesthouse === guesthouse ;
                   
                     return (
                       <Grid size={{xs:12}} key={index} pt={3}>
                         <Grid
                           container
                           borderRadius={2}
                           p={1}
                           sx={{
                             border: isSelected && "2px solid #1945D2" ,
                             
                             transition: "0.3s ease"
                           }}
                         >
                           <Grid size={{xs:4}} display="flex" justifyContent="center" alignItems="center">
                           <Box
                             component="img"
                             src={room.img}
                             alt="Not found"
                               sx={{ width: { xs:"123px",sm: "150px", lg: "124px" }, height: "100%" }}
                               /> 
                           </Grid>
                           <Grid size={{xs:8}} display="flex" flexDirection="column" justifyContent="" pl={1} >
                             <Typography fontWeight={600}  sx={{fontSize:{xs:"15px",sm:"27px",lg:"17.56px"}}} color="#313131">
                               {room.guesthouse}
                             </Typography>
                             <Typography fontWeight={400} sx={{fontSize:{xs:"15px",sm:"20px",lg:"16.19px"}}} color="#969697">
                               Available Rooms
                             </Typography>
                   
                             <Grid container justifyContent="space-evenly" mt={2}>
                               <Grid size={{xs:5.5}} textAlign="center" borderRadius={2}  sx={{
                             border: isSelected && room.roomType?.[0] === roomType? "2px solid #1945D2":"none" ,
                             
                             transition: "0.3s ease"
                           }}>
                                 <Typography fontWeight={600} sx={{fontSize:{xs:"45px",sm:"60px",lg:"40px"}}} color="#159214">
                                   {room.suite}<span style={{ color: "#B0B0B0" }}>/8</span>
                                 </Typography>
                                 <Typography sx={{fontSize:{xs:"15px",sm:"23px",lg:"16px"}}} color="#BA3068">
                                   {room.roomType?.[0]}s
                                 </Typography>
                               </Grid>
                   
                               <Divider orientation="vertical" flexItem />
                   
                               <Grid size={{xs:5.8}} textAlign="center" borderRadius={2}  sx={{
                             border: isSelected && room.roomType?.[1] === roomType? "2px solid #1945D2":"none" ,
                             
                             transition: "0.3s ease"
                           }}>
                                 <Typography fontWeight={600} sx={{fontSize:{xs:"45px",sm:"60px",lg:"40px"}}} color="#159214">
                                   {room.deluxe}<span style={{ color: "#B0B0B0" }}>/8</span>
                                 </Typography>
                                 <Typography sx={{fontSize:{xs:"15px",sm:"23px",lg:"16px"}}} color="#BA3068">
                                 {room.roomType?.[1]}s
                                 </Typography>
                               </Grid>
                             </Grid>
                           </Grid>
                         </Grid>
                       </Grid>
                     );
                   })}
                   
                           </Grid>
                         </Card>
                       </Grid> 
                   
                       {/* Confirm Booking Card */}
                       <Grid size={{xs:12}}>
                         <Card elevation={3}>
                           <Grid container flexDirection="column" p={3} spacing={3}>
                             <Grid item>
                               <Typography sx={{fontSize:"30px",fontWeight:400,font:"Roboto"}}>Confirm Booking</Typography>
                               <Divider sx={{ width: "67%", my: 1 }} />
                             </Grid>
                   
                             <Grid item >
                               <Typography color="#969697" >Rooms / Guests / Room Type</Typography>
                               <Box display="flex">
                                 <Typography sx={{fontSize:"24px"}} color="#666666DE">
                                   Rooms : <span style={{ color: "black" }}>1,</span>
                                 </Typography>
                                 <Typography sx={{fontSize:"24px",ml:1}} color="#666666DE">
                                   Guests : <span style={{ color: "black" }}>1</span>
                                 </Typography>
                               </Box>
                               <Typography sx={{fontSize:"24px"}} color="#218089">
                                 Deluxe Room, <span style={{ color: "black" }}>Nagercoil</span>
                               </Typography>
                             </Grid>
                   
                             <Grid item py={2}>
                               <Typography variant="h6" color="text.secondary">
                                 Total Tariff: <span style={{ color: "#0081FF",fontWeight:600 }}>2,000/-</span>
                               </Typography>
                             </Grid>
                   
                             <Grid item py={1.5}>
                               <Box display="flex" gap={2}>
                                 <Button variant="contained"  sx={{background: 'linear-gradient(to bottom, #FF8FA3,#EF233C)', color: 'white',fontWeight: 600,borderRadius: '5px',fontSize: '20px',boxShadow: '0 4px 6px rgba(0,0,0,0.2)',textTransform: 'none','&:hover': {background: 'linear-gradient(to bottom, #FF8FA3,#EF233C)',},}} color="error">Cancel</Button>
                                 <Button variant="contained"  sx={{background: 'linear-gradient(to bottom, #6DE069,#008000)', color: 'white',fontWeight: 600,borderRadius: '5px',fontSize: '20px',boxShadow: '0 4px 6px rgba(0,0,0,0.2)',textTransform: 'none','&:hover': {background: 'linear-gradient(to bottom, #6DE069,#008000)',},}} color="error">Check-in</Button>
                                 <Button variant="contained"  sx={{background: 'linear-gradient(to bottom,  #76EDD2,#0E76D6)', color: 'white',fontWeight: 600,borderRadius: '5px',fontSize: '20px',boxShadow: '0 4px 6px rgba(0,0,0,0.2)',textTransform: 'none','&:hover': {background: 'linear-gradient(to bottom, #76EDD2,#0E76D6)',},}} color="error" onClick={()=>setConfirm(true)}>Reassign</Button>
                               </Box>
                               <Dialog open={confirm} onClose={()=>setConfirm(false)}>
                                <DialogContent>
                                <Confirmation setConfirm={setConfirm}/>
                                </DialogContent>

                               </Dialog>
                             </Grid>
                           </Grid>
                         </Card>
                       </Grid>
                     </Grid>
                                       </Grid>

                </Grid>
            </Grid>

        </Grid>
    </Box>
  )
}
