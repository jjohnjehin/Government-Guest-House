import { Box,Grid,Typography,Link,Button,Tooltip} from "@mui/material"
import React from 'react';
import axios from "axios"
import { useState,useEffect } from "react"
import GroupIcon from '@mui/icons-material/Group';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import TablePagination from '@mui/material/TablePagination';
import {useNavigate} from "react-router-dom"

export const AdminHome=()=>{
    // NAV BAR
    const items=[
            {name:"Assign",id:"assign"},
            {name:'Search Booking',id:"search booking"},
            {name:"Availability Chart",id:"availability chart"}
          ]
            const [activePage, setActivePage] = useState("home");
           
           
            
      const handlenav = (id) => {
        setActivePage(id);
    
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // ACTIVE FILTER TAB
    const [activeTab, setActiveTab] = useState("Pending");
    const getWidth = (label) => {
        if (label === "All") return "17%";
        if (label === "Cancelled") return "25%";
        return "27%";
      };
      const [guests, setGuests] = useState([]);
      console.log("guestsss:",guests)
      const [statusCounts, setStatusCounts] = useState({
        All: 0,
        Pending: 0,
        Assigned: 0,
        Cancelled: 0,
      });
      
      useEffect(() => {
        fetch("http://localhost:5000/bookings")
          .then((res) => res.json())
          .then((data) => {
            setGuests(data);
      
            // Count the statuses
            const counts = {
              All: data.length,
              Pending: data.filter(g => g.Status === "Pending").length,
              Assigned: data.filter(g => g.Status === "Assigned").length,
              Cancelled: data.filter(g => g.Status === "Cancelled").length,
            };
            setStatusCounts(counts);
          });
      }, []);
      const filteredGuests=activeTab==="All"?guests:guests.filter(guest=>guest.Status===activeTab)
      console.log("filtereddddd:",filteredGuests)
      // PAGINATION
      const [page, setPage] = React.useState(2);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);
      const handleChangePage = (event, newPage) => {
       setPage(newPage);
    };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const getStayDuration = (checkin, checkout) => {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const diffTime = Math.abs(checkoutDate - checkinDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert ms → days
    return diffDays;
  };
  const[active,setActive]=useState("Home")
      const handleNavigation = (index, path) => {
        setActive(index);
        navigate(path);
      };
  const navigate=useNavigate()
  const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = String(date.getFullYear()).slice(-2);
  return `${day} ${month} ${year}`;
};

    return(
        <Box sx={{width:"100%",height:"100%",display:'flex',flexDirection:'column',alignItems:"center"}}>
            {/* HEADER */}
            <Grid sx={{width:"100%",height:"100px",display:"flex",justifyContent:"center"}}>
                    {/* <Grid sx={{width:"300px",height:"70px",position:"absolute",left:"40px",top:"20px",backgroundImage:`url(${process.env.PUBLIC_URL}/assets/Images/kklogo.png)`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></Grid> */}
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
                            { name: "Assign", path: "/" },
                            { name: "Search Booking", path: "/SearchBooking" },
                            { name: "Availability Chart", path: "/AvailabilityChart" }
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
            <Box sx={{width:"100%",minHeight:"730px",display:"flex",justifyContent:'center'}}>
                <Grid sx={{width:'95%',height:'100%',bgcolor:"#F2F2F3",display:"flex",justifyContent:'center',alignItems:'center'}}>
                    <Grid sx={{width:"97%",height:"92%",display:'flex',flexDirection:'column',justifyContent:"space-between"}}>
                        {/* TOP */}
                        <Grid container sx={{width:"100%",height:'170px',marginTop:"20px"}}>
                            {/* LEFT */}
                            <Grid item size={{lg:5.5}} sx={{width:"100%",height:"100%",display:"flex",alignItems:"center"}}>
                                <Grid sx={{width:'100%',height:"100px",display:'flex',alignItems:"center"}}>
                                    <img src="assets/Images/tamilnaduogo2.png" style={{width:"80%"}}></img>
                                </Grid>
                            </Grid>
                            {/* RIGHT */}
                            <Grid item size={{lg:6.5}} sx={{width:"100%",height:"100%",bgcolor:"white",boxShadow:"2",borderRadius:'5px',display:'flex',justifyContent:"center",alignItems:'center'}}>
                                <Grid sx={{width:"95%",height:"85%",display:'flex',flexDirection:'column',justifyContent:"space-between"}}>
                                    <Grid sx={{width:"100%",height:"33px",display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Typography sx={{fontWeight:"700",paddingBottom:"10px"}}>Current Room Availability</Typography>
                                    </Grid>
                                    {/* ROOM AVAILABILITY CONTAINER */}
                                    <Grid container sx={{width:'100%',height:"70%"}}>
                                        {/* KANYAKUMARI ROOM AVAILABILITY */}
                                        <Grid item size={{lg:5.5}} sx={{width:'100%',height:"100%",display:"flex",justifyContent:"space-between"}}>
                                            <Grid sx={{width:"28%",height:"100%",backgroundImage: 'url(/assets/Images/valluvar.jpg)',backgroundSize:"cover",borderRadius:"5px"}}></Grid>
                                            <Grid sx={{width:"68%",height:"100%"}}>
                                                <Typography sx={{fontSize:"14px"}}>Kanyakumari Guest House</Typography>
                                                <Typography sx={{color:'grey',fontSize:"12px"}}>Available Rooms</Typography>
                                                <Grid container sx={{width:"100%",height:"60px"}}>
                                                    <Grid item size={{lg:5}} sx={{width:"100%",height:"100%"}}>
                                                        <Grid sx={{width:"100%",height:"70%",display:"flex",justifyContent:"center",alignItems:'center'}}>
                                                            <Typography variant="h4"><span style={{color:"green",fontWeight:"700"}}>4</span><span style={{color:"grey"}}>/</span><span style={{color:"grey",fontWeight:"700"}}>8</span></Typography>
                                                        </Grid>
                                                        <Typography sx={{fontSize:"14px",color:"#BA3068"}}>Suite Rooms</Typography>
                                                    </Grid>
                                                    {/* LINE */}
                                                    <Grid item size={{lg:2}} sx={{width:"100%",height:"100%",display:"flex",justifyContent:'center',alignItems:"center"}}>
                                                        <Grid sx={{width:"1px",height:"80%",bgcolor:"grey"}}></Grid>
                                                    </Grid>
                                                    <Grid item size={{lg:5}} sx={{width:"100%",height:"100%"}}>
                                                        <Grid sx={{width:"100%",height:"70%",display:"flex",justifyContent:"center",alignItems:'center'}}>
                                                            <Typography variant="h4"><span style={{color:"green",fontWeight:"700"}}>4</span><span style={{color:"grey"}}>/</span><span style={{color:"grey",fontWeight:"700"}}>8</span></Typography>
                                                        </Grid>
                                                        <Typography sx={{fontSize:"14px",color:"#BA3068"}}>Delux Rooms</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        {/* LINE */}
                                        <Grid item size={{lg:1}} sx={{width:"100%",height:"100%",display:'flex',justifyContent:'center',alignItems:"center"}}>
                                            <Grid sx={{height:"80%",width:"2px", bgcolor:"grey"}}></Grid>
                                        </Grid>
                                        {/* NAGERCOIUL ROOM AVAILABILITY */}
                                        <Grid item size={{lg:5.5}} sx={{width:'100%',height:"100%",display:"flex",justifyContent:"space-between"}}>
                                        <Grid sx={{width:"28%",height:"100%",backgroundImage: 'url(/assets/Images/Nagercoil.jpg)',backgroundSize:"cover",borderRadius:"5px"}}></Grid>
                                            <Grid sx={{width:"68%",height:"100%"}}>
                                                <Typography sx={{fontSize:"14px"}}>Nagercoil Guest House</Typography>
                                                <Typography sx={{color:'grey',fontSize:"12px"}}>Available Rooms</Typography>
                                                <Grid container sx={{width:"100%",height:"60px"}}>
                                                    <Grid item size={{lg:5}} sx={{width:"100%",height:"100%"}}>
                                                        <Grid sx={{width:"100%",height:"70%",display:"flex",justifyContent:"center",alignItems:'center'}}>
                                                            <Typography variant="h4"><span style={{color:"green",fontWeight:"700"}}>4</span><span style={{color:"grey"}}>/</span><span style={{color:"grey",fontWeight:"700"}}>8</span></Typography>
                                                        </Grid>
                                                        <Typography sx={{fontSize:"14px",color:"#BA3068"}}>Suite Rooms</Typography>
                                                    </Grid>
                                                    {/* LINE */}
                                                    <Grid item size={{lg:2}} sx={{width:"100%",height:"100%",display:"flex",justifyContent:'center',alignItems:"center"}}>
                                                        <Grid sx={{width:"1px",height:"80%",bgcolor:"grey"}}></Grid>
                                                    </Grid>
                                                    <Grid item size={{lg:5}} sx={{width:"100%",height:"100%"}}>
                                                        <Grid sx={{width:"100%",height:"70%",display:"flex",justifyContent:"center",alignItems:'center'}}>
                                                            <Typography variant="h4"><span style={{color:"green",fontWeight:"700"}}>4</span><span style={{color:"grey"}}>/</span><span style={{color:"grey",fontWeight:"700"}}>8</span></Typography>
                                                        </Grid>
                                                        <Typography sx={{fontSize:"14px",color:"#BA3068"}}>Delux Rooms</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* BOTTOM */}
                        <Grid  sx={{width:"100%",height:'66%',bgcolor:"white",boxShadow:"3",marginTop:'20px',marginBottom:"20px"}}>
                            {/* FILTER TABLE */}
                            <Grid sx={{ width: "37%", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Grid sx={{ width: '97%', height: "80%", display: 'flex', justifyContent: "space-around" }}>
                                    {[
                            // {
                            //     label: "All",
                            //     count: 14,
                            //     icon: <GroupIcon sx={{ color: "#00000099" }} />,
                            //     isActive: true,
                            // },
                            {
                                label: "Assigned",
                                count: 10,
                                icon: <PanoramaFishEyeIcon />,
                                isActive: true, 
                            },
                            {
                                label: "Pending",
                                count: 14,
                                icon: <PanoramaFishEyeIcon />,
                                isActive: true,
                            },
                            {
                                label: "Cancelled",
                                count: 14,
                                icon: <PanoramaFishEyeIcon />,
                                isActive: true,
                            },
                            ].map((item, index) => (
                                    <Grid
                                        key={index}
                                        onClick={() =>{
                                            setActiveTab(item.label);
                                            // console.log("active numbers:",activeTab.length);
                                            console.log("activeTab:", item.label);
                                            console.log("guest.Status values:", guests.map(g => g.Status));

                                        }}// ← set active on click
                                        sx={{
                                        width: getWidth(item.label),
                                        height: "100%",
                                        display: "flex",
                                        alignItems: 'center',
                                        borderBottom: activeTab === item.label ? "2px solid #1976d2" : "none",
                                        marginLeft: item.label === "Cancelled" ? "3px" : 0,
                                        cursor: "pointer",
                                        }}
                                    >
                                        {React.cloneElement(item.icon, {
                                        sx: {
                                             color: activeTab === item.label ? (item.label === "Pending" ? "green" : "#BA3068") : "grey"
                                        }
                                        })}
                                        <Typography
                                        sx={{
                                            marginLeft: "3px",
                                            color: activeTab === item.label ? "#1976d2" : "grey"
                                        }}
                                        >
                                        {item.label} ({statusCounts[item.label] || 0})
                                        </Typography>
                                    </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                            {/* TABLE HEADING */}
                            <Grid container sx={{width: "100%",height: "50px",bgcolor: "#F1F3F8",alignItems: "center",fontFamily: "Roboto, sans-serif",borderBottom:"1px solid grey"}}>
                                <Grid item sx={{ width: "6%" }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: "13px",display:'flex',justifyContent:'center' }}>S.NO</Typography>
                                </Grid>
                                <Grid item sx={{ width: "16%" }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                                    Name / Designation
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ width: "15%"}}>
                                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                                    Category / Guest Type
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ width: "13%" }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                                    Check-in / Check-out<br />No of Days
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ width: "17%"}}>
                                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                                    Rooms / Guests<br />Room Type
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ width: "8%" }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                                    Tariff
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ width: "16%" }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                                    Remarks
                                    </Typography>
                                </Grid>
                                <Grid item sx={{ width: "9%"}}>
                                    <Typography sx={{ fontWeight: 600, fontSize: "13px" }}>
                                    Action
                                    </Typography>
                                </Grid>
                            </Grid>
                            {/* TABLE BODY */}
                            {filteredGuests.map((guest,index) => (
                                <Grid
                                container
                                sx={{
                                    width: '100%',
                                    height: '70px',
                                    display: 'flex',
                                    borderBottom: '1px solid grey',
                                    padding: '10px 0',
                                }}
                                key={guest.id}
                                >
                                <Grid sx={{ width: '6%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography>{index+1}</Typography>
                                </Grid>
                                <Grid sx={{ width: '16%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography sx={{fontSize:"0.875rem"}}>{guest.name}</Typography>
                                    <Typography sx={{ color: 'grey', fontSize: '13px' }}>{guest.designation}</Typography>
                                </Grid>
                                <Grid sx={{ width: '15%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography sx={{fontSize:"0.875rem"}}>{guest.guestType}</Typography>
                                    <Typography sx={{ color: 'grey', fontSize: '13px' }}>{guest.designation}</Typography>
                                </Grid>
                                <Grid sx={{ width: '13%', display: 'flex' }}>
                                    <Grid sx={{ width: '45%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <Typography sx={{ color: 'green', fontSize: "0.875rem" }}>
                                            {formatDate(guest.checkin)}
                                        </Typography>
                                        <Typography sx={{ color: 'red', fontSize: "0.875rem" }}>
                                            {formatDate(guest.checkout)}
                                        </Typography>
                                    </Grid>

                                    <Grid sx={{ width: '20%', display: 'flex', alignItems: 'center' }}>
                                        <Grid
                                        sx={{
                                        width: '90%',
                                        height: '72%',
                                        bgcolor: 'white',
                                        borderRadius: '5px',
                                        border: '1px solid',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        }}>
                                        <Typography variant="h5" sx={{fontSize:"21px"}} >{getStayDuration(guest.checkin, guest.checkout)}d</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ width: '17%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Grid sx={{ height: '30%', display: 'flex', alignItems: 'center' }}>
                                    <Typography sx={{ color: 'grey' }}>
                                        Rooms: <span style={{ color: 'black',fontSize:"0.875rem" }}>{guest.noOfRoom},</span>
                                    </Typography>
                                    <Typography sx={{ paddingLeft: '5px', color: 'grey' }}>
                                        Guests: <span style={{ color: 'black' ,fontSize:"0.875rem"}}>{guest.noOfGuest}</span>
                                    </Typography>
                                    </Grid>
                                    <Grid sx={{ height: '30%', display: 'flex' }}>
                                    <Typography sx={{ fontSize: '14px', color: '#006D77DE' ,fontSize:"0.875rem"}}>{guest.roomType}</Typography>
                                    <Typography sx={{ fontSize: '14px',fontSize:"0.875rem" }}>, {guest.selectedLocation}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ width: '8%', display: 'flex', alignItems: 'center'}}>
                                    <Grid sx={{width:'65%',height:"100%",display:'flex',justifyContent:"space-between"}}>
                                        <Typography variant="h5" sx={{paddingTop:"5px",color:'grey'}}>₹</Typography>
                                        <Typography variant="h5" sx={{paddingTop:"5px"}} >
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
                                <Grid sx={{width:"9%",height:"100%",display:'flex',justifyContent:"center",alignItems:'center'}}>
                                    <Grid sx={{width:activeTab==="Pending"?"80%":"50%",height:"30px",bgcolor:"#90E0EF",border:'1px solid #0077B6',borderRadius:"5px",display:'flex',justifyContent:"center",alignItems:'center'}}>
                                        <Typography sx={{fontSize:"12px",cursor:"pointer"}} onClick={() => {
                                                if (activeTab === "Pending") {
                                                navigate('/Assignroom'); 
                                                } else {
                                                navigate('/update');
                                                }
                                            }}>{activeTab==="Pending"?"Review Request":"Update"}</Typography>
                                    </Grid>
                                </Grid>
                                </Grid>
                            ))}
                            {/* PAGINATION */}
                            <TablePagination
                                component="div"
                                count={100}
                                page={page}
                                onPageChange={handleChangePage}
                                rowsPerPage={rowsPerPage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}