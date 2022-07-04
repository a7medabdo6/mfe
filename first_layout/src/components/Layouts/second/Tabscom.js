import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import demoImage from "./demo.jpg";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
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
const Label = ({ Icon }) => {
  return <>{Icon}</>;
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ maxWidth: { xs: "100%", sm: 480 }, bgcolor: "background.paper" }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "transparent",
          marginBottom: "25px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          indicatorColor="white"
          aria-label="scrollable auto tabs example"
          centered
        >
          <Tab
            label={<Label Icon={<LunchDiningIcon className="tabIcon" />} />}
            {...a11yProps(0)}
          />
          <Tab
            label={<Label Icon={<LocalPizzaIcon className="tabIcon" />} />}
            {...a11yProps(1)}
          />
          <Tab
            label={<Label Icon={<LocalPizzaIcon className="tabIcon" />} />}
            {...a11yProps(2)}
          />
          <Tab
            label={<Label Icon={<LocalPizzaIcon className="tabIcon" />} />}
            {...a11yProps(3)}
          />
          <Tab
            label={<Label Icon={<LocalPizzaIcon className="tabIcon" />} />}
            {...a11yProps(4)}
          />
          <Tab
            label={<Label Icon={<LocalPizzaIcon className="tabIcon" />} />}
            {...a11yProps(5)}
          />
          <Tab
            label={<Label Icon={<LocalPizzaIcon className="tabIcon" />} />}
            {...a11yProps(6)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Link to="/product">
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={demoImage}
                  alt="green iguana"
                />
                <CardContent
                  style={{
                    padding: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    Traditional breakfast
                  </Typography>
                  <Typography variant="body2" className="div">
                    Min , 25$
                  </Typography>
                </CardContent>
                <CardActions style={{ padding: "5px" }} disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <Typography variant="body2" className="div">
                      Tomatos
                    </Typography>
                  </IconButton>
                  <IconButton aria-label="share">
                    <Typography variant="body2" className="div">
                      Egg
                    </Typography>
                  </IconButton>
                  <IconButton style={{ marginLeft: "auto" }} aria-label="share">
                    <Typography variant="body2" className="div">
                      09:00 - 21:00
                    </Typography>
                  </IconButton>
                </CardActions>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/product">
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={demoImage}
                  alt="green iguana"
                />
                <CardContent
                  style={{
                    padding: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    Traditional breakfast
                  </Typography>
                  <Typography variant="body2" className="div">
                    Min , 25$
                  </Typography>
                </CardContent>
                <CardActions style={{ padding: "5px" }} disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <Typography variant="body2" className="div">
                      Tomatos
                    </Typography>
                  </IconButton>
                  <IconButton aria-label="share">
                    <Typography variant="body2" className="div">
                      Egg
                    </Typography>
                  </IconButton>
                  <IconButton style={{ marginLeft: "auto" }} aria-label="share">
                    <Typography variant="body2" className="div">
                      09:00 - 21:00
                    </Typography>
                  </IconButton>
                </CardActions>
              </Card>
            </Link>
          </Grid>{" "}
          <Grid item xs={12}>
            <Link to="/product">
              <Card sx={{ maxWidth: "100%" }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={demoImage}
                  alt="green iguana"
                />
                <CardContent
                  style={{
                    padding: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    Traditional breakfast
                  </Typography>
                  <Typography variant="body2" className="div">
                    Min , 25$
                  </Typography>
                </CardContent>
                <CardActions style={{ padding: "5px" }} disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <Typography variant="body2" className="div">
                      Tomatos
                    </Typography>
                  </IconButton>
                  <IconButton aria-label="share">
                    <Typography variant="body2" className="div">
                      Egg
                    </Typography>
                  </IconButton>
                  <IconButton style={{ marginLeft: "auto" }} aria-label="share">
                    <Typography variant="body2" className="div">
                      09:00 - 21:00
                    </Typography>
                  </IconButton>
                </CardActions>
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
