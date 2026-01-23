import React, { useState } from "react";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { colors } from "../../../Config/theme";
import CategorySidebar from "./CategorySidebar";
import CourseCard from "./CourseCard";
import univercityLogo from "../../../assets/univercityLogo.png";
import HighlightText from "../../HighlightText";

// Mock Data
const categories = [
    "UI & UX Design",
    "Generative AI",
    "Product and Design",
    "Service Design",
    "Full Stack Developer",
    "Data & Business Analytics",
    "AI Design Tools",
    "Graphic Design",
    "Web Design",
    "Web Development",
    "Video Editing",
    "Motion Graphics",
    "Interaction Design",
];

const mockCourses = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3",
        title: "Professional Certificate Course in Generative AI and Machine Learning",
        universityLogo: univercityLogo,
        startDate: "10th Dec, 25",
        duration: "6 Months",
        bestseller: true,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1365&ixlib=rb-4.0.3",
        title: "Professional Certificate Course in Generative AI and Machine Learning",
        universityLogo: univercityLogo,
        startDate: "10th Dec, 25",
        duration: "6 Months",
        bestseller: false,
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3",
        title: "Professional Certificate Course in Generative AI and Machine Learning",
        universityLogo: univercityLogo,
        startDate: "10th Dec, 25",
        duration: "6 Months",
        bestseller: false,
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3",
        title: "Professional Certificate Course in Generative AI and Machine Learning",
        universityLogo: univercityLogo,
        startDate: "10th Dec, 25",
        duration: "6 Months",
        bestseller: false,
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1365&ixlib=rb-4.0.3",
        title: "Professional Certificate Course in Generative AI and Machine Learning",
        universityLogo: univercityLogo,
        startDate: "10th Dec, 25",
        duration: "6 Months",
        bestseller: false,
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1365&ixlib=rb-4.0.3",
        title: "Professional Certificate Course in Generative AI and Machine Learning",
        universityLogo: univercityLogo,
        startDate: "10th Dec, 25",
        duration: "6 Months",
        bestseller: false,
    },
];



const ProgramsSection = () => {
    const [activeCategory, setActiveCategory] = useState("Generative AI");
    const [sidebarHeight, setSidebarHeight] = useState('auto');

    return (
        <Box sx={{ py: 3, bgcolor: colors.programsBg || "#F0F8FF" }}>
            <Container maxWidth="lg">
                <Typography variant="h2" fontWeight="700" sx={{ color: '#26394D', mb: 6, lineHeight: 1, textAlign: 'center' }}>

                    Explore Our <HighlightText>Programs</HighlightText>
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={3}>
                        <CategorySidebar
                            categories={categories}
                            activeCategory={activeCategory}
                            onSelectCategory={setActiveCategory}
                            onHeightChange={setSidebarHeight}
                        />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Box sx={{
                            maxHeight: sidebarHeight,
                            overflowY: "auto",
                            "&::-webkit-scrollbar": {
                                width: "6px",
                            },
                            "&::-webkit-scrollbar-track": {
                                background: "#f1f1f1",
                                borderRadius: "4px",
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#c1c1c1",
                                borderRadius: "4px",
                            },
                            "&::-webkit-scrollbar-thumb:hover": {
                                background: "#a8a8a8",
                            },
                        }}>
                            <Grid container spacing={3} sx={{ py: 1 }}>
                                {mockCourses.map((course) => (
                                    <Grid item xs={12} sm={6} lg={4} key={course.id}>
                                        <CourseCard course={course} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ProgramsSection;
