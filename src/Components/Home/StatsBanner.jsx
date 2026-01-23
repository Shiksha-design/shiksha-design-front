import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import learning from '../../assets/learning.svg';
import hike from '../../assets/hike.png';
import assistent from '../../assets/assistent.png';

const StatBox = ({ image, title }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Box>
            <img src={image} alt={title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
        </Box>
        <Typography variant="body2" fontWeight="400" sx={{ maxWidth: 250 }}>
            {title}
        </Typography>
    </Box>
);

const StatsBanner = () => {
    return (
        <Box sx={{ background: 'linear-gradient(72.2deg, rgba(0, 113, 229, 0.9) 26.49%, rgba(9, 82, 156, 0.9) 85.53%)', py: 6, color: 'white', }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} justifyContent="center" textAlign="center">
                    <Grid item xs={12} md={4}>
                        <StatBox
                            image={learning}
                            title="WORLD CLASS LEARNING EXPERIENCE"
                        />
                    </Grid>

                    {/* Divider Line */}
                    <Grid item xs={12} md={4} sx={{ borderLeft: { md: '1px dashed #60a5fa' }, borderRight: { md: '1px dashed #60a5fa' } }}>
                        <StatBox
                            image={hike}
                            title="55% AVERAGE SALARY HIKE"
                        />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <StatBox
                            image={assistent}
                            title="100% PLACEMENT ASSISTANCE"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default StatsBanner;
