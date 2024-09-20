import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme";
import { Box } from "@mui/material";
import { CssBaseline } from "@mui/material"; // برای ریست کردن استایل‌ها

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline /> {/* این خط برای حذف استایل‌های پیش‌فرض مرورگر */}
    <Box
      sx={{
        width: "100vw",
        // height: "100vh",
        overflow: "hidden",
        padding: 0,
        margin: 0,
        bgcolor: theme.palette.background.default,
        color: theme.palette.primary.main
      }}
    >
      <App />
    </Box>
  </ThemeProvider>,
  document.getElementById("root")
);
