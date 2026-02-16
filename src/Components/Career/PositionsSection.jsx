import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Paper,
  CircularProgress,
  Alert,
  Skeleton,
} from "@mui/material";
import { Monitor, ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import careerService from "../../Services/careerService";

const PositionsSection = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await careerService.getAll();
      if (Array.isArray(data)) {
        setJobs(data);
      } else if (data && Array.isArray(data.data)) {
        setJobs(data.data);
      } else if (data && Array.isArray(data.jobPostings)) {
        setJobs(data.jobPostings);
      } else {
        setJobs([]);
        console.error("Unexpected API response format:", data);
      }
    } catch (err) {
      setError("Failed to fetch job postings. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(
                72.2deg,
                rgba(0, 113, 229, 0.9) 26.49%,
                rgba(9, 82, 156, 0.9) 85.53%
            )`,
        py: 10,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="title"
          sx={{
            textAlign: "center",
            color: "white",
            mb: 4,
          }}
        >
          Positions
        </Typography>

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            {[1, 2, 3].map((n) => (
              <Skeleton
                key={n}
                variant="rectangular"
                width={300}
                height={200}
                sx={{ bgcolor: "rgba(255,255,255,0.1)", borderRadius: 2 }}
              />
            ))}
          </Box>
        ) : error ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Alert severity="error">{error}</Alert>
            <Button variant="contained" onClick={fetchJobs} color="secondary">
              Retry
            </Button>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 4,
            }}
          >
            {jobs
              .filter(
                (job) => job.isVisible === true || job.isVisible === "true",
              )
              .map((job, index) => (
                <Paper
                  key={job._id || job.id || index}
                  elevation={0}
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: 2,
                    p: 2,
                    width: { xs: "100%", sm: "300px", md: "360px" },
                    textAlign: "center",
                    color: "white",
                    transition: "all 0.3s ease",
                    position: "relative",

                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.15)",
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Monitor sx={{ fontSize: 30 }} />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      fontSize: "18px",
                      color: "white",
                    }}
                  >
                    {job.jobRole}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "center",
                      mb: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      sx={{
                        border: "1px solid rgba(255, 255, 255, 0.4)",
                        borderRadius: 4,
                        px: 2,
                        py: 0.5,
                        fontSize: "12px",
                        color: "white",
                      }}
                    >
                      {job.jobType}
                    </Typography>
                    <Typography
                      sx={{
                        border: "1px solid rgba(255, 255, 255, 0.4)",
                        borderRadius: 4,
                        px: 2,
                        py: 0.5,
                        fontSize: "12px",
                        color: "white",
                      }}
                    >
                      {job.jobLocation}
                    </Typography>
                  </Box>

                  <Button
                    onClick={() => {
                      navigate(`/career-details/${job._id || job.id}`);
                    }}
                    endIcon={
                      <ArrowForward
                        sx={{
                          fontSize: "16px !important",
                          transform: "rotate(-40deg)",
                        }}
                      />
                    }
                    sx={{
                      color: "white",
                      textTransform: "none",
                      fontSize: "14px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                      width: "80%",
                      pt: 2,
                      borderRadius: 0,
                      "&:hover": {
                        bgcolor: "transparent",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Paper>
              ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default PositionsSection;
