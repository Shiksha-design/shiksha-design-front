import React, { useEffect, useState } from "react";
import {
  TextField,
  FormControlLabel,
  Switch,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import AdminTable from "../../../Components/Admin/Common/AdminTable";
import AdminFormDialog from "../../../Components/Admin/Common/AdminFormDialog";
import programService from "../../../Services/programService";
import categoryService from "../../../Services/categoryService";
import AppSnackbar from "../../../Components/Admin/Common/AppSnackbar";

import ConfirmDialog from "../../../Components/Admin/Common/ConfirmDialog";

const Program = () => {
  const [rows, setRows] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
    categoryId: "",
    isBestSeller: false,
    isVisible: true,
    startDate: "",
    images: "",
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

  const fetchData = async () => {
    setDataLoading(true);
    try {
      const [programsData, categoriesData] = await Promise.all([
        programService.getAll(),
        categoryService.getAll(),
      ]);
      setRows(
        Array.isArray(programsData) ? programsData : programsData.data || [],
      );
      setCategories(
        Array.isArray(categoriesData)
          ? categoriesData
          : categoriesData.data || [],
      );
    } catch (error) {
      console.error("Failed to fetch data", error);
    } finally {
      setDataLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = () => {
    setEditingRow(null);
    setFormData({
      name: "",
      description: "",
      duration: "",
      categoryId: "",
      isBestSeller: false,
      isVisible: true,
      startDate: "",
      images: "",
    });
    setOpen(true);
  };

  const handleEdit = (row) => {
    setEditingRow(row);
    setFormData({
      name: row.name || "",
      description: row.description || "",
      duration: row.duration || "",
      categoryId: row.categoryId || "",
      isBestSeller: row.isBestSeller || false,
      isVisible: row.isVisible !== undefined ? row.isVisible : true,
      startDate: row.startDate
        ? new Date(row.startDate).toISOString().slice(0, 16)
        : "",
      images: row.images || "",
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
      await programService.delete(itemToDelete);
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
      const payload = {
        ...formData,
        startDate: formData.startDate
          ? new Date(formData.startDate).toISOString()
          : null,
      };

      if (editingRow) {
        await programService.update(editingRow._id || editingRow.id, payload);
      } else {
        await programService.create(payload);
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
    { id: "name", label: "Name" },
    { id: "duration", label: "Duration" },
    {
      id: "categoryId",
      label: "Category",
      render: (row) => {
        const cat = categories.find(
          (c) => (c?._id || c?.id) === row?.categoryId?._id,
        );
        return cat ? cat?.name : row?.categoryId;
      },
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
        title="Programs"
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
        title={editingRow ? "Edit Program" : "Add Program"}
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
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="Duration (Months)"
              name="duration"
              type="number"
              value={formData.duration}
              onChange={handleChange}
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                name="categoryId"
                value={formData.categoryId}
                label="Category"
                onChange={handleChange}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat._id || cat.id} value={cat._id || cat.id}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TextField
            label="Start Date"
            name="startDate"
            type="datetime-local"
            value={formData.startDate}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Image URL"
            name="images"
            value={formData.images}
            onChange={handleChange}
            fullWidth
          />
          <Box sx={{ display: "flex", gap: 2 }}>
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
            <FormControlLabel
              control={
                <Switch
                  checked={formData.isBestSeller}
                  onChange={handleChange}
                  name="isBestSeller"
                />
              }
              label="Best Seller"
            />
          </Box>
        </Box>
      </AdminFormDialog>
      <ConfirmDialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Program"
        message="Are you sure you want to delete this program? This action cannot be undone."
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

export default Program;
