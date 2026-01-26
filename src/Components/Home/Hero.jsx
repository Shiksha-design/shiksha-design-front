import { Box, Button, Container, Grid, Rating, Typography, useTheme, useMediaQuery, Link } from '@mui/material';
import heroBg from '../../assets/heroBg.png';
import hero from '../../assets/hero.png';
import heroBar from '../../assets/heroBar.png';
import { colors } from '../../Config/theme';
import { AppsOutlined } from '@mui/icons-material';
import HighlightText from '../HighlightText';
import SectionTitle from '../Common/SectionTitle';
import { CalendarMonthOutlined } from '@mui/icons-material';
import { Paper } from '@mui/material';

const FloatingCard = ({ title, value, style }) => {
    return (
        <Paper sx={{ ...style, minWidth: '100px', padding: { xs: '5px', sm: '8px', md: '10px' }, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, zIndex: 3, backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', borderRadius: 2, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}>
            <Box sx={{ backgroundColor: "#23BDEE", padding: { xs: '2px', sm: '5px', md: '5px' }, borderRadius: 2, color: 'white', height: { xs: '30px', sm: '40px', md: '40px' }, width: { xs: '30px', sm: '40px', md: '40px' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CalendarMonthOutlined />
            </Box>
            <Box>
                <Typography variant="h6 " sx={{ fontSize: { xs: '8px', sm: '12px', md: '20px' } }}>{value}</Typography>
                <Typography variant="h6" sx={{ fontSize: { xs: '8px', sm: '12px', md: '20px' } }}>{title}</Typography>
            </Box>
        </Paper>
    )
}

const Hero = () => {
    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down('sm'));

    // Reusable Content Blocks
    const titleContent = (
        <SectionTitle sx={{ mb: { xs: 0, sm: 2 }, textAlign: 'left' }}>
            Be a <HighlightText>Leader</HighlightText> in<br />
            your field - Grow<br />
            with Lcurve
        </SectionTitle>
    );

    const buttonContent = (
        <Box sx={{
            display: 'flex',
            alignItems: { xs: 'center', sm: 'flex-start', md: 'center' },
            flexDirection: { xs: "row", sm: 'column', md: 'row' },
            justifyContent: { xs: 'flex-start', sm: 'flex-start', md: 'flex-start' },
            flexWrap: 'wrap',
            gap: 2,
            mt: { xs: 3, sm: 0, md: 0 } // Add margin top on mobile
        }}>
            <div>
                <Button
                    component={Link}
                    variant={xs ? "contained" : "secondary"}
                    startIcon={<AppsOutlined />}
                >
                    Explore Courses
                </Button>
            </div>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: { xs: 1, sm: 0 }, alignSelf: { xs: 'center', sm: 'auto' } }}>
                {/* Placeholder Avatars */}
                <Box sx={{ display: 'flex', ml: 1 }}>
                    {[1, 2, 3].map((i) => (
                        <Box
                            key={i}
                            sx={{
                                width: { xs: 36, sm: 30, md: 40 },
                                height: { xs: 36, sm: 30, md: 40 },
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
                height: { xs: 200, sm: 460, md: 600, xl: 700 }, // Fixed height container for absolute positioning
                minWidth: { xs: 180, sm: '100%' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {/* Background Blob */}
            <Box
                component="img"
                src={heroBg}
                alt="Background"
                sx={{
                    height: '100%',
                    width: { xs: '100%', md: '100%' },
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 0,
                }}
            />

            {/* Main Character Image */}
            <Box
                component="img"
                src={hero}
                alt="Hero"
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '100%', // Adjust based on visual preference, usually slightly larger or fitting
                    zIndex: 1,
                    objectFit: 'contain'
                }}
            />

            {/* Floating Stats Bar */}
            <Box
                component="img"
                src={heroBar}
                alt="Stats"
                sx={{
                    position: 'absolute',
                    top: { xs: '30%', md: '35%' },
                    right: { xs: '12%', md: '25%' }, // Adjust horizontal position
                    width: { xs: 45, md: 90 }, // Responsive width
                    zIndex: 2,
                    borderRadius: 2
                }}
            />

            <FloatingCard
                title="Assistant Student"
                value="10k"
                style={{
                    position: 'absolute',
                    bottom: '25%',
                    left: { xs: '-20%', sm: '-30%' },
                    zIndex: 3
                }}
            />
        </Box>
    );

    return (
        <Container maxWidth="lg" sx={{ pb: { xs: 4, sm: 6, md: 8 }, }}>

            <Grid container alignItems="center" justifyContent="space-between" flexWrap={"nowrap"} gap={2}>
                <Grid item sx={{ textAlign: 'left', }}>
                    {titleContent}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        {buttonContent}
                    </Box>
                </Grid>
                <Grid>
                    {imageContent}
                </Grid>
            </Grid>
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                {buttonContent}
            </Box>
        </Container>
    );
};

export default Hero;
