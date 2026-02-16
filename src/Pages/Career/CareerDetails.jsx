import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Button,
  Alert,
} from "@mui/material";
import { colors } from "../../Config/theme";
import CareerDetailsHero from "../../Components/Career/CareerDetailsHero";
import { useParams, useNavigate } from "react-router-dom";
import StatsBanner from "../../Components/Home/StatsBanner";
import BenefitsSectionBg from "../../assets/benefitsSectionBg.png";
import careerService from "../../Services/careerService";

const CareerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const data = await careerService.getById(id);
        // Handle response format variations if any (e.g. data.data vs data)
        const jobData = data.data || data;
        setJob(jobData);
      } catch (err) {
        console.error("Failed to fetch job", err);
        setError("Failed to load job details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

  const parseList = (data) => {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    try {
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [data];
    } catch (e) {
      // If not JSON, split by newlines or return as single item
      return data.split("\n").filter((item) => item.trim() !== "");
    }
  };

  if (loading) {
    return (
      <Box sx={{ bgcolor: colors.mainBg, minHeight: "100vh", pb: 10 }}>
        <Skeleton variant="rectangular" height={300} />
        <Container maxWidth="lg" sx={{ mt: 8 }}>
          <Skeleton variant="text" height={60} width="40%" />
          <Skeleton variant="text" height={30} width="80%" />
          <Skeleton variant="text" height={30} width="80%" />
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Skeleton variant="text" height={40} width="60%" />
            </Grid>
            <Grid item xs={12} md={8}>
              <Skeleton variant="rectangular" height={200} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }

  if (error || !job) {
    return (
      <Box
        sx={{
          bgcolor: colors.mainBg,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Alert severity="error">{error || "Job not found"}</Alert>
        <Button variant="contained" onClick={() => navigate("/career")}>
          Back to Careers
        </Button>
      </Box>
    );
  }

  const responsibilities = parseList(job.responsibilities);
  const description = parseList(job.jobDescription); // Using "What you bring" style for description

  return (
    <Box sx={{ bgcolor: colors.mainBg, minHeight: "100vh", pb: 10 }}>
      {/* Hero Section - Pass data if needed or keep static */}
      <CareerDetailsHero
        title={job.jobRole}
        location={job.jobLocation}
        type={job.jobType}
        date={job.createdAt}
        jobDescription={job.jobDescription}
      />

      {/* job description */}
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 }, mb: 8 }}>
        {/* What you bring Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{ fontWeight: 700, color: "#26394D", fontSize: "32px" }}
            >
              What you bring
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <List sx={{ p: 0 }}>
              {[
                "Become the spokesperson of folio in the market.",
                "Build and nurture partnerships with brands and influencers who share our mission.",
                "Keep our marketing materials sharp and up-to-date across platforms.",
                "Organize, promote, and run webinars tailored to our users and target audience.",
                "Manage our marketing automation, newsletters, and release notes.",
                "Create promotional materials alongside our designers.",
                "Set up and analyze measurement plans across all efforts.",
                "Create weekly and monthly reports to drive smart, data-based decisions.",
                "Tools we use: Mixpanel, Clarity, Zoom Webinars, Drip, WordPress, Ahrefs, and Figma.",
              ].map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                    <Box
                      sx={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        bgcolor: "#26394D",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: {
                        color: "#26394D",
                        lineHeight: 1.6,
                        fontSize: "16px",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        {/* What you'll do Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{ fontWeight: 700, color: "#26394D", fontSize: "32px" }}
            >
              What you'll do
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <List sx={{ p: 0 }}>
              {[
                "Become the spokesperson of folio in the market.",
                "Build and nurture partnerships with brands and influencers who share our mission.",
                "Keep our marketing materials sharp and up-to-date across platforms.",
                "Organize, promote, and run webinars tailored to our users and target audience.",
                "Manage our marketing automation, newsletters, and release notes.",
                "Create promotional materials alongside our designers.",
                "Set up and analyze measurement plans across all efforts.",
                "Create weekly and monthly reports to drive smart, data-based decisions.",
                "Tools we use: Mixpanel, Clarity, Zoom Webinars, Drip, WordPress, Ahrefs, and Figma.",
              ].map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                    <Box
                      sx={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        bgcolor: "#26394D",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: {
                        color: colors.textStart,
                        lineHeight: 1.6,
                        fontSize: "16px",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
      <StatsBanner />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="title" sx={{ textAlign: "center", mb: 4 }}>
          Why join us?
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{ fontWeight: 700, color: "#26394D", fontSize: "32px" }}
            >
              Work-life Balance
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <List sx={{ p: 0 }}>
              {[
                "Flexible working hours to suit your lifestyle.",
                "Remote-first culture with optional office spaces.",
                "Generous paid time off and parental leave policies.",
                "Focus on outcomes rather than hours clocked.",
              ].map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                    <Box
                      sx={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        bgcolor: "#26394D",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: {
                        color: colors.textStart,
                        lineHeight: 1.6,
                        fontSize: "16px",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{ fontWeight: 700, color: "#26394D", fontSize: "32px" }}
            >
              Employee Life
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              sx={{
                color: colors.textStart,
                lineHeight: 1.6,
                fontSize: "16px",
              }}
            >
              Join a vibrant community of passionate individuals working towards
              a common goal.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            background: `url(${BenefitsSectionBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#F0F7FF",
            borderRadius: "40px",
            border: "1px solid #0000001F",
            p: { xs: 2, md: 4 },
          }}
        >
          <Typography variant="title" sx={{ textAlign: "center" }}>
            How to apply for this position
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "16px", md: "24px" },
              color: "#26394D",
              fontWeight: 400,
            }}
          >
            To apply for this position, send us your resume at
            <span style={{ color: colors.secondary, fontWeight: 700 }}>
              {" "}
              careers.company@xyz.com
            </span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CareerDetails;
