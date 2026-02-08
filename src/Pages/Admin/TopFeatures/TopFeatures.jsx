import React, { useEffect, useState } from "react";
import { TextField, FormControlLabel, Switch, Box } from "@mui/material";
import AdminTable from "../../../Components/Admin/Common/AdminTable";
import AdminFormDialog from "../../../Components/Admin/Common/AdminFormDialog";
import topFeaturesService from "../../../Services/topFeaturesService";
import AppSnackbar from "../../../Components/Admin/Common/AppSnackbar";

import ConfirmDialog from "../../../Components/Admin/Common/ConfirmDialog";

const TopFeatures = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({
    iconName: "",
    value: "",
    isVisible: true,
  });
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
    setFormData({ iconName: "", value: "", isVisible: true });
    setOpen(true);
  };

  const handleEdit = (row) => {
    setEditingRow(row);
    setFormData({
      iconName: row.iconName || "",
      value: row.value || "",
      isVisible: row.isVisible !== undefined ? row.isVisible : true,
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
  };

  const handleSubmit = async () => {
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
    { id: "value", label: "Value", render: (row) => row.value },
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
          />
          <TextField
            label="Value"
            name="value"
            value={formData.value}
            onChange={handleChange}
            fullWidth
          />
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
