import React, { useEffect, useState } from "react";
import {
  TextField,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormControlLabel,
  Switch,
  Typography,
  Button,
} from "@mui/material";
import AdminTable from "../../../Components/Admin/Common/AdminTable";
import AdminFormDialog from "../../../Components/Admin/Common/AdminFormDialog";
import careerService from "../../../Services/careerService";
import AppSnackbar from "../../../Components/Admin/Common/AppSnackbar";
import ConfirmDialog from "../../../Components/Admin/Common/ConfirmDialog";
import { formatDate } from "../../../utils/dateUtils";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({
    jobRole: "",
    jobType: "",
    jobLocation: "",
    jobDescription: "",
    responsibilities: "",
    isActive: true,
    images: null,
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
    if (!formData.jobRole) tempErrors.jobRole = "Job Role is required";
    if (!formData.jobType) tempErrors.jobType = "Job Type is required";
    if (!formData.jobLocation)
      tempErrors.jobLocation = "Job Location is required";
    if (!formData.jobDescription)
      tempErrors.jobDescription = "Job Description is required";
    if (!formData.responsibilities)
      tempErrors.responsibilities = "Responsibilities are required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setDataLoading(true);
    try {
      const data = await careerService.getAll();
      if (Array.isArray(data)) {
        setJobs(data);
      } else if (data && Array.isArray(data.data)) {
        setJobs(data.data);
      } else {
        setJobs([]);
        console.error("Unexpected API response format:", data);
      }
    } catch (error) {
      console.error("Failed to fetch jobs", error);
      setSnackbar({
        open: true,
        message: "Failed to fetch jobs",
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
      jobRole: "",
      jobType: "",
      jobLocation: "",
      jobDescription: "",
      responsibilities: "",
      isVisible: true,
      images: null,
    });
    setOpen(true);
  };

  const handleEdit = (row) => {
    console.log("handleEdit called with row:", row);
    setEditingRow(row);
    setErrors({});

    let description = "";
    if (Array.isArray(row.jobDescription)) {
      description = row.jobDescription.join("\n");
    } else if (typeof row.jobDescription === "string") {
      try {
        const parsed = JSON.parse(row.jobDescription);
        if (Array.isArray(parsed)) description = parsed.join("\n");
        else description = row.jobDescription;
      } catch (e) {
        description = row.jobDescription;
      }
    }

    let responsibilities = "";
    if (Array.isArray(row.responsibilities)) {
      responsibilities = row.responsibilities.join("\n");
    } else if (typeof row.responsibilities === "string") {
      try {
        const parsed = JSON.parse(row.responsibilities);
        if (Array.isArray(parsed)) responsibilities = parsed.join("\n");
        else responsibilities = row.responsibilities;
      } catch (e) {
        responsibilities = row.responsibilities;
      }
    }

    setFormData({
      jobRole: row.jobRole || "",
      jobType: row.jobType || "",
      jobLocation: row.jobLocation || "",
      jobDescription: description,
      responsibilities: responsibilities,
      isVisible:
        row.isVisible !== undefined
          ? row.isVisible
          : row.isActive !== undefined
            ? row.isActive
            : true,
      images: null, // Reset file input on edit
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
      await careerService.delete(itemToDelete);
      fetchJobs();
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
    if (!validate()) {
      return;
    }
    setLoading(true);

    const submissionData = new FormData();
    submissionData.append("jobRole", formData.jobRole);
    submissionData.append("jobType", formData.jobType);
    submissionData.append("jobLocation", formData.jobLocation);
    submissionData.append("isActive", formData.isVisible);

    const descStr =
      typeof formData.jobDescription === "string"
        ? formData.jobDescription
        : String(formData.jobDescription || "");
    const descArray = descStr.split("\n").filter((line) => line.trim() !== "");

    const respStr =
      typeof formData.responsibilities === "string"
        ? formData.responsibilities
        : String(formData.responsibilities || "");
    const respArray = respStr.split("\n").filter((line) => line.trim() !== "");

    descArray.forEach((item) => submissionData.append("jobDescription", item));
    respArray.forEach((item) =>
      submissionData.append("responsibilities", item),
    );

    if (formData.images) {
      submissionData.append("images", formData.images);
    }

    try {
      if (editingRow) {
        await careerService.update(
          editingRow._id || editingRow.id,
          submissionData,
        );
        setSnackbar({
          open: true,
          message: "Job updated successfully",
          severity: "success",
        });
      } else {
        await careerService.create(submissionData);
        setSnackbar({
          open: true,
          message: "Job added successfully",
          severity: "success",
        });
      }
      handleClose();
      fetchJobs();
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
    { id: "jobRole", label: "Job Role" },
    { id: "jobType", label: "Type" },
    { id: "jobLocation", label: "Location" },
    {
      id: "isVisible",
      label: "Active",
      render: (row) => (row?.isVisible ? "Yes" : "No"),
    },
    {
      id: "createdAt",
      label: "Created At",
      render: (row) => formatDate(row.createdAt),
    },
  ];

  return (
    <Box>
      <AdminTable
        title="Jobs / Careers"
        columns={columns}
        rows={jobs}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
        loading={dataLoading}
      />
      <AdminFormDialog
        open={open}
        onClose={handleClose}
        title={editingRow ? "Edit Job" : "Add Job"}
        onSubmit={handleSubmit}
        processing={loading}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Job Role"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.jobRole}
            helperText={errors.jobRole}
          />
          <FormControl fullWidth required error={!!errors.jobType}>
            <InputLabel>Job Type</InputLabel>
            <Select
              label="Job Type"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
            >
              <MenuItem value="Full Time">Full Time</MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
            </Select>
            {errors.jobType && (
              <Typography
                variant="caption"
                color="error"
                sx={{ ml: 2, mt: 0.5 }}
              >
                {errors.jobType}
              </Typography>
            )}
          </FormControl>

          <TextField
            label="Job Location"
            name="jobLocation"
            value={formData.jobLocation}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.jobLocation}
            helperText={errors.jobLocation}
          />

          <TextField
            label="Job Description (One item per line)"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
            error={!!errors.jobDescription}
            helperText={errors.jobDescription}
            placeholder="We are looking for...&#10;Must have experience in..."
          />

          <TextField
            label="Responsibilities (One item per line)"
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            required
            error={!!errors.responsibilities}
            helperText={errors.responsibilities}
            placeholder="Develop user interfaces...&#10;Collaborate with team..."
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
          <Button variant="outlined" component="label" fullWidth>
            Upload Image (Optional)
            <input type="file" hidden name="images" onChange={handleChange} />
          </Button>
          {formData.images && (
            <Typography variant="caption">{formData.images.name}</Typography>
          )}
        </Box>
      </AdminFormDialog>
      <ConfirmDialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Job"
        message="Are you sure you want to delete this job posting? This action cannot be undone."
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

export default Career;
