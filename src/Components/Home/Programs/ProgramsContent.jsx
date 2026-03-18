import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colors } from "../../../Config/theme";
import CategorySidebar from "./CategorySidebar";
import CourseCard from "./CourseCard";
import univercityLogo from "../../../assets/univercityLogo.png";
import categoryService from "../../../Services/categoryService";
import programService from "../../../Services/programService";
import ProgramsSkeleton from "./ProgramsSkeleton";

const ProgramsContent = ({ fullHeight, minHeight, onCourseClick }) => {
  const [categories, setCategories] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [programsLoading, setProgramsLoading] = useState(true);
  const [sidebarHeight, setSidebarHeight] = useState("auto");

  // Mobile specific state and hooks
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await categoryService.getAll();
        console.log("response", response);
        if (response?.statusCode === 200 && response.data.length > 0) {
          setCategories(
            Array.isArray(response.data)
              ? response.data
              : response.data.data || [],
          );

          // Select first category by default
          setSelectedCategoryId(response.data[0]._id);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!selectedCategoryId) return;

    const fetchPrograms = async () => {
      setProgramsLoading(true);
      try {
        const response =
          await programService.getByCategoryId(selectedCategoryId);
        if (response?.statusCode === 200) {
          setPrograms(response.data);
        } else {
          setPrograms([]);
        }
      } catch (error) {
        console.error("Error fetching programs:", error);
        setPrograms([]);
      } finally {
        setProgramsLoading(false);
      }
    };

    fetchPrograms();
  }, [selectedCategoryId]);

  const handleCategorySelect = (id) => {
    setSelectedCategoryId(id);
  };

  const handleAccordionChange = (categoryId) => (event, isExpanded) => {
    setExpanded(isExpanded ? categoryId : false);
    if (isExpanded) {
      setSelectedCategoryId(categoryId);
    }
  };

  // Helper to ensure course object has necessary fields
  const processCourse = (course) => ({
    ...course,
    image:
      course.images ||
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3", // Fallback image
    title: course.name || course.title || "Untitled Course",
    universityLogo: course.universityLogo || univercityLogo,
    startDate: course.startDate
      ? new Date(course.startDate).toLocaleDateString()
      : "TBA",
    duration: course.duration || "Self-paced",
    bestseller: course.isBestSeller || false,
  });

  if (isMobile) {
    return (
      <Box>
        {categories.map((category, index) => (
          <Accordion
            key={category._id}
            expanded={expanded === category._id}
            onChange={handleAccordionChange(category._id)}
            sx={{
              mb: 1,
              borderRadius: "8px !important",
              boxShadow: "none",
              "&:before": { display: "none" }, // Remove default divider
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{ color: expanded === category._id ? "#fff" : "inherit" }}
                />
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                fontWeight: 600,
                bgcolor: expanded === category._id ? colors.primary : "#fff",
                color: expanded === category._id ? "#fff" : "inherit",
                borderRadius: "8px",
              }}
            >
              <Typography
                fontWeight={expanded === category._id ? 600 : 400}
                color={expanded === category._id ? "#fff" : "inherit"}
              >
                {category.value}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ bgcolor: "#F0F8FF", p: 2 }}>
              {/* Horizontal Scroll Container */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  overflowX: "auto",
                  pb: 1,
                  mx: -2, // Extend scroll area to edges if desired, or keep contained
                  px: 2,
                  "&::-webkit-scrollbar": { display: "none" },
                  scrollbarWidth: "none",
                }}
              >
                {programsLoading && expanded === category._id ? (
                  <ProgramsSkeleton />
                ) : programs.length > 0 ? (
                  programs.map((course) => (
                    <Box
                      key={course._id || course.id}
                      sx={{ minWidth: 200, maxWidth: 200 }}
                    >
                      <CourseCard 
                        course={processCourse(course)} 
                        onClick={onCourseClick}
                      />
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2" sx={{ p: 2 }}>
                    No programs found.
                  </Typography>
                )}
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} md={3}>
        <CategorySidebar
          categories={categories}
          activeCategory={selectedCategoryId}
          onSelectCategory={handleCategorySelect}
          onHeightChange={setSidebarHeight}
          loading={loading}
          fullHeight={fullHeight}
          minHeight={minHeight}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <Box
          sx={{
            maxHeight: sidebarHeight,
            overflowY: "auto",
            /* Hide scrollbar for Chrome, Safari, Edge */
            "&::-webkit-scrollbar": {
              display: "none",
            },
            /* Hide scrollbar for Firefox */
            scrollbarWidth: "none",
            /* Hide scrollbar for IE/Edge legacy */
            msOverflowStyle: "none",
          }}
        >
          {loading || programsLoading ? (
            <ProgramsSkeleton />
          ) : (
            <Grid container spacing={3} sx={{ pb: 1 }}>
              {programs.length > 0 ? (
                programs.map((course) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={4}
                    key={course._id || course.id}
                  >
                    <CourseCard 
                      course={processCourse(course)} 
                      onClick={onCourseClick}
                    />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Box sx={{ p: 3, textAlign: "center" }}>
                    <Typography variant="h6" color="textSecondary">
                      No programs found for this category.
                    </Typography>
                  </Box>
                </Grid>
              )}
            </Grid>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProgramsContent;
