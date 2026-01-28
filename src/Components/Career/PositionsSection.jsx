import React from "react";
import { Box, Typography, Container, Grid, Button, Paper } from "@mui/material";
import { colors } from "../../Config/theme";
import {
  Monitor,
  PhoneIphone,
  Videocam,
  DesktopMac,
  AddToQueue,
} from "@mui/icons-material";
import { ArrowForward } from "@mui/icons-material";

const positions = [
  {
    icon: <Monitor sx={{ fontSize: 30 }} />,
    title: "Graphic Designer",
    types: ["Full-time", "Remote"],
  },
  {
    icon: <Monitor sx={{ fontSize: 30 }} />,

    title: "Digital Product Marketer",
    types: ["Full-time", "Remote"],
  },
  {
    icon: <Monitor sx={{ fontSize: 30 }} />,

    title: "Video Editor",
    types: ["Full-time", "Remote"],
  },
  {
    icon: <Monitor sx={{ fontSize: 30 }} />,
    title: "Video editing & Graphic Designer",
    types: ["Full-time", "Remote"],
  },
  {
    icon: <Monitor sx={{ fontSize: 30 }} />,

    title: "Digital Product Marketer",
    types: ["Full-time", "Remote"],
  },
];

const PositionsSection = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(
                72.2deg,
                rgba(0, 113, 229, 0.9) 26.49%,
                rgba(9, 82, 156, 0.9) 85.53%
            )`,
        py: 10,
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

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {positions.map((job, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 2,
                p: 2,
                width: { xs: "100%", sm: "350px", md: "360px" }, // Fixed width for cards
                textAlign: "center",
                color: "white",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.15)",
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{job.icon}</Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: "18px",
                  color: "white",
                }}
              >
                {job.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  mb: 4,
                }}
              >
                {job.types.map((type, i) => (
                  <Typography
                    key={i}
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      borderRadius: 4,
                      px: 2,
                      py: 0.5,
                      fontSize: "12px",
                      color: "white",
                    }}
                  >
                    {type}
                  </Typography>
                ))}
              </Box>

              <Button
                endIcon={<ArrowForward sx={{ fontSize: "16px !important" }} />}
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
      </Container>
    </Box>
  );
};

export default PositionsSection;
