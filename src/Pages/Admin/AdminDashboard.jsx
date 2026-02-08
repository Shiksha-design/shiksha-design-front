import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import { School, Category, Star } from "@mui/icons-material";
import programService from "../../Services/programService";
import categoryService from "../../Services/categoryService";
import topFeaturesService from "../../Services/topFeaturesService";

const StatCard = ({ title, value, icon, color }) => (
  <Card sx={{ height: "100%", bgcolor: color, color: "#fff" }}>
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6" component="div" sx={{ color: "#fff" }}>
            {title}
          </Typography>
          <Typography variant="h4" fontWeight="bold" sx={{ color: "#fff" }}>
            {value}
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              p: 1,
              bgcolor: "rgba(255,255,255,0.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    programs: 0,
    categories: 0,
    features: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [programs, categories, features] = await Promise.all([
          programService.getAll(),
          categoryService.getAll(),
          topFeaturesService.getAll(),
        ]);

        const getCount = (data) =>
          Array.isArray(data) ? data.length : data.data?.length || 0;

        setStats({
          programs: getCount(programs),
          categories: getCount(categories),
          features: getCount(features),
        });
      } catch (error) {
        console.error("Failed to fetch dashboard stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", color: "#2c3e50" }}
      >
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Total Programs"
            value={stats.programs}
            icon={<School fontSize="large" />}
            color="#3498db"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Categories"
            value={stats.categories}
            icon={<Category fontSize="large" />}
            color="#e67e22"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard
            title="Top Features"
            value={stats.features}
            icon={<Star fontSize="large" />}
            color="#27ae60"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
