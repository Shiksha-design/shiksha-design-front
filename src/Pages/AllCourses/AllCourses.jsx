import React, { useState } from "react";
import { Box, Container, Typography, Pagination, Stack } from "@mui/material";
import { colors } from "../../Config/theme";
import CourseListCard from "../../Components/AllCourses/CourseListCard";

// Mock Data (Expanded for pagination demo)
const allCoursesData = Array.from({ length: 8 }).map((_, index) => ({
    id: index + 1,
    title: "Create an LMS Website with WordPress",
    category: "Development",
    author: "Determined-Poitras",
    duration: "2 Weeks",
    students: "156 Students",
    level: "All levels",
    lessons: "20 Lessons",
    originalPrice: "$29.0",
    price: 0,
    image: null, // Using placeholder logic
}));

const AllCourses = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;
    const count = Math.ceil(allCoursesData.length / itemsPerPage);

    // Pagination logic can be added here if needed for client-side
    // For now simple display

    return (
        <Box sx={{ pt: 10, pb: 6, bgcolor: colors.mainBg, minHeight: '100vh' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="pageTitle" sx={{ mb: 2 }}>
                        All Courses
                    </Typography>
                </Box>

                <Box sx={{ mb: 6, display: "flex", flexDirection: "column", gap: 2 }}>
                    {allCoursesData.map((course) => (
                        <CourseListCard key={course.id} course={course} />
                    ))}
                </Box>

                <Stack alignItems="center">
                    <Pagination
                        count={10}
                        color="primary"
                        page={page}
                        onChange={(e, v) => setPage(v)}
                        shape="rounded"
                    />
                </Stack>
            </Container>
        </Box>
    );
};

export default AllCourses;
