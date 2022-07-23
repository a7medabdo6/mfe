import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    style: { padding: "6px" },
  };
}
const Label = () => {
  return (
    <>
      <img
        style={{ width: "70px", height: "55px", borderRadius: "10px" }}
        src="https://api.oktabletmenu.com/storage/app/categories/Jul-Sun-2018-204730243.jpg?w=150&h=0"
      />
      <Typography style={{ fontSize: "12px" }}>Hot Drinks</Typography>
    </>
  );
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: { xs: "100%" },
        bgcolor: "background.paper",
        marginBottom: "20px",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          centered
        >
          <Tab label={<Label />} {...a11yProps(0)} />
          <Tab label={<Label />} {...a11yProps(1)} />
          <Tab label={<Label />} {...a11yProps(2)} />
          <Tab label={<Label />} {...a11yProps(3)} />
          <Tab label={<Label />} {...a11yProps(4)} />
          <Tab label={<Label />} {...a11yProps(5)} />
          <Tab label={<Label />} {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} style={{ marginTop: "20px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={4}>
            <Link to="/product">
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://api.oktabletmenu.com/storage/app/items/Wed.191120134322_5190.1574246602.png?w=150&h=0"
                  alt="green iguana"
                />
                <CardContent
                  style={{ padding: "10px" }}
                  className="card-content"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" className="card-info">
                    Lizards
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={6} md={4}>
            <Link to="/product">
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://api.oktabletmenu.com/storage/app/items/Wed.191120134322_5190.1574246602.png?w=150&h=0"
                  alt="green iguana"
                />
                <CardContent
                  style={{ padding: "10px" }}
                  className="card-content"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" className="card-info">
                    Lizards
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>{" "}
          <Grid item xs={6} md={4}>
            <Link to="/product">
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://api.oktabletmenu.com/storage/app/items/Wed.191120134322_5190.1574246602.png?w=150&h=0"
                  alt="green iguana"
                />
                <CardContent
                  style={{ padding: "10px" }}
                  className="card-content"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" className="card-info">
                    Lizards
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>{" "}
          <Grid item xs={6} md={4}>
            <Link to="/product">
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://api.oktabletmenu.com/storage/app/items/Wed.191120134322_5190.1574246602.png?w=150&h=0"
                  alt="green iguana"
                />
                <CardContent
                  style={{ padding: "10px" }}
                  className="card-content"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" className="card-info">
                    Lizards
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>{" "}
          <Grid item xs={6} md={4}>
            <Link to="/product">
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://api.oktabletmenu.com/storage/app/items/Wed.191120134322_5190.1574246602.png?w=150&h=0"
                  alt="green iguana"
                />
                <CardContent
                  style={{ padding: "10px" }}
                  className="card-content"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" className="card-info">
                    Lizards
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>{" "}
          <Grid item xs={6} md={4}>
            <Link to="/product">
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://api.oktabletmenu.com/storage/app/items/Wed.191120134322_5190.1574246602.png?w=150&h=0"
                  alt="green iguana"
                />
                <CardContent
                  style={{ padding: "10px" }}
                  className="card-content"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" className="card-info">
                    Lizards
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>{" "}
          <Grid item xs={6} md={4}>
            <Link to="/product">
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="100"
                  image="https://api.oktabletmenu.com/storage/app/items/Wed.191120134322_5190.1574246602.png?w=150&h=0"
                  alt="green iguana"
                />
                <CardContent
                  style={{ padding: "10px" }}
                  className="card-content"
                >
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" className="card-info">
                    Lizards
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
