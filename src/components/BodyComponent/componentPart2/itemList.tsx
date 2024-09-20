import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box, Button, useMediaQuery } from "@mui/material";
import theme from "../../theme";

import AdjustIcon from '@mui/icons-material/Adjust';

interface Item {
  id: number;
  current: string;
  dataChip1: string;
  title: string;
  dataChip2: string;
  history: string;
}

interface ItemListProps {
  item: Item;
}

const ItemList: React.FC<ItemListProps> = ({ item }) => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md')); 
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #2d3436",
        padding: "5px",
        ":hover": {
          background: '#18181B'
        }
      }}
      spacing={1}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Chip
          label={item.current}
          color={item.current === "Medium" ? "warning" : "error"}
          variant="outlined"
        />
        <Chip label={item.dataChip1} style={{display: isMobile ? 'none': 'flex'}} variant="outlined" />
        <h4>{item.title}</h4>
        <Chip label={item.dataChip2} variant="outlined" style={{display: isTablet ? 'none': 'flex'}}/>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <p style={{display: isTablet ? 'none': 'flex'}}>{item.history}</p>
        <Button
          variant="outlined"
          sx={{
            background: theme.palette.background.paper,
            "&:hover": {
              backgroundColor: "#0984e3",
            },
          }}
          size="small"
        >
            <AdjustIcon  sx={{margin: '2px'}}/>
          Scan
        </Button>
      </Box>
    </Stack>
  );
};

export default ItemList;

