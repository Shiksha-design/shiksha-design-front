import React from 'react';
import { Box, Container, Grid, Typography, Avatar, AvatarGroup } from '@mui/material';
import { LoginOutlined, FileUploadOutlined, LocalOfferOutlined } from '@mui/icons-material';
import workImage from '../../assets/workImage.svg';
import HighlightText from '../HighlightText';
import SectionTitle from '../Common/SectionTitle';

const steps = [
    {
        number: "01",
        title: "Sign Up & Enroll in a Course",
        desc: "Chose one or as many courses as you like",
        icon: <LoginOutlined style={{ color: '#5A6B7C' }} />
    },
    {
        number: "02",
        title: "Test Your Knowledge",
        desc: "Learn at your pace & test it when ready",
        icon: <FileUploadOutlined style={{ color: '#FFA500' }} />
    },
    {
        number: "03",
        title: "Get Placed",
        desc: "Enter our placement pool and get hired",
        icon: <LocalOfferOutlined style={{ color: '#9C27B0' }} />
    }
];

const HowItWorksSection = () => {
    return (
        <Box sx={{ py: 6, bgcolor: '#F0F7FF', overflow: 'hidden' }}>
            <Container maxWidth="lg">


                <Grid container alignItems="center" gap={2}>
                    {/* Left Side: Steps */}
                    <Grid item xs={12} sm={5.8}>
                        <Box sx={{ textAlign: 'center', mb: 6 }}>
                            <SectionTitle>
                                How It <HighlightText>Works</HighlightText>
                            </SectionTitle>
                        </Box>
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0; // 0, 2 -> Left aligned number
                            return (
                                <Box key={index} sx={{ position: 'relative', mb: 2, gap: 2, display: 'flex', alignItems: 'center', justifyContent: isEven ? 'flex-start' : 'flex-end', flexDirection: isEven ? 'row' : 'row-reverse' }}>
                                    {/* Large Number Background */}
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            color: '#E6EBF2',
                                            fontWeight: 700,
                                            zIndex: 0,
                                            fontSize: { xs: '3rem', md: '4rem' },
                                            userSelect: 'none'
                                        }}
                                    >
                                        {step.number}
                                    </Typography>

                                    {/* Card */}
                                    <Box
                                        sx={{
                                            bgcolor: '#fff',
                                            borderRadius: 4,
                                            p: 1.5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                            width: '100%',
                                            maxWidth: '90%', // Ensure space for the number
                                            zIndex: 1,
                                            boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
                                        }}
                                    >
                                        {/* Icon Box */}
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                bgcolor: '#F5F7FA',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexShrink: 0
                                            }}
                                        >
                                            {step.icon}
                                        </Box>

                                        <Box>
                                            <Typography variant="body1" fontWeight={600} color="#26394D">
                                                {step.title}
                                            </Typography>
                                            <Typography variant="caption" color="#5A6B7C">
                                                {step.desc}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Grid>

                    {/* Right Side: Image */}
                    <Grid item xs={12} sm={5.8} sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src={workImage}
                            alt="Working Professional"
                            sx={{
                                width: '100%',
                                maxWidth: 450,
                                height: 'auto',
                                borderRadius: 4,
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HowItWorksSection;
