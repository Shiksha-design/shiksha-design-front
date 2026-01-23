import { Box } from '@mui/material';
import Hero from '../../Components/Home/Hero';
import StatsBanner from '../../Components/Home/StatsBanner';
import ProgramsSection from '../../Components/Home/Programs/ProgramsSection';

const Home = () => {
    return (
        <Box sx={{ bgcolor: '#f1f5f9', minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
            <Hero />
            <StatsBanner />
            <ProgramsSection />
        </Box>
    );
};

export default Home;
