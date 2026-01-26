import React from 'react';
import { Typography } from '@mui/material';

const SectionTitle = ({ children, sx = {}, ...props }) => {
    return (
        <Typography
            variant="sectionHeader"
            sx={{
                color: '#26394D',
                ...sx
            }}
            {...props}
        >
            {children}
        </Typography>
    );
};

export default SectionTitle;
