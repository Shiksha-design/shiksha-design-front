import React, { useRef } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TestimonialCard from './TestimonialCard';
import HighlightText from '../HighlightText';
import { colors } from '../../Config/theme';
import SectionTitle from '../Common/SectionTitle';

const testimonials = [
    {
        id: 1,
        name: "Kathy Sullivan",
        role: "Data Scientist",
        avatar: "https://i.pravatar.cc/150?img=32",
        quote: "I had an amazing experience! The service was top-notch, and the team was incredibly helpful. I highly recommend them to anyone looking for quality and care!"
    },
    {
        id: 2,
        name: "Mark Thompson",
        role: "UX Designer",
        avatar: "https://i.pravatar.cc/150?img=11",
        quote: "The courses are well-structured and the instructors are experts in their fields. I've learned so much in such a short amount of time."
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Product Manager",
        avatar: "https://i.pravatar.cc/150?img=5",
        quote: "Eduvi provides an excellent platform for learning. The project-based approach really helped me apply what I learned to real-world scenarios."
    },
    {
        id: 4,
        name: "Robert Fox",
        role: "Web Developer",
        avatar: "https://i.pravatar.cc/150?img=3",
        quote: "Absolutely fantastic! The support community is great, and the content is always up-to-date with the latest industry trends."
    },
    {
        id: 5,
        name: "Emily White",
        role: "Marketing Specialist",
        avatar: "https://i.pravatar.cc/150?img=9",
        quote: "I was able to pivot my career thanks to the comprehensive marketing courses. The certification is widely recognized too!"
    }
];

const TestimonialsSection = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 324; // 300px width + 24px gap
            const targetScroll = current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 324;
            const index = Math.round(current.scrollLeft / scrollAmount);
            setActiveIndex(index);
        }
    };

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <Container maxWidth="xl" sx={{ position: 'relative' }}>
                <Box sx={{ textAlign: 'center', }}>
                    <SectionTitle sx={{ mb: 2 }}>
                        What Our <HighlightText>Students</HighlightText>
                        <br /> Say About Us
                    </SectionTitle>
                    <Typography variant="body1" sx={{ color: '#5A6B7C', maxWidth: '700px', mx: 'auto' }}>
                        Our students have gone on to build successful careers with leading organizations across diverse industries, showcasing the skills, knowledge, and confidence they gained through our programs.
                    </Typography>
                </Box>

                <Box sx={{ position: 'relative', mx: { xs: 0, md: 4 } }}>
                    {/* Carousel Container */}
                    <Box
                        ref={scrollRef}
                        onScroll={handleScroll}
                        sx={{
                            display: 'flex',
                            gap: 3,
                            overflowX: 'auto',
                            overflowY: 'hidden', // Prevent vertical scrolling
                            py: 4,
                            px: 1, // Add some side padding for shadows
                            scrollSnapType: 'x mandatory',
                            '&::-webkit-scrollbar': { display: 'none' },
                            scrollbarWidth: 'none',
                        }}
                    >
                        {testimonials.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    flex: '0 0 auto',
                                    pb: 2,
                                    width: 300,
                                    scrollSnapAlign: 'center'
                                }}
                            >
                                <TestimonialCard testimonial={item} />
                            </Box>
                        ))}
                    </Box>

                    {/* Controls Container */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4, mt: 2 }}>
                        {/* Pagination Dots */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {testimonials.map((_, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: activeIndex === index ? 32 : 10,
                                        height: 10,
                                        borderRadius: activeIndex === index ? 4 : '50%',
                                        bgcolor: activeIndex === index ? '#26394D' : '#E6EBF2',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => {
                                        const { current } = scrollRef;
                                        if (current) {
                                            current.scrollTo({
                                                left: index * 324,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                />
                            ))}
                        </Box>

                        {/* Navigation Buttons */}
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <IconButton
                                onClick={() => scroll('left')}
                                sx={{
                                    bgcolor: '#E6EBF2',
                                    color: '#26394D',
                                    width: 48,
                                    height: 48,
                                    '&:hover': { bgcolor: '#dbe2ea' }
                                }}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                            <IconButton
                                onClick={() => scroll('right')}
                                sx={{
                                    bgcolor: '#E6EBF2',
                                    color: '#26394D',
                                    width: 48,
                                    height: 48,
                                    '&:hover': { bgcolor: '#dbe2ea' }
                                }}
                            >
                                <ArrowForwardIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default TestimonialsSection;
