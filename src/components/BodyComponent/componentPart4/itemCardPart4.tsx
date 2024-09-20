import { Box, Chip } from "@mui/material";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

interface typeItem {
  id: number;
  img: any;
  version: string;
  date: string;
  title: string;
  description: string;
}

interface ItemCardPart4Props {
  items: typeItem;
}

const ItemCardPart4 = ({ items: item }: ItemCardPart4Props) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, background: "#0D0D0F", padding: "10px", height: '270px'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.img}
            alt="green iguana"
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Chip label={item.version} color="success" style={{ textTransform: 'lowercase' }}  variant="outlined" />
              <Typography variant="overline">{item.date}</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "text.secondary", marginTop: '10px' }}>
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ItemCardPart4;
