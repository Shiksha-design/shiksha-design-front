import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import { colors } from "../../Config/theme";
import placeholderImage from "../../assets/placeholderImage.png";
import { Public, Star, Business } from "@mui/icons-material";

const CareerHero = () => {
  const steps = [
    {
      title: "Multicultural team",
      icon: (
        <Public style={{ color: "#5A6B7C", transform: "rotate(180deg)" }} />
      ),
    },
    {
      title: "2 years of excellence",
      icon: <Star style={{ color: "#FFA500" }} />,
    },
    {
      title: "Remote Work",
      icon: <Business style={{ color: "#9C27B0" }} />,
    },
  ];
  return (
    <Box
      sx={{
        bgcolor: "#F0F8FF",
        pt: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: "#26394D",
              fontSize: { xs: "32px", md: "48px" },
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Join Us and be a part of the <br />
            Digital Upskilling Revolution
          </Typography>
          <Typography
            sx={{
              color: "#26394D",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "28px",
              fontWeight: 400,
              letterSpacing: "0",
            }}
          >
            We firmly believe in and embrace an open culture. Our teams comprise
            individuals from diverse backgrounds bringing about their own
            experiences Our experiences and processes are constantly evolving.
            We believe in innovative practices that continually push the
            boundaries of what’s possible for the industry.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: 6,
            width: "100%",
          }}
        >
          {/* Floating Cards (Left Side) */}
          <Box sx={{ width: "100%" }}>
            {steps.map((step, index) => {
              const isEven = index % 2 === 0; // 0, 2 -> Left aligned number
              return (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    mb: 3,
                    gap: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isEven ? "flex-end" : "flex-start",
                    width: "100%",
                  }}
                >
                  <Box
                    key={index}
                    sx={{
                      bgcolor: "#fff",
                      borderRadius: "20px",
                      px: { xs: 1, md: 2 },
                      py: { xs: 1, md: 3 },
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 0.5, md: 1 },
                      width: "100%",
                      maxWidth: { xs: "82%", md: "90%" },
                      zIndex: 1,
                      boxShadow: "5px 15px 50px 0px #0B707740",
                    }}
                  >
                    {/* Icon Box */}
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor:
                          step?.number === "01"
                            ? "#E1E9FE"
                            : step?.number === "02"
                              ? "#FFEED2"
                              : "#F6E2FF",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      {step.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontSize: { xs: "16px", md: "20px" },
                        color: "#26394D",
                        fontFamily: "'Open Sans', sans-serif !important",
                      }}
                    >
                      {step.title}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box
            component="img"
            src={placeholderImage}
            alt="Career Hero"
            sx={{
              width: { xs: "100%", sm: "300px", md: "400px" },
              height: { xs: "300px", sm: "300px", md: "400px" },
              borderRadius: 4,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
              objectFit: "cover",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CareerHero;
