import React from 'react';
import { Box, Container, Grid, Typography, Chip, Stack, Paper, Divider, Button } from '@mui/material';
import { AccessTimeFilled, Person, BarChart, MenuBook } from '@mui/icons-material';
import { colors } from '../../Config/theme';
import SectionTitle from '../Common/SectionTitle';

const HeroSection = () => {
    return (
        <Box sx={{ bgcolor: colors.primary, py: 4, color: 'white', position: 'relative' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={7} md={8}>
                        {/* Badge */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Chip
                                icon={<MenuBook sx={{ fontSize: '1rem !important', color: 'inherit !important' }} />}
                                label="Development"
                                sx={{ bgcolor: 'white', color: '#334155', fontWeight: 600, borderRadius: 2 }}
                            />
                            <Typography sx={{ ml: 2, opacity: 0.9, fontSize: "14px", color: "inherit" }}>
                                by Determined-Poitras
                            </Typography>
                        </Box>

                        {/* Title */}
                        <Typography variant="pageTitle" sx={{ mb: 3, color: "inherit" }}>
                            The Ultimate Guide to the best WordPress LMS Plugin
                        </Typography>

                        {/* Stats */}
                        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Grid item xs={6} sm={12}>
                                <Stack direction="row" sx={{ opacity: 0.9, flexWrap: 'wrap', gap: 1 }}>
                                    {[
                                        { icon: AccessTimeFilled, label: "2 Weeks" },
                                        { icon: Person, label: "156 Students" },
                                        { icon: BarChart, label: "All levels" },
                                        { icon: MenuBook, label: "20 Lessons" }
                                    ].map((stat, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <stat.icon fontSize="16px" sx={{ color: colors.secondary }} />
                                            <Typography color={"inherit"} sx={{ fontSize: "14px" }}>{stat.label}</Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Grid>
                            <Grid item xs={6} sx={{ display: { xs: 'block', sm: 'none' } }}>
                                <Paper sx={{ p: 2, borderRadius: 2, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                                        <Typography variant="body2" color="text.secondary" gutterBottom>Total Admission Fee</Typography>
                                        <Typography variant="h5" fontWeight={700} color="#1e293b">₹100,000</Typography>
                                    </Box>

                                    <Button variant="contained" fullWidth size="large" sx={{ bgcolor: '#ff5722', '&:hover': { bgcolor: '#f4511e' }, mb: 2, borderRadius: 2, textTransform: 'none', fontSize: '1.1rem' }}>
                                        Start Now
                                    </Button>
                                </Paper>
                            </Grid>

                        </Grid>

                    </Grid>
                    <Grid item sm={5} md={4} sx={{ position: 'relative', display: { xs: 'none', sm: 'block' } }}>
                        <Paper sx={{ position: { md: 'absolute' }, bottom: { md: -40 }, right: { md: 0 }, p: 2, borderRadius: 2, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>Total Admission Fee</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: { xs: 2, md: 3 } }}>
                                <Typography variant="h5" fontWeight={700} color="#1e293b">₹100,000</Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6rem', fontWeight: 600, display: { sm: 'none', md: 'block' } }}>(inclusive of all charges)</Typography>
                            </Box>

                            <Button variant="contained" fullWidth size="large" sx={{ bgcolor: '#ff5722', '&:hover': { bgcolor: '#f4511e' }, mb: 2, borderRadius: 2, textTransform: 'none', fontSize: '1.1rem' }}>
                                Start Now
                            </Button>

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="body2" color="text.secondary">Upcoming Application Deadline</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                                <Typography variant="h6" fontWeight={700} color="#dc2626">4th Oct 2025</Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ display: { sm: 'none', md: 'block' } }}>*EMI options available</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
