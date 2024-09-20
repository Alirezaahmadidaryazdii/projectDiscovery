
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Button, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";
import theme from "../../theme";

interface CardPart1Props {
  title: string;
  description: string;
  styleBtn: React.CSSProperties;
  img: string;
  button: string;
}

const CardPart1: React.FC<CardPart1Props> = ({
  title,
  description,
  styleBtn,
  img,
  button,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Card sx={{ background: (theme) => theme.palette.background.paper }}>
      <CardActionArea>
        <CardContent style={{ margin: "10px" }}>
          <Typography gutterBottom variant={isMobile ? 'button' : 'h5'} component="div">
            {title}
          </Typography>
          <Typography variant={isMobile ? 'caption' : 'body2'} sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          <Button variant="contained" size="small" style={styleBtn}>
            {button}
          </Button>
        </CardContent>
        <Box
          sx={{
            width: "100%",
            height: "200px",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        />
      </CardActionArea>
    </Card>
  );
};

export default CardPart1;
