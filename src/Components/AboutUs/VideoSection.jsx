import React from "react";
import { Box, Container, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import placeholder from "../../Assets/placeholderImage.png";
import { PlayArrowOutlined } from "@mui/icons-material";
import { videoSectionStyles } from "./styles";

const VideoSection = () => {
  return (
    <Box sx={videoSectionStyles.container}>
      <Container maxWidth="xl">
        <Box sx={videoSectionStyles.videoBox(placeholder)}>
          <IconButton sx={videoSectionStyles.playButton}>
            <PlayArrowOutlined sx={{ fontSize: 60 }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default VideoSection;
