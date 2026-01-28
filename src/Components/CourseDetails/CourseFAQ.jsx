import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { colors } from "../../Config/theme";

const faqs = [
  {
    question: "What Does Royalty Free Mean?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Va rius tellus justo odio parturient mauris curabitur lorem in.",
  },
  {
    question: "What Does Royalty Free Mean?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "What Does Royalty Free Mean?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "What Does Royalty Free Mean?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const CourseFAQ = () => {
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="title" sx={{ mb: 1, color: colors.primary }}>
        FAQ
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            borderBottom: "1px solid #e2e8f0",
            "&:before": { display: "none" },
            mb: 2,
            "&.Mui-expanded": { margin: "0 0 16px 0" },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{
              pl: 0,
              "& .MuiAccordionSummary-content": { margin: "12px 0" },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: expanded === `panel${index}` ? "#ff5722" : "#334155", // Orange when active per design
                fontWeight: expanded === `panel${index}` ? 500 : 400,
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ pl: 0, pt: 0 }}>
            <Typography variant="body2" color="text.secondary" paragraph>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CourseFAQ;
