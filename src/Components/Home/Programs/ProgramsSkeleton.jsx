import React from "react";
import { Box, Skeleton, Grid, useMediaQuery, useTheme } from "@mui/material";

const ProgramsSkeleton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return (
      <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 1, px: 2 }}>
        {[1, 2, 3].map((item) => (
          <Box key={item} sx={{ minWidth: 200 }}>
            <Skeleton
              variant="rectangular"
              height={140}
              sx={{ borderRadius: 2, mb: 1 }}
            />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="60%" />
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid item xs={12} sm={6} lg={4} key={item}>
          <Box
            sx={{
              height: "100%",
              bgcolor: "white",
              borderRadius: 2,
              overflow: "hidden",
              p: 1,
            }}
          >
            <Skeleton
              variant="rectangular"
              height={160}
              sx={{ borderRadius: 2, mb: 1 }}
            />
            <Box sx={{ pt: 1 }}>
              <Skeleton variant="text" height={24} width="90%" sx={{ mb: 1 }} />
              <Skeleton variant="text" height={20} width="60%" />
              <Skeleton
                variant="rectangular"
                height={40}
                width={100}
                sx={{ mt: 2, borderRadius: 1 }}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProgramsSkeleton;
