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
import teamMemberService from "../../../Services/teamMemberService";
import AppSnackbar from "../../../Components/Admin/Common/AppSnackbar";
import ConfirmDialog from "../../../Components/Admin/Common/ConfirmDialog";
import { formatDate } from "../../../utils/dateUtils";

const TeamMember = () => {
  const [members, setMembers] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    isVisible: true,
    image: null,
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
    if (!formData.designation)
      tempErrors.designation = "Designation is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    setDataLoading(true);
    try {
      const data = await teamMemberService.getAll();
      if (Array.isArray(data)) {
        setMembers(data);
      } else if (data && Array.isArray(data.data)) {
        setMembers(data.data);
      } else {
        setMembers([]);
        console.error("Unexpected API response format:", data);
      }
    } catch (error) {
      console.error("Failed to fetch team members", error);
      setSnackbar({
        open: true,
        message: "Failed to fetch team members",
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
      designation: "",
      isVisible: true,
      image: null,
    });
    setOpen(true);
  };

  const handleEdit = (row) => {
    setEditingRow(row);
    setErrors({});
    setFormData({
      name: row.fullName || "",
      designation: row.description || "",
      isVisible: row.isVisible !== undefined ? row.isVisible : true,
      image: null, // Reset file input
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
      await teamMemberService.delete(itemToDelete);
      fetchMembers();
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
    submissionData.append("fullName", formData.name);
    submissionData.append("description", formData.designation);

    if (formData.image) {
      submissionData.append("image", formData.image);
    }

    try {
      if (editingRow) {
        await teamMemberService.update(
          editingRow._id || editingRow.id,
          submissionData,
        );
        setSnackbar({
          open: true,
          message: "Team member updated successfully",
          severity: "success",
        });
      } else {
        await teamMemberService.create(submissionData);
        setSnackbar({
          open: true,
          message: "Team member added successfully",
          severity: "success",
        });
      }
      handleClose();
      fetchMembers();
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
      id: "image",
      label: "Image",
      render: (row) => (
        <Avatar src={row.image} alt={row.name} sx={{ width: 50, height: 50 }} />
      ),
    },
    { id: "fullName", label: "Name" },
    { id: "description", label: "description" },

    {
      id: "create",
      label: "Created At",
      render: (row) => formatDate(row.create),
    },
  ];

  return (
    <Box>
      <AdminTable
        title="Team Members"
        columns={columns}
        rows={members}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
        loading={dataLoading}
      />
      <AdminFormDialog
        open={open}
        onClose={handleClose}
        title={editingRow ? "Edit Team Member" : "Add Team Member"}
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
            label="Designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.designation}
            helperText={errors.designation}
          />

          <Button variant="outlined" component="label" fullWidth>
            Upload Image (Optional)
            <input type="file" hidden name="image" onChange={handleChange} />
          </Button>
          {formData.image && (
            <Typography variant="caption">{formData.image.name}</Typography>
          )}
        </Box>
      </AdminFormDialog>
      <ConfirmDialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete Team Member"
        message="Are you sure you want to delete this team member? This action cannot be undone."
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

export default TeamMember;
