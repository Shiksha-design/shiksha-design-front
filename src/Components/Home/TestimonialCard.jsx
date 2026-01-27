import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { colors } from '../../Config/theme';
import quote from '../../assets/qute.png';

const TestimonialCard = ({ testimonial }) => {
    return (

        <Paper
            elevation={0}
            sx={{
                px: 2,
                py: 4,
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
                }
            }}
        >
            <img src={quote} alt="quote" style={{ position: 'absolute', top: -25, left: -10, width: 70, height: 46, zIndex: 1 }} />
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
                    <Typography sx={{ fontSize: { xs: "18px", md: "24px" }, fontWeight: 400, color: '#26394D', lineHeight: "24px" }}>
                        {testimonial.name}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, fontWeight: 400, color: '#FD661F', lineHeight: 1.2 }}>
                        {testimonial.role}
                    </Typography>
                </Box>
            </Box>

            {/* Content */}
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, fontWeight: 400, color: '#26394D', lineHeight: "28px" }}>
                "{testimonial.quote}"
            </Typography>
        </Paper>

    );
};

export default TestimonialCard;
