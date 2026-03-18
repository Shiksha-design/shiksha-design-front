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
  MenuItem,
  OutlinedInput,
  Autocomplete,
  TextField,
  Select,
  ClickAwayListener,
  Avatar,
  Popover,
} from "@mui/material";
import {
  Search,
  KeyboardArrowDown,
  AppsOutlined,
  Menu as MenuIcon,
  Close,
  Person as PersonIcon,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { logout } from "../../utils/api";
import LoginModal from "../Auth/LoginModal";
import mainLogo from "../../assets/mainLogo.svg";
import { colors } from "../../Config/theme";
import ProgramsContent from "../Home/Programs/ProgramsContent";

import ConfirmDialog from "../Admin/Common/ConfirmDialog";

const Header = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const user = useSelector((state) => state.auth?.userdata);

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const isAuthenticated = user && Object.keys(user).length > 0 && user.email;

  const handleLogout = () => {
    setProfileAnchor(null);
    setLogoutDialogOpen(true);
  };

  const handleProfileClick = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  const handleLogoutConfirm = () => {
    logout(navigate);
    setMobileOpen(false);
    setLogoutDialogOpen(false);
  };

  const handleLogoutCancel = () => {
    setLogoutDialogOpen(false);
  };

  const handleAllCoursesClose = () => {
    setShowAllCourses(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setShowAllCourses(false);
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
                {user.fullName || user.email.split("@")[0]}
              </Typography>
            </Box>
            <Button
              component={Link}
              to="/profile"
              variant="text"
              fullWidth
              onClick={handleDrawerToggle}
              sx={{ justifyContent: "flex-start", textTransform: "none" }}
            >
              My Profile
            </Button>
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
        sx={{
          bgcolor: colors.mainBg,
          pt: 1,
          zIndex: (theme) =>
            showAllCourses ? theme.zIndex.drawer + 1 : theme.zIndex.drawer,
        }}
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
                to={
                  location.pathname === "/home" || location.pathname === "/"
                    ? "#"
                    : "/home"
                }
                onClick={(e) => {
                  if (
                    location.pathname === "/home" ||
                    location.pathname === "/"
                  ) {
                    e.preventDefault();
                  }
                }}
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
              {/* Desktop: All Courses Button (Hidden on Mobile) */}
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button
                  variant="contained"
                  onClick={() => setShowAllCourses(!showAllCourses)}
                  startIcon={<AppsOutlined />}
                  sx={{
                    mr: 2,
                    bgcolor: colors.primary,
                    borderRadius: 2,
                    whiteSpace: "nowrap",
                  }}
                >
                  All Courses
                </Button>

                {/* Mega Menu Drawer */}
              </Box>
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
                <Autocomplete
                  freeSolo
                  options={["Course 1", "Course 2", "Course 3"]}
                  onChange={(event, newValue) => {
                    navigate("/all-courses");
                  }}
                  sx={{ width: 250 }} // Adjust width as needed
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search your course"
                      variant="standard"
                      InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        sx: { fontSize: "0.95rem" },
                      }}
                    />
                  )}
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
                to={
                  location.pathname === "/home" || location.pathname === "/"
                    ? "#"
                    : "/home"
                }
                onClick={(e) => {
                  if (
                    location.pathname === "/home" ||
                    location.pathname === "/"
                  ) {
                    e.preventDefault();
                  }
                }}
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
                startIcon={<AppsOutlined />}
                onClick={() => setShowAllCourses(!showAllCourses)}
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
                  <Box display="flex" alignItems="center" gap={1}>
                    {user.role === "admin" && (
                      <Button
                        component={Link}
                        to="/admin"
                        sx={{ textTransform: "none", color: "#475569" }}
                      >
                        Admin
                      </Button>
                    )}
                    <IconButton
                      onClick={handleProfileClick}
                      sx={{
                        p: 0.5,
                        border: "2px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 35,
                          height: 35,
                          bgcolor: colors.primary,
                          fontSize: "1rem",
                        }}
                      >
                        {user.fullName ? (
                          user.fullName[0].toUpperCase()
                        ) : (
                          <PersonIcon />
                        )}
                      </Avatar>
                    </IconButton>

                    <Popover
                      open={Boolean(profileAnchor)}
                      anchorEl={profileAnchor}
                      onClose={handleProfileClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      PaperProps={{
                        sx: {
                          p: 2,
                          mt: 1.5,
                          minWidth: 200,
                          borderRadius: 2,
                          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" fontWeight={700}>
                          {user.fullName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user.email}
                        </Typography>
                      </Box>
                      <Divider sx={{ my: 1 }} />
                      <Stack spacing={0.5}>
                        <Button
                          component={Link}
                          to="/profile"
                          fullWidth
                          onClick={handleProfileClose}
                          sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                            color: "text.primary",
                          }}
                        >
                          My Profile
                        </Button>
                        <Button
                          fullWidth
                          onClick={handleLogout}
                          sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                            color: "error.main",
                          }}
                        >
                          Logout
                        </Button>
                      </Stack>
                    </Popover>
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

      <Drawer
        variant="temporary"
        anchor="top"
        open={showAllCourses}
        onClose={() => setShowAllCourses(false)}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer,
          "& .MuiDrawer-paper": {
            top: { xs: "68px", md: "75px" },
            boxSizing: "border-box",
            bgcolor: colors.mainBg,
            py: 1,
            minHeight: "80vh",
          },
        }}
      >
        <Container maxWidth="lg">
          <ProgramsContent fullHeight={true} onCourseClick={handleAllCoursesClose} />
        </Container>
      </Drawer>

      {/* Toolbar spacer */}
      <Toolbar sx={{ py: 1 }} />
      <ConfirmDialog
        open={logoutDialogOpen}
        onClose={handleLogoutCancel}
        onConfirm={handleLogoutConfirm}
        title="Logout Confirmation"
        message="Are you sure you want to logout?"
      />
    </>
  );
};

export default Header;
