import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Button,
} from "@mui/material";
import staticPageService from "../../Services/staticPageService";

const RefundPolicy = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPolicy = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await staticPageService.getByPageType("REFUND_POLICY");
      setData(response?.data || response);
    } catch (err) {
      console.error("Failed to fetch Refund Policy", err);
      setError("Failed to load content.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPolicy();
  }, []);

  if (loading) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !data) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography color="error">
          {error || "No policy content found."}
        </Typography>
        <Button onClick={fetchPolicy}>Retry</Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 9 }}>
      <Typography variant="title" sx={{ mb: 4 }}>
        {data.title || "Refund Policy"}
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="body1"
          sx={{ mb: 2 }}
          dangerouslySetInnerHTML={{ __html: data.content || data.description }}
        />
      </Box>
    </Container>
  );
};

export default RefundPolicy;
