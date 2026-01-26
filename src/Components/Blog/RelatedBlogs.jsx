import React, { useRef, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowBackIos, ArrowForward, ArrowForwardIos } from '@mui/icons-material';
import BlogCard from './BlogCard';
import { colors } from '../../Config/theme';

const RelatedBlogs = ({ posts }) => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            // Card width (approx 350px) + gap (32px)
            const scrollAmount = 382;
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
            // Update active index based on scroll position
            // Assuming 3 cards visible, we map scroll position to the first visible card index
            const scrollAmount = 382;
            const index = Math.round(current.scrollLeft / scrollAmount);
            setActiveIndex(index);
        }
    };

    return (
        <Box sx={{ position: 'relative' }}>
            {/* Carousel Container */}
            <Box
                ref={scrollRef}
                onScroll={handleScroll}
                sx={{
                    display: 'flex',
                    gap: 4,
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    py: 2,
                    px: 1,
                    scrollSnapType: 'x mandatory',
                    '&::-webkit-scrollbar': { display: 'none' },
                    scrollbarWidth: 'none',
                    mx: { xs: 0, md: -2 }, // Negative margin to allow full-width scroll effect if needed or just alignment
                    px: { xs: 0, md: 2 }   // Padding to offset negative margin
                }}
            >
                {posts.map((post, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: '0 0 auto',
                            width: { xs: '100%', sm: '350px' }, // Fixed width for carousel items
                            scrollSnapAlign: 'start'
                        }}
                    >
                        <BlogCard
                            tag={post.tag}
                            title={post.title}
                            description={post.desc}
                            author={post.author}
                            date={post.date}
                            image={post.image}
                        />
                    </Box>
                ))}
            </Box>

            {/* Navigation Arrows - Absolute Positioned */}
            <Box sx={{
                display: { xs: 'none', md: 'block' } // Hide arrows on mobile
            }}>
                <IconButton
                    onClick={() => scroll('left')}
                    sx={{
                        position: 'absolute',
                        left: -20, // Outside the container
                        top: '50%',
                        transform: 'translateY(-50%)',
                        bgcolor: 'white',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        color: colors.primary,
                        zIndex: 2,
                        '&:hover': { bgcolor: '#f5f5f5' }
                    }}
                >
                    <ArrowBackIos sx={{ fontSize: 16 }} />
                </IconButton>
                <IconButton
                    onClick={() => scroll('right')}
                    sx={{
                        position: 'absolute',
                        right: -20, // Outside the container
                        top: '50%',
                        transform: 'translateY(-50%)',
                        bgcolor: 'white',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        color: colors.primary,
                        zIndex: 2,
                        '&:hover': { bgcolor: '#f5f5f5' }
                    }}
                >
                    <ArrowForwardIos sx={{ fontSize: 16 }} />
                </IconButton>
            </Box>


            {/* Pagination Dots */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 4 }}>
                {posts.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => {
                            const { current } = scrollRef;
                            if (current) {
                                current.scrollTo({
                                    left: index * 382,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                        sx={{
                            width: activeIndex === index ? 32 : 10,
                            height: 10,
                            borderRadius: activeIndex === index ? 4 : '50%',
                            bgcolor: activeIndex === index ? colors.primary : '#E6EBF2',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default RelatedBlogs;
