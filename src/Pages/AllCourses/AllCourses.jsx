import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Pagination,
  Stack,
  CircularProgress,
  Grid,
} from "@mui/material";
import { colors } from "../../Config/theme";
import CourseListCard from "../../Components/AllCourses/CourseListCard";
import programService from "../../Services/programService";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await programService.getAll();
        if (Array.isArray(response)) {
          setCourses(response);
        } else if (response?.data) {
          setCourses(response.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const processCourse = (course) => ({
    ...course,
    id: course._id || course.id,
    title: course.name || course.title,
    category: course.categoryId?.name || course.category,
    image: course.images?.[0]?.url || course.image,
    duration: `${course.duration} Months`,
    price: course.price || 0,
    originalPrice: course.originalPrice || "₹40,000",
    students: "Batches Open",
    lessons: "Comprehensive",
    level: "All levels",
  });

  const paginatedCourses = courses.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );
  const count = Math.ceil(courses.length / itemsPerPage);

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

  return (
    <Box sx={{ pt: 10, pb: 6, bgcolor: colors.mainBg, minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <Typography variant="pageTitle">All Programs</Typography>
        </Box>

        <Box sx={{ mb: 6, display: "flex", flexDirection: "column", gap: 3 }}>
          {paginatedCourses.length > 0 ? (
            paginatedCourses.map((course) => (
              <CourseListCard
                key={course._id || course.id}
                course={processCourse(course)}
              />
            ))
          ) : (
            <Typography variant="h6" textAlign="center" color="text.secondary">
              No programs found.
            </Typography>
          )}
        </Box>

        {count > 1 && (
          <Stack alignItems="center">
            <Pagination
              count={count}
              color="primary"
              page={page}
              onChange={(e, v) => setPage(v)}
              shape="rounded"
            />
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default AllCourses;
