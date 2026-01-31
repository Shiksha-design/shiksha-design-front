import React from "react";
import { Box, Typography, Button, Paper, Grid, Chip } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const BlogHero = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: "white",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0px 10px 40px rgba(0,0,0,0.08)",
        p: 0.5,
      }}
    >
      <Grid container>
        {/* Image Section */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ position: "relative", minHeight: { xs: 200, md: 346 } }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "#FF7F50", // Fallback color
              background: `url(${"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"})`, // Orange/Red gradient
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 2,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 5,
              left: 5,
            }}
          >
            <Chip
              label="Career Advice"
              sx={{
                bgcolor: "#F0F7FF",
                color: "#26394D",
                fontWeight: 400,
                fontSize: "12px",
                borderRadius: 1,
                "& .MuiChip-label": { padding: "0 12px" },
              }}
            />
          </Box>
        </Grid>

        {/* Content Section */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", flexDirection: "column", p: 2 }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "16px", md: "24px" },
              mb: { xs: 2, md: 3 },
              lineHeight: { xs: "28px", md: "32px" },
              color: "#26394D",
            }}
          >
            Career Transition to Salesforce Developer - 100% Salary Hike
          </Typography>

          <Typography
            sx={{
              color: "#26394D",
              mb: { xs: 2, md: 3 },
              lineHeight: { xs: "20px", md: "28px" },
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            AWS provides services for every domain such as computing, data
            storage, data analytics, robotics, and much more to explore.
          </Typography>

          <Typography
            sx={{
              mb: { xs: 2, md: 4 },
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: 400,
              color: "#26394D",
            }}
          >
            By John Doe | Updated: 12/10/25
          </Typography>

          <Button
            fullWidth
            endIcon={<ArrowForward />}
            sx={{
              width: "100%",
              color: "#26394D",
              fontWeight: 400,
              borderRadius: 2,
              px: 3,
              py: 1,
              border: "1px solid #E1EAF5",
              mt: "auto",
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BlogHero;
