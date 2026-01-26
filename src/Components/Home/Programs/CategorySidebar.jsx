import React, { useRef, useEffect } from "react";
import { Box, List, ListItemButton, Typography } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { colors } from "../../../Config/theme";

const CategorySidebar = ({ categories, activeCategory, onSelectCategory, onHeightChange }) => {
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            onHeightChange(listRef.current.clientHeight);
        }
    }, [categories, onHeightChange]);

    return (
        <Box
            ref={listRef}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
            <List component="nav" sx={{ p: 0 }}>
                {categories.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                        <ListItemButton
                            key={category}
                            selected={isActive}
                            onClick={() => onSelectCategory(category)}
                            sx={{
                                mb: 0.5,
                                borderRadius: "8px",
                                justifyContent: "space-between",
                                bgcolor: isActive ? `${colors.primary} !important` : colors.white,
                                color: isActive ? colors.white : "inherit",
                                "&:hover": {
                                    bgcolor: colors.primary,
                                    color: `${colors.white} !important`,
                                },
                                py: 1.5,
                                px: 2,
                            }}
                        >
                            <Typography
                                variant="sidebarItem"
                                sx={{
                                    fontWeight: isActive ? 600 : 400,
                                    color: "inherit"
                                }}
                            >
                                {category}
                            </Typography>
                            <ChevronRight
                                sx={{
                                    color: isActive ? colors.white : colors.gray,
                                    fontSize: 20,
                                }}
                            />
                        </ListItemButton>
                    );
                })}
            </List>
        </Box>
    );
};

export default CategorySidebar;
