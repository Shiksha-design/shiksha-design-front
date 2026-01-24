import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import { colors } from '../../Config/theme';
import courseImage from '../../assets/courseImage.svg'
import CourseOverview from './CourseOverview';
import CourseCurriculum from './CourseCurriculum';
import CourseInstructor from './CourseInstructor';
import CourseFAQ from './CourseFAQ';
import CourseReviews from './CourseReviews';

const tabs = ['Overview', 'Curriculum', 'Instructor', 'FAQs', 'Reviews'];

const CourseContent = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <>
            {/* Tabs Nav */}
            <Grid container spacing={4}>

                <Grid item xs={12} md={8}>
                    <Box sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={activeTab} onChange={(event, newValue) => setActiveTab(newValue)}>
                            {tabs.map((tab) => (
                                <Tab
                                    key={tab}
                                    label={tab}
                                    sx={{
                                        cursor: 'pointer',
                                        pb: 1,
                                        borderBottom: activeTab === tab ? `2px solid ${colors.primary}` : 'none',
                                        color: activeTab === tab ? colors.primary : '#64748b'
                                    }}
                                />
                            ))}
                        </Tabs>
                    </Box>
                </Grid>
            </Grid>

            {/* Content Sections */}
            <Grid container spacing={4}>

                <Grid item xs={12} md={8}>
                    {/* OVERVIEW SECTION */}
                    <Box id="Overview">
                        <CourseOverview />
                    </Box>

                    {/* CURRICULUM SECTION */}
                    <Box id="Curriculum">
                        <CourseCurriculum />
                    </Box>

                    <Box id="Instructor">
                        <CourseInstructor />
                    </Box>

                    <Box id="FAQs">
                        <CourseFAQ />
                    </Box>

                    <Box id="Reviews">
                        <CourseReviews />
                    </Box>


                </Grid>
                <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Image Card */}
                    <Box sx={{ height: 532, }}>
                        <img src={courseImage} alt="" />
                    </Box>

                    {/* Form Card */}
                    <Paper sx={{ mt: 4, p: 3, borderRadius: 3 }}>
                        <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>Admissions Close On 7th Oct</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            Still not sure? Talk with our advisor and get your doubts sorted.
                        </Typography>

                        <Stack spacing={2}>
                            <TextField fullWidth size="small" placeholder="Full Name" />
                            <TextField fullWidth size="small" placeholder="Email" />
                            <TextField fullWidth size="small" placeholder="Mobile Number" />
                            <FormControlLabel
                                control={<Checkbox size="small" />}
                                label={<Typography variant="caption" color="text.secondary">By providing contact details, you agree to our Terms.</Typography>}
                            />
                            <Button variant="contained" fullWidth sx={{ textTransform: 'none' }}>Talk to our advisor</Button>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default CourseContent;
