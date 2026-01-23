import React, { useRef } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TestimonialCard from './TestimonialCard';
import HighlightText from '../HighlightText';
import { colors } from '../../Config/theme';

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

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 320; // Approx card width + gap
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Map Placeholder - subtle opacity */}
            <Box
                component="img"
                src="/assets/world-map.png" // Assuming you might have a map, or we can leave it blank/pattern
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    maxWidth: '1200px',
                    opacity: 0.03,
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
                onError={(e) => e.target.style.display = 'none'} // Hide if not found
            />

            <Container maxWidth="xl" sx={{ position: 'relative' }}>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h2" fontWeight="700" sx={{ color: '#26394D', mb: 2 }}>
                        What Our <HighlightText>Students</HighlightText>
                        <br /> Say About Us
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#5A6B7C', maxWidth: '700px', mx: 'auto' }}>
                        Our students have gone on to build successful careers with leading organizations across diverse industries, showcasing the skills, knowledge, and confidence they gained through our programs.
                    </Typography>
                </Box>

                <Box sx={{ position: 'relative', mx: { xs: 0, md: 4 } }}>
                    {/* Carousel Container */}
                    <Box
                        ref={scrollRef}
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

                    {/* Navigation Buttons */}
                    <Box sx={{ display: 'flex', justifyContent: 'end', gap: 2 }}>
                        <IconButton
                            onClick={() => scroll('left')}
                            sx={{
                                bgcolor: '#F0F7FF',
                                color: '#26394D',
                                '&:hover': { bgcolor: colors.highlight, color: '#fff' }
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => scroll('right')}
                            sx={{
                                bgcolor: '#F0F7FF',
                                color: '#26394D',
                                '&:hover': { bgcolor: colors.highlight, color: '#fff' }
                            }}
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default TestimonialsSection;
