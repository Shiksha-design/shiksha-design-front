import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube, X } from "@mui/icons-material";
import { colors } from "../../Config/theme";
import RelatedBlogs from "../../Components/Blog/RelatedBlogs";
import CourseCard from "../../Components/Home/Programs/CourseCard";
import univercityLogo from "../../assets/univercityLogo.png";
import placeholderImage from "../../assets/placeholderImage.png";
import pie from "../../assets/pie.png";

// Mock Data
const blogData = {
  title: "Career Transition to Salesforce Developer – 100% Salary Hike",
  image: placeholderImage,
  content: [
    "Thank you for buying our courses. We ensure that our users have a rewarding experience while they discover, assess, and purchase our courses, whether it is an instructor-led or self-paced training. As with any online purchase experience, there are terms and conditions that govern our Refund Policy. When you buy a training course from us, you agree to our Privacy Policy, Terms of Use and Refund Policy.",
    "Thank you for buying our courses. We ensure that our users have a rewarding experience while they discover, assess, and purchase our courses, whether it is an instructor-led or self-paced training. As with any online purchase experience, there are terms and conditions that govern our Refund Policy. When you buy a training course from us, you agree to our Privacy Policy, Terms of Use and Refund Policy.",
    "Thank you for buying our courses. We ensure that our users have a rewarding experience while they discover, assess, and purchase our courses, whether it is an instructor-led or self-paced training. As with any online purchase experience, there are terms and conditions that govern our Refund Policy. When you buy a training course from us, you agree to our Privacy Policy, Terms of Use and Refund Policy.",
  ],
  author: {
    name: "Name of author",
    designation: "(Designation)",
    bio: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
  },
};

const relatedCourses = [
  {
    image: placeholderImage,
    title:
      "Professional Certificate Course in Generative AI and Machine Learning",
    universityLogo: univercityLogo,
    startDate: "10th Dec, 25",
    duration: "6 Months",
    bestseller: true,
  },
  {
    image: placeholderImage,
    title:
      "Professional Certificate Course in Generative AI and Machine Learning",
    universityLogo: univercityLogo,
    startDate: "10th Dec, 25",
    duration: "6 Months",
    bestseller: false,
  },
];

const relatedPosts = Array(6).fill({
  tag: "Career Advice",
  title: "Career Transition to Salesforce Developer – 100% Salary Hike",
  desc: "AWS provides services for every domain such as computing, data storage, data analytics, robotics, and",
  author: "John Doe",
  date: "12/10/25",
  image: placeholderImage,
});

const BlogInsight = () => {
  return (
    <Box sx={{ bgcolor: colors.mainBg, minHeight: "100vh", pt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Main Content - Left Side */}
          <Grid item xs={12} sm={7} md={8}>
            {/* Title */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: colors.textDark,
                mb: 4,
                fontSize: { xs: "24px", md: "32px" },
              }}
            >
              {blogData.title}
            </Typography>

            {/* Hero Image */}
            <Box
              component="img"
              src={blogData.image}
              alt="Blog Hero"
              sx={{
                width: "100%",
                height: "auto",
                mb: 4,
                objectFit: "cover",
                maxHeight: "400px",
              }}
            />

            {/* Rich Text Content */}
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 500,
                color: "#5f6c7b",
                mb: 2,
              }}
            >
              Use Rich Text when developing cms for blog
            </Typography>

            {blogData.content.map((paragraph, index) => (
              <Typography
                key={index}
                sx={{
                  color: "#64748b",
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
              >
                {paragraph}
              </Typography>
            ))}

            <Typography
              variant="h6"
              sx={{ color: "#26394D", mt: 2, mb: 1, fontWeight: 600 }}
            >
              For Self Placed Learning:
            </Typography>
            <Typography
              sx={{
                color: "#64748b",
                mb: 3,
                lineHeight: 1.8,
                fontSize: "15px",
              }}
            >
              To qualify for a refund, you must:
              <br />• submit your refund request within 7 days of purchasing a
              course
              <br />• have consumed less than 25% of the video-learning content
              <br />• and not requested any exam voucher or kit.
              <br />
              Any refund request failing to meet any of the requirements will
              not be accepted and no refund will be provided.
            </Typography>

            <Typography
              variant="h6"
              sx={{ color: "#26394D", mt: 2, mb: 1, fontWeight: 600 }}
            >
              For Instructor Led Training:
            </Typography>
            <Typography
              sx={{
                color: "#64748b",
                mb: 3,
                lineHeight: 1.8,
                fontSize: "15px",
              }}
            >
              To qualify for a refund, you must:
              <br />• submit your refund request within 7 days of purchasing
              your course
              <br />• have consumed less than 25% of the video-learning content
              <br />• have not attended more than one (1) live online class
              <br />• and not requested any exam voucher or kit
              <br />
              Any refund request failing to meet all of these requirements will
              not be accepted and no refund will be provided.
            </Typography>
          </Grid>

          {/* Sidebar - Right Side */}
          <Grid item xs={12} sm={5} md={4}>
            <Box>
              <Typography
                variant="title"
                sx={{ mb: 2, color: colors.primary, fontSize: "24px" }}
              >
                Related Courses
              </Typography>
              <Stack spacing={3}>
                {relatedCourses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
        {/* Author Section */}
        <Box sx={{ mt: 6, mb: 4 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              bgcolor: "transparent", // Light background from image
              border: "1px solid #0000001F",
              gap: 3,
            }}
          >
            <Typography
              variant="title"
              sx={{
                color: "#26394D",
                mb: 3,
                fontWeight: 700,
                fontSize: "24px",
              }}
            >
              Author
            </Typography>
            {/* Author Image/Logo Placeholder */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "#D30000", // Red background as in image
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  flexShrink: 0,
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                <img src={pie} alt="Author" />
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#26394D", fontWeight: 700, mb: 0.5 }}
                >
                  {blogData.author.name}{" "}
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{ fontWeight: 400, color: "#64748b" }}
                  >
                    {blogData.author.designation}
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    color: "#64748b",
                    mb: 2,
                    lineHeight: 1.6,
                    fontSize: "14px",
                  }}
                >
                  {blogData.author.bio}
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography
                    sx={{ fontSize: "14px", color: "#64748b", mr: 1 }}
                  >
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
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Related Blogs Section */}
        <Box sx={{ mt: 8, mb: 8 }}>
          <Typography
            variant="title"
            sx={{ color: colors.primary, mt: 4, mb: 2, fontSize: "24px" }}
          >
            Related Blogs
          </Typography>
          <RelatedBlogs posts={relatedPosts} />
        </Box>
      </Container>
    </Box>
  );
};

export default BlogInsight;
