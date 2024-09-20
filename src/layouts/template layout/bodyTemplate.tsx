import { Box, Grid } from "@mui/material";
import HalfGridOne from "../../components/templateComponent/halfCal1Template";
import HalfGridTwo from "../../components/templateComponent/halfCal2Template";

function BodyTemplate() {
  return (
    <>
      <Grid container spacing={2} sx={{border: '1px solid #888'}}>
        <Grid item xs={12} sm={4} md={5} lg={3}>
            <Box sx={{p: 1, borderRight: '1px solid #888'}}>
            <HalfGridOne />
            </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={7} lg={9}>
            <Box sx={{p: 1}}>
            <HalfGridTwo />
            </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default BodyTemplate;
