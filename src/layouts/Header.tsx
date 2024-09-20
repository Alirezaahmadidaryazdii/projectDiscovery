import { useState } from "react";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/download.svg";
import { Link } from "react-router-dom";
import CustomTab from "../components/componentBase/tabCustom";
import TabContainer from "../components/componentBase/tabCustom";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
// const navItems = ['Docs', 'Changelog', 'Contained'];

const navItems = [
  { name: "Docs", page: "/" },
  { name: "Changelog", page: "/sign-in" },
  { name: "Contained", page: "/" },
];

function Header(props: Props) {
  const [value, setValue] = useState(0);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Beta
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.page}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Stack
        spacing={2}
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        sx={{ mb: 2, padding: 2 }}
      >
        <Box
          sx={{
            flexGrow: 2,
            textAlign: { xs: "center", sm: "start" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={{ width: 24, height: 24, marginLeft: 1 }}
            />
            <Button
              variant="text"
              sx={{
                color: (theme) => theme.palette.secondary.main,
                "&:hover": {
                  color: (theme) => theme.palette.primary.main,
                },
              }}
            >
              beta
            </Button>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              borderRadius: "20px",
            }}
          >
            <Tab
              label="Dashboard"
              component={Link}
              to='/'
              sx={{
                bgcolor: value === 0 ? "background.paper" : "background.default",
                color: value === 0 ? "text.secondary" : "text.primary",
                "&:hover": {
                  bgcolor: "background.paper",
                },
              }}
            />
            <Tab
              label="Assets"
              component={Link}
              to='/assets'
              sx={{
                bgcolor: value === 1 ? "background.paper" : "background.default",
                color: value === 1 ? "text.secondary" : "text.primary",
                "&:hover": {
                  bgcolor: "background.paper",
                },
              }}
            />
            <Tab
            component={Link}
            to='scans'
              label="Scans"
              sx={{
                bgcolor: value === 2 ? "background.paper" : "background.default",
                color: value === 2 ? "text.secondary" : "text.primary",
                "&:hover": {
                  bgcolor: "background.paper",
                },
              }}
            />
            <Tab
            component={Link}
            to='template'
              label="Template"
              sx={{
                bgcolor: value === 3 ? "background.paper" : "background.default",
                color: value === 3 ? "text.secondary" : "text.primary",
                "&:hover": {
                  bgcolor: "background.paper",
                },
              }}
            />
          </Tabs>
        </Box>

        <Box
          sx={{
            flexGrow: 2,
            textAlign: "center",
            display: { xs: "flex", sm: "none", md: "flex" },
          }}
          dir="rtl"
        >
          <Stack direction="row" spacing={2} alignItems="end" sx={{ gap: 2 }}>
            <Button variant="contained" component={Link} to="/sign-in">
              log in
            </Button>
            <Button
              variant="text"
              sx={{
                color: (theme) => theme.palette.secondary.main,
                "&:hover": {
                  color: (theme) => theme.palette.primary.main,
                },
              }}
            >
              Docs
            </Button>
            <Button
              variant="text"
              sx={{
                color: (theme) => theme.palette.secondary.main,
                "&:hover": {
                  color: (theme) => theme.palette.primary.main,
                },
              }}
            >
              Changelog
            </Button>
          </Stack>
        </Box>

        {/* Drawer for tablet only */}
        {isTablet && (
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </Stack>

      {isTablet && (
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Better open performance on mobile.
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
}

export default Header;
