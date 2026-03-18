import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { colors } from "../../Config/theme";
import faqService from "../../Services/faqService";

// REMOVED: hardcoded faqs array

const CourseFAQ = () => {
  const { id: programId } = useParams();
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchFaqs = async () => {
      setLoading(true);
      try {
        const response = await faqService.getByProgram(programId);
        if (response?.data) {
          setFaqs(response.data);
          if (response.data.length > 0) {
            setExpanded("panel0");
          }
        }
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    if (programId) {
      fetchFaqs();
    }
  }, [programId]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="title" sx={{ mb: 1, color: colors.primary }}>
        FAQ
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress size={24} />
        </Box>
      ) : faqs.length > 0 ? (
        faqs.map((faq, index) => (
          <Accordion
            key={faq._id || index}
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
                  color: expanded === `panel${index}` ? "#ff5722" : "#334155",
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
        ))
      ) : (
        <Typography variant="body2" color="text.secondary" sx={{ py: 2 }}>
          No FAQs available for this program.
        </Typography>
      )}
    </Box>
  );
};

export default CourseFAQ;
