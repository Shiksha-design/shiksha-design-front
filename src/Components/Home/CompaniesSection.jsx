import { Box, Container, Typography } from '@mui/material';
import HighlightText from '../HighlightText';
import mediaImage from '../../assets/media.png';
import SectionTitle from '../Common/SectionTitle';
const CompaniesSection = () => {
    return (
        <Box sx={{ py: 3, textAlign: 'center', bgcolor: '#F0F7FF' }}>
            <Container maxWidth="lg">
                <SectionTitle sx={{ mb: 3 }}>
                    <HighlightText>Companies</HighlightText> That Our<br />
                    Students Work At
                </SectionTitle>

                <Typography sx={{ fontSize: { xs: "12px", md: "16px" }, color: '#26394D', mb: 5, mx: 'auto', px: { xs: 0, sm: 4, md: 8 } }}>
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
