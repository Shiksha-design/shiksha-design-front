import React, { useState } from 'react';
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogContent,
    FormControlLabel,
    TextField,
    Typography,
    InputAdornment,
    IconButton,
    Divider,
    Link
} from '@mui/material';
import { Visibility, VisibilityOff, EmailOutlined, LockOutlined, Close, Google, PersonOutline } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { MockAuthService } from '../../Services/MockAuthService';
import actions from '../../Redux/Reducer/auth/action';
import leftLogin from '../../assets/leftLogin.svg';
import { colors } from '../../Config/theme';
import mainLogo from '../../assets/mainLogo.svg';


const LoginModal = ({ open, onClose }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        agreed: false,
        keepSigned: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Reset state when modal opens/closes
    React.useEffect(() => {
        if (!open) {
            setIsRegister(false);
            setFormData({
                fullName: '',
                email: '',
                password: '',
                agreed: false,
                keepSigned: false
            });
        }
    }, [open]);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (isRegister) {
                if (!formData.agreed) {
                    alert("Please agree to the Terms & Conditions");
                    setLoading(false);
                    return;
                }
                const response = await MockAuthService.register(formData);
                dispatch(actions.setUserData(response.user));
            } else {
                const response = await MockAuthService.login(formData.email, formData.password);
                dispatch(actions.setUserData(response.user));
            }
            onClose();
            navigate('/');
        } catch (error) {
            console.error(error);
            alert((isRegister ? 'Registration' : 'Login') + ' failed: ' + error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    maxWidth: 900,
                    overflow: 'hidden'
                }
            }}
        >
            <IconButton
                onClick={onClose}
                sx={{ position: 'absolute', right: 8, top: 8, color: '#999', zIndex: 10 }}
            >
                <Close />
            </IconButton>
            <Box sx={{
                display: 'flex', minHeight: 500,
                bgcolor: colors.mainBg,
                p: 5,


            }}>
                {/* Left Side - Illustration */}
                <Box sx={{
                    flex: 1,
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <Box sx={{ ml: 2 }}>

                        <Box>

                            <img src={mainLogo} alt="Smiksha Designs" style={{ height: '25px' }} />
                        </Box>

                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1, color: '#26394D', lineHeight: '24px' }}>
                            Welcome to<br />Lcurve Online<br />Learning Platform
                        </Typography>
                    </Box>
                    <Box
                        component="img"
                        src={leftLogin}
                        alt="Illustration"
                        sx={{ maxWidth: '80%', height: 'auto' }}
                    />
                </Box>
                <Divider orientation="vertical" flexItem sx={{
                    display: { xs: 'none', md: 'flex' },

                }} />
                {/* Right Side - Form */}
                <Box sx={{ flex: 1, p: 0, position: 'relative', }}>


                    <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>

                        <Button
                            variant="outlined"
                            fullWidth
                            size='small'
                            sx={{ mb: 3, textTransform: 'none', color: '#555', borderColor: '#ddd', py: 1, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                        >
                            <Box sx={{ backgroundColor: "#E32729", borderRadius: 1, p: 1, height: 15, width: 15, color: '#fff', alignItems: 'center', display: 'flex', justifyContent: 'center', mr: 1 }}>G+</Box>
                            {isRegister ? 'Signup with google' : 'Login with google'}
                        </Button>

                        <Divider sx={{ mb: 3, color: '#999', fontSize: '0.8rem' }}>
                            {isRegister ? 'Or signup with your email' : 'Or login with your email'}
                        </Divider>

                        <form onSubmit={handleSubmit}>
                            {isRegister && (
                                <>
                                    <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 500 }}>Full Name</Typography>
                                    <TextField
                                        fullWidth
                                        placeholder="Ex: John Doe"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                        sx={{ mb: 2, bgcolor: '#fff' }}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <PersonOutline fontSize="small" sx={{ color: '#999' }} />
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </>
                            )}

                            <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 500 }}>Email</Typography>
                            <TextField
                                fullWidth
                                placeholder="Ex: example@email.com"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                variant="outlined"
                                size="small"
                                sx={{ mb: 2, bgcolor: '#fff' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailOutlined fontSize="small" sx={{ color: '#999' }} />
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 500 }}>Password</Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter Password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                value={formData.password}
                                onChange={handleChange}
                                variant="outlined"
                                size="small"
                                sx={{ mb: 2, bgcolor: '#fff' }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlined fontSize="small" sx={{ color: '#999' }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                                size="small"
                                            >
                                                {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            {isRegister ? (
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="agreed"
                                            checked={formData.agreed}
                                            onChange={handleChange}
                                            color="primary"
                                            size="small"
                                        />
                                    }
                                    label={<Typography variant="caption" color="textSecondary">I agreed to the Terms & Conditions</Typography>}
                                    sx={{ mb: 3 }}
                                />
                            ) : (
                                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="keepSigned"
                                                checked={formData.keepSigned}
                                                onChange={handleChange}
                                                color="primary"
                                                size="small"
                                            />
                                        }
                                        label={<Typography variant="caption" color="textSecondary">Keep me signed in</Typography>}
                                    />
                                    <Link component="button" onClick={(e) => { e.preventDefault(); }} variant="caption" underline="hover" color="textSecondary">
                                        Forget password?
                                    </Link>
                                </Box>
                            )}


                        </form>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            disabled={loading}
                            sx={{ textTransform: 'none', py: 1.2, borderRadius: 1 }}
                        >
                            {isRegister ? 'Sign up' : 'Sign In'}
                        </Button>

                        <Box textAlign="center" mt={2}>
                            <Typography variant="caption" color="textSecondary">
                                {isRegister ? "Already have account? " : "Don't have an account? "}
                                <Link
                                    component="button"
                                    variant="caption"
                                    underline="hover"
                                    sx={{ color: '#1976d2', fontWeight: 600 }}
                                    onClick={() => setIsRegister(!isRegister)}
                                >
                                    {isRegister ? 'Sign in' : 'Sign up'}
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
};

export default LoginModal;
