import { ReactElement } from "react";
import { Box, Typography } from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import theme from "../theme";

type CardPardProps = {
  icon: ReactElement; // This can be any MUI icon component
  title: string; // The title for the card
};

const CardPardRusible = ({ icon, title }: CardPardProps) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between"mb={2}p={1} color={theme.palette.secondary.main}>
      <Box display='flex' justifyContent='center'>
        {icon}
        <Typography variant="h6" sx={{ ml: 2 }}>
          {title}
        </Typography>
      </Box>
      <KeyboardArrowRightIcon />
    </Box>
  );
};

export default CardPardRusible;
