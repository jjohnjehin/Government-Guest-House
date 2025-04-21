import { Box,DialogTitle,Grid,Typography,Link,Dialog,TextField,Button} from '@mui/material'
import React ,{useEffect,useState} from 'react'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export const Header = () => {
     const [timeLeft, setTimeLeft] = useState(0); // Timer in seconds
      const [otpSent, setOtpSent] = useState(false);
      const [otp, setOtp] = useState('')
    
      
      useEffect(() => {
        let timer;
        if (timeLeft > 0) {
          timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
          }, 1000);
        }
    
        return () => clearInterval(timer);
      }, [timeLeft])
    
      const handleSendOtp = () => {
        setOtpSent(true);
        setTimeLeft(120); // 2 minutes
        // Here you can trigger actual OTP send logic
        console.log("OTP sent!");
      };
    
      const formatTime = (seconds) => {
        const min = String(Math.floor(seconds / 60)).padStart(2, '0');
        const sec = String(seconds % 60).padStart(2, '0');
        return `${min}:${sec}`;
      };
    
    
      const items=[
        {name:"Home",id:"home"},
        {name:'Gallery',id:"gallery"},
        {name:"Location",id:"location"}
      ]
    
       const [manageopen,setManageopen]=useState(false)
        const [activePage, setActivePage] = useState("home");
       
       
        
  const handlenav = (id) => {
    setActivePage(id);

  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
      
  return (
    <Box sx={{position:"relative",zIndex:10}}>
        <Grid container>
            <Grid size={{lg:12}} sx={{height:"111px",display: 'flex',alignItems:"center",justifyContent:"space-between"}}>
                        <Typography variant='h5' color='white' ml={5}>Kanniyakumari<span style={{fontSize:"20px"}}>.in</span></Typography>
                        <Box
                          sx={{
                            height: '170px',
                            width: '46%',
                            backgroundImage:"url(/header.png)",
                            backgroundPosition:"center",
                            backgroundSize:"contain",
                            backgroundRepeat:"no-repeat",
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            marginTop:"-36px",
                            
                          }}
                        >
                       <img src="/logo2.png" alt="not found" style={{height:"60px",width:"60px",objectFit:"contain",marginLeft:"20px"}}/>
                       <Grid >
                       {items.map((item)=>(
                             <Link component="button"  onClick={()=>handlenav(item.id)} underline='none' sx={{color:"black",fontSize:"20px",
                              textDecoration: item.id === activePage ? 'underline' : 'none',
                              textDecorationColor: item.id === activePage ? 'blue' : 'transparent',
                              textDecorationThickness: item.id === activePage ? '5px' : undefined,
                              textUnderlineOffset: item.id === activePage ? '10px' : undefined,
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
                          <Typography variant='h6' sx={{mx:2,fontWeight: 600}}>Manage Booking</Typography>
                          
                       </Box>
                       </Link>
                       <Dialog open={manageopen} onClose={()=>setManageopen(false)} >
                             <DialogTitle sx={{fontWeight:"bold",fontSize:"25px"}}>Manage Booking</DialogTitle>
                             <Box sx={{height:"2px",width:"35%",backgroundColor:"rgb(151, 149, 149)",ml:3}}></Box>
            
                             <Box component='form' sx={{display:"flex",flexDirection:"column"}}>
            
                             <DialogContent>
                      <TextField fullWidth placeholder='Enter Phone Number' variant='outlined' required ></TextField>
                      
                  <TextField
                  fullWidth
                  sx={{mt:2}}
                  placeholder='Enter OTP'
                    variant="outlined"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  ></TextField>
                  <Button
                    sx={{mt:2}}
                    variant="outlined"
                    onClick={handleSendOtp}
                    disabled={timeLeft > 0}
                  >
                    {otpSent ? 'Resend OTP' : 'Send OTP'}
                  </Button>
                  {otpSent && timeLeft > 0 && (
                    <Typography color="error">
                      Time left : {formatTime(timeLeft)}
                    </Typography>
                  )}
               
                    </DialogContent>
                    <DialogActions>
                      <Box sx={{height:"70px",width:"200px",backgroundColor:"whitesmoke",borderRadius:"10px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <Button variant='contained' sx={{  height: "80%",width: "90%", borderRadius: "10px", background: 'linear-gradient(to bottom, #76EDD2, #0E76D6)', color: '#fff',fontWeight: "bold",fontSize: "20px", transition: "all 0.3s ease",
                                  }} >Submit</Button>
                      </Box>
                    </DialogActions>
                    </Box>
                       </Dialog>
                      </Grid>
        </Grid>
    </Box>
  )
}
