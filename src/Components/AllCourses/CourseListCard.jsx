import React from "react";
import { Box, Paper, Typography, Chip, Button } from "@mui/material";
import { School, AccessTimeFilled, SignalCellularAltOutlined, FileCopy, Star, ArrowForward } from "@mui/icons-material";
import { colors } from "../../Config/theme";
import { Link, useNavigate } from "react-router-dom";

const CourseListCard = ({ course }) => {
    const navigation = useNavigate();
    return (
        <Paper
            elevation={0}
            onClick={() => navigation(`/course/${course.id}`)}
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: colors.white,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                border: `1px solid ${colors.borderColor || "#e2e8f0"}`,
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                "&:hover": {
                    boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.1)",
                },
            }}
        >
            {/* Course Image */}
            <Box
                sx={{
                    width: { xs: "100%", sm: "300px" },
                    minWidth: { sm: "300px" },
                    bgcolor: "#94a3b8", // Placeholder background if image fails or is loading
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: { xs: 200, md: "auto" }
                }}
            >
                {/* Mock image placeholder or actual image */}
                {course.image ? (
                    <Box
                        component="img"
                        src={course.image}
                        alt={course.title}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            minHeight: "200px"
                        }}
                    />
                ) : (
                    <Box sx={{ p: 2, opacity: 0.5 }}>
                        {/* Icon placeholder if no image */}
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                        </svg>
                    </Box>
                )}

                {/* Category Label */}
                <Chip
                    label={course.category || "Development"}
                    sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        bgcolor: colors.highlight,
                        color: colors.white,
                        borderRadius: "4px",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "20px",
                    }}
                />
            </Box>

            {/* Content */}
            <Box sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ mb: 'auto' }}>
                    <Typography  sx={{fontSize:"14px", color: "#063C40", mb: 1, fontWeight:400 }}>
                        by {course.author || "Determined-Poitras"}
                    </Typography>

                    <Typography  sx={{ fontWeight: 700, color: "#26394D", mb: 2, fontSize:"20px" }}>
                        {course.title}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <AccessTimeFilled sx={{ fontSize: 18, color: colors.highlight }} />
                            <Typography  sx={{ fontSize: 14, color:"#26394D", fontWeight:400 }}>{course.duration || "2 Weeks"}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <School sx={{ fontSize: 18, color: colors.highlight }} />
                            <Typography  sx={{ fontSize: 14, color:"#26394D", fontWeight:400 }}>{course.students || "156 Students"}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <SignalCellularAltOutlined sx={{ fontSize: 18, color: colors.highlight }} />
                            <Typography  sx={{ fontSize: 14, color:"#26394D", fontWeight:400 }}>{course.level || "All levels"}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <FileCopy sx={{ fontSize: 18, color: colors.highlight }} />
                            <Typography  sx={{ fontSize: 14, color:"#26394D", fontWeight:400 }}>{course.lessons || "20 Lessons"}</Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    mt: 2,
                    pt: 1,
                    borderTop: `1px solid ${colors.borderColor || "#e2e8f0"}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                        <Typography sx={{ textDecoration: 'line-through', color: '#8FA1B2', fontSize: 20, fontWeight:700 }}>
                            {course.originalPrice || "$29.0"}
                        </Typography>
                        <Typography sx={{ color: colors.secondary,fontStyle:"bold", fontWeight: 700, fontSize: 20 }}>
                            {course.price === 0 ? "Free" : `$${course.price}`}
                        </Typography>
                    </Box>

                    <Button
                        component={Link}
                        to={`/course/${course.id}`}
                        sx={{
                            textTransform: 'none',
                            color: '#26394D',
                            '&:hover': { bgcolor: 'transparent', color: colors.primary },
                            fontSize:"16px",
                            fontWeight:400
                        }}>
                        View more
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default CourseListCard;
