import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface CustomTabProps {
  label: string;
  index: number;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const CustomTab: React.FC<CustomTabProps> = ({ label, index, value, onChange }) => {
  const tabStyles: SxProps<Theme> = {
    bgcolor: value === index ? "background.paper" : "background.default",
    color: value === index ? "text.secondary" : "text.primary",
    "&:hover": {
      bgcolor: "background.paper",
    },
  };

  return (
    <Tab
      label={label}
      sx={tabStyles}
      onClick={(event) => onChange(event, index)}
      id={`tab-${index}`} // id اضافه شده برای شناسایی تب فعال
    />
  );
};

function TabContainer() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs 
        value={value} 
        onChange={handleChange} 
        TabIndicatorProps={{
          sx: {
            bgcolor: "primary.main" // رنگ خط زیر تب فعال
          }
        }}
      >
        <CustomTab label="Dashboard" index={0} value={value} onChange={handleChange} />
        <CustomTab label="Assets" index={1} value={value} onChange={handleChange} />
        <CustomTab label="Scans" index={2} value={value} onChange={handleChange} />
        <CustomTab label="Template" index={3} value={value} onChange={handleChange} />
      </Tabs>
      {/* محتوا مربوط به تب‌های انتخاب شده */}
    </Box>
  );
}

export default TabContainer;
