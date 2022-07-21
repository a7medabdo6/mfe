import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Box, Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Link } from "react-router-dom";

function Header() {
  const [age, setAge] = React.useState("English");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box className="header" style={{ paddingBlock: "10px" }}>
      <Grid
        style={{ paddingTop: "10px" }}
        justifyContent="center"
        alignItems={"center"}
        container
        spacing={2}
      >
        <Grid
          display="flex"
          justifyContent="flex-start"
          alignItems={"center"}
          style={{ paddingLeft: "10px" }}
          item
          xs={5}
          sm={4}
        >
          <Link to="/">
            <img
              style={{ width: "120px" }}
              src="https://vidills.net/media/logos/22/07/21/r2b1-logo-Hardees-Phase-Three-Star-LLC.png"
            />
          </Link>
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          item
          xs={3}
          sm={4}
        >
          <Box sx={{ minWidth: 120 }}>
            <FormControl variant="standard" fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="English"
                style={{ marginTop: "0px", textDecoration: "none" }}
                onChange={handleChange}
              >
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"Arabic"}>Arabic</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          item
          xs={3}
          sm={4}
        >
          <SearchIcon />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
