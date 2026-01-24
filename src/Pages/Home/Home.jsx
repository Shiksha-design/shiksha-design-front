import { Box } from '@mui/material';
import Hero from '../../Components/Home/Hero';
import StatsBanner from '../../Components/Home/StatsBanner';
import ProgramsSection from '../../Components/Home/Programs/ProgramsSection';
import HowItWorksSection from '../../Components/Home/HowItWorksSection';
import CompaniesSection from '../../Components/Home/CompaniesSection';
import CommunitySection from '../../Components/Home/CommunitySection';
import ExperienceStats from '../../Components/Home/ExperienceStats';
import TestimonialsSection from '../../Components/Home/TestimonialsSection';
import SubscribeSection from '../../Components/Home/SubscribeSection';

const Home = () => {
    return (
        <Box sx={{ bgcolor: '#F0F7FF', minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
            <Hero />
            <StatsBanner />
            <ProgramsSection />
            <HowItWorksSection />
            <CompaniesSection />
            <CommunitySection />
            <ExperienceStats />
            <TestimonialsSection />
            <SubscribeSection />
        </Box>
    );
};

export default Home;
