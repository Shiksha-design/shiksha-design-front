import { Box, Button, Container, Grid, Rating, Typography, } from '@mui/material';
import heroImage from '../../assets/heroImage.svg';
import { colors } from '../../Config/theme';
import { AppsOutlined } from '@mui/icons-material';
import HighlightText from '../HighlightText';

const Hero = () => {
    return (
        <Container sx={{ pb: 8 }}>
            <Grid container spacing={4} alignItems="center">

                {/* Left Content */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" fontWeight="700" sx={{ color: '#26394D', mb: 2, lineHeight: 1.1 }}>
                        Be a <HighlightText>Leader</HighlightText> in<br />
                        your field - Grow<br />
                        with Lcurve
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 4 }}>
                        <Button
                            variant="contained"
                            color="warning"
                            size="large"
                            startIcon={<AppsOutlined />}

                            sx={{
                                bgcolor: '#FD661F',
                                textTransform: 'none',
                                borderRadius: 2,
                                fontWeight: 'bold',
                                px: 4,
                                py: 1.5,
                                '&:hover': { bgcolor: '#c2410c' }
                            }}
                        >
                            Explore Program
                        </Button>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
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
                </Grid>

                {/* Right Image */}
                <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                    <Box
                        sx={{
                            position: 'relative',
                            height: 500,
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        {/* Hero Image */}
                        <Box
                            component="img"
                            src={heroImage}
                            alt="Hero"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain'
                            }}
                        />



                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Hero;
