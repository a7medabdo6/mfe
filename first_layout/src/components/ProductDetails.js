import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Label, Menu } from "semantic-ui-react";
import pizzaIcon from "../assets/images/pizza.png";
import pizza from "../assets/images/pizza.jpg";

import AddIcon from "@mui/icons-material/Add";
import { Divider } from "@mui/material";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography style={{ color: "#ecae21", fontSize: "23px" }}>
            pizza
          </Typography>
        }
      />
      <CardMedia component="img" height="194" image={pizza} alt="pizza dish" />
      <CardContent>
        <Typography
          variant="body2"
          style={{ fontSize: "20px", fontWeight: "bold" }}
          color="text.secondary"
        >
          Peppy Paneer Pizza.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            style={{ marginBlock: "4px" }}
            variant="h4"
            component={"h4"}
          >
            Ingredients:
          </Typography>
          <Typography style={{ fontSize: "20px" }}>
            <Label
              color="red"
              horizontal
              style={{ fontSize: "20px", marginBlock: "2px" }}
            >
              Fruit
            </Label>
            <Label
              color="purple"
              horizontal
              style={{ fontSize: "20px", marginBlock: "2px" }}
            >
              Candy
            </Label>
            <Label
              color="green"
              horizontal
              style={{ fontSize: "20px", marginBlock: "2px" }}
            >
              Candy
            </Label>{" "}
            <Label
              color="blue"
              horizontal
              style={{ fontSize: "20px", marginBlock: "2px" }}
            >
              Candy
            </Label>
          </Typography>
          <Divider style={{ marginBlock: "5px" }} />
          <Typography
            style={{ marginBlock: "4px" }}
            variant="h4"
            component={"h4"}
          >
            Modifiers:
          </Typography>
          <Typography paragraph>
            <div>
              <Label
                style={{
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                as="a"
                color="blue"
                image
              >
                <img style={{ padding: "5px" }} src={pizzaIcon} />
                Veronika
                <Label.Detail style={{ display: "flex" }}>
                  <AddIcon />
                  Add
                </Label.Detail>
              </Label>
              <Divider style={{ margin: "2px" }} />
              <Label
                style={{
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                as="a"
                color="teal"
                image
              >
                <img style={{ padding: "5px" }} src={pizzaIcon} />
                Veronika
                <Label.Detail style={{ display: "flex" }}>
                  <AddIcon />
                  Add
                </Label.Detail>
              </Label>
              <Divider style={{ margin: "2px" }} />
              <Label
                style={{
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                as="a"
                color="yellow"
                image
              >
                <img style={{ padding: "5px" }} src={pizzaIcon} />
                Veronika
                <Label.Detail style={{ display: "flex" }}>
                  <AddIcon />
                  Add
                </Label.Detail>
              </Label>
            </div>
          </Typography>
          <Divider style={{ marginBlock: "5px" }} />
          <Typography
            style={{ marginBlock: "4px" }}
            variant="h4"
            component={"h4"}
          >
            Nutritions:
          </Typography>
          <Typography paragraph>
            <Menu compact style={{ margin: "15px" }}>
              <Menu.Item style={{ fontSize: "18px" }} as="p">
                Carbs
                <Label style={{ fontSize: "18px" }} color="teal" floating>
                  22
                </Label>
              </Menu.Item>
            </Menu>
            <Menu compact style={{ margin: "15px" }}>
              <Menu.Item style={{ fontSize: "18px" }} as="p">
                Calories
                <Label style={{ fontSize: "18px" }} color="yellow" floating>
                  55
                </Label>
              </Menu.Item>
            </Menu>
            <Menu compact style={{ margin: "15px" }}>
              <Menu.Item style={{ fontSize: "18px" }} as="p">
                Fats
                <Label style={{ fontSize: "18px" }} color="red" floating>
                  41
                </Label>
              </Menu.Item>
            </Menu>
          </Typography>
          <Typography paragraph>
            <Label
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "center",
              }}
              as="a"
              color="blue"
              image
            >
              <img style={{ padding: "5px" }} src={pizzaIcon} />
              <AddIcon />
              Add
            </Label>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
