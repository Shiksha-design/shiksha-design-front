import { Box, Container, Grid, Typography } from "@mui/material";
import { colors } from "../../Config/theme";
import placeholder from "../../assets/placeholderImage.png";
import SectionTitle from "../Common/SectionTitle";
import { aboutHeroStyles } from "./styles";

const AboutHero = () => {
  return (
    <Box sx={aboutHeroStyles.container}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} sm={6}>
            <SectionTitle sx={aboutHeroStyles.title}>
              We Transform Lives by{" "}
              <Box component="span" sx={aboutHeroStyles.highlightText}>
                Empowering
              </Box>{" "}
              People Via Digital Skills.
            </SectionTitle>
            <Typography sx={aboutHeroStyles.description}>
              We firmly believe in and embrace an open culture. Our teams
              comprise individuals from diverse backgrounds bringing about their
              own experiences Our experiences and processes are constantly
              evolving. We believe in innovative practices that continually push
              the boundaries of what’s possible for the industry.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            <Box sx={aboutHeroStyles.imageBox(placeholder)}>
              <img src={placeholder} alt="placeholder" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutHero;
