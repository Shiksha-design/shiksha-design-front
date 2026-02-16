import React from "react";
import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";
import { colors } from "../../Config/theme";

const CareerDetailsHero = ({ title, type, location, date, jobDescription }) => {
  return (
    <Box
      sx={{
        bgcolor: colors.primary,
        color: "white",
        position: "relative",
        mt: 8,
        py: 4,
      }}
    >
      <Container maxWidth="lg" sx={{ minHeight: "300px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7} md={8}>
            {/* Badges */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
              {[
                type,
                location,
                date
                  ? new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : null,
              ]
                .filter(Boolean)
                .map((label, index) => (
                  <Box
                    key={index}
                    sx={{
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      borderRadius: 1,
                      px: 2,
                      py: 0.5,
                    }}
                  >
                    <Typography sx={{ fontSize: "14px", color: "white" }}>
                      {label}
                    </Typography>
                  </Box>
                ))}
            </Box>

            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: "inherit",
                fontWeight: 700,
                fontSize: { xs: "32px", md: "48px" },
              }}
            >
              {title}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "16px",
                lineHeight: 1.6,
                maxWidth: "600px",
              }}
            >
              {jobDescription}
            </Typography>
          </Grid>
          <Grid
            item
            sm={5}
            md={4}
            sx={{
              position: "relative",
              display: { xs: "none", sm: "block" },
              height: "300px",
            }}
          >
            <Paper
              elevation={4}
              sx={{
                position: { md: "absolute" },
                bottom: { md: -70 },
                right: { md: 0 },
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "white",
              }}
            >
              <Box
                component={"img"}
                src={
                  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80"
                }
                alt="Abstract Gradient"
                sx={{
                  width: { xs: "100%", md: "300px" },
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box sx={{ p: 3 }}>
                <Button variant="secondary" fullWidth size="small">
                  Apply
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CareerDetailsHero;
