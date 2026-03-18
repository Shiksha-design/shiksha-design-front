import React, { useState, useEffect } from "react";
import { Box, Container, Typography, CircularProgress } from "@mui/material";
import HighlightText from "../HighlightText";
import mediaImage from "../../assets/media.png";
import SectionTitle from "../Common/SectionTitle";
import companyService from "../../Services/companyService";

const CompaniesSection = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await companyService.getAll();
        if (Array.isArray(response)) {
          setCompanies(response.filter((c) => c.isVisible));
        } else if (response?.data) {
          setCompanies(response.data.filter((c) => c.isVisible));
        }
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);
  return (
    <Box sx={{ py: 3, textAlign: "center", bgcolor: "#F0F7FF" }}>
      <Container maxWidth="lg">
        <SectionTitle sx={{ mb: 3 }}>
          <HighlightText>Companies</HighlightText> That Our
          <br />
          Students Work At
        </SectionTitle>

        <Typography
          sx={{
            fontSize: { xs: "12px", md: "16px" },
            color: "#26394D",
            mb: 5,
            mx: "auto",
            px: { xs: 0, sm: 4, md: 8 },
          }}
        >
          Our students have gone on to build successful careers with leading
          organizations across diverse industries, showcasing the skills,
          knowledge, and confidence they gained through our programs.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 3, md: 6 },
            mt: 4,
          }}
        >
          {loading ? (
            <CircularProgress />
          ) : companies.length > 0 ? (
            companies.map((company) => (
              <Box
                key={company._id || company.id}
                component="img"
                src={company.image?.url || mediaImage}
                alt={company.name}
                sx={{
                  height: { xs: "30px", md: "50px" },
                  width: "auto",
                  objectFit: "contain",
                  filter: "grayscale(100%) opacity(0.7)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    filter: "grayscale(0%) opacity(1)",
                  },
                }}
              />
            ))
          ) : (
            <Box
              component="img"
              src={mediaImage}
              alt="Companies"
              sx={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default CompaniesSection;
