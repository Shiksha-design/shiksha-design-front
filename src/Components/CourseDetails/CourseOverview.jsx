import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../Config/theme";

const CourseOverview = ({ course }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="title" sx={{ mb: 2, color: colors.primary }}>
        Overview
      </Typography>
      <Typography
        paragraph
        sx={{
          lineHeight: "24px",
          fontSize: "16px",
          fontWeight: 400,
          color: "#000000",
        }}
      >
        {course?.description || "No overview available for this course."}
      </Typography>
    </Box>
  );
};

export default CourseOverview;
