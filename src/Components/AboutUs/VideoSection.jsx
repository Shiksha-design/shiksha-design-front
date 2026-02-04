import React from "react";
import { Box, Container, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import placeholder from "../../Assets/placeholderImage.png";
import { PlayArrowOutlined } from "@mui/icons-material";
const VideoSection = () => {
  return (
    <Box sx={{ py: 8, pb: 12 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 300, md: 500 },
            borderRadius: 4,
            overflow: "hidden",
            background: `url(${placeholder})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            sx={{
              width: 60,
              height: 60,
              bgcolor: "transparent",
              color: "#26394D",
              zIndex: 2,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.2)",
                transform: "scale(1.1)",
                color: "white",
              },
              transition: "all 0.3s ease",
            }}
          >
            <PlayArrowOutlined sx={{ fontSize: 60 }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoSection;
