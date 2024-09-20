import { ReactElement } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import theme from "../../theme";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface typeProps {
  icon: ReactElement;
  title: string;
  description: string;
}
//
// #
const OfferCard = ({ icon, title, description }: typeProps) => {
  return (
    <>
      <CardContent
        sx={{
          background: "#0D0D0F",
          ":hover": { background: "#18181B" },
          display: "flex",
          alignItems: "center",
          gap: 2,
          borderRadius: "15px",
          padding: "10px",
          justifyContent: "space-between",
          border: "1px solid #2d3436",
        }}
      >
        <Box>{icon}</Box>
        <Box sx={{ marginRight: "auto" }}>
          <Typography sx={{ color: "text.secondary", mb: "2px" }}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.secondary.main }}
          >
            {description}
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "auto",
          }}
        >
          <KeyboardArrowRightIcon />
        </Box>
      </CardContent>
    </>
  );
};

export default OfferCard;
