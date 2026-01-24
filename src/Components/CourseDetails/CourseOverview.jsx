import React from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../Config/theme';

const CourseOverview = () => {
    return (
        <Box sx={{ mb: 6 }}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 3, color: colors.primary }}>
                Overview
            </Typography>
            <Typography color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                Thank you for buying our courses. We ensure that our users have a rewarding experience while they discover, assess, and purchase our courses, whether it is an instructor-led or self-paced training. As with any online purchase experience, there are terms and conditions that govern our Refund Policy.
            </Typography>
            <Typography color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
        </Box>
    );
};

export default CourseOverview;
