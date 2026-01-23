import React from "react";
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
                    px: { xs: 2, md: 4 },
                    borderRadius: 3,
                    position: "relative",
                    overflow: "hidden",
                    color: "#fff",
                    mx: 6
                }}
            >
                {/* LEFT AVATARS */}
                <Avatar
                    src="https://i.pravatar.cc/150?img=10"
                    sx={{
                        position: "absolute",
                        top: "10%",
                        left: "2%",
                        width: 50,
                        height: 50,
                        border: "3px solid #fff",
                        display: { xs: "none", md: "block" },
                    }}
                />
                <Avatar
                    src="https://i.pravatar.cc/150?img=11"
                    sx={{
                        position: "absolute",
                        top: "35%",
                        left: "13%",
                        width: 50,
                        height: 50,
                        border: "2px solid #fff",
                        display: { xs: "none", md: "block" },
                    }}
                />
                <Avatar
                    src="https://i.pravatar.cc/150?img=12"
                    sx={{
                        position: "absolute",
                        bottom: "10%",
                        left: "5%",
                        width: 50,
                        height: 50,
                        border: "3px solid #fff",
                        display: { xs: "none", md: "block" },
                    }}
                />

                {/* RIGHT AVATARS */}
                <Avatar
                    src="https://i.pravatar.cc/150?img=13"
                    sx={{
                        position: "absolute",
                        top: "15%",
                        right: "12%",
                        width: 50,
                        height: 50,
                        border: "3px solid #fff",
                        display: { xs: "none", md: "block" },
                    }}
                />
                <Avatar
                    src="https://i.pravatar.cc/150?img=14"
                    sx={{
                        position: "absolute",
                        bottom: "10%",
                        right: "10%",
                        width: 50,
                        height: 50,
                        border: "3px solid #fff",
                        display: { xs: "none", md: "block" },
                    }}
                />
                <Avatar
                    src="https://i.pravatar.cc/150?img=15"
                    sx={{
                        position: "absolute",
                        top: "35%",
                        right: "2%",
                        width: 50,
                        height: 50,
                        border: "2px solid #fff",
                        display: { xs: "none", md: "block" },
                    }}
                />

                {/* CONTENT */}
                <Container maxWidth="sm" sx={{ textAlign: "center" }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            letterSpacing: "0.5px",
                            mb: 1.5,
                        }}
                    >
                        SUBSCRIBE AND NEVER MISS AN UPDATE
                    </Typography>

                    <Typography
                        sx={{
                            opacity: 0.9,
                            mb: { xs: 3, md: 4 },
                            fontSize: "1rem",
                        }}
                    >
                        20k+ students daily learn with Eduvi. Subscribe for new courses.
                    </Typography>

                    {/* FORM */}
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: 2,
                            maxWidth: 620,
                            mx: "auto",
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
                                    borderRadius: 2,
                                    fontSize: "1rem",
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
                                borderRadius: 2,
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
