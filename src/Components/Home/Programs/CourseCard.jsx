import React from "react";
import { Box, Paper, CardMedia, Button, Chip, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { colors } from "../../../Config/theme";

const CourseCard = ({ course }) => {
    return (
        <Paper
            elevation={2}
            sx={{
                borderRadius: "16px",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: colors.white,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderRadius: 2
            }}
        >
            <Box sx={{ p: 1, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ position: "relative" }}>
                    <CardMedia
                        component="img"
                        height="108"
                        image={course.image}
                        alt={course.title}
                        sx={{ objectFit: "cover", borderRadius: 2 }}
                    />
                    {/* Bestseller Badge */}
                    {course.bestseller && (
                        <Chip
                            label="Bestseller"
                            sx={{
                                position: "absolute",
                                top: 5,
                                left: 5,
                                bgcolor: colors.highlight,
                                color: colors.white,
                                fontSize: "12px",
                                height: "24px",
                                borderRadius: "4px",
                                fontFamily: "Minion !important",
                                textTransform: "none",
                            }}
                        />
                    )}
                </Box>
                <Typography variant="cardSubtitle">
                    {course.title}
                </Typography>

                {/* University Logo */}
                <div>
                    <Box sx={{ my: 1, p: 0.5, borderRadius: 2, width: 120, height: 40, display: 'flex', alignItems: 'center', boxShadow: '#0B707733 0px 2px 4px 0px' }}>
                        <img
                            src={course.universityLogo}
                            alt="University Logo"
                            style={{ maxHeight: '100%', maxWidth: '120px', objectFit: 'contain' }}
                        />
                    </Box>
                </div>

                <Box sx={{ mb: 2 }}>
                    <Typography variant="cardSubtitle">Starts: {course.startDate}</Typography>
                    <Typography variant="cardSubtitle">Duration: {course.duration}</Typography>
                </Box>

                <Button
                    variant="outlined"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center", // 👈 center content horizontally
                        textTransform: "none",
                        borderColor: colors.borderColor || "#e0e0e0",
                        color: "#4A5568",
                        borderRadius: "8px",
                        py: 1,
                        px: 2,
                        "&:hover": {
                            borderColor: colors.primary,
                            color: colors.primary,
                        },
                    }}
                >
                    Learn More
                    <ChevronRight />
                </Button>
            </Box>
        </Paper>
    );
};

export default CourseCard;
