import React, { useContext, useState,}  from 'react';
import { Box, Button, Grid, IconButton,  Typography, Dialog, TextField } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Gallary } from './Gallary';
import { Location } from './Location';
import { Footer } from './Footer';
import { BookingDetails } from './BookingDetails';
import { Header } from './Header';
import { BookingContext } from './BookingContext';




export const Home = () => {


  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [checkindate,setCheckindate]=useState(dayjs().add(1, 'day').format('DD MMMM YYYY'))
  console.log("Checkin:",checkindate)
  const [selectedoutdate,setSelectedoutdate]=useState(dayjs())
  const [checkoutdate,setCheckoutdate]=useState(dayjs().add(2, 'day').format('DD MMMM YYYY'))
  console.log("Checkoutt:",checkoutdate)
  const [opencheckin,setOpencheckin]=useState(false)
  const [opencheckout,setOpencheckout]=useState(false)
  const [open,setOpen]=useState(false)
  const [guest,setGuest]=useState(1)
  const [room,setRoom]=useState(1)
  const [activePage, setActivePage] = useState("home");


  const handlecheckin=()=> setOpencheckin(true)
  const handlecheckout=()=> setOpencheckout(true)

  const handleclick=()=> setOpen(true)

  const handlenav = (id) => {
    setActivePage(id);

  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
 
  
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '698px' , marginTop:"-144px"}}>
      <Box
        id='home'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/assets/Images/bluerees.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // filter: 'blur(7px)',
          zIndex: 0,
          width:"100%",
        
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1, height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
        <Grid container sx={{ height: '100%'}}>
            
          <Grid size={{lg:12}} >
            <Grid container sx={{height:"597px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",mt:17}}>
              <Grid size={{lg:10}} sx={{height:"200px",textAlign:"center"}}>
                <Typography sx={{fontSize:"69px", background: "linear-gradient(to right,rgb(187, 190, 193), #eef2f3)",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",fontWeight:"bold"}} >Welcome to Kanniyakumari </Typography>
                <Typography sx={{fontSize:"69px", background: "linear-gradient(to right,#C6FFDD,#FBD786,rgb(247, 65, 71))",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",fontWeight:"bold"}}>District Guest House</Typography>
              </Grid>
              <Grid size={{lg:9}} sx={{height:"100px",backgroundColor:"rgb(216, 217, 218)",borderRadius:"10px",mt:2}}>
                <Grid container sx={{display:"flex",flexDirection:"row",justifyContent:"center",pt:1.8}}>
                  <Grid size={4} sx={{height:"70px",borderRadius:"10px",backgroundColor:"black"}}>
                    <Grid container justifyContent={"center"} alignItems={"center"}>
                      <Grid size={5.8}  sx={{height:"70px",cursor: "pointer"}} display={"flex"} alignItems={"center"}>
                        <Box onClick={handlecheckin} sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton >
                        <CalendarMonthIcon sx={{fontSize:"50px",color:"rgb(187, 189, 190)"}}/>
                        </IconButton>
                        <Box >
                        <Typography color='success'>Check-in</Typography>
                        <Typography color='white'>{checkindate}</Typography>
                        </Box>
                        </Box>

                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                      
                        <Dialog open={opencheckin} onClose={()=>setOpencheckin(false)}>
                            <Box sx={{ padding: 3 }}>
                                  <DatePicker
                                     label="Pick a date"
                                     value={selectedDate}
                                     onChange={(newValue) => {
                                     setSelectedDate(newValue);
                                     setCheckindate(newValue.format('DD MMMM YYYY'))
                                     setOpencheckin(false); // Close dialog after selecting
                                    }}
                                    shouldDisableDate={(date) => {
                                      // Disable today and all past dates
                                      return date.isBefore(dayjs().add(1, 'day'), 'day');
                                    }}
                                    />
                             </Box>
                         </Dialog>
                        </LocalizationProvider>
                       
                      </Grid>
                      <Box sx={{height:"60px",width:"1px",backgroundColor:"rgb(187, 189, 190)"}}></Box>
                      <Grid size={5.8} sx={{height:"70px",cursor:"pointer"}} display={"flex"} alignItems={"center"} >
                      <Box onClick={handlecheckout} sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton >
                        <CalendarMonthIcon sx={{fontSize:"50px",color:"rgb(187, 189, 190)"}}/>
                        </IconButton>
                        <Box >
                        <Typography color='error'>Check-out</Typography>
                        <Typography color='white'>{checkoutdate}</Typography>
                        </Box>
                        </Box>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                     
                        <Dialog open={opencheckout} onClose={()=>{setOpencheckout(false);console.log("close")}}>
                            <Box sx={{ padding: 3 }}>
                                  <DatePicker
                                     label="Pick a date"
                                     value={selectedoutdate}
                                     onChange={(newValue) => {
                                     setSelectedoutdate(newValue);
                                     setCheckoutdate(newValue.format('DD MMMM YYYY'))
                                     setOpencheckout(false); // Close dialog after selecting
                                    }}
                                    shouldDisableDate={(date) => {
                                      // Disable today,tommorrow and all past dates
                                      return date.isBefore(dayjs().add(2, 'day'), 'day');
                                    }}
                                    />
                             </Box>
                         </Dialog>
                        </LocalizationProvider>
                       
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid size={3} sx={{height:"70px",mx:4,borderRadius:"10px",backgroundColor:"black"}} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                     <GroupsOutlinedIcon  sx={{fontSize:"60px",color:"rgb(187, 189, 190)"}}/>
                     <Box ml={2} sx={{display:"flex",flexDirection:"column",justifyContent:"center",lineHeight:"2px",alignItems:"center",}} >
                      <Box>
                      <Typography color='rgb(187, 189, 190)' display={"flex"}>Guests 
                        <IconButton onClick={handleclick}>
                        <KeyboardArrowDownIcon sx={{color:"white",marginTop:'-9px'}}/>
                        </IconButton>
                        </Typography>
                        </Box>
                        <Dialog open={open} onClose={()=>setOpen(false)}>
                          <Box component="form" sx={{ padding: 3,display:"flex",flexDirection:'column'}} onSubmit={(e)=>{
                            e.preventDefault();
                            setOpen(false);
                            }}>
                            <Typography>No.of Guests*</Typography>
                            <TextField placeholder='Guests' variant="outlined" onChange={(e)=>setGuest(e.target.value)}  required ></TextField>
                            <Typography>No.of Rooms*</Typography>
                            <TextField placeholder='Rooms' variant="outlined" onChange={(e)=>setRoom(e.target.value)} required ></TextField>
                            <Button type='submit' variant='contained' sx={{width:"40%",backgroundImage:"linear-gradient(to right, #616161, #9bc5c3)",m:2}} 
                            >Add</Button>
                          </Box>
                        </Dialog>
                      <Box sx={{marginTop:"-8px"}}>
                      <Typography color='white'>{guest} {guest>1?"Guests":"Guest"}- {room} {room>1?'Rooms':'Room'}</Typography>
                      </Box>
                     </Box>
                  </Grid>
                  <Grid size={3.5} sx={{height:"70px",borderRadius:"10px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Button variant='contained' sx={{  height: "80%",width: "90%", borderRadius: "10px", background: 'linear-gradient(to bottom, #76EDD2, #0E76D6)', color: '#fff',fontWeight: "bold",fontSize: "28px",textTransform:"none", transition: "all 0.3s ease",'&:hover': {
                    background: 'linear-gradient(to bottom, #76EDD2, #0E76D6)', transform: "scale(1.05)"
                    ,boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)"
                      }}} onClick={()=>handlenav('location',{
                                    state: {
                                      checkindate,checkoutdate,guest,room
                                    }
                                  })}>Check Availability</Button>
                  </Grid>

                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Gallary/>
      <Location/>
      <Footer/>
    </Box>
  );
};
