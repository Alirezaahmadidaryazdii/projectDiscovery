import {
  Button,
  Chip,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardPart1 from "./componentPart1.tsx/cardPart1";

import image1 from "../../assets/Techicons.png";
import image2 from "../../assets/ScanSpiral.png";
import CardSuggest from "./componentPart1.tsx/cardSuggest";

import FaceIcon from "@mui/icons-material/Face";
import DoneIcon from "@mui/icons-material/Done";

import imgBanner from "../../assets/Banner.svg";
import SearchPart1 from "./componentPart1.tsx/searchPart1";

import theme from "../theme";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Part1 = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <CardPart1
              title={"Your Exposures"}
              description={"Continuously monitor as your team deploys."}
              button={"Add Domin or Ip"}
              img={image1}
              styleBtn={{ background: "#A855F7", margin: "10px" }}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <CardPart1
              title={"Your Scans"}
              description={
                "Set up automated vulnerability scans across your assets for comprehensive monitoring"
              }
              button={"Create new Scan"}
              img={image2}
              styleBtn={{
                background: "#2B190D",
                color: "#F06F16",
                margin: "10px",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Stack
          direction={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            width: "100%",
            marginTop: "20px",
            backgroundImage: `url(${imgBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Stack
            direction="column"
            alignItems="start"
            justifyContent="center"
            style={{ margin: "10px" }}
          >
            <Chip label="Global Community Feed" variant="outlined" />
            <Typography
              variant={isMobile ? "body2" : "h6"}
              sx={{ margin: "10px 0px" }}
            >
              Real time vulnerability templates feed
            </Typography>
            <Chip
              label="72 new templates released in last 30 days"
              color="success"
              variant="outlined"
              deleteIcon={<DoneIcon />}
            />
          </Stack>
          <CardSuggest />
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <SearchPart1 width={'500'} />
        </Box>
      </Box>
    </>
  );
};

export default Part1;
