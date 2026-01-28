import React from "react";
import { Box, Typography, Stack, Avatar, IconButton } from "@mui/material";
import {
  School,
  MenuBook,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  X,
} from "@mui/icons-material";
import { colors } from "../../Config/theme";
import pie from "../../Assets/pie.png";

const CourseInstructor = () => {
  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="title" sx={{ mb: 3, color: colors.primary }}>
        Instructor
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* Logo / Avatar */}
        <Box
          sx={{
            width: 120,
            height: 120,
            bgcolor: "#D50000", // Red background as per design
            borderRadius: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <img src={pie} alt="pie" width={"60%"} />
        </Box>

        {/* Details */}
        <Box>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ mb: 1, color: "#1e293b" }}
          >
            ThimPress
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            paragraph
            sx={{ lineHeight: 1.6 }}
          >
            LearnPress is a comprehensive WordPress LMS Plugin for WordPress.
            This is one of the best WordPress LMS Plugins which can be used to
            easily create & sell courses online.
          </Typography>

          <Stack direction="column" spacing={1} sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#64748b",
              }}
            >
              <School fontSize="small" sx={{ color: "#ff9800" }} />
              <Typography variant="body2">156 Students</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#64748b",
              }}
            >
              <MenuBook fontSize="small" sx={{ color: "#ff9800" }} />
              <Typography variant="body2">20 Lessons</Typography>
            </Box>
          </Stack>

          <Typography variant="body2" color="text.secondary" paragraph>
            LearnPress is a comprehensive WordPress LMS Plugin for WordPress.
            This is one of the best WordPress LMS Plugins which can be used to
            easily create & sell courses online.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              Follow:
            </Typography>
            <IconButton size="small">
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <X fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <Instagram fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <YouTube fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseInstructor;
