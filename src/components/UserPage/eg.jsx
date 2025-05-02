    <Box sx={{width:"100%",height:"100vh",display:'flex',flexDirection:"column",alignItems:'center'}}>
        {/* HEADER */}
        <Grid container sx={{width:"100%",height:'100px'}}>
            <Grid size={{lg:12}} sx={{height:"100px",display: 'flex',alignItems:"center",justifyContent:"space-between"}}>
                                    <Typography sx={{color:"black"}} variant='h5' color='white' ml={5}>Kanniyakumari<span style={{fontSize:"15px",color:"black"}}>.in</span></Typography>
                                    <Box
                                      sx={{
                                        height: '170px',
                                        width: '46%',
                                        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Images/headerbackblue.png)`,
                                        backgroundPosition:"center",
                                        backgroundSize:"contain",
                                        backgroundRepeat:"no-repeat",
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-evenly',
                                        marginTop:"-36px",
                                        alt:"not found"
                                        
                                      }}
                                    >
                                   <img src="/assets/Images/image 1 (1).png" alt="not found" style={{height:"60px",width:"60px",objectFit:"contain",marginLeft:"20px"}}/>
                                   <Grid >
                                   {items.map((item)=>(
                                         <Link component="button"  onClick={()=>handlenav(item.id)} underline='none' sx={{color:"white",fontSize:"15px",
                                          '&:hover': {textDecoration: 'underline'
                                            ,textDecorationColor: 'blue',  
                                            textDecorationThickness:"5px",
                                            textUnderlineOffset: '10px',
                                     },mx:4}}>{item.name}</Link>
                                   ))}
                                   </Grid>
                                  
                                   
                                    </Box>
                                   
                                   <Link component="button" underline='none'  onClick={()=>setManageopen(true)} >
                                   <Box  sx={{ backgroundImage:"url(/button.png)",height:"60px",backgroundSize:"contain",mx:5,backgroundRepeat:"no-repeat",color:"white",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",marginTop:"-13px",cursor:"pointer"}}>
                                      <Typography variant='h6' sx={{mx:2,fontWeight: 600}}></Typography>
                                      
                                   </Box>
                                   </Link>
                                   
                        </Grid>
        </Grid>
        {/* BODY */}
        <Box sx={{width:"95%",height:"750px",marginTop:"50px"}}>
            <Grid container sx={{width:"100%",height:'100%',display:'flex',justifyContent:'space-between',alignItems:"space-between"}}>
                <Grid items size={{lg:9}} sx={{width:"1240px",height:"100%",bgcolor:"#F2F2F3",display:'flex',justifyContent:'center'}}>
                    <Grid sx={{width:'95%',height:"100%"}}>
                        <Box sx={{width:"100%",height:"38px",display:'flex',justifyContent:"center",alignItems:'center',marginTop:"20px"}}>
                            <Typography variant='h5'>Book Your Stay</Typography>
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
                                                Check-In Date <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            } type="date" InputLabelProps={{ shrink: true }}  value={checkIn} onChange={handleChangeCheckInDate} />
                                </Grid>
                                <Grid items size={{lg:2.7}} sx={{width:"100%",height:"100%"}}>
                                    <TextField fullWidth label={
                                                <span>
                                                Check-Out Date <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            } type="date" InputLabelProps={{ shrink: true }}  value={checkOut} onChange={handleChangeCheckOutDate}/>
                                </Grid>
                                <Grid items size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <TextField fullWidth label={
                                                <span>
                                                No of Rooms <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            } type="number" defaultValue={1} value={noOfRoom} onChange={handleChangeNoOfRoom} />
                                </Grid>
                                <Grid items size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <TextField fullWidth label={
                                                <span>
                                                No of Guests <span style={{ color: 'red' }}>*</span>
                                                </span>
                                            } type="number" defaultValue={1} value={noOfGuest} onChange={handleChangeNoOfGuest}/>
                                </Grid>
                            </Box>
                            {/* SECOND ROW */}
                            <Box container sx={{width:"100%",height:"50px",marginTop:'20px',display:'flex',justifyContent:"space-between"}}>
                                <Grid items size={{lg:5.8}} sx={{width:"100%",height:"100%"}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="room-type-label">Select Guest House <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                        <Select defaultValue="" value={guestHouse} onChange={handleChange} label="Select Guest House*">
                                            <MenuItem value="Nagercoil Guest House">Nagercoil Guest House</MenuItem>
                                            <MenuItem value="Kanyakumari Guest House">Kanyakumari Guest House</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid items size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                <FormControl fullWidth>
                                        <InputLabel id="room-type-label">Select Room Type <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                        <Select defaultValue="" value={guestHouse} onChange={handleChangeRoomType} label="Select Guest House*">
                                            <MenuItem value="Delux">Delux</MenuItem>
                                            <MenuItem value="Ultra Delux">Ultra Delux</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid items size={{lg:2.5}} sx={{width:"100%",height:"100%"}}>
                                    <FormControl fullWidth>
                                        <InputLabel>Purpose Of Visit <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                        <Select defaultValue="">
                                            <MenuItem value="Select">Select</MenuItem>
                                            <MenuItem value="Select">Select</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Box>
                        </Box>
                        {/* Line */}
                        <Box sx={{width:'100%',height:"1px",bgcolor:"grey",marginTop:"20px"}}></Box>
                        {/* Third Row */}
                        <Box sx={{width:'100%',height:"190px",marginTop:'20px'}}>
                            <Box sx={{width:"100%",height:"50px"}}>
                            <Typography variant='h6'>Official Details</Typography>
                            </Box>
                        <Box container sx={{width:"100%",height:"50px",display:'flex',justifyContent:'space-between'}}>
                            <Grid items size={{lg:1.5}} sx={{width:"100%",height:'100%'}}>
                                <FormControl fullWidth>
                                <InputLabel>Salutation <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>

                                    <Select defaultValue="" >
                                        <MenuItem value="guestHouse1">Select</MenuItem>
                                        <MenuItem value="guestHouse2">Select</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid items size={{lg:10}} sx={{width:"100%",height:'100%'}}>
                                <TextField fullWidth label={
                                    <span>
                                    Enter Your Full Name <span style={{ color: 'red' }}>*</span>
                                    </span>
                                } />
                            </Grid>
                        </Box>
                        {/* FOURTH ROW */}
                        <Box container sx={{width:'100%',height:'50px',display:'flex',justifyContent:'space-between',marginTop:"20px"}}>
                            <Grid items size={{lg:5.8}} sx={{width:"100%",height:"100%"}}>
                                <TextField fullWidth label={
                                        <span>
                                        Valid Whattsapp Number <span style={{ color: 'red' }}>*</span>
                                        </span>
                                    } />
                            </Grid>
                            <Grid items size={{lg:5.6}} sx={{width:"100%",height:"100%"}}>
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
                        <Box sx={{width:"100%",height:"50px",marginTop:"20px"}}>
                            <Typography variant='h6'>Official Profile</Typography>
                        </Box>
                        <Box container sx={{width:'100%',height:'50px',display:'flex',justifyContent:'space-between',marginTop:"0px"}}>
                            <Grid items size={{lg:5.8}} sx={{width:"100%",height:"100%"}}>
                                <FormControl fullWidth>
                                    <InputLabel>Are you serving in TamilNadu <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                    <Select defaultValue="" >
                                        <MenuItem value="Yes">Yes</MenuItem>
                                        <MenuItem value="No">No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid items size={{lg:5.6}} sx={{width:"100%",height:"100%"}}>
                                <FormControl fullWidth>
                                    <InputLabel>Guest Type <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                    <Select defaultValue="">
                                        <MenuItem value="guestHouse1">Government</MenuItem>
                                        <MenuItem value="guestHouse2">Non Government</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Box>
                        {/* SIXTH ROW */}
                        <Box container sx={{width:'100%',height:'50px',display:'flex',justifyContent:'space-between',marginTop:"20px"}}>
                            <Grid items size={{lg:5.8}} sx={{width:"100%",height:"100%"}}>
                                <FormControl fullWidth>
                                    <InputLabel>Designation of Official Booking <Box component="span" sx={{ color: 'red' }}>*</Box></InputLabel>
                                    <Select defaultValue="" value={designation} onChange={handleDesignation}>
                                        <MenuItem value="A">A</MenuItem>
                                        <MenuItem value="B">B</MenuItem>
                                        <MenuItem value="C">C</MenuItem>
                                        <MenuItem value="D">D</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid items size={{lg:5.6}} sx={{width:"100%",height:"100%"}}>
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
                <Grid items size={{lg:2.8}} sx={{width:"100%",height:"100%",bgcolor:'white',display:'flex',flexDirection:"column",justifyContent:"space-between"}}>
                    {/* BOX ONE  */}
                    <Box sx={{width:'100%',height:"68%",display:'flex'}}>
                        <Card sx={{ maxWidth: 350, borderRadius: "5px", boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1), 0px -4px 10px rgba(0, 0, 0, 0.05)',width:'100%'}}>
                        <CardContent>
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
                            <Grid container sx={{display:'flex',justifyContent:'space-between',position:"relative"}}>
                            <Box sx={{width:"2px",height:"100%",bgcolor:'grey',position:"absolute",left:"120px",top:"0px"}}></Box>
                                <Grid item xs={5}>
                                    <Typography variant="body2" color="green" fontWeight="bold">Check-in</Typography>
                                    <Typography fontWeight="500" variant="body1">{checkIn||"Not Selected"}</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant="body2" color="red" fontWeight="bold">Check-out</Typography>
                                    <Typography fontWeight="500" variant="body1">{checkOut||"Not selected"}</Typography>
                                </Grid>
                            </Grid>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="body2" color="text.secondary">Selected Room Type</Typography>
                            <Typography fontWeight="bold" variant="body1">{room}</Typography>
                            <Typography variant="body2" color="text.secondary">{noOfRoom} Room , {noOfGuest} Guest</Typography>
                        </CardContent>
                        </Card>
                        </Box>
                    {/* BOX TWO  */}
                    <Box sx={{backgroundColor: 'white',borderRadius:"5px",width: '100%',boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1), 0px -2px 5px rgba(0, 0, 0, 0.05)'

,height:'27%',display:'flex',justifyContent:'center'}}>
                        <Box sx={{height:"100%",width:"90%"}}>
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
                  {/* </Box> */}
                </Grid>
            </Grid>
        </Box>
        <Footer/>
    </Box>