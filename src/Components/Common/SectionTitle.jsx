import React from 'react';
import { Typography } from '@mui/material';

const SectionTitle = ({ children, sx = {}, ...props }) => {
    return (
        <Typography
            variant="h2"
            fontWeight="700"
            sx={{
                color: '#26394D',
                lineHeight: 1.1,
                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.75rem' },
                ...sx
            }}
            {...props}
        >
            {children}
        </Typography>
    );
};

export default SectionTitle;
