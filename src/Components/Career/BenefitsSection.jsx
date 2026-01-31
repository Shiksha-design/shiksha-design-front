import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { colors } from "../../Config/theme";
import userAvatar from "../../assets/userAvatar.svg";
import classCompleted from "../../assets/classCompleted.svg";
import userRate from "../../assets/userRate.svg";
import community from "../../assets/community.svg";
import BenefitsSectionBg from "../../assets/benefitsSectionBg.png";

// Features Data
const features = [
  {
    icon: (
      <img
        src={userAvatar}
        alt="User Avatar"
        style={{ filter: "invert(1) brightness(100)" }}
      />
    ),
    title: "Diverse career paths",
    desc: "We empower you to mould your path, define your role, and chart your own career trajectory. Explore diverse horizons and unlock a world of possibilities.",
  },
  {
    icon: (
      <img
        src={classCompleted}
        alt="Handshake Icon"
        style={{ filter: "invert(1) brightness(100)" }}
      />
    ),

    title: "Open work culture",
    desc: "We welcome fresh ideas with open arms, fostering a culture where creativity thrives, and new possibilities are explored. If you like challenging the status quo, you'll fit right in!",
  },
  {
    icon: (
      <img
        src={userRate}
        alt="Star Icon"
        style={{ filter: "invert(1) brightness(100)" }}
      />
    ),
    title: "Learning support",
    desc: "We empower you to mould your path, define your role, and chart your own career trajectory. Explore diverse horizons and unlock a world of possibilities.",
  },
  {
    icon: (
      <img
        src={community}
        alt="Book Icon"
        style={{ filter: "invert(1) brightness(100)" }}
      />
    ),
    title: "Best-in-class facilities",
    desc: "We empower you to mould your path, define your role, and chart your own career trajectory. Explore diverse horizons and unlock a world of possibilities.",
  },
];

const BenefitsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      <Typography
        variant="title"
        sx={{
          textAlign: "center",
          color: colors.primary,
          mb: 4,
        }}
      >
        What’s in it for you ?
      </Typography>

      <Grid
        container
        sx={{
          p: 4,
          borderRadius: 4,
          backgroundImage: `url(${BenefitsSectionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "1px solid #0000001F",
          justifyContent: "center",
        }}
        gap={2}
      >
        {features.map((feature, index) => (
          <Grid item xs={12} md={4.8} key={index} display="flex" gap={2}>
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                bgcolor: colors.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                p: 2,
              }}
            >
              {feature.icon}
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "24px" },
                  fontWeight: 700,
                  color: "#26394D",
                  mb: 1,
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                sx={{
                  color: "#26394D",
                  fontSize: { xs: "12px", md: "14px" },
                  lineHeight: 1.6,
                }}
              >
                {feature.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BenefitsSection;
