import React, { useEffect } from "react";
import { Box } from "@mui/material";
import AppBreadcrumbs from "../../Components/Common/AppBreadcrumbs";
import AboutHero from "../../Components/AboutUs/AboutHero";
import ValuesSection from "../../Components/AboutUs/ValuesSection";
import LeadershipSection from "../../Components/AboutUs/LeadershipSection";
import VideoSection from "../../Components/AboutUs/VideoSection";
import { colors } from "../../Config/theme";
import StatsBanner from "../../Components/Home/StatsBanner";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const statsData = [
    { value: "8M+", label: "Careers Advanced" },
    { value: "1500+", label: "Live classes per month" },
    { value: "400+", label: "Courses" },
  ];

  return (
    <Box sx={{ bgcolor: colors.mainBg, minHeight: "100vh" }}>
      {/* Breadcrumbs */}
      <AppBreadcrumbs />

      {/* Hero Section */}
      <AboutHero />

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
