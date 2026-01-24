import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import learning from '../../assets/learning.svg';
import hike from '../../assets/hike.png';
import assistent from '../../assets/assistent.png';

const StatBox = ({ image, title, sx }) => (
    <Box sx={{
        display: 'flex',
        flexDirection: { xs: "row", sm: 'column' },
        alignItems: 'center',
        gap: 2,
        height: '100%',
        ...sx
    }}>
        <Box>
            <img src={image} alt={title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
        </Box>
        <Typography variant="body2" fontWeight="400" sx={{ maxWidth: { xs: "100%", sm: 250 } }}>
            {title}
        </Typography>
    </Box>
);

const StatsBanner = () => {
    return (
        <Box sx={{ background: 'linear-gradient(72.2deg, rgba(0, 113, 229, 0.9) 26.49%, rgba(9, 82, 156, 0.9) 85.53%)', py: 6, color: 'white', }}>
            <Container maxWidth="xl">
                <Grid container spacing={2} sx={{ maxWidth: { xs: "90%", sm: "100%" }, marginLeft: "auto", marginRight: "auto" }} justifyContent="center" textAlign="center">
                    <Grid item xs={11} sm={4}>
                        <StatBox
                            image={learning}
                            title="WORLD CLASS LEARNING EXPERIENCE"
                        />
                    </Grid>

                    {/* Divider Line */}
                    <Grid item xs={11} sm={4}>
                        <StatBox
                            image={hike}
                            title="55% AVERAGE SALARY HIKE"
                            sx={{
                                borderLeft: { sm: '1px dashed #60a5fa' },
                                borderRight: { sm: '1px dashed #60a5fa' },
                                borderTop: { xs: '1px dashed #60a5fa', sm: 'none' },
                                borderBottom: { xs: '1px dashed #60a5fa', sm: 'none' }
                            }}
                        />
                    </Grid>

                    <Grid item xs={11} sm={4}>
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
