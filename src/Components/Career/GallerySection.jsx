import React from "react";
import { Box, Grid } from "@mui/material";
import placeholderImage from "../../assets/placeholderImage.png";

const GallerySection = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Grid container>
        {/* 2x3 Grid on large screens */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              height: 300,
              bgcolor:
                "linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={placeholderImage}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              height: 300,
              bgcolor: "#E0F2F1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Placeholder for icon/logo */}
            <Box sx={{ fontSize: 60, color: "#B2DFDB" }}>🖼️</Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            component="img"
            src={placeholderImage}
            sx={{ height: 300, width: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              height: 300,
              bgcolor: "#E3F2FD",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ fontSize: 60, color: "#BBDEFB" }}>🖼️</Box>
          </Box>
        </Grid>

        {/* Second Row */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              height: 300,
              bgcolor: "#F3E5F5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ fontSize: 60, color: "#E1BEE7" }}>🖼️</Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            component="img"
            src={placeholderImage}
            sx={{ width: "100%", height: 300, objectFit: "cover" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              height: 300,
              bgcolor: "#FBE9E7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ fontSize: 60, color: "#FFCCBC" }}>🖼️</Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            component="img"
            src={placeholderImage}
            sx={{ width: "100%", height: 300, objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GallerySection;
