import React, { useEffect, useState } from "react";
import {
  TextField,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import AdminTable from "../../../Components/Admin/Common/AdminTable";
import AdminFormDialog from "../../../Components/Admin/Common/AdminFormDialog";
import faqService from "../../../Services/faqService";
import programService from "../../../Services/programService";
import AppSnackbar from "../../../Components/Admin/Common/AppSnackbar";
import ConfirmDialog from "../../../Components/Admin/Common/ConfirmDialog";
import { formatDate } from "../../../utils/dateUtils";

const Faq = () => {
  const [programs, setPrograms] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    programId: "",
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
    if (!formData.question) tempErrors.question = "Question is required";
    if (!formData.answer) tempErrors.answer = "Answer is required";
    if (!formData.programId) tempErrors.programId = "Program is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  useEffect(() => {
    fetchFaqs();
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const programsData = await programService.getAll();
      console.log("Faq.jsx -> programsData (raw):", programsData);
      setPrograms(Array.isArray(programsData?.data) ? programsData.data : (programsData || []));
    } catch (error) {
      console.error("Failed to fetch programs", error);
      setPrograms([]);
    }
  };

  const fetchFaqs = async () => {
    setDataLoading(true);
    try {
      const faqsData = await faqService.getAll();
      setFaqs(Array.isArray(faqsData?.data) ? faqsData.data : (faqsData || []));
    } catch (error) {
      console.error("Failed to fetch data", error);
      setFaqs([]);
    } finally {
      setDataLoading(false);
    }
  };

  const handleAdd = () => {
    setEditingRow(null);
    setErrors({});
    setFormData({ question: "", answer: "", programId: "" });
    setOpen(true);
  };

  const handleEdit = (row) => {
    setEditingRow(row);
    setErrors({});
    setFormData({
      question: row.question || "",
      answer: row.answer || "",
      programId: row.programId?._id || row.programId?.id || row.programId || "",
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
      await faqService.delete(itemToDelete);
      setSnackbar({
        open: true,
        message: "Deleted successfully",
        severity: "success",
      });
      setDeleteDialogOpen(false);
      setItemToDelete(null);
      fetchFaqs();
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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      let res;
      if (editingRow) {
        res = await faqService.update(
          editingRow._id || editingRow.id,
          formData,
        );
      } else {
        res = await faqService.create(formData);
      }
      handleClose();
      setSnackbar({
        open: true,
        message: editingRow ? "Faq updated successfully" : "Faq created successfully",
        severity: "success",
      });
      fetchFaqs();
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
    { id: "question", label: "Question" },
    { id: "answer", label: "Answer" },
    {
      id: "programId",
      label: "Program",
      render: (row) => {
        const prog = programs.find(
          (p) => (p?._id || p?.id) === (row?.programId?._id || row?.programId),
        );
        return prog ? prog.name : row.programId;
      },
    },
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
  ];

  return (
    <Box>
      <AdminTable
        title="FAQs"
        columns={columns}
        rows={faqs}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
        loading={dataLoading}
      />
      <AdminFormDialog
        open={open}
        onClose={handleClose}
        title={editingRow ? "Edit FAQ" : "Add FAQ"}
        onSubmit={handleSubmit}
        processing={loading}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Question"
            name="question"
            value={formData.question}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.question}
            helperText={errors.question}
          />
          <TextField
            label="Answer"
            name="answer"
            value={formData.answer}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={3}
            error={!!errors.answer}
            helperText={errors.answer}
          />
          <FormControl fullWidth required error={!!errors.programId}>
            <InputLabel id="program-label">Program</InputLabel>
            <Select
              labelId="program-label"
              name="programId"
              value={formData.programId}
              label="Program"
              onChange={handleChange}
            >
              {programs.map((prog) => (
                <MenuItem
                  key={prog?._id || prog?.id}
                  value={prog?._id || prog?.id}
                >
                  {prog.name}
                </MenuItem>
              ))}
            </Select>
            {errors.programId && (
              <Box
                component="span"
                sx={{
                  color: "#d32f2f",
                  fontSize: "0.75rem",
                  ml: 1.5,
                  mt: 0.5,
                }}
              >
                {errors.programId}
              </Box>
            )}
          </FormControl>
        </Box>
      </AdminFormDialog>
      <ConfirmDialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Delete FAQ"
        message="Are you sure you want to delete this FAQ? This action cannot be undone."
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

export default Faq;
