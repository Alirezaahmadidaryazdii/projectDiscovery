import { iconClasses, Typography } from "@mui/material";
import OfferCard from "./componentPart3/offerCard";

// imort as mui icon
import PsychologyIcon from "@mui/icons-material/Psychology";
import ViewListIcon from "@mui/icons-material/ViewList";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloudIcon from "@mui/icons-material/Cloud";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

import Grid from "@mui/material/Grid";
import HeaderParts from "../componentBase/headerParts";
// data
let data = [
  {
    id: 1,
    icon: <PsychologyIcon />,
    title: "Write Template using AI",
    descriptioin: "auto your custom vielancy detectiony",
  },
  {
    id: 2,
    icon: <ViewListIcon />,
    title: "Integrate local scan",
    descriptioin: "start scan for internal network, CI/CD",
  },
  {
    id: 3,
    icon: <NotificationsIcon />,
    title: "Cofigure Alerts",
    descriptioin: "recieve alert new vielancy and acctes",
  },
  {
    id: 4,
    icon: <CloudIcon />,
    title: "Connect Cloud Sevice",
    descriptioin: "Minutor accets as your template",
  },
  {
    id: 5,
    icon: <ConfirmationNumberIcon />,
    title: "connect Ticketing tools",
    descriptioin: "autoComplatly create ticket on jirla and Gitlab",
  },
  {
    id: 6,
    icon: <CloudIcon />,
    title: "API",
    descriptioin: "create custom automysaition using our api",
  },
];
function Part3() {
  return (
    <div style={{ marginTop: "30px", padding: '20px' }}>
      <HeaderParts name="Quick Start" />
      <Grid container spacing={2}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <OfferCard icon={item.icon} title={item.title} description={item.descriptioin} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
export default Part3;
