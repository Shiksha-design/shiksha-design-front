import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Or a similar icon
import HighlightText from '../HighlightText';
import { colors } from '../../Config/theme';
import learner from "../../assets/learner.svg"

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
        <Box sx={{ py: 3, bgcolor: '#F0F8FF' }}> {/* Light blue background similar to design */}
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    {/* Left Side: Content */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" fontWeight="700" sx={{ color: '#2A394E', mb: 3, lineHeight: 1.1 }}>
                            Creating A <br />
                            Community Of <br />
                            <HighlightText>Life Long </HighlightText> Learners
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#26394D', mb: 5, lineHeight: 1.6 }}>
                            We believe learning never stops. By fostering curiosity, collaboration, and growth, we bring together passionate minds to exchange knowledge, share experiences, and inspire each other on the journey of lifelong learning.
                        </Typography>

                        <Grid container spacing={2}>
                            {features.map((feature, index) => (
                                <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex' }}>
                                    <Box
                                        sx={{
                                            flexGrow: 1,
                                            p: 2,
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
                    <Grid item xs={12} md={6}>

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
