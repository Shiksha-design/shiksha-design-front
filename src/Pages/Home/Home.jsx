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
import homeBottomSectionBg from '../../assets/homeBottomSectionBg.png';

const Home = () => {
    return (
        <Box sx={{ bgcolor: '#F0F7FF', minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
            <Hero />
            <StatsBanner />
            <ProgramsSection />
            <HowItWorksSection />
            <CompaniesSection />
            <CommunitySection />
            {
                <Box sx={{ backgroundImage: `url(${homeBottomSectionBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundColor: "#F0F7FF" }}>
                    <ExperienceStats />
                    <TestimonialsSection />
                    <SubscribeSection />
                </Box>
            }
        </Box>
    );
};

export default Home;
