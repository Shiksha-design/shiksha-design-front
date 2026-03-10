import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Avatar,
  Grid,
  Divider,
  CircularProgress,
  IconButton,
} from "@mui/material";
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import userService from "../../Services/userService";
import actions from "../../Redux/Reducer/auth/action";
import AppSnackbar from "../../Components/Admin/Common/AppSnackbar";

const Profile = () => {
  const { userdata } = useSelector((state) => state.auth || {});
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    if (userdata) {
      setFormData({
        fullName: userdata.fullName || "",
        email: userdata.email || "",
      });
    }
  }, [userdata]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await userService.updateProfile(formData);
      // Backend returns { success: true, message: "...", data: { fullName, email, role } }
      // The sendResponse util structure might vary, let's assume it returns the user data directly in response.data based on my controller

      const updatedUser = {
        ...userdata,
        fullName: formData.fullName,
        email: formData.email,
      };

      dispatch(actions.setUserData(updatedUser));
      setEditMode(false);
      setSnackbar({
        open: true,
        message: "Profile updated successfully!",
        severity: "success",
      });
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        message: error.response?.data?.message || "Failed to update profile",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography variant="h4" fontWeight="bold">
            My Profile
          </Typography>
          {!editMode ? (
            <Button
              startIcon={<EditIcon />}
              variant="contained"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </Button>
          ) : (
            <Box>
              <Button
                startIcon={<CancelIcon />}
                variant="outlined"
                color="error"
                sx={{ mr: 1 }}
                onClick={() => setEditMode(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                startIcon={<SaveIcon />}
                variant="contained"
                onClick={handleSave}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : "Save Changes"}
              </Button>
            </Box>
          )}
        </Box>

        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Avatar
              sx={{ width: 150, height: 150, bgcolor: "primary.main", mb: 2 }}
            >
              <PersonIcon sx={{ fontSize: 80 }} />
            </Avatar>
            <Typography variant="h6" color="textSecondary">
              {userdata?.role?.toUpperCase()}
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box component="form">
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                disabled={!editMode}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!editMode}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Role"
                value={userdata?.role || "user"}
                disabled
                margin="normal"
                variant="outlined"
                helperText="Roles can only be changed by administrators"
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <AppSnackbar
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </Container>
  );
};

export default Profile;
