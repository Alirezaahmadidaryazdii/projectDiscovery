import { Box } from "@mui/material";
import HeaderAss from "../../components/componentBase/headersAss";

function HeaderScan() {
  const data = {
    title: "Your Scans",
    description:
      "Browse scans, delve into their details, or initiate a new scan.",
    dataBtn1: "Create new Scan",
    dataBtn2: "Connect to local Nulclei",
    styleBtn1: {},
    styleBtn2: { bgcolor: "#0E2533", color: "#2597D0" },
  };
  return (
    <>
      <Box sx={{ p: 2, mt: 3 }}>
        <HeaderAss item={data} />
      </Box>
    </>
  );
}
export default HeaderScan;
