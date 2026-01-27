import React from "react";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { colors } from "../../Config/theme";
import {
  Groups,
  WorkOutline,
  CastForEducation,
  LaptopMac,
} from "@mui/icons-material";

// Features Data
const features = [
  {
    icon: <Groups sx={{ fontSize: 32 }} />,
    title: "Diverse career paths",
    desc: "We empower you to mould your path, define your role, and chart your own career trajectory. Explore diverse horizons and unlock a world of possibilities.",
    color: "#1E88E5",
    bgColor: "#E3F2FD", // Blue
  },
  {
    icon: <WorkOutline sx={{ fontSize: 32 }} />,
    title: "Open work culture",
    desc: "We welcome fresh ideas with open arms, fostering a culture where creativity thrives, and new possibilities are explored. If you like challenging the status quo, you'll fit right in!",
    color: "#1E88E5",
    bgColor: "#E3F2FD",
  },
  {
    icon: <CastForEducation sx={{ fontSize: 32 }} />,
    title: "Learning support",
    desc: "We empower you to mould your path, define your role, and chart your own career trajectory. Explore diverse horizons and unlock a world of possibilities.",
    color: "#1E88E5",
    bgColor: "#E3F2FD",
  },
  {
    icon: <LaptopMac sx={{ fontSize: 32 }} />,
    title: "Best-in-class facilities",
    desc: "We empower you to mould your path, define your role, and chart your own career trajectory. Explore diverse horizons and unlock a world of possibilities.",
    color: "#1E88E5",
    bgColor: "#E3F2FD",
  },
];

const BenefitsSection = () => {
  return (
    <Box sx={{ bgcolor: "#F0F4F8", py: 10, position: "relative" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: colors.primary,
            mb: 8,
            fontSize: { xs: "28px", md: "36px" },
          }}
        >
          What’s in it for you ?
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            bgcolor: "#E9EFF5", // Light grayish container for grid items
            p: 4,
            borderRadius: 4,
          }}
        >
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    bgcolor: feature.color,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#26394D", mb: 1 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{ color: "#64748b", fontSize: "14px", lineHeight: 1.6 }}
                  >
                    {feature.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
