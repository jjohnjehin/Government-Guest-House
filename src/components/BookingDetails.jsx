import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    TextField,
    Typography,
    Button,
    Grid,
    Box,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Divider,CardContent,Card
  } from '@mui/material';
  import data from "./db.json"
  import { ConfirmBooking } from './ConfirmBooking';
  import { useContext } from 'react';
  

export const BookingDetails = () => {
  
    const [guestHouse, setGuestHouse] = useState("Not Selected");
    const [checkIn,setCheckIn]=useState("")
    const [checkOut,setCheckOut]=useState("")
    const [room,setRoom]=useState("Not Selected")
    const [noOfRoom,setNoOfRoom]=useState(1)
    const [noOfGuest,setNoOfGuest]=useState(1)
    const navigate=useNavigate()
    console.log("checkindate:",checkIn)
    const item = data.find(
        (item) => item.name && item.name.toLowerCase() === guestHouse.toLowerCase()
      );
      
      console.log("Matched Item:", item);



  const handleChange = (event) => {
    setGuestHouse(event.target.value);
    console.log("Selected Guest House:", event.target.value);
  };
  const handleChangeCheckInDate = (event) => {
    setCheckIn(event.target.value);
    console.log("Selected date:", event.target.value);
  };
  const handleChangeCheckOutDate = (event) => {
    setCheckOut(event.target.value);
    console.log("Selected date:", event.target.value);
  };
  const handleChangeRoomType= (event) => {
    setRoom(event.target.value);
    console.log("Selected room:", event.target.value);
  };
  const handleChangeNoOfRoom= (event) => {
    setNoOfRoom(event.target.value);
    console.log("Selected room:", event.target.value);
  };
  const handleChangeNoOfGuest= (event) => {
    setNoOfGuest(event.target.value);
    console.log("Selected room:", event.target.value);
  };
  return (
    <Box sx={{width:"100%",height:"100vh",display:'flex',flexDirection:"column",alignItems:'center'}}>
        {/* Header */}
        <Box sx={{width:"100%",height:"115px",display:'flex',justifyContent:'center'}}>
            <Grid container sx={{width:"90%",height:"100%",display:'flex'}}>
                <Grid items size={{lg:2}} sx={{width:"100%",height:"100%",display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Typography variant='h5' sx={{fontWeight:"700"}}>Kanyakumari.in</Typography>
                </Grid>
                <Grid items size={{lg:7}} sx={{width:"100%",height:"100%"}}>
                    <Box sx={{width:"900px",height:"100%",  background: "linear-gradient(to bottom, #8ef5cf, #157fe5)",borderRadius:"0px 0px 40px 40px",display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden'}}>
                        <Grid container sx={{width:"664.82px",height:"91px",}}>
                            <Grid items size={{lg:3}} sx={{width:"100%",height:"100%",display:"flex",alignItems:'center'}}>
                                <Grid sx={{width:"83.82px",height:"85px",backgroundImage:"url()",backgroundPosition:"center",backgroundSize:"cover",marginLeft:"0px"}}></Grid>
                            </Grid>
                            <Grid items size={{lg:3}} sx={{width:"100%",height:"100%",display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Typography sx={{color:'white'}}>Home</Typography>
                            </Grid>
                            <Grid items size={{lg:3}} sx={{width:"100%",height:"100%",display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Typography sx={{color:'white'}}>Gallery</Typography>
                            </Grid>
                            <Grid items size={{lg:3}} sx={{width:"100%",height:"100%",display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Typography sx={{color:'white',borderRadius:"0px 0px 40px 0px"}}>Location</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid items size={{lg:2}} sx={{width:"100%",height:"100%"}}></Grid>
            </Grid>
        </Box>
        {/* BODY */}
        <Box sx={{width:"80%",height:"700px",marginTop:"50px"}}>
            <Grid container sx={{width:"100%",height:'100%',display:'flex',justifyContent:'space-between',alignItems:"space-between"}}>
                <Grid items size={{lg:9}} sx={{width:"1240px",height:"100%",bgcolor:"#F2F2F3",display:'flex',justifyContent:'center'}}>
                    <Grid sx={{width:'95%',height:"100%"}}>
                        <Box sx={{width:"100%",height:"38px",display:'flex',justifyContent:"center",alignItems:'center',marginTop:"20px"}}>
                            <Typography variant='h5'>Book your Stay</Typography>
                        </Box>
                        {/* Visit Details */}
                        <Box sx={{width:"100%",height:"180px"}}>
                            <Box sx={{width:"100%",height:"50px"}}>
                                <Typography variant='h6'>Visit Details</Typography>
                            </Box>
                            {/* First Row */}
                            <Box container sx={{width:'100%',height:"50px",display:'flex',justifyContent:'space-between'}}>
                                <Grid items size={{lg:2.5}} sx={{width:"100%",height:"100%",}}>
                                    <TextField fullWidth label={
                                                <span>
                                                CheckIn Date <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            } type="date" InputLabelProps={{ shrink: true }}  value={checkIn} onChange={handleChangeCheckInDate} />
                                </Grid>
                                <Grid items size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <TextField fullWidth label={
                                                <span>
                                                CheckOut Date <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            } type="date" InputLabelProps={{ shrink: true }}  value={checkOut} onChange={handleChangeCheckOutDate}/>
                                </Grid>
                                <Grid items size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <TextField fullWidth label={
                                                <span>
                                                No Of Rooms <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            } type="number" defaultValue={1} value={noOfRoom} onChange={handleChangeNoOfRoom} />
                                </Grid>
                                <Grid items size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <TextField fullWidth label={
                                                <span>
                                                No Of Guests <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            } type="number" defaultValue={1} value={noOfGuest} onChange={handleChangeNoOfGuest}/>
                                </Grid>
                            </Box>
                            {/* SECOND ROW */}
                            <Box container sx={{width:"100%",height:"50px",marginTop:'20px',display:'flex',justifyContent:"space-between"}}>
                                <Grid items size={{lg:5.7}} sx={{width:"100%",height:"100%"}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="room-type-label">Select Guest House<Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                        <Select defaultValue="" value={guestHouse} onChange={handleChange} label="Select Guest House*">
                                            <MenuItem value="Nagercoil Guest House">Nagercoil Guest House</MenuItem>
                                            <MenuItem value="Kanyakumari Guest House">Kanyakumari Guest House</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid items size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    {/* <FormControl fullWidth>
                                        <InputLabel >Select Room Type*</InputLabel>
                                        <Select defaultValue="" value={room} onChange={handleChangeRoomType}>
                                            <MenuItem value="AC">AC</MenuItem>
                                            <MenuItem value="Non AC">Non AC</MenuItem>
                                        </Select>
                                    </FormControl> */}
                                    <FormControl fullWidth>
                                    <InputLabel>Select Room Type<Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                    <Select defaultValue=""  >
                                        <MenuItem value="guestHouse1">Delux</MenuItem>
                                        <MenuItem value="guestHouse2">Ultra Delux</MenuItem>
                                    </Select>
                                    </FormControl>
                                </Grid>
                                <Grid items size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <FormControl fullWidth>
                                        <InputLabel>Purpose Of Visit<Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                        <Select defaultValue="">
                                            <MenuItem value="guestHouse1">Select</MenuItem>
                                            <MenuItem value="guestHouse2">Select</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Box>
                        </Box>
                        {/* Line */}
                        <Box sx={{width:'100%',height:"1px",bgcolor:"grey",marginTop:"20px"}}></Box>
                        {/* Third Row */}
                        <Box sx={{width:'100%',height:"190px"}}>
                            <Box sx={{width:"100%",height:"50px"}}>
                            <Typography variant='h6'>Official Details</Typography>
                            </Box>
                        <Box container sx={{width:"100%",height:"50px",display:'flex',justifyContent:'space-between'}}>
                            <Grid items size={{lg:2}} sx={{width:"100%",height:'100%'}}>
                                <FormControl fullWidth>
                                <InputLabel>Salutation<Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>

                                    <Select defaultValue="" >
                                        <MenuItem value="guestHouse1">Select</MenuItem>
                                        <MenuItem value="guestHouse2">Select</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid items size={{lg:9}} sx={{width:"100%",height:'100%'}}>
                                <TextField fullWidth label={
                                    <span>
                                    Enter Your Full Name <span style={{ color: 'red' }}>*</span>
                                    </span>
                                } />
                            </Grid>
                        </Box>
                        {/* FOURTH ROW */}
                        <Box container sx={{width:'100%',height:'50px',display:'flex',justifyContent:'space-between',marginTop:"20px"}}>
                            <Grid items size={{lg:5.7}} sx={{width:"100%",height:"100%"}}>
                                <TextField fullWidth label={
                                        <span>
                                        VAlid Whattsapp Number <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    } />
                            </Grid>
                            <Grid items size={{lg:5.5}} sx={{width:"100%",height:"100%"}}>
                                <TextField fullWidth label={
                                        <span>
                                        Email <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    } />
                            </Grid>
                        </Box>
                        </Box>
                        {/* Line */}
                        <Box sx={{width:'100%',height:"1px",bgcolor:"grey",marginTop:"20px"}}></Box>
                        {/* Fifth Row */}
                        <Box sx={{width:"100%",height:"265px"}}>
                        <Box sx={{width:"100%",height:"50px",marginTop:"10px"}}>
                            <Typography variant='h6'>Official Profile</Typography>
                        </Box>
                        <Box container sx={{width:'100%',height:'50px',display:'flex',justifyContent:'space-between',marginTop:"0px"}}>
                            <Grid items size={{lg:5.7}} sx={{width:"100%",height:"100%"}}>
                                <FormControl fullWidth>
                                    <InputLabel>Are you serving in TamilNadu<Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                    <Select defaultValue="" >
                                        <MenuItem value="AC">Yes</MenuItem>
                                        <MenuItem value="Non AC">No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid items size={{lg:5.5}} sx={{width:"100%",height:"100%"}}>
                                <FormControl fullWidth>
                                    <InputLabel>Guest Type<Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                    <Select defaultValue="">
                                        <MenuItem value="guestHouse1">Government</MenuItem>
                                        <MenuItem value="guestHouse2">Non Government</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Box>
                        {/* SIXTH ROW */}
                        <Box container sx={{width:'100%',height:'50px',display:'flex',justifyContent:'space-between',marginTop:"20px"}}>
                            <Grid items size={{lg:5.7}} sx={{width:"100%",height:"100%"}}>
                                <FormControl fullWidth>
                                    <InputLabel>Designation of Official Booking<Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                    <Select defaultValue="">
                                        <MenuItem value="guestHouse1">AC</MenuItem>
                                        <MenuItem value="guestHouse2">Non AC</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid items size={{lg:5.5}} sx={{width:"100%",height:"100%"}}>
                                <TextField fullWidth label={
                                        <span>
                                        Remark <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    } />
                            </Grid>
                        </Box>
                        </Box>
                    </Grid>
                </Grid>
                {/* RIGHT TABLE */}
                <Grid items size={{lg:2.8}} sx={{width:"100%",height:"100%",bgcolor:'white'}}>
                    {/* BOX ONE  */}
                    <Box sx={{width:'100%',height:"100%",display:'flex',flexDirection:"column",justifyContent:'space-between'}}>
                    <Card sx={{ maxWidth: 350, borderRadius: 2, boxShadow: 3 }}>
                      <CardContent>
                        <Typography variant="h6" fontWeight="bold" gutterBottom> Your Booking Summary</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Box component="img" src={item ? item.image : "No Guest House Is Selected"} alt="Room" sx={{width: '100%',height: 'auto',borderRadius: 2,mb: 2,boxShadow: 1,}}/>
                        <Typography variant="subtitle1" fontWeight="bold">{guestHouse}</Typography>
                        <Typography variant="body2" color="text.secondary" mb={2}>{item ? item.location : "No Guest House Found"}</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Grid container sx={{display:'flex',justifyContent:'space-between',position:"relative"}}>
                          <Box sx={{width:"2px",height:"100%",bgcolor:'grey',position:"absolute",left:"120px",top:"0px"}}></Box>
                          <Grid item xs={5}>
                            <Typography variant="body2" color="green" fontWeight="bold">Check-in</Typography>
                            <Typography fontWeight="500" variant="body1">{checkIn}</Typography>
                          </Grid>
                          <Grid item xs={5}>
                            <Typography variant="body2" color="red" fontWeight="bold">Check-out</Typography>
                            <Typography fontWeight="500" variant="body1">{checkOut}</Typography>
                          </Grid>
                        </Grid>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2" color="text.secondary">Selected Room Type</Typography>
                        <Typography fontWeight="bold" variant="body1">{room}</Typography>
                        <Typography variant="body2" color="text.secondary">{noOfRoom} Room , {noOfGuest} Guest</Typography>
                      </CardContent>
                    </Card>
                    {/* BOX TWO  */}
                    <Box sx={{ width: "100%", height: '227px', display: 'flex', alignItems: 'center', justifyContent: 'center',boxShadow:"5" }}>
                      <Box sx={{backgroundColor: '#f9f9f9',padding: 2,borderRadius: 2,width: '90%',maxWidth: 350}}>
                        <Typography variant="h6" fontWeight="bold" textAlign="left" gutterBottom>Total Tariff</Typography>
                        <Box sx={{backgroundColor: '#f8d7da',borderRadius: 2,py: 2,mb: 2,display:"flex",height:"10px",display:'flex',alignItems:"center"}}>
                          <Typography variant="h6" sx={{ color: '#004085', fontWeight: 'bold' ,marginLeft:"10px"}}>Rs 0/-</Typography>
                        </Box>
                        <Button variant="contained" sx={{background: 'linear-gradient(to top, #007bff, #00ffcc)',color: 'white',fontWeight: 'bold',fontSize: '1.1rem',px: 4,py: 1,borderRadius: '7px',boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',textTransform: 'none','&:hover': {background: 'linear-gradient(to top, #0056b3, #00cc99)',},height:"30px"}}
                          onClick={() => {
                            navigate('/ConfirmBooking', {
                              state: {
                                checkIn,
                                checkOut,
                                noOfRoom,
                                noOfGuest,
                                guestHouse,
                                room
                              }
                            });
                          }}
                        >Book Now</Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
            </Grid>
        </Box>
     
    </Box>
  );
};

