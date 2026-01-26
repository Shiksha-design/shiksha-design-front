import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import learning from '../../assets/learning.svg';
import hike from '../../assets/hike.png';
import assistent from '../../assets/assistent.png';
import statsBannerSide from '../../assets/statsBannerSide.png';

const StatBox = ({ image, title, sx }) => (
    <Box sx={{
        display: 'flex',
        flexDirection: { xs: "row", sm: 'column' },
        alignItems: 'center',
        gap: { xs: 1, sm: 2 },
        height: '100%',
        maxWidth: { xs: 270, sm: "100%", },
        ...sx
    }}>
        <Box>
            <Box component="img" src={image} alt={title} sx={{ width: { xs: "50px", sm: "60px", md: '100px' }, height: { xs: "35px", sm: "50px", md: '100px' }, objectFit: 'contain' }} />
        </Box>
        <Typography variant="body2" fontWeight="400" sx={{ maxWidth: { xs: "100%", sm: 185, md: 250 }, fontSize: { xs: "10px", sm: "12px", md: '20px' }, color: "inherit" }}>
            {title}
        </Typography>
    </Box>
);

const StatsBanner = () => {
    return (
        <Box sx={{
            position: 'relative',
            py: { xs: 4, md: 6 },
            color: 'white',
            background: `linear-gradient(
                72.2deg,
                rgba(0, 113, 229, 0.9) 26.49%,
                rgba(9, 82, 156, 0.9) 85.53%
            )`,
            overflow: 'hidden'
        }}>
            <Box
                component="img"
                src={statsBannerSide}
                alt=""
                sx={{
                    position: 'absolute',
                    top: 0,
                    height: '100%',
                    width: 'auto',
                    zIndex: 0,
                    left: { xs: "auto", sm: 'auto', md: 0 },
                    right: { xs: "-60px", sm: 0, md: 'auto' },
                    transform: { xs: 'scaleX(-1)', md: 'none' },
                }}
            />
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={2} sx={{ maxWidth: { xs: "90%", sm: "100%" }, marginLeft: "auto", marginRight: "auto", }} justifyContent="center" textAlign="center">
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
                                position: 'relative',
                                py: { xs: 2, sm: 0 },
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: { xs: 0, sm: 'auto' },
                                    width: { xs: '100%', sm: '1px' },
                                    height: { xs: '1px', sm: '100%' },
                                    background: {
                                        xs: 'repeating-linear-gradient(90deg, #FFFFFF 0, #FFFFFF 4px, transparent 4px, transparent 8px)',
                                        sm: 'repeating-linear-gradient(180deg, #FFFFFF 0, #FFFFFF 4px, transparent 4px, transparent 8px)'
                                    },
                                    maskImage: {
                                        xs: 'linear-gradient(270deg, #000 50%, transparent 100%)',
                                        sm: 'linear-gradient(180deg, #000 50%, transparent 100%)'
                                    },
                                    WebkitMaskImage: {
                                        xs: 'linear-gradient(270deg, #000 50%, transparent 100%)',
                                        sm: 'linear-gradient(180deg, #000 50%, transparent 100%)'
                                    }
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    left: { xs: 0, sm: 'auto' },
                                    width: { xs: '100%', sm: '1px' },
                                    height: { xs: '1px', sm: '100%' },
                                    background: {
                                        xs: 'repeating-linear-gradient(90deg, #FFFFFF 0, #FFFFFF 4px, transparent 4px, transparent 8px)',
                                        sm: 'repeating-linear-gradient(180deg, #FFFFFF 0, #FFFFFF 4px, transparent 4px, transparent 8px)'
                                    },
                                    maskImage: {
                                        xs: 'linear-gradient(270deg, #000 50%, transparent 100%)',
                                        sm: 'linear-gradient(180deg, #000 50%, transparent 100%)'
                                    },
                                    WebkitMaskImage: {
                                        xs: 'linear-gradient(270deg, #000 50%, transparent 100%)',
                                        sm: 'linear-gradient(180deg, #000 50%, transparent 100%)'
                                    }
                                }
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
