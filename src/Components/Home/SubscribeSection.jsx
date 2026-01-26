import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Avatar,
} from "@mui/material";
import { colors } from "../../Config/theme";

const SubscribeSection = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Box
                sx={{
                    bgcolor: colors.primary,
                    py: 4,
                    pt: { xs: 18, md: 4 }, // Add padding top on mobile for avatars
                    px: { xs: 2, md: 4 },
                    borderRadius: 6,
                    position: "relative",
                    overflow: "hidden", // Allow avatars to be partially clipped if needed, or visual effect
                    color: "#fff",
                    mx: { xs: 0, md: 6 } // Remove margin on mobile for full width look
                }}
            >
                {/* 
                   AVATARS MAPPING:
                   Mobile: Arc at top.
                   Desktop: Left and Right clusters.
                */}

                {/* 1. Top Center (Mobile) / Left Top (Desktop) */}
                <Avatar
                    src="https://i.pravatar.cc/150?img=10"
                    sx={{
                        position: "absolute",
                        width: 50,
                        height: 50,
                        border: "3px solid #fff",
                        display: "block",
                        // Mobile: Center Top
                        top: { xs: "10px", md: "10%" },
                        left: { xs: "50%", md: "2%" },
                        transform: { xs: "translateX(-50%)", md: "none" },
                    }}
                />

                {/* 2. Left Mid (Mobile) / Left Mid (Desktop) */}
                <Avatar
                    src="https://i.pravatar.cc/150?img=11"
                    sx={{
                        position: "absolute",
                        width: 50,
                        height: 50,
                        border: "2px solid #fff",
                        display: "block",
                        // Mobile: Left of Center
                        top: { xs: "70px", md: "35%" },
                        left: { xs: "25%", md: "13%" },
                    }}
                />

                {/* 3. Right Mid (Mobile) / Left Bottom (Desktop) */}
                <Avatar
                    src="https://i.pravatar.cc/150?img=12"
                    sx={{
                        position: "absolute",
                        width: 50,
                        height: 50,
                        border: "3px solid #fff",
                        display: "block",
                        // Mobile: Right of Center
                        top: { xs: "70px", md: "auto" },
                        bottom: { xs: "auto", md: "10%" },
                        left: { xs: "auto", md: "5%" },
                        right: { xs: "25%", md: "auto" }, // Use right positioning for mobile symmetry
                    }}
                />

                {/* 4. Left Low (Mobile) / Right Top (Desktop) */}
                <Avatar
                    src="https://i.pravatar.cc/150?img=13"
                    sx={{
                        position: "absolute",
                        width: 50,
                        height: 50,
                        border: "3px solid #fff",
                        display: "block",
                        // Mobile: Lower Left
                        top: { xs: "5px", md: "15%" },
                        left: { xs: "10%", md: "auto" },
                        right: { xs: "auto", md: "12%" },
                    }}
                />

                {/* 5. Right Low (Mobile) / Right Bottom (Desktop) */}
                <Avatar
                    src="https://i.pravatar.cc/150?img=14"
                    sx={{
                        position: "absolute",
                        width: 50,
                        height: 50,
                        border: "3px solid #fff",
                        display: "block",
                        // Mobile: Lower Right
                        top: { xs: "10px", md: "auto" },
                        bottom: { xs: "auto", md: "10%" },
                        right: { xs: "10%", md: "10%" },
                    }}
                />

                {/* 6. Extra Desktop Avatar (Hidden on Mobile to keep design clean 5-avatar arc) */}
                <Avatar
                    src="https://i.pravatar.cc/150?img=15"
                    sx={{
                        position: "absolute",
                        width: 50,
                        height: 50,
                        border: "2px solid #fff",
                        display: { xs: "none", md: "block" },
                        top: "35%",
                        right: "2%",
                    }}
                />

                {/* CONTENT */}
                <Container maxWidth="sm" sx={{
                    display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                    minHeight: "180px",

                }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                            mb: 1.5,
                            color: "inherit"
                        }}
                    >
                        SUBSCRIBE AND NEVER MISS AN UPDATE
                    </Typography>

                    <Typography
                        sx={{
                            opacity: 0.9,
                            mb: { xs: 3, md: 4 },
                            fontSize: "1rem",
                            color: "inherit"

                        }}
                    >
                        20k+ students daily learn with Eduvi. Subscribe for new courses.
                    </Typography>

                    {/* FORM */}
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            gap: 2,
                            maxWidth: 620,
                            width: "100%"
                        }}
                    >
                        <TextField
                            fullWidth
                            placeholder="Enter your email"
                            variant="standard"
                            InputProps={{
                                disableUnderline: true,
                                sx: {
                                    px: 2,
                                    py: 1,
                                    backgroundColor: "#fff",
                                    borderRadius: 1,
                                    fontSize: "1rem",
                                    flex: 1
                                },
                            }}
                        />

                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: colors.highlight,
                                color: "#fff",
                                textTransform: "none",
                                fontWeight: 600,
                                px: 4,
                                py: 1,
                                borderRadius: 1,
                                boxShadow: "none",
                                whiteSpace: "nowrap",
                                "&:hover": {
                                    bgcolor: "#E55A1A",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Container>
            </Box>
        </Container>
    );
};

export default SubscribeSection;
