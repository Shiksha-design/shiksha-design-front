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
        icon: <LoginOutlined style={{ color: '#5A6B7C', transform: 'rotate(180deg)' }} />
    },
    {
        number: "02",
        title: "Test Your Knowledge",
        desc: "Learn at your pace & test it when ready",
        icon: <FileUploadOutlined style={{ color: '#FFA500', }} />
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
        <Box sx={{ pt: { xs: 6, md: 8 }, bgcolor: '#F0F7FF', overflow: 'hidden' }}>
            <Container maxWidth="lg">
                <Grid container alignItems="center" spacing={6}>
                    {/* Left Side: Steps */}
                    <Grid item xs={12} sm={7}>
                        <SectionTitle sx={{ textAlign: 'center', pb: { xs: 1, md: 2 }, }}>
                            How It <HighlightText>Works</HighlightText>
                        </SectionTitle>
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0; // 0, 2 -> Left aligned number
                            return (
                                <Box key={index} sx={{ position: 'relative', mb: 3, gap: 2, display: 'flex', alignItems: 'center', justifyContent: isEven ? 'flex-start' : 'flex-end', flexDirection: isEven ? 'row' : 'row-reverse' }}>
                                    {/* Large Number Background */}
                                    <Typography
                                        sx={{
                                            color: '#26394D',
                                            fontWeight: 700,
                                            fontStyle: "bold",
                                            zIndex: 0,
                                            fontSize: '48px !important',
                                            userSelect: 'none',
                                            opacity: 0.1,
                                        }}
                                    >
                                        {step.number}
                                    </Typography>

                                    {/* Card */}
                                    <Box
                                        sx={{
                                            bgcolor: '#fff',
                                            borderRadius: "20px",
                                            p: { xs: 1, md: 2 },
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: { xs: 0.5, md: 1 },
                                            width: '100%',
                                            maxWidth: { xs: "82%", md: '80%' },
                                            zIndex: 1,
                                            boxShadow: '10px 25px 100px 0px #0B707740',
                                        }}
                                    >
                                        {/* Icon Box */}
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                backgroundColor: step?.number === "01" ? '#E1E9FE' : step?.number === "02" ? '#FFEED2' : '#F6E2FF',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexShrink: 0
                                            }}
                                        >
                                            {step.icon}
                                        </Box>

                                        <Box>
                                            <Typography sx={{ fontSize: { xs: "16px", md: "20px", }, color: "#26394D", fontFamily: "'Open Sans', sans-serif !important", }}>
                                                {step.title}
                                            </Typography>
                                            <Typography sx={{ fontSize: { xs: "12px", md: "14px", }, color: "#26394D", fontFamily: "'Open Sans', sans-serif !important", }}>
                                                {step.desc}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Grid>

                    {/* Right Side: Image */}
                    <Grid item xs={12} sm={5} >
                        <Box
                            component="img"
                            src={workImage}
                            alt="Working Professional"
                            sx={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default HowItWorksSection;
