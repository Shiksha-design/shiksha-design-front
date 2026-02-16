import React, { useEffect, useState } from "react";
import {
  TextField,
  FormControlLabel,
  Switch,
  Box,
  Button,
} from "@mui/material";
import AdminTable from "../../../Components/Admin/Common/AdminTable";
import AdminFormDialog from "../../../Components/Admin/Common/AdminFormDialog";
import topFeaturesService from "../../../Services/topFeaturesService";
import AppSnackbar from "../../../Components/Admin/Common/AppSnackbar";

import ConfirmDialog from "../../../Components/Admin/Common/ConfirmDialog";
import { formatDate } from "../../../utils/dateUtils";

const TopFeatures = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({
    iconName: "",
    value: "",
    isVisible: true,
    featureImage: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.iconName) tempErrors.iconName = "Icon Name is required";
    if (!formData.value) tempErrors.value = "Value is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const fetchData = async () => {
    setDataLoading(true);
    try {
      const data = await topFeaturesService.getAll();
      setRows(Array.isArray(data) ? data : data.data || []);
    } catch (error) {
      console.error("Failed to fetch top features", error);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = () => {
    setEditingRow(null);
    setErrors({});
    setFormData({ iconName: "", value: "", isVisible: true, featureImage: "" });
    setOpen(true);
  };

  const handleEdit = (row) => {
    setEditingRow(row);
    setErrors({});
    setFormData({
      iconName: row.iconName || "",
      value: row.value || "",
      isVisible: row.isVisible !== undefined ? row.isVisible : true,
      featureImage: row.featureImage || "",
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
      await topFeaturesService.delete(itemToDelete);
      fetchData();
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
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      if (editingRow) {
        await topFeaturesService.update(
          editingRow._id || editingRow.id,
          formData,
        );
      } else {
        await topFeaturesService.create(formData);
      }
      fetchData();
      handleClose();
      setSnackbar({
        open: true,
        message: "Saved successfully",
        severity: "success",
      });
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
      id: "iconName",
      label: "Icon Name",
      render: (row) => row.iconName || "-",
    },

    // {
    //   id: "featureImage",
    //   label: "Feature Image",
    //   render: (row) =>
    //     row.featureImage ? (
    //       <Box
    //         component="img"
    //         src={row.featureImage}
    //         alt="Feature"
    //         sx={{ width: 50, height: 50, objectFit: "cover", borderRadius: 1 }}
    //       />
    //     ) : (
    //       "-"
    //     ),
    // },
    { id: "value", label: "Value", render: (row) => row.value },
    {
      id: "createdAt",
      label: "Created At",
      render: (row) => formatDate(row.createdAt),
    },
    {
      id: "updatedAt",
      label: "Updated At",
      render: (row) => formatDate(row.updatedAt),
    },
    {
      id: "isVisible",
      label: "Visible",
      render: (row) => (row.isVisible ? "Yes" : "No"),
    },
  ];

  return (
    <Box>
      <AdminTable
        title="Top Features"
        columns={columns}
        rows={rows}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
        loading={dataLoading}
      />
      <AdminFormDialog
        open={open}
        onClose={handleClose}
        title={editingRow ? "Edit Feature" : "Add Feature"}
        onSubmit={handleSubmit}
        processing={loading}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Icon Name"
            name="iconName"
            value={formData.iconName}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.iconName}
            helperText={errors.iconName}
          />
          <TextField
            label="Value"
            name="value"
            value={formData.value}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.value}
            helperText={errors.value}
          />
          {/* <Box>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="feature-image-upload"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setFormData((prev) => ({
                      ...prev,
                      featureImage: reader.result,
                    }));
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <label htmlFor="feature-image-upload">
              <Button variant="contained" component="span" sx={{ mb: 2 }}>
                Upload Feature Image
              </Button>
            </label>
            {formData.featureImage && (
              <Box
                sx={{
                  mt: 1,
                  width: "100%",
                  height: 200,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px dashed grey",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <img
                  src={formData.featureImage}
                  alt="Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            )}
          </Box> */}
          <FormControlLabel
            control={
              <Switch
                checked={formData.isVisible}
                onChange={handleChange}
                name="isVisible"
              />
            }
            label="Is Visible"
          />
        </Box>
      </AdminFormDialog>
      <ConfirmDialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Feature"
        message="Are you sure you want to delete this feature? This action cannot be undone."
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

export default TopFeatures;
