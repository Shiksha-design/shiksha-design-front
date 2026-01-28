import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { colors } from "../../Config/theme";

const DisclaimerSection = () => {
  return (
    <Box sx={{ bgcolor: "#F8FAFC", py: 8 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="title" sx={{ color: colors.primary, mb: 3 }}>
          Disclaimer
        </Typography>
        <Typography
          sx={{
            color: "#26394D",
            fontSize: "16px",
            lineHeight: "28px",
            mb: 4,
            letterSpacing: "0",
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
          sx={{ color: "#D32F2F", fontSize: "16px", fontWeight: 700, mb: 1 }}
        >
          WARNING For RECRUITMENT SCAMS & FRAUD:
        </Typography>
        <Typography
          sx={{
            color: "#26394D",
            fontSize: "16px",
            lineHeight: "28px",
            letterSpacing: "0",
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
