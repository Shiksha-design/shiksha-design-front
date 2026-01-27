import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Pagination,
  InputAdornment,
  TextField,
  Stack,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../../Config/theme";
import BlogHero from "../../Components/Blog/BlogHero";
import BlogCard from "../../Components/Blog/BlogCard";
import RelatedBlogs from "../../Components/Blog/RelatedBlogs";
import SubscribeSection from "../../Components/Home/SubscribeSection";
import { useNavigate } from "react-router-dom";

const blogPosts = Array(9).fill({
  tag: "Career Advice",
  title: "Career Transition to Salesforce Developer - 100% Salary Hike",
  desc: "AWS provides services for every domain such as computing, data storage, data analytics, robotics, and",
  author: "John Doe",
  date: "12/10/25",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", // Example placeholder
});

const relatedPosts = Array(6).fill({
  tag: "Career Advice",
  title: "Career Transition to Salesforce Developer - 100% Salary Hike",
  desc: "AWS provides services for every domain such as computing, data storage, data analytics, robotics, and",
  author: "John Doe",
  date: "12/10/25",
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", // Example placeholder
});

const Blog = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ bgcolor: colors.mainBg, minHeight: "100vh", py: 8 }}>
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            gap: 2,
          }}
        >
          <Typography variant="title">Blog</Typography>
          <TextField
            placeholder="Search"
            variant="outlined"
            size="small"
            sx={{
              width: { xs: "100%", sm: 300 },
              bgcolor: "white",
              borderRadius: 10,
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                "& fieldset": { borderColor: "transparent" },
                "&:hover fieldset": { borderColor: "transparent" },
                "&.Mui-focused fieldset": { borderColor: colors.primary },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#94a3b8" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Hero Section */}
        <BlogHero />

        {/* Featured Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="title"
            sx={{ color: colors.primary, mt: 4, mb: 2 }}
          >
            Featured
          </Typography>
          <Grid container spacing={4}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <BlogCard
                  tag={post.tag}
                  title={post.title}
                  description={post.desc}
                  author={post.author}
                  date={post.date}
                  image={post.image}
                  onClick={() => navigate("/blog-insight")}
                />
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          <Stack spacing={2} sx={{ mt: 6, alignItems: "center" }}>
            <Pagination
              count={10}
              color="primary"
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontWeight: 600,
                  color: "#64748b",
                },
                "& .Mui-selected": {
                  bgcolor: colors.primary,
                  color: "white",
                  "&:hover": {
                    bgcolor: colors.primary, // Maintain color on hover
                  },
                },
              }}
            />
          </Stack>
        </Box>

        {/* Related Blogs Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="title"
            sx={{ color: colors.primary, mt: 4, mb: 2 }}
          >
            Related Blogs
          </Typography>
          <RelatedBlogs posts={relatedPosts} />
        </Box>

        {/* Subscribe Section */}
        <SubscribeSection />
      </Container>
    </Box>
  );
};

export default Blog;
