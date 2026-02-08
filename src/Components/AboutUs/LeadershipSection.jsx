import React, { useRef, useState } from "react";
import { Box, Container, Typography, IconButton, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "../../Config/theme";
import { leadershipSectionStyles } from "./styles";

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
    <Box sx={leadershipSectionStyles.card(active)}>
      <Box
        component="img"
        src={leader.image}
        alt={leader.name}
        sx={leadershipSectionStyles.cardImage}
      />

      {/* CARD CONTENT */}
      <Paper elevation={0} sx={leadershipSectionStyles.cardContent(active)}>
        <Typography
          fontWeight={700}
          sx={leadershipSectionStyles.cardName}
          mb={1.5}
        >
          {leader.name}
        </Typography>

        <Typography
          fontSize={14}
          lineHeight={1.6}
          sx={leadershipSectionStyles.cardDescription}
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
    <Box sx={leadershipSectionStyles.container}>
      <Container maxWidth="lg">
        <Typography
          variant="title"
          align="center"
          sx={leadershipSectionStyles.title}
        >
          Meet The Leadership Team
        </Typography>

        <Box sx={{ position: "relative" }}>
          {/* Arrows */}
          <IconButton
            onClick={() => scroll("left")}
            sx={leadershipSectionStyles.arrowButton("left")}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            onClick={() => scroll("right")}
            sx={leadershipSectionStyles.arrowButton("right")}
          >
            <ArrowForwardIcon />
          </IconButton>

          {/* VIEWPORT (locks to 3 cards) */}
          <Box sx={leadershipSectionStyles.viewport}>
            {/* TRACK */}
            <Box
              ref={scrollRef}
              onScroll={handleScroll}
              sx={leadershipSectionStyles.track(GAP)}
            >
              {leaders.map((leader, index) => (
                <Box
                  key={leader.id}
                  sx={leadershipSectionStyles.cardWrapper(CARD_WIDTH)}
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
          <Box sx={leadershipSectionStyles.dotsContainer}>
            {leaders.map((_, index) => (
              <Box
                key={index}
                onClick={() =>
                  scrollRef.current?.scrollTo({
                    left: index * SCROLL_STEP,
                    behavior: "smooth",
                  })
                }
                sx={leadershipSectionStyles.dot(activeIndex === index)}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LeadershipSection;
