import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import AppSnackbar from "../../../Components/Admin/Common/AppSnackbar";
import contactUsService from "../../../Services/contactUsService";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [companyId, setCompanyId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    fetchCompanyValues();
  }, []);

  const fetchCompanyValues = async () => {
    setLoading(true);
    try {
      const data = await contactUsService.getRegisteredCompany();
      const company = Array.isArray(data)
        ? data[0]
        : data?.data
          ? data.data[0]
          : data;

      if (company && (company._id || company.id)) {
        setCompanyId(company._id || company.id);
        setFormData({
          address: company.address || "",
          email: company.email || "",
          phoneNumber: company.phoneNumber || "",
        });
        setIsEditMode(true);
      } else {
        // No company data exists yet
        setIsEditMode(false);
      }
    } catch (error) {
      console.error("Failed to fetch registered company", error);
      // It might be 404 if no company is created yet, which is fine.
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (isEditMode && companyId) {
        await contactUsService.updateRegisteredCompany(companyId, formData);
        setSnackbar({
          open: true,
          message: "Contact details updated successfully",
          severity: "success",
        });
      } else {
        const response =
          await contactUsService.createRegisteredCompany(formData);
        // Assuming response contains the created object with ID
        const newCompany = response?.data || response;
        if (newCompany?._id || newCompany?.id) {
          setCompanyId(newCompany._id || newCompany.id);
          setIsEditMode(true);
        }
        setSnackbar({
          open: true,
          message: "Contact details created successfully",
          severity: "success",
        });
      }
      // Refresh to ensure we have the latest state
      fetchCompanyValues();
    } catch (error) {
      console.error("Failed to save contact details", error);
      setSnackbar({
        open: true,
        message: "Failed to save details",
        severity: "error",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Manage Registered Company (Contact Us)
      </Typography>
      <Paper elevation={3} sx={{ p: 4 }}>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              required
              placeholder="Enter full company address"
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              placeholder="contact@example.com"
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
              required
              placeholder="+91 9876543210"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={saving}
              sx={{ mt: 2 }}
            >
              {saving
                ? "Saving..."
                : isEditMode
                  ? "Update Details"
                  : "Create Details"}
            </Button>
          </Box>
        </form>
      </Paper>
      <AppSnackbar
        open={snackbar.open}
        onClose={handleSnackbarClose}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </Box>
  );
};

export default ContactUs;
