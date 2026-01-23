import React from 'react';
import { Box } from '@mui/material';
import Hero from '../../Components/Home/Hero';
import StatsBanner from '../../Components/Home/StatsBanner';

const Home = () => {
    return (
        <Box sx={{ bgcolor: '#f1f5f9', minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
            <Hero />
            <StatsBanner />
        </Box>
    );
};

export default Home;
