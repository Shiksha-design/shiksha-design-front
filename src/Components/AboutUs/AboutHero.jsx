import { Box, Container, Grid, Typography } from "@mui/material";
import { colors } from "../../Config/theme";
import placeholder from "../../assets/placeholderImage.png";
import SectionTitle from "../Common/SectionTitle";

const AboutHero = () => {
  return (
    <Box sx={{ pt: 10, pb: 6, bgcolor: colors.mainBg }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={6}>
            <SectionTitle
              sx={{
                mb: 3,
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              We Transform Lives by{" "}
              <Box component="span" sx={{ color: colors.secondary }}>
                Empowering
              </Box>{" "}
              People Via Digital Skills.
            </SectionTitle>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: "#26394D",
                letterSpacing: "0",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              We firmly believe in and embrace an open culture. Our teams
              comprise individuals from diverse backgrounds bringing about their
              own experiences Our experiences and processes are constantly
              evolving. We believe in innovative practices that continually push
              the boundaries of what’s possible for the industry.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            <Box
              sx={{
                width: { xs: 300, md: 420 },
                height: { xs: 300, md: 420 },
                background: `url(${placeholder})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                objectFit: "contain",
              }}
            >
              <img src={placeholder} alt="placeholder" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutHero;
