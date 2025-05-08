import React from 'react'
import {Box,Grid,Typography,IconButton,Button,} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


export const Confirmation = ({setConfirm}) => {
  return (
    <Box>
        <Grid container>
                <Grid size={12} display={"flex"} justifyContent={"space-between"} p={3} >
                           <Typography fontSize={"20px"} fontWeight={"bold"}>Confirm Selection</Typography>
                           <IconButton onClick={()=>setConfirm(false)}>
                           < CloseIcon sx={{fontSize:"28px"}}/>
                           </IconButton>
                       </Grid>
                       <Grid size={12} sx={{height:"200px",borderRadius:"5px",backgroundColor:"#ECECEC",display:"flex",flexDirection:"column"}}>
                       <Typography gutterBottom>
                                    Are you sure you want to Reassign:
                        </Typography>
                        <Typography>
                             <strong>Guest House:</strong> 
                        </Typography>
                        <Typography>
                                <strong>Room Type:</strong> 
                         </Typography>
                         <Box display={"flex"}>
                       <Button variant="outlined"  color="error">
                              Cancel
                        </Button>
                         <Button variant="contained" color="primary">
                              Confirm
                          </Button>
                          </Box>
                        </Grid>
        </Grid>
    </Box>
  )
}
