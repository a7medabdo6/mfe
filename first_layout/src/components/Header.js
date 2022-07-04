import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Box, Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Header() {
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value );
  };
  return (
   <Box className='header'>
   <Grid style={{paddingTop:"10px"}} justifyContent="center" alignItems={"center"} container spacing={2}>
  <Grid  display="flex" justifyContent="center" alignItems={"center"} item xs={4}>
    <DashboardIcon/>
  </Grid>
  <Grid  display="flex" justifyContent="center" alignItems={"center"} item xs={4}>
  <Box sx={{ minWidth: 120 }}>
      <FormControl  variant="standard" fullWidth>
        <InputLabel style={{top:"-13px"}} id="demo-simple-select-label">English</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="English"
          style={{marginTop:"0px"}}
          onChange={handleChange}
        >
          <MenuItem value={"English"}>English</MenuItem>
          <MenuItem value={"Arabic"}>Arabic</MenuItem>
         
        </Select>
      </FormControl>
    </Box>
  </Grid>
  <Grid  display="flex" justifyContent="center" alignItems={"center"} item xs={4}>
    <SearchIcon/>
  </Grid>
  
</Grid>
   </Box>
  )
}

export default Header