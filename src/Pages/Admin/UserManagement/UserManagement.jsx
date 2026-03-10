import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  CircularProgress,
  Button,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import userService from "../../../Services/userService";
import AppSnackbar from "../../../Components/Admin/Common/AppSnackbar";
import AdminFormDialog from "../../../Components/Admin/Common/AdminFormDialog";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateUser = async () => {
    setSubmitting(true);
    try {
      await userService.createUser(formData);
      setSnackbar({
        open: true,
        message: "User created successfully",
        severity: "success",
      });
      setOpen(false);
      setFormData({ fullName: "", email: "", password: "", role: "user" });
      fetchUsers();
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        message: error.response?.data?.message || "Failed to create user",
        severity: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await userService.getAllUsers();
      setUsers(response.data || []);
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        message: "Failed to fetch users",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      await userService.updateUserRole(userId, newRole);
      setSnackbar({
        open: true,
        message: `User role updated to ${newRole}`,
        severity: "success",
      });
      fetchUsers();
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        message: error.response?.data?.message || "Failed to update role",
        severity: "error",
      });
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h4" fontWeight="bold">
          User Management
        </Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Add User
        </Button>
      </Box>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead sx={{ bgcolor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Full Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Role
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Created At
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.fullName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Typography
                    variant="caption"
                    sx={{
                      bgcolor:
                        user.role === "admin" ? "error.light" : "success.light",
                      color: "white",
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    {user.role}
                  </Typography>
                </TableCell>
                <TableCell>
                  {new Date(user.create).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Select
                    size="small"
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    sx={{ minWidth: 120 }}
                    disabled={user.email === "admin@mailinator.com"}
                  >
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AdminFormDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Create New User"
        onSubmit={handleCreateUser}
        processing={submitting}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
          />
          <FormControl fullWidth required>
            <InputLabel id="addUser-role-label">Role</InputLabel>
            <Select
              labelId="addUser-role-label"
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </AdminFormDialog>

      <AppSnackbar
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </Box>
  );
};

export default UserManagement;
