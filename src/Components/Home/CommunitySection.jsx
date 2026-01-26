import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightText from '../HighlightText';
import learner from "../../assets/learner.svg"
import SectionTitle from "../Common/SectionTitle";

const features = [
    {
        title: "World-Class Instructors",
        description: "Learn from the best in the industry with years of real-world experience."
    },
    {
        title: "1:1 with Industry Mentors",
        description: "Get personalized guidance and feedback from expert mentors."
    },
    {
        title: "Hands-On Projects",
        description: "Apply your knowledge with real-time projects and build a portfolio."
    },
    {
        title: "Career Assistance",
        description: "Resume building, mock interviews, and job placement support."
    }
];

const CommunitySection = () => {
    return (
        <Box sx={{ py: 3 }}> {/* Light blue background similar to design */}
            <Container maxWidth="lg">
                <Box sx={{ display: { xs: "flex", md: "none" }, textAlign: "center" }}>

                    <SectionTitle sx={{ pb: 1, }}>
                        Creating A
                        Community Of
                        <HighlightText>Life Long </HighlightText> Learners
                    </SectionTitle>
                </Box>
                <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
                    {/* Left Side: Content */}
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ display: { xs: "none", md: "flex", }, }}>

                            <SectionTitle sx={{ mb: 3, textAlign: "left" }}>
                                Creating A <br />
                                Community Of <br />
                                <HighlightText>Life Long </HighlightText> Learners
                            </SectionTitle>
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "flex", md: "none" }, // visible only on mobile
                                alignItems: "center",
                                gap: 2,
                                mb: 2
                            }}
                        >
                            {/* Left 50% - Text */}
                            <Box sx={{ flexBasis: { xs: "50%", sm: "100%", } }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#26394D",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    We believe learning never stops. By fostering curiosity, collaboration,
                                    and growth, we bring together passionate minds to exchange knowledge,
                                    share experiences, and inspire each other on the journey of lifelong
                                    learning.
                                </Typography>
                            </Box>

                            {/* Right 50% - Image */}
                            <Box sx={{ flexBasis: "50%", display: { xs: "flex", sm: "none" }, justifyContent: "center" }}>
                                <Box
                                    component="img"
                                    src={learner}
                                    alt="Community of learners"
                                    sx={{
                                        width: "100%",
                                        maxWidth: 250,
                                    }}
                                />
                            </Box>
                        </Box>


                        <Grid container spacing={1}>
                            {features.map((feature, index) => (
                                <Grid item xs={12} md={6} key={index} sx={{ display: 'flex' }}>
                                    <Box
                                        sx={{
                                            flexGrow: 1,
                                            p: { xs: 1, md: 2 },
                                            borderRadius: 2,
                                            bgcolor: '#FFFFFF',
                                            border: '1px solid #E0E0E0',
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                            <CheckCircleIcon
                                                sx={{ color: '#2A394E', mr: 1, fontSize: 18 }}
                                            />
                                            <Typography
                                                variant="h7"
                                                fontWeight={600}
                                                sx={{ color: '#2A394E', fontSize: '1rem' }}
                                            >
                                                {feature.title}
                                            </Typography>
                                        </Box>

                                        <Typography
                                            variant="body2"
                                            sx={{ color: '#5A6B7C', }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>

                    {/* Right Side: Image */}
                    <Grid item sx={{ display: { xs: "none", sm: "flex" } }} sm={6}>

                        <Box
                            component="img"
                            src={learner} // Corrected filename found in assets
                            alt="Community of learners"
                            sx={{
                                width: '100%',
                                maxWidth: '500px',
                            }}

                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CommunitySection;
