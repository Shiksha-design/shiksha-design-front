import { colors } from "../../Config/theme";

/* ---------------- ABOUT HERO ---------------- */
export const aboutHeroStyles = {
  container: {
    pt: 10,
    pb: 6,
    bgcolor: colors.mainBg,
  },
  title: {
    mb: 3,
    textAlign: { xs: "center", sm: "left" },
  },
  highlightText: {
    color: colors.secondary,
  },
  description: {
    fontSize: { xs: "14px", md: "16px" },
    color: "#26394D",
    letterSpacing: "0",
    textAlign: { xs: "center", sm: "left" },
  },
  imageBox: (placeholder) => ({
    width: { xs: 300, md: 420 },
    height: { xs: 300, md: 420 },
    background: `url(${placeholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    objectFit: "contain",
  }),
};

/* ---------------- VALUES SECTION ---------------- */
export const valuesSectionStyles = {
  container: {
    py: { xs: 6, md: 10 },
    bgcolor: colors.mainBg,
  },
  title: {
    mb: 6,
    color: colors.primary,
  },
  card: {
    p: 4,
    height: "100%",
    borderRadius: 4,
    textAlign: "left",
    border: `1px solid ${colors.borderColor || "#E0E0E0"}`,
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
      transform: "translateY(-5px)",
      borderColor: colors.primary,
    },
  },
  iconBox: {
    color: "#26394D",
    mb: 2,
  },
  icon: {
    fontSize: 48,
    strokeWidth: 1,
  },
  cardTitle: {
    mb: 2,
    color: "#26394D",
  },
  cardDescription: {
    color: "#555",
    lineHeight: 1.6,
  },
};

/* ---------------- VIDEO SECTION ---------------- */
export const videoSectionStyles = {
  container: {
    py: 8,
    pb: 12,
  },
  videoBox: (placeholder) => ({
    position: "relative",
    width: "100%",
    height: { xs: 300, md: 500 },
    borderRadius: 4,
    overflow: "hidden",
    background: `url(${placeholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  playButton: {
    width: 60,
    height: 60,
    bgcolor: "transparent",
    color: "#26394D",
    zIndex: 2,
    "&:hover": {
      bgcolor: "rgba(255,255,255,0.2)",
      transform: "scale(1.1)",
      color: "white",
    },
    transition: "all 0.3s ease",
  },
};

/* ---------------- LEADERSHIP SECTION ---------------- */
export const leadershipSectionStyles = {
  container: {
    py: { xs: 6, sm: 10 },
    bgcolor: colors.mainBg,
  },
  title: {
    mb: 8,
    color: colors.primary,
  },
  arrowButton: (position) => ({
    position: "absolute",
    [position]: 0,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    bgcolor: "#E6EBF2",
    display: { xs: "none", sm: "flex" },
  }),
  viewport: {
    maxWidth: { xs: "100%", sm: "83%" },
    mx: "auto",
    overflow: "hidden",
  },
  track: (gap) => ({
    display: "flex",
    gap: `${gap}px`,
    py: 6,
    scrollSnapType: "x mandatory",
    overflowX: "scroll",
    "&::-webkit-scrollbar": { display: "none" },
  }),
  cardWrapper: (width) => ({
    flex: `0 0 ${width}px`,
    scrollSnapAlign: "center",
  }),
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: 1,
    mt: 4,
  },
  dot: (active) => ({
    width: active ? 32 : 10,
    height: 10,
    borderRadius: active ? 4 : "50%",
    bgcolor: active ? colors.primary : "#E6EBF2",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }),
  card: (active) => ({
    width: 280,
    pt: 10,
    transition: "all 0.4s ease",
    transform: active ? "scale(1.15)" : "scale(0.95)",
    opacity: active ? 1 : 0.8,
    position: "relative",
  }),
  cardImage: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    height: 240,
    width: "auto",
    maxWidth: "100%",
    objectFit: "contain",
    filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.1))",
  },
  cardContent: (active) => ({
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
  }),
  cardName: {
    fontSize: "18px",
    color: "white",
  },
  cardDescription: {
    opacity: 0.9,
    fontSize: "14px",
    color: "white",
    letterSpacing: "0",
  },
};
