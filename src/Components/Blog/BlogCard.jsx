import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { colors } from "../../Config/theme";

const BlogCard = ({
  image,
  tag,
  title,
  description,
  author,
  date,
  onClick,
}) => {
  return (
    <Paper
      elevation={0}
      onClick={onClick}
      sx={{
        bgcolor: "white",
        borderRadius: 3,
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
        transition: "transform 0.3s ease-in-out",
        p: 1,
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 8px 30px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: "100%",
          height: 200,
          position: "relative",
          borderRadius: 2,
          background: image
            ? `url(${image}) center/cover no-repeat`
            : "linear-gradient(135deg, #FF6B6B 0%, #556270 100%)", // Default fallback gradient
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            bgcolor: "#F0F7FF",
            color: "#26394D",
            fontWeight: 400,
            fontSize: "12px",
            borderRadius: 1,
            py: 0.5,
            px: 1.5,
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          {tag}
        </Typography>
      </Box>

      {/* Content Section */}
      <Box sx={{ p: 1, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: { xs: "16px", md: "20px" },
            mb: { xs: 2, md: 3 },
            lineHeight: { xs: "20px", md: "28px" },
            color: "#26394D",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#26394D",
            mb: { xs: 2, md: 3 },
            lineHeight: { xs: "20px", md: "28px" },
            fontSize: { xs: "14px", md: "16px" },
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            flexGrow: 1,
          }}
        >
          {description}
        </Typography>

        <Typography
          sx={{
            mb: { xs: 2, md: 4 },
            fontSize: "14px",
            fontWeight: 400,
            color: "#26394D",
          }}
        >
          By {author} | Updated: {date}
        </Typography>

        <Button
          fullWidth
          endIcon={<ArrowForward />}
          sx={{
            width: "100%",
            color: "#26394D",
            fontWeight: 400,
            borderRadius: 2,
            px: 3,
            py: 1,
            border: "1px solid #E1EAF5",
            mt: "auto",
            textTransform: "none",
          }}
        >
          Read More
        </Button>
      </Box>
    </Paper>
  );
};

export default BlogCard;
