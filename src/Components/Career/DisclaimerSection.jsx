import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { colors } from "../../Config/theme";

const DisclaimerSection = () => {
  return (
    <Box sx={{ bgcolor: "#F8FAFC", py: 8 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{ color: colors.primary, fontWeight: 700, mb: 3 }}
        >
          Disclaimer
        </Typography>
        <Typography
          sx={{
            color: "#64748b",
            fontSize: "12px",
            lineHeight: 1.8,
            maxWidth: "900px",
            mx: "auto",
            mb: 4,
          }}
        >
          Simplilearn is proud to be an Equal Opportunity Employer. We celebrate
          diversity & do not discriminate on the basis of race, religion,
          colour, sex, gender identity, sexual orientation, age,
          non-disqualifying physical or mental disability, national origin,
          veteran status or any other basis covered by appropriate laws. All
          aspects of employment including the decision to hire, promote,
          discipline, or discharge, will be based on merit, competence,
          performance, and business needs.
        </Typography>

        <Typography
          sx={{ color: "#D32F2F", fontSize: "12px", fontWeight: 700, mb: 1 }}
        >
          WARNING For RECRUITMENT SCAMS & FRAUD:
        </Typography>
        <Typography
          sx={{
            color: "#64748b",
            fontSize: "12px",
            lineHeight: 1.8,
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          Simpillearn never asks for any kind of money, donation or credit card
          details during Recruitment process. Please be aware of any suspicious
          email activity from people who could be pretending to be recruiters or
          senior individuals at Simplilearn. If in doubt, you can reach out to
          careers@simplilearn.net
        </Typography>
      </Container>
    </Box>
  );
};

export default DisclaimerSection;
