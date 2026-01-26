import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../Config/theme';

const CourseOverview = () => {
    return (
        <Box sx={{ mb: 4 }}>
            <Typography variant="title" sx={{ mb: 2, color: colors.primary }}>
                Overview
            </Typography>
            <Typography paragraph sx={{ lineHeight: "24px", fontSize: "16px", fontWeight: 400, color: "#000000" }}>
                Thank you for buying our courses. We ensure that our users have a rewarding experience while they discover, assess, and purchase our courses, whether it is an instructor-led or self-paced training. As with any online purchase experience, there are terms and conditions that govern our Refund Policy.
            </Typography>
        </Box>
    );
};

export default CourseOverview;
