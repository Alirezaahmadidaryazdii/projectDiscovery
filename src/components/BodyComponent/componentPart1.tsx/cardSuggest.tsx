import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Icon from "@mui/material/Icon";
import { useMediaQuery } from "@mui/material";
import theme from "../../theme";

const CardSuggest = () => {
  const isMbile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <>
      <Card sx={{ maxWidth: 275, background: "#1C2838" }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Word of the Day
          </Typography>
          <Typography variant={isMbile ? 'caption': 'body2'}>
            Automatically run a vulnerability scan whenever a new template is
            added to the feed. Interested in learning more?
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{
              padding: "5px 10px",
              margin: "10px",
              borderRadius: "15px",
              background: "#2D455C",
              color: "#4181B5",
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardSuggest;
