import React from 'react'
import Grid from '@mui/material/Grid';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function NewsLetter() {
  return (
<Grid  display="flex" style={{marginTop:"20px"}} justifyContent="center" alignItems={"center"} container spacing={2}>
  <Grid item  display="flex" flexDirection="column" justifyContent="center" alignItems={"center"} xs={12}>
    <AttachEmailIcon size="xl"  style={{color:"rgb(193, 193, 193)",fontSize:"30px"}}/>
    <Typography className='newsletter-title'>
        Newsletter
    </Typography>
  </Grid>
  <Grid item  display="flex" justifyContent="center" alignItems={"center"} xs={12}>
  <TextField id="outlined-basic" label="Email Address" variant="outlined" />

  </Grid>
  <Grid item  display="flex" justifyContent="center" alignItems={"center"} xs={12}>
  <Button variant="contained" style={{width:"225px",backgroundColor:"#ecae21",paddingBlock:"10px"}}>Join</Button>

  </Grid>
  <Grid item  display="flex" justifyContent="center" alignItems={"center"} xs={12}>
  </Grid>
</Grid>  )
}

export default NewsLetter