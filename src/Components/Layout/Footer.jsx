import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Divider,
  Link,
  Stack,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  YouTube,
  Instagram,
  Android,
  Apple,
} from "@mui/icons-material";
import { colors } from "../../Config/theme";

const Footer = () => {
  const listStyle = {
    display: "block",
    color: "#B0B8C4", // Light gray text for links
    textDecoration: "none",
    mb: 1,
    fontSize: "0.875rem",
    "&:hover": { color: "#fff" },
  };

  const titleStyle = {
    color: "#fff",
    fontWeight: 500,
    mb: 2,
  };

  return (
    <Box sx={{ bgcolor: "#26394D", color: "#fff", pt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        {/* Top Section */}
        <Grid container>
          {/* Follow us */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={titleStyle}>
              Follow us!
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#B0B8C4",
                borderColor: "#B0B8C4",
                textTransform: "none",
                borderRadius: 2,
                fontWeight: 500,
                px: 3,
                py: 1,
                mb: 3,
                "&:hover": { borderColor: "#fff" },
              }}
            >
              Refer & Earn
            </Button>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                size="small"
                sx={{
                  bgcolor: colors.primary,
                  color: "white",
                  borderRadius: 50,
                }}
              >
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  bgcolor: colors.primary,
                  color: "white",
                  borderRadius: 50,
                }}
              >
                <Twitter fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  bgcolor: colors.primary,
                  color: "white",
                  borderRadius: 50,
                }}
              >
                <YouTube fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  bgcolor: colors.primary,
                  color: "white",
                  borderRadius: 50,
                }}
              >
                <Instagram fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Company */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" sx={titleStyle}>
              Company
            </Typography>
            <Link href="#" sx={listStyle}>
              About us
            </Link>
            <Link component={RouterLink} to="/career" sx={listStyle}>
              Careers
            </Link>
            <Link component={RouterLink} to="/terms-conditions" sx={listStyle}>
              Terms and Conditions
            </Link>
            <Link component={RouterLink} to="/privacy-policy" sx={listStyle}>
              Privacy Policy
            </Link>
            <Link component={RouterLink} to="/refund-policy" sx={listStyle}>
              Refund Policy
            </Link>
            <Link component={RouterLink} to="/contact-us" sx={listStyle}>
              Contact us
            </Link>
          </Grid>

          {/* For Business */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" sx={titleStyle}>
              For Business
            </Typography>
            <Link href="#" sx={listStyle}>
              About us
            </Link>
            <Link component={RouterLink} to="/career" sx={listStyle}>
              Careers
            </Link>
          </Grid>

          {/* Popular Courses */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" sx={titleStyle}>
              Popular Courses
            </Typography>
            <Link href="#" sx={listStyle}>
              UI UX Design Course
            </Link>
            <Link href="#" sx={listStyle}>
              AI Design Tool Course
            </Link>
          </Grid>

          {/* Trending Courses */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" sx={titleStyle}>
              Trending Courses
            </Typography>
            <Link href="#" sx={listStyle}>
              Video Editing Course
            </Link>
            <Link href="#" sx={listStyle}>
              Product Design Course
            </Link>
            <Link href="#" sx={listStyle}>
              Full Stack Development Course
            </Link>
          </Grid>

          {/* Learn On the Go */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={titleStyle}>
              Learn On the Go!
            </Typography>
            <Stack spacing={2}>
              <Button
                variant="outlined"
                startIcon={<Android />}
                sx={{
                  color: "#B0B8C4",
                  borderColor: "#B0B8C4",
                  textTransform: "none",
                  justifyContent: "flex-start",
                  borderRadius: 2,
                  py: 1,
                  "&:hover": { borderColor: "#fff" },
                }}
              >
                Get Android App
              </Button>
              <Button
                variant="outlined"
                startIcon={<Apple />}
                sx={{
                  color: "#B0B8C4",
                  borderColor: "#B0B8C4",
                  textTransform: "none",
                  justifyContent: "flex-start",
                  borderRadius: 2,
                  py: 1,
                  "&:hover": { borderColor: "#fff" },
                }}
              >
                Get ios App
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "#E1EAF5", my: 5 }} />

        {/* Middle Text Links */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontSize: "1rem", mb: 1.5 }}
          >
            Trending Master Programs
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#B0B8C4", fontSize: "0.8rem", lineHeight: 1.8 }}
          >
            UI UX Design Course &nbsp;|&nbsp; UI Design Course &nbsp;|&nbsp; UX
            Design Course &nbsp;|&nbsp; Product Design Course &nbsp;|&nbsp;
            Service Design Course &nbsp;|&nbsp; Video Editing Course
            &nbsp;|&nbsp; Graphic Design Course
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontSize: "1rem", mb: 1.5 }}
          >
            Popular Courses
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#B0B8C4", fontSize: "0.8rem", lineHeight: 1.8 }}
          >
            PHP Course &nbsp;|&nbsp; Full Stack Development Course &nbsp;|&nbsp;
            Web Development Course &nbsp;|&nbsp; UI Development Course
            &nbsp;|&nbsp; Product Design Course &nbsp;|&nbsp; Service Design
            Course &nbsp;|&nbsp; ITIL Certification &nbsp;|&nbsp; Web Design
            Course &nbsp;|&nbsp;
            <br />
            User Research Course &nbsp;|&nbsp; UI Design Course &nbsp;|&nbsp; UX
            Design Course &nbsp;|&nbsp; UI UX Design Course &nbsp;|&nbsp; Video
            Editing Course &nbsp;|&nbsp; Interaction Design Course &nbsp;|&nbsp;
            AI Design Course
          </Typography>
        </Box>

        <Divider sx={{ borderColor: "#E1EAF5", my: 5 }} />

        {/* Bottom Copyright */}
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{ mb: 1, display: "flex", justifyContent: "center", gap: 2 }}
          >
            <Link
              component={RouterLink}
              to="/terms-conditions"
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              Terms and Conditions
            </Link>
            <Typography component="span" sx={{ color: "#fff" }}>
              •
            </Typography>
            <Link
              component={RouterLink}
              to="/privacy-policy"
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "0.875rem",
              }}
            >
              Privacy Policy
            </Link>
          </Box>
          <Typography
            variant="caption"
            display="block"
            sx={{ color: "#7E8C9D", mb: 1 }}
          >
            Address: Delhi 110015
          </Typography>
          <Typography
            variant="caption"
            display="block"
            sx={{ color: "#7E8C9D" }}
          >
            © 2025 - Shiksha Design All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
