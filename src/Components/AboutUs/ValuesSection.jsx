import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import FlagIcon from "@mui/icons-material/Flag";
import { colors } from "../../Config/theme";

const ValueCard = ({ icon, title, description }) => (
  <Paper
    elevation={0}
    sx={{
      p: 4,
      height: "100%",
      borderRadius: 4,
      textAlign: "left",
      border: `1px solid ${colors.borderColor || "#E0E0E0"}`,
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        transform: "translateY(-5px)",
        borderColor: colors.primary,
      },
    }}
  >
    <Box sx={{ color: "#26394D", mb: 2 }}>
      {React.cloneElement(icon, { sx: { fontSize: 48, strokeWidth: 1 } })}
    </Box>
    <Typography variant="h5" fontWeight="700" sx={{ mb: 2, color: "#26394D" }}>
      {title}
    </Typography>
    <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
      {description}
    </Typography>
  </Paper>
);

const ValuesSection = () => {
  const values = [
    {
      icon: <LandscapeIcon />,
      title: "Our Vision",
      description:
        "Our goal is to gear up each student with unlimited knowledge and practical skills needed to make innovative user friendly and artistic products for the user.",
    },
    {
      icon: <TrackChangesIcon />,
      title: "Our Mission",
      description:
        "Our goal is to gear up each student with unlimited knowledge and practical skills needed to make innovative user friendly and artistic products for the user.",
    },
    {
      icon: <FlagIcon />,
      title: "Our Goal",
      description:
        "Our goal is to gear up each student with unlimited knowledge and practical skills needed to make innovative user friendly and artistic products for the user.",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: colors.mainBg }}>
      <Container maxWidth="lg">
        <Typography
          variant="title"
          align="center"
          sx={{
            mb: 6,
            color: colors.primary,
          }}
        >
          Our Values
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {values.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ValueCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ValuesSection;
