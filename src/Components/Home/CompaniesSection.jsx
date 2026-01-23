import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { colors } from '../../Config/theme';
import HighlightText from '../HighlightText';
import mediaImage from '../../assets/media.png';

const CompaniesSection = () => {
    return (
        <Box sx={{ py: 3, textAlign: 'center', bgcolor: '#F0F7FF' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" fontWeight="700" sx={{ color: '#26394D', mb: 1, lineHeight: 1.2 }}>
                    <HighlightText>Companies</HighlightText> That Our
                </Typography>
                <Typography variant="h2" fontWeight="700" sx={{ color: '#26394D', mb: 3, lineHeight: 1.2 }}>
                    Students Work At
                </Typography>

                <Typography variant="body1" sx={{ color: '#26394D', mb: 3, maxWidth: '800px', mx: 'auto' }}>
                    Our students have gone on to build successful careers with leading organizations across diverse industries, showcasing the skills, knowledge, and confidence they gained through our programs.
                </Typography>

                <Box
                    component="img"
                    src={mediaImage}
                    alt="Companies"
                    sx={{
                        maxWidth: '100%',
                        height: 'auto',
                        objectFit: 'contain'
                    }}
                />
            </Container>
        </Box>
    );
};

export default CompaniesSection;
