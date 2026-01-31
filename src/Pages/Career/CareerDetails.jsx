import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { colors } from "../../Config/theme";
import CareerDetailsHero from "../../Components/Career/CareerDetailsHero";
import { useParams } from "react-router-dom";
import StatsBanner from "../../Components/Home/StatsBanner";
import BenefitsSectionBg from "../../assets/benefitsSectionBg.png";

const CareerDetails = () => {
  const { id } = useParams();

  // Mock data based on ID could go here in a real app

  return (
    <Box sx={{ bgcolor: colors.mainBg, minHeight: "100vh", pb: 10 }}>
      {/* Hero Section */}
      <CareerDetailsHero />

      {/* job description */}
      <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 }, mb: 8 }}>
        {/* What you bring Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{ fontWeight: 700, color: "#26394D", fontSize: "32px" }}
            >
              What you bring
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <List sx={{ p: 0 }}>
              {[
                "Become the spokesperson of folio in the market.",
                "Build and nurture partnerships with brands and influencers who share our mission.",
                "Keep our marketing materials sharp and up-to-date across platforms.",
                "Organize, promote, and run webinars tailored to our users and target audience.",
                "Manage our marketing automation, newsletters, and release notes.",
                "Create promotional materials alongside our designers.",
                "Set up and analyze measurement plans across all efforts.",
                "Create weekly and monthly reports to drive smart, data-based decisions.",
                "Tools we use: Mixpanel, Clarity, Zoom Webinars, Drip, WordPress, Ahrefs, and Figma.",
              ].map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                    <Box
                      sx={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        bgcolor: "#26394D",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: {
                        color: "#26394D",
                        lineHeight: 1.6,
                        fontSize: "16px",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        {/* What you'll do Section */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{ fontWeight: 700, color: "#26394D", fontSize: "32px" }}
            >
              What you'll do
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <List sx={{ p: 0 }}>
              {[
                "Become the spokesperson of folio in the market.",
                "Build and nurture partnerships with brands and influencers who share our mission.",
                "Keep our marketing materials sharp and up-to-date across platforms.",
                "Organize, promote, and run webinars tailored to our users and target audience.",
                "Manage our marketing automation, newsletters, and release notes.",
                "Create promotional materials alongside our designers.",
                "Set up and analyze measurement plans across all efforts.",
                "Create weekly and monthly reports to drive smart, data-based decisions.",
                "Tools we use: Mixpanel, Clarity, Zoom Webinars, Drip, WordPress, Ahrefs, and Figma.",
              ].map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                    <Box
                      sx={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        bgcolor: "#26394D",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: {
                        color: colors.textStart,
                        lineHeight: 1.6,
                        fontSize: "16px",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
      <StatsBanner />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="title" sx={{ textAlign: "center", mb: 4 }}>
          Why join us?
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{ fontWeight: 700, color: "#26394D", fontSize: "32px" }}
            >
              Work-life Balance
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <List sx={{ p: 0 }}>
              {[
                "Create promotional materials alongside our designers.",
                "Set up and analyze measurement plans across all efforts.",
                "Create weekly and monthly reports to drive smart, data-based decisions.",
                "Tools we use: Mixpanel, Clarity, Zoom Webinars, Drip, WordPress, Ahrefs, and Figma.",
              ].map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                    <Box
                      sx={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        bgcolor: "#26394D",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: {
                        color: colors.textStart,
                        lineHeight: 1.6,
                        fontSize: "16px",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              sx={{ fontWeight: 700, color: "#26394D", fontSize: "32px" }}
            >
              Employee Life
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <List sx={{ p: 0 }}>
              {[
                "Create promotional materials alongside our designers.",
                "Set up and analyze measurement plans across all efforts.",
                "Create weekly and monthly reports to drive smart, data-based decisions.",
                "Tools we use: Mixpanel, Clarity, Zoom Webinars, Drip, WordPress, Ahrefs, and Figma.",
              ].map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
                    <Box
                      sx={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        bgcolor: "#26394D",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      sx: {
                        color: colors.textStart,
                        lineHeight: 1.6,
                        fontSize: "16px",
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            background: `url(${BenefitsSectionBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#F0F7FF",
            borderRadius: "40px",
            border: "1px solid #0000001F",
            p: { xs: 2, md: 4 },
          }}
        >
          <Typography variant="title" sx={{ textAlign: "center" }}>
            How to apply for this position
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "16px", md: "24px" },
              color: "#26394D",
              fontWeight: 400,
            }}
          >
            To apply for this position, send us your resume at
            <span style={{ color: colors.secondary, fontWeight: 700 }}>
              {" "}
              careers.compay@xyz.cpm
            </span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CareerDetails;
