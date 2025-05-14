import React, { useState, } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import {
    TextField,
    Typography,
    Button,
    Grid,
    Box,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Divider,CardContent,Card,Link
  } from '@mui/material';
  import data from "../db.json"
  import { Footer } from '../Footer';
  import { useContext } from 'react';
  import { BookingContext } from "./BookingContext"; // Adjust path
  
  

export const BookingDetails = () => {
  // const [active, setActive] = useState("Home");
  
    const [guestHouse, setGuestHouse] = useState("Not Selected");
    const [checkIn,setCheckIn]=useState("")
    const [checkOut,setCheckOut]=useState("")
    // const [room,setRoom]=useState("Not Selected")
    const [noOfRoom,setNoOfRoom]=useState(1)
    const [noOfGuest,setNoOfGuest]=useState(1)
    const [designation,setDesignation]=useState("")
    const [roomType,setRoomType]=useState("")
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
    setRoomType(event.target.value);
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
  // const navigate=useNavigate()
    const[active,setActive]=useState("Home")
    const handleNavigation = (index, path) => {
      setActive(index);
      navigate(path);
    };
// DATA FROM HOME PAGE
const location = useLocation();
  const { checkindate,checkoutdate,guest,room } = location.state || {};
// const {
//   checkindate,
//   checkoutdate,
//   guest,
//   room,
//   setGuest,
//   setRoom
// } = useContext(BookingContext);
// console.log("CHECKKKKKK:",checkindate)
  return (
    <Box sx={{width:'100%',height:'100%'}}>
      {/* HEADER */}
      <Grid sx={{width:"100%",height:"100px",display:"flex",justifyContent:"center"}}>
                           <Grid sx={{width:"300px",height:"70px",position:"absolute",left:"40px",top:"20px",backgroundImage:`url(${process.env.PUBLIC_URL}/assets/Images/tamilnaduogo2.png)`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></Grid> 
                          <Grid sx={{width:"45%",height:"80px",backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Images/headerbackblue.png)`,backgroundPosition:"top",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundSize: "100% 100%",display:"flex",alignItems:"center"}}>
                          {/* GOV LOGO */}
                            <Grid sx={{width:"80px",height:'65px',marginLeft:"100px",backgroundImage:`url(${process.env.PUBLIC_URL}/assets/Images/Gov_Logo.png)`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}
                                  onClick={() => {
        console.log("Grid clicked");
        navigate('/');
      }}></Grid>
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
                                          fontWeight: item.name === "Assign" ? "600" : "400",
                                          cursor: "pointer",
                                          borderBottom: item.name === "Assign" ? "3px solid white" : "none",
                                          pb: "4px"
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
      {/* PARENT CONTAINER */}
            <Box sx={{width:"100%",height:"790px",display:"flex",justifyContent:'center',marginTop:"30px"}}>
              {/* PARENT TWO */}
              <Box sx={{width:"95%",height:'100%'}}>
                <Grid container sx={{width:"100%",height:"100%",display:'flex',justifyContent:'space-between'}}>
                  {/* LEFT CONTAINER */}
                  <Grid item size={{lg:8.8}} sx={{width:"100%",height:"100%",bgcolor:"#F2F2F3",display:"flex",justifyContent:"center",borderRadius:"4px"}}>
                    {/* HIDDEN CONTAINER */}
                    <Grid sx={{width:"95%",height:"95%"}}>
                      {/* BOOK YOUR STAY CONTAINEER */}
                      <Grid sx={{width:"100%",height:'100px',display:"flex",justifyContent:'center',alignItems:"center"}}>
                        <Typography variant='h4'>Book Your Stay</Typography>
                      </Grid>
                      {/* VISIT DETAILS HEADING CONTAINER */}
                      <Box sx={{width:"100%",height:"50px",display:'flex',alignItems:"center"}}>
                        <Typography variant='h5'>Visit Details</Typography>
                      </Box>
                      {/* INPUT CONTAINER 1 */}
                      <Box sx={{width:'100%',height:"140px",marginTop:"10px",display:'flex',flexDirection:"column",justifyContent:'space-between'}}>
                        {/* ROW ONE */}
                        <Grid container sx={{width:"100%",height:'40px',display:'flex',justifyContent:'space-between'}}>
                          <Grid item size={{lg:2.7}} sx={{ height: "100%",width:'100%',border:"1px"}}>
                            <TextField size="small" fullWidth label={
                                <span>
                                  Check-In Date <span style={{ color: 'red' }}>*</span>
                                </span>
                              }
                              type="date"
                              InputLabelProps={{ shrink: true }}
                              value={checkindate}
                              onChange={handleChangeCheckInDate}/>
                          </Grid>
                          <Grid item size={{lg:2.7}} sx={{width:"100%",height: "100%"}}>
                            <TextField fullWidth label={
                                  <span>
                                    Check-Out Date <span style={{ color: 'red' }}>*</span>
                                  </span>
                                }
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                value={checkOut}
                                onChange={handleChangeCheckOutDate}
                                sx={{'& .MuiInputBase-root': {height: '40px',}}}/>
                          </Grid>
                          <Grid item size={{lg:2.7}} sx={{width:"100%",height: "100%"}}>
                            <TextField fullWidth label={
                                                        <span>
                                                        No of Rooms <span style={{ color: 'red' }}>*</span>
                                                        </span>
                                                    } type="number" defaultValue={1} value={noOfRoom} onChange={handleChangeNoOfRoom}sx={{'& .MuiInputBase-root': {height: '40px',}}} />
                          </Grid>
                          <Grid item size={{lg:2.7}} c>
                            <TextField fullWidth label={
                                                          <span>
                                                          No of Guests <span style={{ color: 'red' }}>*</span>
                                                          </span>
                                                      } type="number" defaultValue={1} value={noOfGuest} onChange={handleChangeNoOfGuest}sx={{'& .MuiInputBase-root': {height: '40px',}}} />
                          </Grid>
                        </Grid>
                        {/* ROW TWO */}
                        <Grid container sx={{width:"100%",height:'40px',display:'flex',justifyContent:'space-between'}} >
                          <Grid item size={{lg:5.8}} sx={{width:"100%",height:"100%"}}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="room-type-label">Select Guest House <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                <Select defaultValue=""  label="Select Guest House*" value={guestHouse} onChange={handleChange}>
                                    <MenuItem value="Nagercoil Guest House">Nagercoil Guest House</MenuItem>
                                    <MenuItem value="Kanyakumari Guest House">Kanyakumari Guest House</MenuItem>
                                </Select>
                            </FormControl>
                          </Grid>
                          <Grid item size={{lg:2.7}} sx={{width:"100%",height: "100%"}}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="room-type-label">Select Room Type <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                <Select defaultValue=""  label="Select Guest House*" value={guestHouse} onChange={handleChangeRoomType}>
                                    <MenuItem value="Delux">Delux</MenuItem>
                                    <MenuItem value="Ultra Delux">Ultra Delux</MenuItem>
                                </Select>
                            </FormControl>
                          </Grid>
                          <Grid item size={{lg:2.7}} sx={{width:"100%",height: "100%"}}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="room-type-label">Purpose Of Visit <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                <Select defaultValue=""  label="Select Guest House*">
                                    <MenuItem value="Select">Select</MenuItem>
                                    <MenuItem value="Select">Select</MenuItem>
                                </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                        {/* LINE */}
                        <Grid sx={{width:"100%",height:"1px", bgcolor:"grey"}}></Grid>
                        {/* <Grid sx={{width:"100%",height:"1px", bgcolor:"grey"}}></Grid> */}
                      </Box>
                      <Box sx={{width:"100%",height:"50px",display:'flex',alignItems:"center",marginTop:"25px"}}>
                        <Typography variant='h5'>Official Details</Typography>
                      </Box>
                      {/* INPUT CONTAINER 2 */}
                      <Box sx={{width:'100%',height:"140px",marginTop:"10px",display:'flex',flexDirection:"column",justifyContent:'space-between'}}>
                        {/* ROW ONE */}
                        <Grid container sx={{width:"100%",height:"40px",display:"flex",justifyContent:'space-between'}}>
                          <Grid item size={{lg:1.7}} sx={{width:"100%",height:"100%"}}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="room-type-label">Salutation <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                <Select defaultValue=""  label="Select Guest House*">
                                    <MenuItem value="Select">Select</MenuItem>
                                    <MenuItem value="select">select</MenuItem>
                                </Select>
                            </FormControl>
                          </Grid>
                          <Grid item size={{lg:10}} sx={{width:"100%",height:"100%"}}>
                            <TextField size="small" fullWidth label={
                                          <span>
                                          Enter Your Full Name <span style={{ color: 'red' }}>*</span>
                                          </span>
                                      } />
                          </Grid>
                        </Grid>
                        {/* ROW TWO */}
                        <Grid container sx={{width:"100%",height:"40px",display:"flex",justifyContent:'space-between'}}>
                          <Grid item size={{lg:5.8}} sx={{width:"100%",height:"100%"}}>
                            <TextField size="small" fullWidth label={
                                          <span>
                                          Valid Whattsapp Number for Booking Communication <span style={{ color: 'red' }}>*</span>
                                          </span>
                                      } />
                          </Grid>
                          <Grid item size={{lg:5.8}} sx={{width:"100%",height:"100%"}}>
                            <TextField size="small" fullWidth label={
                                          <span>
                                          Email <span style={{ color: 'red' }}>*</span>
                                          </span>
                                      } />
                          </Grid>
                        </Grid>
                        {/* LINE */}
                        <Grid sx={{width:"100%",height:"1px", bgcolor:"grey"}}></Grid>
                      </Box>
                      <Box sx={{width:"100%",height:"50px",display:'flex',alignItems:"center",marginTop:"25px"}}>
                        <Typography variant='h5'>Official Profile</Typography>
                      </Box>
                      <Box sx={{width:'100%',height:"110px",marginTop:"10px",display:'flex',flexDirection:"column",justifyContent:'space-between'}}>
                        {/* ROW ONE */}
                        <Grid sx={{width:"100%",height:"40px"}}>
                          <Grid container sx={{width:"100%",height:"40px",display:"flex",justifyContent:'space-between'}}>
                            <Grid item size={{lg:5.8}} sx={{width:"100%",height:"100%"}}>
                              <FormControl fullWidth size="small">
                                  <InputLabel id="room-type-label">Are You Serving in TamilNadu <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                  <Select defaultValue=""  label="Select Guest House*">
                                      <MenuItem value="Yes">Yes</MenuItem>
                                      <MenuItem value="No">No</MenuItem>
                                  </Select>
                              </FormControl>
                            </Grid>
                            <Grid item size={{lg:5.8}} sx={{width:"100%",height:"100%"}}>
                              <FormControl fullWidth size="small">
                                  <InputLabel id="room-type-label">Guest Type <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                  <Select defaultValue=""  label="Select Guest House*">
                                      <MenuItem value="Government Official">Government Official</MenuItem>
                                      <MenuItem value="Non Government Official">Non Government Official</MenuItem>
                                  </Select>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Grid>
                        {/* ROW TWO */}
                        <Grid sx={{width:"100%",height:"40px"}}>
                          <Grid container sx={{width:"100%",height:"40px",display:"flex",justifyContent:'space-between'}}>
                            <Grid item size={{lg:5.8}} sx={{width:"100%",height:"100%"}}>
                              <FormControl fullWidth size="small">
                                  <InputLabel id="room-type-label">Designation of Official Booking <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                  <Select defaultValue=""  label="Select Guest House*">
                                      <MenuItem value="Delux">Delux</MenuItem>
                                      <MenuItem value="Ultra Delux">Ultra Delux</MenuItem>
                                  </Select>
                              </FormControl>
                            </Grid>
                            <Grid item size={{lg:5.8}} sx={{width:"100%",height:"100%"}}>
                              <TextField size="small" fullWidth label={
                                            <span>
                                            Remark <span style={{ color: 'red' }}>*</span>
                                            </span>
                                        } />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                  {/* RIGHT CONTAINER */}
                  <Grid item size={{lg:3}} sx={{width:"100%",height:"100%",display:'flex',justifyContent:"space-between",flexDirection:"column"}}>
                    <Box sx={{width:'100%',height:"70%"}}>
                                <Card sx={{ borderRadius: "5px", boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1), 0px -4px 10px rgba(0, 0, 0, 0.05)',width:'90%',height:"100%"}}>
                                <CardContent sx={{marginLeft:"20px"}}>
                                    <Typography variant="h6" fontWeight="bold" gutterBottom> Your Booking Summary</Typography>
                                    <Divider sx={{ mb: 2 }} />
                                    <Box
                                        component="img"
                                        src={item && item.image ? item.image : "https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg"}
                                        alt="Room"
                                        sx={{
                                            width: '80%',
                                            height: '190px',
                                            borderRadius: 2,
                                            // mb: 2,
                                            boxShadow: 1,
                                        }}
                                        />

                                        <Typography variant="subtitle1" fontWeight="bold">{guestHouse}</Typography>
                                        <Typography variant="body2" color="text.secondary" mb={2}>{item ? item.location : "No Guest House Found"}</Typography>
                                    <Divider sx={{ mb: 2 }} />
                                    <Grid container sx={{display:'flex',justifyContent:'space-between',position:"relative",height:"100%",width:"90%"}}>
                                      {/* VDERTICAL LINE */}
                                      <Box sx={{width:"1px",height:"100%",bgcolor:'grey',position:"absolute",left:"120px",top:"0px"}}></Box>
                                        <Grid item size={{lg:5}}  sx={{width:"100%",height:"100%"}}>
                                            <Typography variant="body2" color="green" fontWeight="bold">Check-in</Typography>
                                            <Typography fontWeight="500" variant="body1">{checkindate||"Not Selected"}</Typography>
                                        </Grid>
                                        <Grid item size={{lg:5}} sx={{width:"100%",height:"100%"}} >
                                            <Typography variant="body2" color="red" fontWeight="bold">Check-out</Typography>
                                            <Typography fontWeight="500" variant="body1">{checkoutdate||"Not selected"}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider sx={{ my: 2 }} />
                                    <Typography variant="body2" color="text.secondary">Selected Room Type</Typography>
                                    <Typography fontWeight="bold" variant="body1">{room||"Not selected"}</Typography>
                                    <Typography variant="body2" color="text.secondary">{noOfRoom||0} Room , {noOfGuest||0} Guest</Typography>
                                </CardContent>
                                </Card>
                    </Box>
                          {/* BOX TWO  */}
                          <Box sx={{backgroundColor: 'white',borderRadius:"5px",width: '90%',boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1), 0px -2px 5px rgba(0, 0, 0, 0.05)',height:'25%',display:'flex',justifyContent:'center'}}>
                              <Box sx={{height:"100%",width:"90%",marginLeft:"30px"}}>
                                <Typography variant="h6" fontWeight="bold" textAlign="left" gutterBottom sx={{marginTop:"20px"}}>Total Tariff</Typography>
                              <Box sx={{backgroundColor: '#f8d7da',borderRadius:"5px",py: 2,mb: 2,display:"flex",height:"10px",display:'flex',alignItems:"center",width:"85%"}}>
                                <Typography variant="h6" sx={{ color: '#004085', fontWeight: 'bold' ,marginLeft:"10px"}}>Rs 0/-</Typography>
                              </Box>
                              <Box sx={{width:"52%",height:'40px',display:'flex',justifyContent:'center',borderRadius:"10px",boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1), 0px -4px 10px rgba(0, 0, 0, 0.05)',alignItems:'center'}}>
                              <Button variant="contained" sx={{background: 'linear-gradient(to top, #007bff, #00ffcc)',color: 'white',fontWeight: 'bold',fontSize: '1.1rem',px: 4,py: 1,borderRadius: '7px',boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',textTransform: 'none','&:hover': {background: 'linear-gradient(to top, #0056b3, #00cc99)',},height:"30px"}}
                                onClick={() => {
                                  navigate('/ConfirmBooking', {
                                    state: {
                                      checkIn,
                                      checkOut,
                                      noOfRoom,
                                      noOfGuest,
                                      guestHouse,
                                      room,
                                      designation
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
      <Footer/>
    </Box>
  
    

    
  );
};

