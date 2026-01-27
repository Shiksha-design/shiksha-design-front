import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { colors } from "../../Config/theme";
import courseImage from "../../assets/courseImage.svg";
import CourseOverview from "./CourseOverview";
import CourseCurriculum from "./CourseCurriculum";
import CourseInstructor from "./CourseInstructor";
import CourseFAQ from "./CourseFAQ";
import CourseReviews from "./CourseReviews";
import { EmailOutlined, PersonOutline, Phone } from "@mui/icons-material";

const tabs = ["Overview", "Curriculum", "Instructor", "FAQs", "Reviews"];

const CourseContent = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <>
      {/* Tabs Nav */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 4, borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={activeTab}
              onChange={(e, newValue) => {
                setActiveTab(newValue);
                const element = document.getElementById(newValue);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              TabIndicatorProps={{ sx: { display: "none" } }}
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  label={tab}
                  value={tab}
                  sx={{
                    cursor: "pointer",
                    pb: 1,
                    flex: 1,
                    borderBottom:
                      activeTab === tab
                        ? `2px solid ${colors.primary}`
                        : "none",
                    color: activeTab === tab ? colors.primary : "#64748b",
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </Grid>
      </Grid>

      {/* Content Sections */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {/* OVERVIEW SECTION */}
          <Box id="Overview" sx={{ scrollMarginTop: "120px" }}>
            <CourseOverview />
          </Box>

          {/* CURRICULUM SECTION */}
          <Box id="Curriculum" sx={{ scrollMarginTop: "120px" }}>
            <CourseCurriculum />
          </Box>
          <Box
            sx={{
              flexDirection: "row",
              alignItems: "center",
              display: { xs: "flex", md: "none" },
              mb: 4,
            }}
          >
            <Box
              sx={{
                height: "532px",
                m: -3,
                display: { xs: "none", sm: "flex" },
              }}
            >
              {/* Image Card */}
              <img src={courseImage} alt="" />
            </Box>
            {/* Form Card */}
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                height: { xs: "auto", md: "532px" },
                mt: 2,
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  sx={{
                    mb: 1,
                    fontSize: "20px !important",
                    color: "#26394D",
                    fontWeight: 400,
                  }}
                >
                  Admissions Close On 7th Oct
                </Typography>
                <Typography
                  sx={{
                    mb: 3,
                    fontSize: "12px !important",
                    fontWeight: 400,
                    letterSpacing: "0px",
                    colr: "#26394D",
                  }}
                >
                  Still not sure? Talk with our advisor and get your doubts
                  sorted before you miss hte chance to enroll into the course
                </Typography>
              </Box>

              <Stack spacing={4}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutline
                          fontSize="small"
                          sx={{ color: "#999" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  label="Full Name"
                  fullWidth
                  size="small"
                  placeholder="Full Name"
                />
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlined
                          fontSize="small"
                          sx={{ color: "#999" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  label="Email"
                  fullWidth
                  size="small"
                  placeholder="Email"
                />
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone fontSize="small" sx={{ color: "#999" }} />
                      </InputAdornment>
                    ),
                  }}
                  label="Mobile Number"
                  fullWidth
                  size="small"
                  placeholder="Mobile Number"
                />
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={
                    <Typography variant="caption" color="text.secondary">
                      By providing your contact details, you agree to our Terms
                      of Use & Privacy Policy
                    </Typography>
                  }
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ textTransform: "none" }}
                >
                  Talk to our advisor
                </Button>
              </Stack>
            </Paper>
          </Box>

          <Box id="Instructor" sx={{ scrollMarginTop: "120px" }}>
            <CourseInstructor />
          </Box>

          <Box id="FAQs" sx={{ scrollMarginTop: "120px" }}>
            <CourseFAQ />
          </Box>

          <Box id="Reviews" sx={{ scrollMarginTop: "120px" }}>
            <CourseReviews />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            flexDirection: "column",
            alignItems: "center",
            display: { xs: "none", md: "flex" },
          }}
        >
          {/* Image Card */}
          <Box sx={{ height: 532 }}>
            <img src={courseImage} alt="" />
          </Box>

          {/* Form Card */}
          <Paper sx={{ mt: 4, p: 3, borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
              Admissions Close On 7th Oct
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Still not sure? Talk with our advisor and get your doubts sorted.
            </Typography>

            <Stack spacing={2}>
              <TextField fullWidth size="small" placeholder="Full Name" />
              <TextField fullWidth size="small" placeholder="Email" />
              <TextField fullWidth size="small" placeholder="Mobile Number" />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <Typography variant="caption" color="text.secondary">
                    By providing contact details, you agree to our Terms.
                  </Typography>
                }
              />
              <Button
                variant="contained"
                fullWidth
                sx={{ textTransform: "none" }}
              >
                Talk to our advisor
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default CourseContent;
