import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { colors } from "../../../Config/theme";

const ConfirmDialog = ({
  open,
  onClose,
  onConfirm,
  title,
  message,
  processing,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title || "Confirm Action"}</DialogTitle>
      <DialogContent>
        <Typography>
          {message || "Are you sure you want to proceed?"}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit" disabled={processing}>
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="contained" disabled={processing}>
          {processing ? "Processing..." : "Confirm"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
