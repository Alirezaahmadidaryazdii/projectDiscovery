import { Box } from "@mui/material";
import HeaderAss from "../../components/componentBase/headersAss";
import Header from "../Header";

function HeaderAssets() {
  const data = {
    title: "Your Assets",
    description:
      "Add Assets for scanning. Select an Asset Group to view all Assets in that group, or check out Inventory for a full Asset list.",
    dataBtn1: "Add new Assets",
    dataBtn2: "Connect cloud Service",
    styleBtn1: {},
    styleBtn2: { bgcolor: "#38270B", color: "#F59E0B" },
  };

  return (
    <>
      {/* <Header /> */}
      <Box sx={{ p: 2, mt: 3 }}>
        <HeaderAss item={data} />
      </Box>

    </>
  );
}

export default HeaderAssets;
