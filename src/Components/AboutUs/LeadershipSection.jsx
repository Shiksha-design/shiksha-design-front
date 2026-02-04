import React, { useRef, useState } from "react";
import { Box, Container, Typography, IconButton, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "../../Config/theme";

/* ---------------- DATA ---------------- */

const leaders = [
  {
    id: 1,
    name: "Miss Smith Ellen",
    role: "COO",
    description:
      "A successful entrepreneur and NITK alum with 20+ years of experience, Krishna is among the world's top business leaders.",
    image: "https://pngimg.com/uploads/man/man_PNG6531.png",
  },
  {
    id: 2,
    name: "Miss Smith Ellen",
    role: "CEO",
    description:
      "A successful entrepreneur and NITK alum with 20+ years of experience, Krishna is among the world's top business leaders.",
    image: "https://pngimg.com/uploads/man/man_PNG6531.png",
  },
  {
    id: 3,
    name: "Miss Smith Ellen",
    role: "CTO",
    description:
      "A successful entrepreneur and NITK alum with 20+ years of experience, Krishna is among the world's top business leaders.",
    image: "https://pngimg.com/uploads/man/man_PNG6506.png",
  },
  {
    id: 4,
    name: "Miss Smith Ellen",
    role: "CFO",
    description:
      "A successful entrepreneur and NITK alum with 20+ years of experience, Krishna is among the world's top business leaders.",
    image: "https://pngimg.com/uploads/businessman/businessman_PNG6553.png",
  },
];

/* ---------------- CARD ---------------- */

const CARD_WIDTH = 300;
const GAP = 24;
const SCROLL_STEP = CARD_WIDTH + GAP;

const LeaderSwiperCard = ({ leader, active }) => {
  return (
    <Box
      sx={{
        width: 280,
        pt: 10, // Push card down so image can stick out
        transition: "all 0.4s ease",
        transform: active ? "scale(1.15)" : "scale(0.95)",
        opacity: active ? 1 : 0.8,
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={leader.image}
        alt={leader.name}
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: 240,
          width: "auto",
          maxWidth: "100%",
          // zIndex: 2,
          objectFit: "contain",
          filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))",
        }}
      />

      {/* CARD CONTENT */}
      <Paper
        elevation={0}
        sx={{
          bgcolor: "#0071E5", // Primary Blue
          color: "#fff",
          borderRadius: 4,
          p: 3,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end", // Align text to bottom/center
          boxShadow: active
            ? "0 20px 40px rgba(0, 113, 229, 0.3)"
            : "0 10px 20px rgba(0,0,0,0.1)",
          position: "relative",
          zIndex: 1,
          mt: 4, // Shift card down
        }}
      >
        <Typography
          fontWeight={700}
          sx={{ fontSize: "18px", color: "white" }}
          mb={1.5}
        >
          {leader.name}
        </Typography>

        <Typography
          fontSize={14}
          lineHeight={1.6}
          sx={{
            opacity: 0.9,
            fontSize: "14px",
            color: "white",
            letterSpacing: "0",
          }}
        >
          {leader.description}
        </Typography>
      </Paper>
    </Box>
  );
};

/* ---------------- SECTION ---------------- */

const LeadershipSection = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === "left" ? -SCROLL_STEP : SCROLL_STEP,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const center = el.scrollLeft + el.offsetWidth / 2;

    const index = Math.round((center - SCROLL_STEP / 2) / SCROLL_STEP);

    setActiveIndex(Math.max(0, Math.min(index, leaders.length - 1)));
  };

  return (
    <Box sx={{ py: { xs: 6, sm: 10 }, bgcolor: colors.mainBg }}>
      <Container maxWidth="lg">
        <Typography
          variant="title"
          align="center"
          sx={{ mb: 8, color: colors.primary }}
        >
          Meet The Leadership Team
        </Typography>

        <Box sx={{ position: "relative" }}>
          {/* Arrows */}
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "#E6EBF2",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              bgcolor: "#E6EBF2",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>

          {/* VIEWPORT (locks to 3 cards) */}
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: "83%" },
              mx: "auto",
              overflow: "hidden",
            }}
          >
            {/* TRACK */}
            <Box
              ref={scrollRef}
              onScroll={handleScroll}
              sx={{
                display: "flex",
                gap: `${GAP}px`,
                py: 6,
                scrollSnapType: "x mandatory",
                overflowX: "scroll",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {leaders.map((leader, index) => (
                <Box
                  key={leader.id}
                  sx={{
                    flex: `0 0 ${CARD_WIDTH}px`,
                    scrollSnapAlign: "center",
                  }}
                >
                  <LeaderSwiperCard
                    leader={leader}
                    active={index === activeIndex}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* Dots */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mt: 4,
            }}
          >
            {leaders.map((_, index) => (
              <Box
                key={index}
                onClick={() =>
                  scrollRef.current?.scrollTo({
                    left: index * SCROLL_STEP,
                    behavior: "smooth",
                  })
                }
                sx={{
                  width: activeIndex === index ? 32 : 10,
                  height: 10,
                  borderRadius: activeIndex === index ? 4 : "50%",
                  bgcolor: activeIndex === index ? colors.primary : "#E6EBF2",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LeadershipSection;
