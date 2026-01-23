import React from 'react';
import { Breadcrumbs, Link, Typography, Box, Container } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import { colors } from '../../Config/theme';

const breadcrumbNameMap = {
    '/all-courses': 'All Courses',
    // Add other routes here as needed
};

const AppBreadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Dont show on home page
    if (location.pathname === '/') {
        return null;
    }

    return (
        <Box sx={{ bgcolor: '#E1EAF5', py: 1.5 }}>
            <Container maxWidth="lg">
                <Breadcrumbs aria-label="breadcrumb" separator="/">
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        component={RouterLink}
                        to="/"
                    >
                        <Home sx={{ mr: 0.5, fontSize: 20, color: '#94a3b8' }} />
                        <Typography sx={{ color: '#94a3b8', fontSize: 14 }}>Home</Typography>
                    </Link>

                    {/* Placeholder for hierarchy if needed, e.g. "Video" as per image, 
                        but for now keeping it dynamic based on route or fixed if structure is flat */}
                    {/* <Typography sx={{ color: '#94a3b8', fontSize: 14 }}>...</Typography> */}
                    <Typography sx={{ color: '#94a3b8', fontSize: 14 }}>Video</Typography>


                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const name = breadcrumbNameMap[to] || value.replace(/-/g, ' ');

                        return last ? (
                            <Typography color="text.primary" key={to} sx={{ fontWeight: 600, fontSize: 14, color: '#26394D', textTransform: 'capitalize' }}>
                                {name}
                            </Typography>
                        ) : (
                            <Link
                                underline="hover"
                                color="inherit"
                                component={RouterLink}
                                to={to}
                                key={to}
                                sx={{ fontSize: 14, color: '#94a3b8', textTransform: 'capitalize' }}
                            >
                                {name}
                            </Link>
                        );
                    })}
                </Breadcrumbs>
            </Container>
        </Box>
    );
};

export default AppBreadcrumbs;
