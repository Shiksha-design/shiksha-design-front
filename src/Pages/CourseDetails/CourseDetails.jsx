import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { colors } from '../../Config/theme';
import HeroSection from '../../Components/CourseDetails/HeroSection';
import CourseSidebar from '../../Components/CourseDetails/CourseSidebar';
import CourseContent from '../../Components/CourseDetails/CourseContent';

const CourseDetails = () => {
    return (
        <Box sx={{ bgcolor: colors.mainBg, minHeight: '100vh', py: 6 }}>

            <HeroSection />

            {/* MAIN CONTENT + SIDEBAR STARTING HIGH */}
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>

                {/* LEFT COLUMN */}
                <CourseContent />

            </Container>
        </Box >
    );
};

export default CourseDetails;
