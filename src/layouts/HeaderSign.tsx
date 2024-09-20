import { Avatar, Box, Typography } from "@mui/material";
import logo from "../assets/download.svg";
import theme from "../components/theme";
function HeaderSign() {
  return (
    <>
      <Box sx={{display: 'flex', gap: 2, padding: 2, width: '100%', background: theme.palette.background.default, position: 'fixed', zIndex: 100}}>
        <Avatar
          alt="Remy Sharp"
          src={logo}
          sx={{ width: 24, height: 24 }}
        />
        <Typography variant="h6">DiscoveryProject</Typography>
      </Box>
    </>
  );
}
export default HeaderSign;
