import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, CircularProgress } from "@mui/material";
import { colors } from "../../Config/theme";
import HeroSection from "../../Components/CourseDetails/HeroSection";
import CourseContent from "../../Components/CourseDetails/CourseContent";
import programService from "../../Services/programService";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const response = await programService.getById(id);
        if (response?.statusCode === 200) {
          setCourse(response.data);
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!course) {
    return (
      <Box sx={{ py: 10, textAlign: "center" }}>
        <h3>Course not found</h3>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: colors.mainBg, minHeight: "100vh", pb: 6 }}>
      <HeroSection course={course} />

      {/* MAIN CONTENT + SIDEBAR STARTING HIGH */}
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* LEFT COLUMN */}
        <CourseContent course={course} />
      </Container>
    </Box>
  );
};

export default CourseDetails;
