import React from 'react';
import { Typography, Box } from '@mui/material';
import { colors } from '../../Config/theme';

const HighlightText = ({ children, className }) => {
    return (
        <Box component="span" sx={{ position: 'relative', display: 'inline-block' }} className={className}>
            <Typography
                component="span"
                sx={{
                    color: colors.highlight || '#FF6B35',
                    fontWeight: 700,
                    fontSize: 'inherit',
                    fontFamily: 'inherit',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {children}
            </Typography>
            <Box
                component="svg"
                viewBox="0 0 300 25"
                preserveAspectRatio="none"
                sx={{
                    position: 'absolute',
                    bottom: '-0.1em',
                    left: 0,
                    width: '100%',
                    height: '0.5em',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            >

                <path
                    d="M 2 20 Q 80 10, 180 10 T 300 15"
                    stroke={colors.highlight || "#FF6B35"}
                    strokeWidth="7"
                    fill="none"
                    strokeLinecap="round"
                />
            </Box>
        </Box>
    );
};

export default HighlightText;