import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import staticPageService from "../../Services/staticPageService";
import AppBreadcrumbs from "../../Components/Common/AppBreadcrumbs";
import { colors } from "../../Config/theme";

const StaticPageDetail = ({ pageType, defaultTitle }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await staticPageService.getByPageType(pageType);
      setData(response?.data || response);
    } catch (err) {
      console.error(`Failed to fetch ${pageType}`, err);
      setError("Failed to load content.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, [pageType]);

  if (loading) {
    return (
      <Box sx={{ py: 10, textAlign: "center", minHeight: "60vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !data) {
    return (
      <Container sx={{ py: 10, textAlign: "center", minHeight: "60vh" }}>
        <Typography color="error">
          {error || "No content found for this page."}
        </Typography>
        <Button onClick={fetchData} sx={{ mt: 2 }} variant="contained">
          Retry
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: colors.mainBg, minHeight: "80vh", pb: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Typography variant="h3" sx={{ mb: 4, fontWeight: 700, color: "#26394D" }}>
            {data.title || defaultTitle}
          </Typography>

          <Box 
            className="static-content"
            sx={{ 
              lineHeight: 1.8,
              "& p": { mb: 2 },
              "& h1, & h2, & h3": { mt: 4, mb: 2 },
              "& ul, & ol": { ml: 4, mb: 2 }
            }}
            dangerouslySetInnerHTML={{ __html: data.content || data.description }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default StaticPageDetail;
