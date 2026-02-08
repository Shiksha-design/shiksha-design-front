import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import LandscapeIcon from "@mui/icons-material/Landscape";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import FlagIcon from "@mui/icons-material/Flag";
import { colors } from "../../Config/theme";
import { valuesSectionStyles } from "./styles";

const ValueCard = ({ icon, title, description }) => (
  <Paper elevation={0} sx={valuesSectionStyles.card}>
    <Box sx={valuesSectionStyles.iconBox}>
      {React.cloneElement(icon, { sx: valuesSectionStyles.icon })}
    </Box>
    <Typography
      variant="h5"
      fontWeight="700"
      sx={valuesSectionStyles.cardTitle}
    >
      {title}
    </Typography>
    <Typography variant="body1" sx={valuesSectionStyles.cardDescription}>
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
    <Box sx={valuesSectionStyles.container}>
      <Container maxWidth="lg">
        <Typography
          variant="title"
          align="center"
          sx={valuesSectionStyles.title}
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
