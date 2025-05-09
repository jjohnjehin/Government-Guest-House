import { Box,Grid,Typography,TextField,TablePagination, Button } from "@mui/material"
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { useState } from "react";
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";
export const AvailabilityChart=()=>{
    // ACTIVE LOCATION TAB
    const [activeTab,setActiveTab]=useState("Nagercoil")
    console.log("tab:",activeTab)
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
    //   CALENDER MONTH
        const [selectedDate, setSelectedDate] = useState("");
        console.log("DATEEE:",selectedDate)
        const [monthLabel, setMonthLabel] = useState('April');

        const handleChange = (e) => {
            const date = e.target.value;
            setSelectedDate(date);
            console.log("selected dateeeee:", date); 
          
          

    if (date) {
      const month = dayjs(date).format('MMMM'); // e.g., May
      setMonthLabel(month);
    }
  };

const[allData,setAllData]=useState([])

console.log("ALLDATA:",allData)
useEffect(()=>{
    axios
    .get("http://localhost:3001/allData")
    .then((res)=>{
        const data=res.data
        setAllData(data)
        console.log("dataaaaa:",data)
    })
},[])
const selectedMonth = selectedDate ? new Date(selectedDate).getMonth() + 1 : null;

  // Filter data by location and month
  const filteredData = allData.filter(data => {
    const locationMatch =
      activeTab === "Nagercoil"
        ? data.Location === "Nagercoil"
        : activeTab === "Kanyakumari"
        ? data.Location === "Kanyakumari"
        : true;

    const dataMonth = new Date(data.date).getMonth() + 1;
    const monthMatch = selectedMonth ? dataMonth === selectedMonth : true;

    return locationMatch && monthMatch;
  });
    

  console.log("filteredddd:", filteredData);
  const[active,setActive]=useState("Home")
      const handleNavigation = (index, path) => {
        setActive(index);
        navigate(path);
      };
  const navigate=useNavigate()

  
  
    return(
        <Box sx={{width:"100%",height:"100vh",display:'flex',flexDirection:"column",alignItems:'center'}}>
            {/* HEADER */}
        <Grid sx={{width:"100%",height:"100px",display:"flex",justifyContent:"center"}}>
                            <Grid sx={{width:"300px",height:"70px",position:"absolute",left:"40px",top:"20px",backgroundImage:`url(${process.env.PUBLIC_URL}/assets/Images/kklogo.png)`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></Grid>
                            <Grid sx={{width:"45%",height:"80px",backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Images/headerbackblue.png)`,backgroundPosition:"top",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundSize: "100% 100%",display:"flex",alignItems:"center"}}>
                            {/* GOV LOGO */}
                              <Grid sx={{width:"80px",height:'65px',marginLeft:"100px",backgroundImage:`url(${process.env.PUBLIC_URL}/assets/Images/Gov_Logo.png)`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}></Grid>
                              <Grid sx={{width:"380px",height:"50px",marginLeft:"10px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                                {
                                  [
                                    { name: "Assign", path: "/Assignroom" },
                                    { name: "SearchBooking", path: "/SearchBooking" },
                                    { name: "AvailabilityChart", path: "/AvailabilityChart" }
                                  ].map((item, index) => (
                                    <Grid
                                        key={index}
                                        sx={{
                                            fontSize: "18px",
                                            color: "white",
                                            fontWeight: item.name === "AvailabilityChart" ? "600" : "400",
                                            cursor: "pointer",
                                            borderBottom: item.name === "AvailabilityChart" ? "3px solid white" : "none",
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
            <Grid sx={{width:'95%',height:"75%",bgcolor:'#F2F2F3',display:'flex',flexDirection:'column',alignItems:'center',boxShadow:2,borderRadius:"4px"}}>
                {/* HIDDEN CONTAINER */}
                <Grid sx={{width:'97%',height:'95%'}}>
                    <Grid sx={{width:'100%',height:'20%',display:'flex',alignItems:"center"}}>
                        <Grid sx={{height:'34px',width:'34px',border:'1px solid #1976D2',borderRadius:"8px",display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Button sx={{width:"34px",height:"34px"}}><ArrowBackIosNewIcon sx={{color:'#00000099',fontSize:"15px"}}></ArrowBackIosNewIcon></Button>
                        </Grid>
                        <Typography variant="h4" sx={{fontWeight:"700",color:"#1945D2",fontSize:"48px",marginLeft:"20px"}}>Availability chart</Typography>
                    </Grid>
                    {/* WHITE CONTAINER */}
                    <Grid sx={{width:"100%",height:"80%",bgcolor:"white",borderRadius:"4px",boxShadow:"2"}}>
                        {/* FILTER COLUMN */}
                        <Grid sx={{width:"100%",height:"75px",display:'flex',alignItems:'center'}}>
                            <Grid container sx={{width:'40%',height:'40px',marginLeft:"10px",display:'flex',gap:1}}>
                                <Grid item size={{lg:4.5}} sx={{width:"100%",height:'100%'}}>
                                    <Box position="relative">
                                    <TextField
                                        type="date"
                                        size="small"
                                        fullWidth
                                        value={selectedDate}
                                        onChange={handleChange}
                                        InputLabelProps={{ shrink: true }}
                                        label="Month"
                                        inputProps={{
                                        style: {
                                            color: 'transparent',
                                            zIndex: 1,
                                            position: 'relative'
                                        }
                                        }}
                                    />
                                    {monthLabel && (
                                        <Box
                                        sx={{
                                            position: 'absolute',
                                            left: 14,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: '#000',
                                            pointerEvents: 'none',
                                            fontSize: '1rem',
                                            zIndex: 2
                                        }}
                                        >
                                        {monthLabel}
                                        </Box>
                                    )}
                                    </Box>
                                </Grid>
                                <Grid item size={{lg:3}} sx={{width:"100%",height:'100%',display:'flex',justifyContent:"center",borderBottom: activeTab ==="Nagercoil" ? "2px solid #1976d2" : "none",marginLeft:"5px"}} onClick={()=>setActiveTab("Nagercoil")}>
                                    <Grid sx={{width:'30%',height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                        <PanoramaFishEyeIcon sx={{color:'green'}}></PanoramaFishEyeIcon>
                                    </Grid>
                                    <Grid sx={{width:'70%',height:"100%",display:"flex",alignItems:'center'}}>
                                        <Typography>NAGERCOIL</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item size={{lg:4}} sx={{width:"100%",height:'100%',display:'flex',borderBottom: activeTab ==="Kanyakumari" ? "2px solid #1976d2" : "none"}} onClick={()=>setActiveTab("Kanyakumari")}>
                                    <Grid sx={{width:'22%',height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                        <PanoramaFishEyeIcon sx={{color:'#BA3068'}}></PanoramaFishEyeIcon>
                                    </Grid>
                                    <Grid sx={{width:'70%',height:"100%",display:"flex",alignItems:'center'}}>
                                        <Typography>KANNIYAKUMARI</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {/* EXPORT  */}
                            <Grid sx={{width:'120px',height:"40px",marginLeft:"650px",display:"flex",border:"1px solid #159214",borderRadius:"8px"}}>
                                <Grid sx={{width:"70%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Button sx={{color:"black"}}>EXPORT</Button>
                                </Grid>
                                <Grid sx={{width:"30%",height:"100%",display:"flex",alignItems:"center"}}>
                                    <SaveAltIcon sx={{color:"#00000099",fontWeight:'600'}}></SaveAltIcon>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* Table Heading */}
                        <Grid container sx={{width:"100%",height:"50px",bgcolor:"#0000001F",borderBottom:"1px solid #0000001F"}}>
                            {
                                ["Date","Location","Suite Room","Deluxe Room"]
                                .map((item,index)=>(
                                    <Grid item size={{lg:3}} key={index} sx={{ display: 'flex', alignItems: 'center',...(item === "Date" && { pl: 4 }) }}>
                                        <Typography variant="subtitle1" fontWeight="medium">
                                            {item}
                                        </Typography>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        {/* TABLE BODY */}
                        {filteredData.slice(0,5).map((item,index)=>(
                            <Grid container sx={{width:"100%",height:"50px",borderBottom:"1px solid #0000001F ",display:"flex",alignItems:"center"}}>
                                <Grid item size={{lg:3}}sx={{paddingLeft:"30px"}}>
                                    <Typography sx={{fontSize:"0.875rem"}}>{item.date}</Typography>
                                    <Typography sx={{fontSize:"0.875rem",color:'#7A7A7A'}}>{item.day}</Typography>
                                </Grid>
                                <Grid item size={{lg:3}}sx={{fontSize:"0.875rem"}}>{item.Location}</Grid>
                                <Grid item size={{lg:3}} sx={{paddingLeft:"30px"}}>
                                    <Typography sx={{color:'green',fontSize:"17px",fontWeight:"600"}}>{item.suite_room}<span style={{color:"grey",fontSize:"17px"}}>/8</span></Typography>
                                </Grid>
                                <Grid item size={{lg:3}} sx={{paddingLeft:"30px"}}>
                                    <Typography sx={{color:"green",fontSize:"17px",fontWeight:"600"}}>{item.delux_room}<span style={{color:'grey',fontSize:"17px"}}>/8</span></Typography>
                                </Grid>
                            </Grid>
                        ))}
                        <TablePagination sx={{
                                fontSize: "0.75rem",
                                '& .MuiTablePagination-toolbar': {
                                fontSize: '0.75rem',
                                },
                                '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
                                fontSize: '0.75rem',
                                },
                                '& .MuiInputBase-root': {
                                fontSize: '0.75rem',
                                },
                                '& .MuiSelect-select': {
                                fontSize: '0.75rem',
                                },
                                '& .MuiTablePagination-actions': {
                                fontSize: '0.75rem',
                                },
                            }}
                            component="div"
                            count={100}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            labelRowsPerPage={<span style={{ fontSize: '0.75rem' }}>Rows per page:</span>}
                            />

                    </Grid>
                    
                </Grid>
            </Grid>
        </Box>
    )}
