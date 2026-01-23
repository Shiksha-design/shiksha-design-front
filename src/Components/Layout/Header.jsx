import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
    InputBase,
} from '@mui/material';
import { Search, KeyboardArrowDown, AppsOutlined } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import actions from '../../Redux/Reducer/auth/action';
import LoginModal from '../Auth/LoginModal';
import mainLogo from '../../assets/mainLogo.svg';
import { colors } from '../../Config/theme';

const Header = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const user = useSelector((state) => state.auth?.userdata);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = user && Object.keys(user).length > 0 && user.email;

    const handleLogout = () => {
        dispatch(actions.clearAllData());
        navigate('/');
    };

    return (
        <>
            <AppBar position="fixed" color="transparent" elevation={0} sx={{ bgcolor: colors.mainBg, py: 1 }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        {/* Logo */}
                        <Box
                            component={Link}
                            href="/"
                            sx={{
                                mr: 4,
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                            }}
                        >
                            <img src={mainLogo} alt="Smiksha Designs" style={{ height: '40px' }} />
                        </Box>

                        {/* All Courses Button */}
                        <Button
                            variant="contained"
                            startIcon={<AppsOutlined />}
                            sx={{
                                mr: 3,
                                bgcolor: colors.primary,
                                textTransform: 'none',
                                borderRadius: 2,

                            }}
                        >
                            All Courses
                        </Button>

                        {/* Search Bar */}
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: '#fff',
                            borderRadius: 2,
                            border: '1px solid #e2e8f0',
                            width: '100%',
                            maxWidth: 400,
                            px: 2,
                            py: 0.5
                        }}>
                            <Search sx={{ color: '#94a3b8', mr: 1 }} />
                            <InputBase
                                placeholder="Search your course"
                                sx={{ flex: 1, fontSize: '0.95rem' }}
                            />
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        {/* Right Menu */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                            <Button
                                sx={{ textTransform: 'none', color: '#475569', fontWeight: 500 }}
                            >
                                Field Title
                            </Button>
                            <Button
                                endIcon={<KeyboardArrowDown />}
                                sx={{ textTransform: 'none', color: '#475569', fontWeight: 500 }}
                            >
                                More
                            </Button>

                            {isAuthenticated ? (
                                <Box display="flex" alignItems="center" gap={2}>
                                    <Typography variant="body2" color="text.primary" fontWeight={600}>
                                        {user.name || user.email.split('@')[0]}
                                    </Typography>
                                    <Button variant="outlined" size="small" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </Box>
                            ) : (
                                <Button
                                    variant="outlined"
                                    sx={{
                                        textTransform: 'none',
                                        borderRadius: 2,
                                        px: 4,
                                        color: colors.primary,
                                        borderColor: colors.primary
                                    }}
                                    onClick={() => setLoginOpen(true)}
                                >
                                    Login
                                </Button>
                            )}
                        </Box>

                    </Toolbar>
                </Container>

                <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
            </AppBar>
            {/* Toolbar spacer to prevent content from being hidden behind fixed header */}
            <Toolbar sx={{ py: 1 }} />
        </>
    );
};

export default Header;
