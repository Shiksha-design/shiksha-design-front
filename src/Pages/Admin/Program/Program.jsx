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
  Button,
} from "@mui/material";
import AdminTable from "../../../Components/Admin/Common/AdminTable";
import AdminFormDialog from "../../../Components/Admin/Common/AdminFormDialog";
import programService from "../../../Services/programService";
import categoryService from "../../../Services/categoryService";
import AppSnackbar from "../../../Components/Admin/Common/AppSnackbar";

import ConfirmDialog from "../../../Components/Admin/Common/ConfirmDialog";

const Program = () => {
  const [rows, setRows] = useState([]);
  console.log("rows", rows);
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
    imageFile: null,
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
    if (!formData.duration) tempErrors.duration = "Duration is required";
    if (!formData.categoryId) tempErrors.categoryId = "Category is required";
    if (!formData.startDate) tempErrors.startDate = "Start Date is required";
    // if (!formData.images) tempErrors.images = "Image is required"; // Optional check

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

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
    setErrors({});
    setFormData({
      name: "",
      description: "",
      duration: "",
      categoryId: "",
      isBestSeller: false,
      isVisible: true,
      startDate: "",
      images: "",
      imageFile: null,
    });
    setOpen(true);
  };

  const handleEdit = (row) => {
    setEditingRow(row);
    setErrors({});
    setFormData({
      name: row?.name || "",
      description: row?.description || "",
      duration: row?.duration || "",
      categoryId:
        row?.categoryId?._id || row?.categoryId?.id || row?.categoryId || "",
      isBestSeller: row?.isBestSeller || false,
      isVisible: row?.isVisible !== undefined ? row?.isVisible : true,
      startDate: row?.startDate
        ? new Date(row?.startDate).toISOString().slice(0, 16)
        : "",
      images: typeof row?.images === "string" ? row.images : "",
      imageFile: null, // Reset file, keep existing URL in images
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
    // Clear error for the field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }

    setLoading(true);
    try {
      const payload = new FormData();

      payload.append("name", formData.name);
      payload.append("description", formData.description);
      payload.append("duration", formData.duration);
      payload.append("categoryId", formData.categoryId);
      payload.append("startDate", new Date(formData.startDate).toISOString());
      payload.append("isVisible", String(formData.isVisible));
      payload.append("isBestSeller", String(formData.isBestSeller));

      if (formData.imageFile) {
        payload.append("images", formData.imageFile);
      }

      if (editingRow) {
        await programService.update(editingRow?._id || editingRow?.id, payload);
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
      render: (row) => (row?.isVisible ? "Yes" : "No"),
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
            rows={3}
            required
            error={!!errors.description}
            helperText={errors.description}
          />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="Duration (Months)"
              name="duration"
              type="number"
              value={formData.duration}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.duration}
              helperText={errors.duration}
            />
            <FormControl fullWidth required error={!!errors.categoryId}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                name="categoryId"
                value={formData.categoryId}
                label="Category"
                onChange={handleChange}
              >
                {categories?.map((cat) => (
                  <MenuItem
                    key={cat?._id || cat?.id}
                    value={cat?._id || cat?.id}
                  >
                    {cat?.name || cat?.value}
                  </MenuItem>
                ))}
              </Select>
              {errors.categoryId && (
                <Box
                  component="span"
                  sx={{
                    color: "#d32f2f",
                    fontSize: "0.75rem",
                    ml: 1.5,
                    mt: 0.5,
                  }}
                >
                  {errors.categoryId}
                </Box>
              )}
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
            required
            error={!!errors.startDate}
            helperText={errors.startDate}
          />
          <Box>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setFormData((prev) => ({
                      ...prev,
                      images: reader.result, // Keep base64 for preview
                      imageFile: file, // Store file for upload
                    }));
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <label htmlFor="raised-button-file">
              <Button variant="contained" component="span" sx={{ mb: 2 }}>
                Upload Image
              </Button>
            </label>
            {formData.images && (
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
                  src={formData.images}
                  alt="Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            )}
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={formData?.isVisible}
                  onChange={handleChange}
                  name="isVisible"
                />
              }
              label="Is Visible"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={formData?.isBestSeller}
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
