import React, { useEffect, useState } from "react";
import {
  TextField,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import AdminTable from "../../../Components/Admin/Common/AdminTable";
import AdminFormDialog from "../../../Components/Admin/Common/AdminFormDialog";
import AppSnackbar from "../../../Components/Admin/Common/AppSnackbar";
import staticPageService from "../../../Services/staticPageService";

const pageTypes = [
  { value: "ABOUT_US", label: "About Us" },
  { value: "CONTACT_US", label: "Contact Us" },
  { value: "TERMS_AND_CONDITIONS", label: "Terms & Conditions" },
  { value: "PRIVACY_POLICY", label: "Privacy Policy" },
  { value: "CAREER", label: "Career" },
  { value: "BLOG", label: "Blog" },
];

const StaticPage = () => {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    pageType: "",
    images: null,
    video: null,
  });
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Preview states
  const [imagePreview, setImagePreview] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);

  const fetchData = async () => {
    setDataLoading(true);
    try {
      const response = await staticPageService.getAll();
      setRows(Array.isArray(response) ? response : response.data || []);
    } catch (error) {
      console.error("Failed to fetch static pages", error);
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
      title: "",
      description: "",
      pageType: "",
      images: null,
      video: null,
    });
    setImagePreview(null);
    setVideoPreview(null);
    setOpen(true);
  };

  const handleEdit = (row) => {
    setEditingRow(row);
    setFormData({
      title: row.title || "",
      description: row.description || "",
      pageType: row.pageType || "",
      images: null, // Don't preload file objects
      video: null,
    });
    // Set previews from existing URLs if available
    setImagePreview(row.images || null);
    setVideoPreview(row.video || null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [field]: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        if (field === "images") setImagePreview(reader.result);
        if (field === "video") setVideoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.pageType) {
      setSnackbar({
        open: true,
        message: "Title and Page Type are required",
        severity: "error",
      });
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("pageType", formData.pageType);

      if (formData.images) {
        data.append("images", formData.images);
      }
      if (formData.video) {
        data.append("video", formData.video);
      }

      if (editingRow) {
        await staticPageService.update(editingRow._id || editingRow.id, data);
      } else {
        await staticPageService.create(data);
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
    { id: "title", label: "Title" },
    { id: "pageType", label: "Page Type" },
    {
      id: "description",
      label: "Description",
      render: (row) => row.description?.substring(0, 50) + "...",
    },
  ];

  return (
    <Box>
      <AdminTable
        title="Static Pages"
        columns={columns}
        rows={rows}
        onEdit={handleEdit}
        onAdd={handleAdd}
        loading={dataLoading}
        // No onDelete as per request
      />
      <AdminFormDialog
        open={open}
        onClose={handleClose}
        title={editingRow ? "Edit Static Page" : "Add Static Page"}
        onSubmit={handleSubmit}
        processing={loading}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            required
          />
          <FormControl fullWidth required>
            <InputLabel id="page-type-label">Page Type</InputLabel>
            <Select
              labelId="page-type-label"
              name="pageType"
              value={formData.pageType}
              label="Page Type"
              onChange={handleChange}
            >
              {pageTypes.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />

          {/* Image Upload */}
          <Box>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="image-upload"
              type="file"
              onChange={(e) => handleFileChange(e, "images")}
            />
            <label htmlFor="image-upload">
              <Button variant="contained" component="span" sx={{ mb: 1 }}>
                Upload Image
              </Button>
            </label>
            {imagePreview && (
              <Box
                sx={{
                  mt: 1,
                  width: "100%",
                  height: 200,
                  border: "1px dashed grey",
                  borderRadius: 2,
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={imagePreview}
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

          {/* Video Upload */}
          <Box>
            <input
              accept="video/*"
              style={{ display: "none" }}
              id="video-upload"
              type="file"
              onChange={(e) => handleFileChange(e, "video")}
            />
            <label htmlFor="video-upload">
              <Button variant="contained" component="span" sx={{ mb: 1 }}>
                Upload Video
              </Button>
            </label>
            {videoPreview && (
              <Box
                sx={{ mt: 1, p: 1, border: "1px solid #ccc", borderRadius: 1 }}
              >
                {/* Show simplified preview or filename if complicated */}
                <video
                  src={videoPreview}
                  style={{ width: "100%", maxHeight: 200 }}
                  controls
                />
              </Box>
            )}
          </Box>
        </Box>
      </AdminFormDialog>
      <AppSnackbar
        open={snackbar.open}
        onClose={handleSnackbarClose}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </Box>
  );
};

export default StaticPage;
