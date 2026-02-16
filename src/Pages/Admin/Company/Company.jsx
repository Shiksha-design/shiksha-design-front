import React, { useEffect, useState } from "react";
import {
  TextField,
  Box,
  FormControlLabel,
  Switch,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import AdminTable from "../../../Components/Admin/Common/AdminTable";
import AdminFormDialog from "../../../Components/Admin/Common/AdminFormDialog";
import companyService from "../../../Services/companyService";
import AppSnackbar from "../../../Components/Admin/Common/AppSnackbar";
import ConfirmDialog from "../../../Components/Admin/Common/ConfirmDialog";
import { formatDate } from "../../../utils/dateUtils";

const Company = () => {
  const [companies, setCompanies] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    phoneNumber: "",
    address: "",
    isVisible: true,
    companyImage: null,
  });

  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.description)
      tempErrors.description = "Description is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phoneNumber)
      tempErrors.phoneNumber = "Phone Number is required";
    if (!formData.address) tempErrors.address = "Address is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    setDataLoading(true);
    try {
      const data = await companyService.getAll();
      if (Array.isArray(data)) {
        setCompanies(data);
      } else if (data && Array.isArray(data.data)) {
        setCompanies(data.data);
      } else {
        setCompanies([]);
        console.error("Unexpected API response format:", data);
      }
    } catch (error) {
      console.error("Failed to fetch companies", error);
      setSnackbar({
        open: true,
        message: "Failed to fetch companies",
        severity: "error",
      });
    } finally {
      setDataLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingRow(null);
    setErrors({});
    setFormData({
      name: "",
      description: "",
      email: "",
      phoneNumber: "",
      address: "",
      isVisible: true,
      companyImage: null,
    });
    setOpen(true);
  };

  const handleEdit = (row) => {
    setEditingRow(row);
    setErrors({});
    setFormData({
      name: row.name || "",
      description: row.description || "",
      email: row.email || "",
      phoneNumber: row.phoneNumber || "",
      address: row.address || "",
      isVisible: row.isVisible !== undefined ? row.isVisible : true,
      companyImage: null, // Reset file input
    });
    setOpen(true);
  };

  const handleDelete = (id) => {
    setItemToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!itemToDelete) return;
    setDeleteLoading(true);
    try {
      await companyService.delete(itemToDelete);
      fetchCompanies();
      setSnackbar({
        open: true,
        message: "Deleted successfully",
        severity: "success",
      });
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    } catch (error) {
      console.error("Failed to delete", error);
      setSnackbar({
        open: true,
        message: "Failed to delete",
        severity: "error",
      });
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleDeleteCancel = () => {
    if (!deleteLoading) {
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("description", formData.description);
    submissionData.append("email", formData.email);
    submissionData.append("phoneNumber", formData.phoneNumber);
    submissionData.append("address", formData.address);
    submissionData.append("isVisible", formData.isVisible);

    if (formData.companyImage) {
      submissionData.append("companyImage", formData.companyImage);
    }

    console.log(
      "Company FormData Entries:",
      Array.from(submissionData.entries()),
    );

    try {
      if (editingRow) {
        await companyService.update(
          editingRow._id || editingRow.id,
          submissionData,
        );
        setSnackbar({
          open: true,
          message: "Company updated successfully",
          severity: "success",
        });
      } else {
        await companyService.create(submissionData);
        setSnackbar({
          open: true,
          message: "Company added successfully",
          severity: "success",
        });
      }
      handleClose();
      fetchCompanies();
    } catch (error) {
      console.error("Failed to save", error);
      setSnackbar({ open: true, message: "Failed to save", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const columns = [
    {
      id: "companyImage",
      label: "Image",
      render: (row) => (
        <Avatar
          src={row.companyImage}
          alt={row.name}
          variant="rounded"
          sx={{ width: 50, height: 50 }}
        />
      ),
    },
    { id: "name", label: "Name" },
    { id: "description", label: "Description" },

    {
      id: "createdAt",
      label: "Created At",
      render: (row) => formatDate(row.createdAt),
    },
  ];

  return (
    <Box>
      <AdminTable
        title="Companies"
        columns={columns}
        rows={companies}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
        loading={dataLoading}
      />
      <AdminFormDialog
        open={open}
        onClose={handleClose}
        title={editingRow ? "Edit Company" : "Add Company"}
        onSubmit={handleSubmit}
        processing={loading}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.name}
            helperText={errors.name}
          />

          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
            error={!!errors.description}
            helperText={errors.description}
          />

          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.email}
            helperText={errors.email}
          />

          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />

          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            multiline
            rows={2}
            required
            error={!!errors.address}
            helperText={errors.address}
          />

          <Button variant="outlined" component="label" fullWidth>
            Upload Image (Optional)
            <input
              type="file"
              hidden
              name="companyImage"
              onChange={handleChange}
            />
          </Button>
          {formData.companyImage && (
            <Typography variant="caption">
              {formData.companyImage.name}
            </Typography>
          )}
        </Box>
      </AdminFormDialog>
      <ConfirmDialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Company"
        message="Are you sure you want to delete this company? This action cannot be undone."
        processing={deleteLoading}
      />
      <AppSnackbar
        open={snackbar.open}
        onClose={handleSnackbarClose}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </Box>
  );
};

export default Company;
