import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { colors } from '../../Config/theme';

const TestimonialCard = ({ testimonial }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                borderRadius: 4,
                border: `1px solid ${'#26394D'}`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transition: 'all 0.3s ease',
                backgroundColor: 'transparent',
                '&:hover': {
                    boxShadow: '0px 10px 40px rgba(0,0,0,0.08)',
                    transform: 'translateY(-5px)',
                    borderColor: 'transparent'
                }
            }}
        >
            {/* Header with Avatar and formatting */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{
                        width: 60,
                        height: 60,
                        mr: 2,
                        border: `2px solid ${colors.mainBg || '#F0F7FF'}`
                    }}
                />
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#2A394E', lineHeight: 1.2 }}>
                        {testimonial.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: colors.highlight, fontWeight: 500 }}>
                        {testimonial.role}
                    </Typography>
                </Box>
            </Box>

            {/* Content */}
            <Typography variant="body1" sx={{ color: '#5A6B7C', lineHeight: 1.6, flex: 1 }}>
                "{testimonial.quote}"
            </Typography>
        </Paper>
    );
};

export default TestimonialCard;
