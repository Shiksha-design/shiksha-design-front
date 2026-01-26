import React from 'react';
import { Typography, Box } from '@mui/material';
import { colors } from '../../Config/theme';

const HighlightText = ({ children, className }) => {
    return (
        <Box component="span" sx={{ position: 'relative', display: 'inline-block' }} className={className}>
            <span
                variant="sectionHeader"
                style={{
                    color: colors.highlight || '#FF6B35',
                    fontWeight: "inherit",
                    fontSize: 'inherit',
                    fontFamily: 'inherit',
                    lineHeight: "inherit"
                }}
            >
                {children}
            </span>
            <Box
                component="svg"
                viewBox="0 0 300 25"
                preserveAspectRatio="none"
                sx={{
                    position: 'absolute',
                    bottom: '-0.2em',
                    left: 0,
                    width: '100%',
                    height: '0.3em',
                    pointerEvents: 'none'
                }}
            >

                <path
                    d="M 2 20 Q 80 10, 180 10 T 300 15"
                    stroke={colors.highlight || "#FF6B35"}
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                />
            </Box>
        </Box>
    );
};

export default HighlightText;