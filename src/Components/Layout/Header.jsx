import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Stack,
  useTheme,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import {
  Search,
  KeyboardArrowDown,
  AppsOutlined,
  Menu as MenuIcon,
  Close,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import actions from "../../Redux/Reducer/auth/action";
import LoginModal from "../Auth/LoginModal";
import mainLogo from "../../assets/mainLogo.svg";
import { colors } from "../../Config/theme";
import AppBreadcrumbs from "../Common/AppBreadcrumbs";

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = useSelector((state) => state.auth?.userdata);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const isAuthenticated = user && Object.keys(user).length > 0 && user.email;

  const handleLogout = () => {
    dispatch(actions.clearAllData());
    navigate("/");
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box
      sx={{ p: 2, height: "100%", display: "flex", flexDirection: "column" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <img src={mainLogo} alt="Smiksha Designs" style={{ height: "30px" }} />
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      <Divider sx={{ mb: 2 }} />

      {/* Mobile Search */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "#f1f5f9",
          borderRadius: 2,
          px: 2,
          py: 1,
          mb: 3,
        }}
      >
        <Search sx={{ color: "#94a3b8", mr: 1 }} />
        <InputBase
          placeholder="Search..."
          sx={{ flex: 1, fontSize: "0.95rem" }}
        />
      </Box>

      <List sx={{ flex: 1 }}>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/all-courses"
            onClick={handleDrawerToggle}
            sx={{ borderRadius: 2 }}
          >
            <AppsOutlined sx={{ mr: 2, color: colors.primary }} />
            <ListItemText primary="All Courses" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleDrawerToggle} sx={{ borderRadius: 2 }}>
            <ListItemText primary="Field Title" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleDrawerToggle} sx={{ borderRadius: 2 }}>
            <ListItemText primary="More" />
            <KeyboardArrowDown />
          </ListItemButton>
        </ListItem>
      </List>

      <Box sx={{ mt: "auto" }}>
        {isAuthenticated ? (
          <Stack spacing={2}>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography variant="body2" color="text.primary" fontWeight={600}>
                {user.name || user.email.split("@")[0]}
              </Typography>
            </Box>
            <Button variant="outlined" fullWidth onClick={handleLogout}>
              Logout
            </Button>
          </Stack>
        ) : (
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              setLoginOpen(true);
              setMobileOpen(false);
            }}
            sx={{
              bgcolor: colors.primary,
              textTransform: "none",
              borderRadius: 2,
            }}
          >
            Login
          </Button>
        )}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{ bgcolor: colors.mainBg, pt: 1 }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* ==================== LEFT SECTION ==================== */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Mobile: Hamburger Menu */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 1, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>

              {/* Desktop: Logo (Hidden on Mobile) */}
              <Box
                component={Link}
                to="/"
                sx={{
                  display: { xs: "none", md: "flex" }, // Hide on mobile
                  alignItems: "center",
                  textDecoration: "none",
                  mr: 4,
                }}
              >
                <img
                  src={mainLogo}
                  alt="Smiksha Designs"
                  style={{ height: "40px" }}
                />
              </Box>

              {/* Desktop: All Courses Button (Hidden on Mobile) */}
              <Button
                variant="contained"
                component={Link}
                to="/all-courses"
                startIcon={<AppsOutlined />}
                sx={{
                  mr: 2,
                  bgcolor: colors.primary,
                  borderRadius: 2,
                  whiteSpace: "nowrap",
                  display: { xs: "none", md: "flex" },
                }}
              >
                All Courses
              </Button>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  bgcolor: "#fff",
                  borderRadius: 2,
                  border: "1px solid #e2e8f0",
                  px: 2,
                  py: 0.5,
                  mr: 2,
                }}
              >
                <Search sx={{ color: "#94a3b8", mr: 1 }} />
                <InputBase
                  placeholder="Search your course"
                  sx={{ flex: 1, fontSize: "0.95rem" }}
                />
              </Box>
            </Box>

            {/* ==================== CENTER SECTION (MOBILE ONLY) ==================== */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {/* Mobile: Logo */}
              <Box
                component={Link}
                to="/"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                  mr: 2,
                }}
              >
                <img
                  src={mainLogo}
                  alt="Smiksha Designs"
                  style={{ height: "30px" }}
                />
              </Box>

              {/* Mobile: All Courses Button */}
              <Button
                variant="contained"
                component={Link}
                to="/all-courses"
                startIcon={<AppsOutlined />}
                sx={{
                  bgcolor: colors.primary,
                  textTransform: "none",
                  borderRadius: 2,
                  whiteSpace: "nowrap",
                  fontSize: "0.75rem",
                  px: 1.5,
                  minWidth: "auto",
                  height: 32,
                }}
              >
                All Courses
              </Button>
            </Box>

            {/* ==================== RIGHT SECTION ==================== */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Mobile: Search Icon */}
              <IconButton
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: "#475569",
                }}
              >
                <Search />
              </IconButton>

              {/* Desktop: Menu Items */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    color: "#475569",
                    fontWeight: 500,
                  }}
                >
                  Field Title
                </Button>

                <Select
                  value=""
                  displayEmpty
                  size="small"
                  IconComponent={KeyboardArrowDown} // 👈 custom arrow
                  sx={{
                    textTransform: "none",
                    color: "#475569",
                    fontWeight: 500,

                    // remove border
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },

                    // remove focus border
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },

                    // remove hover border
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                  input={
                    <OutlinedInput
                      sx={{
                        paddingRight: "32px", // space for arrow
                      }}
                    />
                  }
                >
                  <MenuItem value="">More</MenuItem>
                  <MenuItem value="field1">Resources</MenuItem>
                  <MenuItem value="field2">Hire From Us</MenuItem>
                </Select>

                {isAuthenticated ? (
                  <Box display="flex" alignItems="center" gap={2}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      fontWeight={600}
                    >
                      {user.name || user.email.split("@")[0]}
                    </Typography>
                    <Button variant="outlined" onClick={handleLogout}>
                      Logout
                    </Button>
                  </Box>
                ) : (
                  <Button variant="outlined" onClick={() => setLoginOpen(true)}>
                    Login
                  </Button>
                )}
              </Box>
            </Box>
          </Toolbar>
        </Container>
        <AppBreadcrumbs />

        <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      </AppBar>

      {/* Mobile Drawer remains the same (kept for extended menu items like Profile/Logout/etc) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar sx={{ py: 1 }} />
    </>
  );
};

export default Header;
