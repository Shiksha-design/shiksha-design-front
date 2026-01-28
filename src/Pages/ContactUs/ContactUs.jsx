import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Breadcrumbs,
  Link,
  Divider,
} from "@mui/material";
import {
  Home as HomeIcon,
  EmailOutlined,
  PhoneOutlined,
  PlaceOutlined,
  InfoOutlined,
  WorkOutline,
  CurrencyExchange,
  Launch,
} from "@mui/icons-material";
import { colors, FontFamily } from "../../Config/theme";
import placeholderImage from "../../assets/placeholderImage.png"; // Assuming this exists or using a colored box if not

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    query: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted", formData);
    // Add submit logic here
  };

  return (
    <Box sx={{ bgcolor: colors.mainBg, minHeight: "100vh", pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: colors.primary,
          color: colors.white,
          mt: 8,
          pt: 4,
          pb: 4,
          mb: 4,
          textAlign: "left",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontFamily: FontFamily.Bold,
              color: "inherit",
            }}
          >
            Contact [Company name]
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: "800px", lineHeight: 1.6, color: "inherit" }}
          >
            Shiksha is the world's #1 online bootcamp and one of the world's
            leading certification training providers. We partner with companies
            and individuals to address their unique needs, providing training
            and coaching that helps working professionals achieve their career
            goals.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Contact Form */}
          <Grid item xs={12} md={8.5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 2,
                border: `1px solid ${colors.borderColor || "#e0e0e0"}`,
                bgcolor: "#EBF2FA", // Light greyish blue from image
              }}
            >
              <Typography
                variant="title"
                sx={{
                  color: colors.primary,
                  mb: 3,
                }}
              >
                Have Queries? Reach out to us!
              </Typography>

              <Box component="form" noValidate autoComplete="off">
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, color: "#555" }}>
                    Full Name
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Placeholder"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ bgcolor: colors.white }}
                    InputProps={{
                      startAdornment: (
                        <Box
                          sx={{
                            mr: 1,
                            color: "#999",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Box>
                      ),
                    }}
                  />
                </Box>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: 1, color: "#555" }}
                    >
                      Email
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="abc@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ bgcolor: colors.white }}
                      InputProps={{
                        startAdornment: (
                          <EmailOutlined sx={{ color: "#999", mr: 1 }} />
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography
                      variant="subtitle2"
                      sx={{ mb: 1, color: "#555" }}
                    >
                      Phone Number
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Enter 10 digit number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ bgcolor: colors.white }}
                      InputProps={{
                        startAdornment: (
                          <>
                            <PhoneOutlined sx={{ color: "#999", mr: 1 }} />
                            <Typography
                              sx={{ color: "#555", mr: 1, fontSize: "14px" }}
                            >
                              +91
                            </Typography>
                            <Divider
                              orientation="vertical"
                              flexItem
                              sx={{ height: "20px", my: "auto", mr: 1 }}
                            />
                          </>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, color: "#555" }}>
                    Describe your query
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Describe your query here"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ bgcolor: colors.white }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                        sx={{ color: colors.primary }}
                      />
                    }
                    label={
                      <Box
                        variant="caption"
                        color="textSecondary"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          fontSize: "14px",
                          fontWeight: 400,
                          letterSpacing: "0",
                        }}
                      >
                        By providing your contact details, you agree to
                        our&nbsp;
                        <Link href="#" underline="hover" variant="span">
                          Terms of Use
                        </Link>
                        &nbsp; & &nbsp;
                        <Link href="#" underline="hover" variant="span">
                          Privacy Policy
                        </Link>
                      </Box>
                    }
                  />
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                      bgcolor: colors.primary,
                      px: 4,
                      py: 1.2,
                      borderRadius: 1,
                      textTransform: "none",
                      fontSize: "16px",
                      minWidth: "120px",
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Get Direction Card */}
          <Grid item xs={12} md={3.5}>
            <Paper
              elevation={2}
              sx={{
                p: 1,
                borderRadius: 2,
                bgcolor: colors.white,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Map Image Placeholder */}
              <Box
                sx={{
                  height: 180,
                  bgcolor: "#e0e0e0",
                  borderRadius: 2,
                  mb: 2,
                  backgroundImage: `url(${placeholderImage})`, // Using generic placeholder for now
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Box sx={{ p: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 2, color: "#26394D" }}
                >
                  Company Registered Name
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "#555", mb: 3, lineHeight: 1.6 }}
                >
                  NALANDA 53/1 C, Manoj Arcade, 24th Main Rd, Sector 2, HSR
                  Layout, Bengaluru - 560102, Karnataka, India.
                </Typography>

                <Box
                  sx={{ mb: 1, display: "flex", alignItems: "center", gap: 1 }}
                >
                  <EmailOutlined sx={{ color: "#555", fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    companyname@domain.com
                  </Typography>
                </Box>

                <Box
                  sx={{ mb: 4, display: "flex", alignItems: "center", gap: 1 }}
                >
                  <PhoneOutlined sx={{ color: "#555", fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: "#555" }}>
                    +91 99999 99999
                  </Typography>
                </Box>

                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<PlaceOutlined />}
                  sx={{
                    mt: "auto",
                    textTransform: "none",
                    py: 1.5,
                    borderRadius: 2,
                    borderColor: colors.borderColor,
                    color: "#555",
                    "&:hover": {
                      borderColor: colors.primary,
                      color: colors.primary,
                    },
                  }}
                >
                  Get Directions
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Enquiries Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="title"
            sx={{
              mb: 4,
              color: colors.primary,
            }}
          >
            Enquiries
          </Typography>
          <Grid container spacing={3}>
            {enquiryCards.map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={1}
                  sx={{
                    py: 6,
                    px: 3,
                    textAlign: "center",
                    borderRadius: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": {
                      boxShadow: colors.shadow,
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2, color: "#26394D" }}>{card.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 3, color: "#4A5568" }}>
                    {card.title}
                  </Typography>

                  <Box
                    component={Link}
                    to={card.link}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#4A5568",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Know more <Launch sx={{ fontSize: 16, ml: 1 }} />
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

const enquiryCards = [
  {
    title: "About Us",
    icon: (
      <InfoOutlined sx={{ fontSize: 48, stroke: "#26394D", strokeWidth: 1 }} />
    ), // Using stroke to simulate outlined style
    link: "#",
  },
  {
    title: "Careers",
    icon: <WorkOutline sx={{ fontSize: 48 }} />,
    link: "/career",
  },
  {
    title: "Refund Policy",
    icon: <CurrencyExchange sx={{ fontSize: 48 }} />,
    link: "/refund-policy",
  },
];

export default ContactUs;
