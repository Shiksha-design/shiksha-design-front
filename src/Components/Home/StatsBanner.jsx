import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import learning from "../../assets/learning.svg";
import hike from "../../assets/hike.png";
import assistent from "../../assets/assistent.png";
import statsBannerSide from "../../assets/statsBannerSide.png";

const StatBox = ({ image, title, value, label, sx }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "row", sm: "column" },
      alignItems: "center",
      justifyContent: "center",
      gap: { xs: 1, sm: 2 },
      height: "100%",
      maxWidth: { xs: 270, sm: "100%" },
      ...sx,
    }}
  >
    {image && (
      <Box>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: { xs: "50px", sm: "60px", md: "100px" },
            height: { xs: "35px", sm: "50px", md: "100px" },
            objectFit: "contain",
          }}
        />
      </Box>
    )}

    <Box sx={{ textAlign: { xs: "left", sm: "center" } }}>
      {value && (
        <Typography
          variant="h3"
          fontWeight="700"
          sx={{
            fontSize: { xs: "28px", sm: "36px", md: "48px" },
            color: "inherit",
            mb: 0.5,
            lineHeight: 1,
          }}
        >
          {value}
        </Typography>
      )}
      <Typography
        variant="body2"
        fontWeight="400"
        sx={{
          maxWidth: { xs: "100%", sm: 185, md: 250 },
          fontSize: { xs: "10px", sm: "12px", md: "20px" },
          color: "inherit",
        }}
      >
        {label || title}
      </Typography>
    </Box>
  </Box>
);

const StatsBanner = ({ data }) => {
  // Default data if no data prop is provided (Home page usage)
  const displayData = data || [
    { image: learning, title: "WORLD CLASS LEARNING EXPERIENCE" },
    { image: hike, title: "55% AVERAGE SALARY HIKE" },
    { image: assistent, title: "100% PLACEMENT ASSISTANCE" },
  ];

  const getDividerStyles = (index) => {
    // Only apply divider styles to the middle element (index 1) for a 3-item list
    if (index === 1) {
      return {
        position: "relative",
        py: { xs: 2, sm: 0 },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: { xs: 0, sm: "auto" },
          width: { xs: "100%", sm: "1px" },
          height: { xs: "1px", sm: "100%" },
          background: {
            xs: "repeating-linear-gradient(90deg, #FFFFFF 0, #FFFFFF 4px, transparent 4px, transparent 8px)",
            sm: "repeating-linear-gradient(180deg, #FFFFFF 0, #FFFFFF 4px, transparent 4px, transparent 8px)",
          },
          maskImage: {
            xs: "linear-gradient(270deg, #000 50%, transparent 100%)",
            sm: "linear-gradient(180deg, #000 50%, transparent 100%)",
          },
          WebkitMaskImage: {
            xs: "linear-gradient(270deg, #000 50%, transparent 100%)",
            sm: "linear-gradient(180deg, #000 50%, transparent 100%)",
          },
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          left: { xs: 0, sm: "auto" },
          width: { xs: "100%", sm: "1px" },
          height: { xs: "1px", sm: "100%" },
          background: {
            xs: "repeating-linear-gradient(90deg, #FFFFFF 0, #FFFFFF 4px, transparent 4px, transparent 8px)",
            sm: "repeating-linear-gradient(180deg, #FFFFFF 0, #FFFFFF 4px, transparent 4px, transparent 8px)",
          },
          maskImage: {
            xs: "linear-gradient(270deg, #000 50%, transparent 100%)",
            sm: "linear-gradient(180deg, #000 50%, transparent 100%)",
          },
          WebkitMaskImage: {
            xs: "linear-gradient(270deg, #000 50%, transparent 100%)",
            sm: "linear-gradient(180deg, #000 50%, transparent 100%)",
          },
        },
      };
    }
    return {};
  };

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 4, md: 6 },
        color: "white",
        background: `linear-gradient(
                72.2deg,
                rgba(0, 113, 229, 0.9) 26.49%,
                rgba(9, 82, 156, 0.9) 85.53%
            )`,
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={statsBannerSide}
        alt=""
        sx={{
          position: "absolute",
          top: 0,
          height: "100%",
          width: "auto",
          zIndex: 0,
          left: { xs: "auto", sm: "auto", md: 0 },
          right: { xs: "-60px", sm: 0, md: "auto" },
          transform: { xs: "scaleX(-1)", md: "none" },
        }}
      />
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            maxWidth: { xs: "90%", sm: "100%" },
            marginLeft: "auto",
            marginRight: "auto",
          }}
          justifyContent="center"
          textAlign="center"
        >
          {displayData.map((item, index) => (
            <Grid item xs={11} sm={4} key={index}>
              <StatBox
                image={item.image}
                title={item.title}
                value={item.value}
                label={item.label}
                sx={getDividerStyles(index)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsBanner;
