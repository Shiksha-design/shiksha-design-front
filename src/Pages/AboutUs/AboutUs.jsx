import React, { useEffect } from "react";
import { Box, CircularProgress, Button, Typography } from "@mui/material";
import AppBreadcrumbs from "../../Components/Common/AppBreadcrumbs";
import AboutHero from "../../Components/AboutUs/AboutHero";
import ValuesSection from "../../Components/AboutUs/ValuesSection";
import LeadershipSection from "../../Components/AboutUs/LeadershipSection";
import VideoSection from "../../Components/AboutUs/VideoSection";
import { colors } from "../../Config/theme";
import StatsBanner from "../../Components/Home/StatsBanner";
import staticPageService from "../../Services/staticPageService";

const AboutUs = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const fetchAboutUsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await staticPageService.getByPageType("ABOUT_US");
      // The API returns an array or object? The user example showed a single object.
      // "getByPageType" implementation in Service returns "response.data".
      // Let's assume response is the object as shown in the request.
      setData(response);
    } catch (err) {
      console.error("Failed to fetch About Us data", err);
      setError("Failed to load content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAboutUsData();
  }, []);

  const statsData = [
    { value: "8M+", label: "Careers Advanced" },
    { value: "1500+", label: "Live classes per month" },
    { value: "400+", label: "Courses" },
  ];

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: colors.mainBg,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          bgcolor: colors.mainBg,
          gap: 2,
        }}
      >
        <Typography color="error">{error}</Typography>
        <Button variant="contained" onClick={fetchAboutUsData}>
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: colors.mainBg, minHeight: "100vh" }}>
      {/* Hero Section */}
      <AboutHero data={data?.data} />

      {/* Stats Banner */}
      <StatsBanner data={statsData} />

      {/* Values Section */}
      <ValuesSection />

      {/* Leadership Team */}
      <LeadershipSection />

      {/* Video Section */}
      <VideoSection />
    </Box>
  );
};

export default AboutUs;
