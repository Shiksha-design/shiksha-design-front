import { Box, Button, Container, Grid, Rating, Typography, useTheme, useMediaQuery } from '@mui/material';
import heroImage from '../../assets/heroImage.svg';
import { colors } from '../../Config/theme';
import { AppsOutlined } from '@mui/icons-material';
import HighlightText from '../HighlightText';
import SectionTitle from '../Common/SectionTitle';

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Reusable Content Blocks
    const titleContent = (
        <SectionTitle sx={{ mb: { xs: 0, md: 2 } }}>
            Be a <HighlightText>Leader</HighlightText> in<br />
            your field - Grow<br />
            with Lcurve
        </SectionTitle>
    );

    const buttonContent = (
        <Box sx={{
            display: 'flex',
            alignItems: { sm: 'center' },
            justifyContent: { xs: 'center', md: 'flex-start' },
            gap: 2,
            mb: 4,
            mt: { xs: 3, md: 0 } // Add margin top on mobile
        }}>
            <Button
                variant="contained"
                color="warning"
                size="small"
                startIcon={<AppsOutlined />}
                sx={{
                    bgcolor: '#FD661F',
                    textTransform: 'none',
                    borderRadius: 2,
                    fontWeight: 'bold',
                    px: { xs: 2, sm: 4 },
                    '&:hover': { bgcolor: '#c2410c' }
                }}
            >
                Explore Courses
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: { xs: 1, sm: 0 }, alignSelf: { xs: 'center', sm: 'auto' } }}>
                {/* Placeholder Avatars */}
                <Box sx={{ display: 'flex', ml: 1 }}>
                    {[1, 2, 3].map((i) => (
                        <Box
                            key={i}
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                bgcolor: '#ccc',
                                border: `${2}px solid ${colors.primary}`,
                                ml: -1.5
                            }}
                            component="img"
                            src={`https://i.pravatar.cc/150?img=${i + 10}`}
                        />
                    ))}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <Rating name="half-rating" defaultValue={4.5} precision={0.5} size="small" sx={{ color: colors.primary }} />
                    <Typography variant="caption" color="primary">( Google Rating )</Typography>
                </Box>
            </Box>
        </Box>
    );

    const imageContent = (
        <Box
            sx={{
                position: 'relative',
                height: { xs: 'auto', md: 500 },
                width: '100%',
                display: 'flex',
                justifyContent: { xs: 'flex-end', md: 'center' }, // Align right on mobile
                alignItems: 'center'
            }}
        >
            <Box
                component="img"
                src={heroImage}
                alt="Hero"
                sx={{
                    width: { xs: '80%', sm: '60%', md: '100%' }, // Smaller on mobile
                    maxWidth: { xs: 200, sm: 300, md: '100%' },
                    height: 'auto',
                    objectFit: 'contain'
                }}
            />
        </Box>
    );

    return (
        <Container sx={{ pb: { xs: 4, md: 8 }, pt: { xs: 2, md: 0 } }}>
            {isMobile ? (
                // Mobile Layout
                <Box>
                    {/* Top Row: Title + Image */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ flex: 1, mr: 1 }}>
                            {titleContent}
                        </Box>
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                            {imageContent}
                        </Box>
                    </Box>

                    {/* Bottom Row: Buttons */}
                    <Box>
                        {buttonContent}
                    </Box>
                </Box>
            ) : (
                // Desktop Layout
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        {titleContent}
                        {buttonContent}
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                        {imageContent}
                    </Grid>
                </Grid>
            )}
        </Container>
    );
};

export default Hero;
