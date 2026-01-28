import React from "react";
import { Box } from "@mui/material";
import CareerHero from "../../Components/Career/CareerHero";
import BenefitsSection from "../../Components/Career/BenefitsSection";
import PositionsSection from "../../Components/Career/PositionsSection";
import GallerySection from "../../Components/Career/GallerySection";
import DisclaimerSection from "../../Components/Career/DisclaimerSection";

const Career = () => {
  return (
    <Box>
      <CareerHero />
      <BenefitsSection />
      <PositionsSection />
      <GallerySection />
      <DisclaimerSection />
    </Box>
  );
};

export default Career;
