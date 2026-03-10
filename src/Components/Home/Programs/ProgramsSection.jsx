import React from "react";
import { Box, Container } from "@mui/material";
import { colors } from "../../../Config/theme";
import HighlightText from "../../HighlightText";
import SectionTitle from "../../Common/SectionTitle";
import ProgramsContent from "./ProgramsContent";

const ProgramsSection = () => {
  return (
    <Box sx={{ pt: { xs: 4, sm: 6 }, bgcolor: colors.programsBg || "#F0F8FF" }}>
      <Container maxWidth="lg">
        <SectionTitle sx={{ textAlign: "center", pb: { xs: 1, md: 2 } }}>
          Explore Our <HighlightText>Programs</HighlightText>
        </SectionTitle>
        <ProgramsContent minHeight="450px" />
      </Container>
    </Box>
  );
};

export default ProgramsSection;
