import { Box,Grid,Typography,Button, TextField,MenuItem ,Select,InputLabel,FormControl,InputAdornment,Tooltip} from "@mui/material"
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search'
import TablePagination from '@mui/material/TablePagination';
// import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DownloadIcon from '@mui/icons-material/Download';
import * as XLSX from 'xlsx';
import { useEffect, useState } from "react";
import axios from "axios";
export const SearchBooking=()=>{
    const [guests, setGuests] = useState([]);
const count=guests.length
    useEffect(() => {
        fetch("http://localhost:5000/bookings")
          .then((res) => res.json())
          .then((data) => {
            setGuests(data);
          });
      }, []);
      console.log("guestssssss:",guests)
    const navigate=useNavigate()
    const[active,setActive]=useState("SearchBooking")
        const handleNavigation = (index, path) => {
          setActive(index);
          navigate(path);
        };
        // INPUT HANDLER
       
  const getStayDuration = (checkin, checkout) => {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const diffTime = Math.abs(checkoutDate - checkinDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert ms → days
    return diffDays;
  };
  const [designation, setDesignation] = useState("");
  console.log("desss:",designation)
  const [status, setStatus] = useState("");
  console.log("statussss:",status)
  const [guestHouse, setGuestHouse] = useState("");
  console.log("Guesthouse:",guestHouse)
  const [purposeOfVisit, setPurposeOfVisit] = useState("");
  console.log("purpose:",purposeOfVisit)
  const [checkIn, setCheckIn] = useState("");
  console.log("CheckINNNNN:",checkIn)
  const [checkOut, setCheckOut] = useState("");
  console.log("Checkoutttt:",checkOut)
  const [assigned, setAssigned] = useState("");
  console.log("ASSigneddd:",assigned)
  const [cancelled, setCancelled] = useState("");
  console.log("cancelled:",cancelled)
  const [bookedOn, setBookedOn] = useState("");
  console.log("bookenONN:",bookedOn)
  const [bookedTo, setBookedTo] = useState("");
  console.log("BookedTooo:",bookedTo)
  const [filteredGuests, setFilteredGuests] = useState([]);
  console.log("fillll:",filteredGuests)

      
      
      const handleChange = (setter) => (event) => setter(event.target.value);

  const handleSubmit = () => {
  const isAnyFilterApplied = 
    designation || 
    status || 
    guestHouse || 
    purposeOfVisit || 
    checkIn || 
    checkOut || 
    assigned || 
    cancelled || 
    bookedOn || 
    bookedTo;

  if (!isAnyFilterApplied) {
    setFilteredGuests([]);
    return;
  }

  let finalCheckOut = checkOut;

  if (checkIn && !checkOut) {
    finalCheckOut = new Date().toISOString().split("T")[0];
    setCheckOut(finalCheckOut); // Update UI
  }

  const results = guests.filter((guest) => {
    return (
      (designation ? guest.designation === designation : true) &&
      (status ? guest.Status === status : true) &&
      (guestHouse ? guest.selectedLocation === guestHouse : true) &&
      (purposeOfVisit ? guest.purposeOfVisit === purposeOfVisit : true) &&
      (checkIn ? new Date(guest.checkin) >= new Date(checkIn) : true) &&
      (finalCheckOut ? new Date(guest.checkout) <= new Date(finalCheckOut) : true) &&
      (assigned ? guest.assignedBy === assigned : true) &&
      (cancelled ? guest.cancelledBy === cancelled : true) &&
      (bookedOn ? guest.bookedOn === bookedOn : true) &&
      (bookedTo ? guest.bookedTo === bookedTo : true)
    );
  });

  setFilteredGuests(results);
};

console.log("Filtereddddd:",filteredGuests)
const [page, setPage] = React.useState(2);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
      const handleChangePage = (event, newPage) => {
       setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
// EXPORT FUNCTIONALITY
const handleExport = () => {
  if (filteredGuests.length === 0) {
    alert("No data to export!");
    return;
  }

  const worksheet = XLSX.utils.json_to_sheet(filteredGuests);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Filtered_Guests");
  XLSX.writeFile(workbook, "Filtered_Guest_List.xlsx");
};
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = String(date.getFullYear()).slice(-2);
  return `${day} ${month} ${year}`;
};



  


    return (
        <Box sx={{width:"100%",height:"auto",display:"flex",flexDirection:"column",alignItems:'center'}}>
            <Grid sx={{width:"100%",height:"100px",display:"flex",justifyContent:"center"}}>
                <Grid sx={{width:"300px",height:"70px",position:"absolute",left:"40px",top:"20px",backgroundImage:`url(${process.env.PUBLIC_URL}/assets/Images/tamilnaduogo2.png)`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></Grid>
                <Grid sx={{width:"45%",height:"80px",backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Images/headerbackblue.png)`,backgroundPosition:"top",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundSize: "100% 100%",display:"flex",alignItems:"center"}}>
                {/* GOV LOGO */}
                <Grid sx={{width:"80px",height:'65px',marginLeft:"100px",backgroundImage:`url(${process.env.PUBLIC_URL}/assets/Images/Gov_Logo.png)`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}} onClick={()=>navigate('/')}></Grid>
                <Grid sx={{width:"380px",height:"50px",marginLeft:"10px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                    {
                    [
                        { name: "Assign", path: "/" },
                        { name: "Search Booking", path: "/SearchBooking" },
                        { name: "Availability Chart", path: "/AvailabilityChart" }
                    ].map((item, index) => (
                        <Grid
                            key={index}
                            sx={{
                                fontSize: "18px",
                                color: "white",
                                fontWeight: item.name === "Search Booking" ? "600" : "400",
                                cursor: "pointer",
                                borderBottom: item.name === "Search Booking" ? "3px solid white" : "none",
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
            <Grid sx={{width:'95%',height:"430px",bgcolor:'#F2F2F3',display:'flex',flexDirection:'column',alignItems:'center',boxShadow:2,borderRadius:"4px",marginTop:"20px"}}>
                <Grid sx={{width:'97%',height:'93%'}}>
                    <Grid sx={{width:'100%',height:'25%',display:'flex',alignItems:"center"}}>
                        <Grid sx={{height:'34px',width:'34px',border:'1px solid #1976D2',borderRadius:"8px",display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Button sx={{width:"34px",height:"34px"}} onClick={()=>navigate(-1)}><ArrowBackIosNewIcon sx={{color:'#00000099',fontSize:"15px"}}></ArrowBackIosNewIcon></Button>
                        </Grid>
                        <Typography variant="h4" sx={{fontWeight:"700",color:"#1945D2",fontSize:"48px",marginLeft:"20px"}}>Search Booking</Typography>
                    </Grid>
                    {/* WHITE CONTAINER */}
                    <Grid sx={{width:"100%",height:"75%",bgcolor:"white",borderRadius:"4px",boxShadow:"2"}}>
                        
                        {/* INPUT TABLE CONTAINER */}
                        <Grid sx={{width:"100%",height:"100%",display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                            <Grid container sx={{width:"100%",height:"16%",display:'flex',justifyContent:'space-around'}}>
                                <Grid item size={{lg:2.5}} sx={{width:'100%',height:"100%",}}>
                                    <TextField size="small" fullWidth label="Search By Name"></TextField>
                                </Grid>
                                <Grid item size={{lg:2.5}} sx={{width:'100%',height:"100%"}}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="room-type-label">Designation</InputLabel>
                                        <Select defaultValue=""  label="Designation" value={designation} onChange={handleChange(setDesignation)}>
                                            <MenuItem value="Minister">Minister</MenuItem>
                                            <MenuItem value="Advisor">Advisor</MenuItem>
                                            <MenuItem value="secratary">secratary</MenuItem>
                                            <MenuItem value="">None</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item size={{lg:2.5}} sx={{width:'100%',height:"100%"}}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="room-type-label">Status</InputLabel>
                                        <Select defaultValue=""  label="Status" value={status} onChange={handleChange(setStatus)}>
                                            <MenuItem value="Assigned">Assigned</MenuItem>
                                            <MenuItem value="Pending">Pending</MenuItem>
                                            <MenuItem value="Cancelled">Cancelled</MenuItem>
                                            <MenuItem value="">None</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item size={{lg:2.5}} sx={{width:'100%',height:"100%"}}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="room-type-label">Guest-House</InputLabel>
                                        <Select defaultValue=""  label="Guest-House" value={guestHouse} onChange={handleChange(setGuestHouse)}>
                                            <MenuItem value="Nagercoil">Nagercoil Guest-House</MenuItem>
                                            <MenuItem value="Kanyakumari">Kanniyakumari Guest-House</MenuItem>
                                            <MenuItem value="">None</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid container sx={{width:"100%",height:"16%",display:'flex',justifyContent:'space-around'}}>
                                <Grid item size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="room-type-label">Purpose of Visit</InputLabel>
                                        <Select defaultValue=""  label="Purpose of Visit" value={purposeOfVisit} onChange={handleChange(setPurposeOfVisit)}>
                                            <MenuItem value="Select">Select</MenuItem>
                                            <MenuItem value="Selected">Selected</MenuItem>
                                            <MenuItem value="">None</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="room-type-label">Assigned By</InputLabel>
                                        <Select defaultValue=""  label="Assigned By" value={assigned} onChange={handleChange(setAssigned)}>
                                            <MenuItem value="Admin one">Admin one</MenuItem>
                                            <MenuItem value="Admin Two">Admin Two</MenuItem>
                                            <MenuItem value="">None</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <FormControl fullWidth size="small">
                                        <InputLabel id="room-type-label">Cancelled By</InputLabel>
                                        <Select defaultValue=""  label="Cancelledby" value={cancelled} onChange={handleChange(setCancelled)}>
                                            <MenuItem value="User One">Admin One</MenuItem>
                                            <MenuItem value="User Two">Admin Two</MenuItem>
                                            <MenuItem value="">None</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <TextField size="small" fullWidth label={
                                                                    <span>
                                                                      Check-In Date 
                                                                    </span>
                                                                  }
                                                                  type="date"
                                                                  InputLabelProps={{ shrink: true }}
                                                                  value={checkIn}
                                                                  onChange={handleChange(setCheckIn)}/>
                                </Grid>
                            </Grid>
                            <Grid container sx={{width:"100%",height:"16%",display:'flex',justifyContent:'space-around'}}>
                                <Grid item size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <TextField size="small" fullWidth label={
                                                                    <span>
                                                                      Check-Out Date
                                                                    </span>
                                                                  }
                                                                  type="date"
                                                                  InputLabelProps={{ shrink: true }}
                                                                  value={checkOut}
                                                                  onChange={handleChange(setCheckOut)}/>
                                </Grid>
                                <Grid item size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <TextField size="small" fullWidth label={
                                                                    <span>
                                                                      Booked From 
                                                                    </span>
                                                                  }
                                                                  type="date"
                                                                  InputLabelProps={{ shrink: true }}
                                                                  value={bookedOn}
                                                                  onChange={handleChange(setBookedOn)}/>
                                </Grid>
                                <Grid item size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <TextField size="small" fullWidth label={
                                                                    <span>
                                                                      Booked To
                                                                    </span>
                                                                  }
                                                                  type="date"
                                                                  InputLabelProps={{ shrink: true }}
                                                                  value={bookedTo}
                                                                  onChange={handleChange(setBookedTo)}/>
                                </Grid>
                                <Grid item size={{lg:2.5}} sx={{ width: "100%", height: "100%", }}>
                                    {/* <TextField size="small" fullWidth label="Search" variant="outlined" InputProps={{ startAdornment: (
                                            <InputAdornment position="start">
                                            <SearchIcon />
                                            </InputAdornment>
                                        )}}/> */}
                                </Grid>
                            </Grid>
                            <Grid sx={{width:"150px",height:"12%",marginLeft:"1220px",bgcolor:'pink'}}>
                                <Button variant="contained" sx={{width:"100%"}} onClick={handleSubmit}>Search</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
            {filteredGuests.length > 0 ? (
                <Grid sx={{width:"95%",height:"auto",marginTop:"20px",boxShadow:3,borderRadius:"4px"}}>
                    <Grid sx={{width:"100%",height:"50px",display:'flex',alignItems:'center'}}>
                        <Button  endIcon={<SaveAltIcon sx={{color:'grey'}} />} sx={{marginLeft:"1290px",border:"1px solid #159214",color:"black",borderRadius:"8px"}} onClick={handleExport}>
                         Export
                        </Button>
                    </Grid>
                    {/* <> */}
                    {/* TABLE HEADER */}
                    <Grid container sx={{width: "100%",height: "70px",bgcolor: "#F1F3F8",alignItems: "center",fontFamily: "Roboto, sans-serif",borderBottom: "1px solid grey"}}>
                    <Grid item sx={{ width: "6%" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "13px", display: 'flex', justifyContent: 'center' }}>S.NO</Typography>
                    </Grid>
                    <Grid item sx={{ width: "16%" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>Name / Designation</Typography>
                    </Grid>
                    <Grid item sx={{ width: "15%" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>Category / Guest Type</Typography>
                    </Grid>
                    <Grid item sx={{ width: "13%" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>Check-in / Check-out<br />No of Days</Typography>
                    </Grid>
                    <Grid item sx={{ width: "17%" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>Rooms / Guests<br />Room Type</Typography>
                    </Grid>
                    <Grid item sx={{ width: "8%" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>Tariff</Typography>
                    </Grid>
                    <Grid item sx={{ width: "16%" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>Remarks</Typography>
                    </Grid>
                    <Grid item sx={{ width: "9%" }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "13px",paddingLeft:"10px" }}>Action</Typography>
                    </Grid>
                    </Grid>

                    {/* TABLE BODY */}
                    {filteredGuests.map((guest, index) => (
                    <Grid container key={guest.id} sx={{
                        width: '100%',
                        height: '70px',
                        borderBottom: '1px solid grey',
                        padding: '10px 0'
                    }}>
                        <Grid sx={{ width: '6%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography>{index + 1}</Typography>
                        </Grid>
                        <Grid sx={{ width: '16%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: "0.875rem" }}>{guest.name}</Typography>
                        <Typography sx={{ color: 'grey', fontSize: '13px' }}>{guest.designation}</Typography>
                        </Grid>
                        <Grid sx={{ width: '15%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography sx={{ fontSize: "0.875rem" }}>{guest.guestType}</Typography>
                            <Typography sx={{ color: 'grey', fontSize: '13px' }}>{guest.designation}</Typography>
                        </Grid>
                        <Grid sx={{ width: '13%', display: 'flex' }}>
                            <Grid sx={{ width: '52%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography sx={{ color: 'green', fontSize: "0.875rem" }}>
                                    {formatDate(guest.checkin)}
                                </Typography>
                                <Typography sx={{ color: 'red', fontSize: "0.875rem" }}>
                                    {formatDate(guest.checkout)}
                                </Typography>
                            </Grid>

                        <Grid sx={{ width: '20%', display: 'flex', alignItems: 'center' }}>
                            <Grid sx={{width: '90%',height: '72%',bgcolor: 'white',borderRadius: '5px',border: '1px solid',display: 'flex',justifyContent: 'center',alignItems: 'center',}}>
                                <Typography variant="h5" sx={{ fontSize: "21px" }}>{getStayDuration(guest.checkin, guest.checkout)}d</Typography>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid sx={{ width: '17%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Grid sx={{ height: '30%', display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ color: 'grey' }}>
                            Rooms: <span style={{ color: 'black', fontSize: "0.875rem" }}>{guest.noOfRoom},</span>
                            </Typography>
                            <Typography sx={{ paddingLeft: '5px', color: 'grey' }}>
                            Guests: <span style={{ color: 'black', fontSize: "0.875rem" }}>{guest.noOfGuest}</span>
                            </Typography>
                        </Grid>
                        <Grid sx={{ height: '30%', display: 'flex' }}>
                            <Typography sx={{ fontSize: "0.875rem", color: '#006D77DE' }}>{guest.roomType}</Typography>
                            <Typography sx={{ fontSize: "0.875rem" }}>, {guest.selectedLocation}</Typography>
                        </Grid>
                        </Grid>
                        <Grid sx={{ width: '8%', display: 'flex', alignItems: 'center' }}>
                        <Grid sx={{ width: '65%', height: "100%", display: 'flex', justifyContent: "space-between" }}>
                            <Typography variant="h5" sx={{ paddingTop: "5px", color: 'grey' }}>₹</Typography>
                            <Typography variant="h5" sx={{ paddingTop: "5px" }}>
                            {guest.Tariff?.toString().length > 3
                                ? guest.Tariff.toString().slice(0, 1) + ',' + guest.Tariff.toString().slice(1)
                                : guest.Tariff}
                            </Typography>
                        </Grid>
                        </Grid>
                        <Grid sx={{ width: '14%', display: 'flex', alignItems: 'center' }}>
                            <Tooltip title={guest.remark?.split(" ").length > 7 ? guest.remark : ""}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        paddingTop:'5px',
                                    color: 'grey',
                                    fontSize: "0.860rem",
                                    whiteSpace: 'pre-line', // Enables line breaks
                                    '&:hover': guest.remark?.split(" ").length > 7 ? {
                                        cursor: 'pointer'
                                    } : {}
                                    }}
                                >
                                    <i>
                                    {
                                        guest.remark?.split(" ").length > 7
                                        ? guest.remark.split(" ").slice(0, 4).join(" ") + "\n" + guest.remark.split(" ").slice(4, 7).join(" ") +" "+ "..."
                                        : guest.remark
                                    }
                                    </i>
                                </Typography>
                            </Tooltip>
                        </Grid>
                        <Grid sx={{width: "9%",height: "100%",display: 'flex',justifyContent: "center",alignItems: 'center'}}>
                            <Grid sx={{width:"60px",height: "30px",bgcolor: "#90E0EF",border: '1px solid #0077B6',borderRadius: "5px",display: 'flex',justifyContent: "center",alignItems: 'center'}}>
                                <Typography sx={{ fontSize: "12px", cursor: "pointer" }}>Update</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    ))}

                    {/* PAGINATION */}
                    <TablePagination
                    component="div"
                    count={filteredGuests.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                {/* </> */}
                </Grid>
                ) : (
                <Typography sx={{ padding: "30px 0", textAlign: "center", color: "grey", fontSize: "1rem" }}>
                    No data to display
                </Typography>
                )}

        </Box>
    )
}