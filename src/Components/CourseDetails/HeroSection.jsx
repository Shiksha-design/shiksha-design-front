import React from 'react';
import { Box, Container, Grid, Typography, Chip, Stack, Paper, Divider, Button } from '@mui/material';
import { AccessTimeFilled, Person, BarChart, MenuBook } from '@mui/icons-material';
import { colors } from '../../Config/theme';
import SectionTitle from '../Common/SectionTitle';

const HeroSection = () => {
    return (
        <Box sx={{ bgcolor: colors.primary, py: 6, color: 'white', position: 'relative' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        {/* Badge */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Chip
                                icon={<MenuBook sx={{ fontSize: '1rem !important', color: 'inherit !important' }} />}
                                label="Development"
                                sx={{ bgcolor: 'white', color: '#334155', fontWeight: 600, borderRadius: 2 }}
                            />
                            <Typography variant="body2" component="span" sx={{ ml: 2, opacity: 0.9 }}>
                                by Determined-Poitras
                            </Typography>
                        </Box>

                        {/* Title */}
                        <Typography variant="h3" fontWeight={700} sx={{ mb: 3, lineHeight: 1.2 }}>
                            The Ultimate Guide to the best WordPress LMS Plugin
                        </Typography>

                        {/* Stats */}
                        <Stack direction="row" spacing={4} sx={{ opacity: 0.9, flexWrap: 'wrap', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <AccessTimeFilled fontSize="small" />
                                <Typography variant="body2">2 Weeks</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Person fontSize="small" />
                                <Typography variant="body2">156 Students</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <BarChart fontSize="small" />
                                <Typography variant="body2">All levels</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <MenuBook fontSize="small" />
                                <Typography variant="body2">20 Lessons</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper sx={{ marginBottom: "-70px", p: 2, borderRadius: 2, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>Total Admission Fee</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 3 }}>
                                <Typography variant="h5" fontWeight={700} color="#1e293b">$100,000.00</Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.6rem', fontWeight: 600 }}>(inclusive of all charges)</Typography>
                            </Box>

                            <Button variant="contained" fullWidth size="large" sx={{ bgcolor: '#ff5722', '&:hover': { bgcolor: '#f4511e' }, mb: 2, borderRadius: 2, textTransform: 'none', fontSize: '1.1rem' }}>
                                Start Now
                            </Button>

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="body2" color="text.secondary">Upcoming Application Deadline</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
                                <Typography variant="h6" fontWeight={700} color="#dc2626">4th Oct 2025</Typography>
                                <Typography variant="caption" color="text.secondary">*EMI options available</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeroSection;
