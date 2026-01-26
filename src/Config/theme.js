import { createTheme } from "@mui/material";

export const colors = {
  primary: "#0071E5",
  mainBg: "#F0F7FF",
  loginBg: "#F0FFFE",
  signUpBg: "#F0F7FF",
  black: "#0a0a0a",
  hoverColor: "#007b7b",
  secondary: "#FD661F",
  accent: "#090b0cff",
  background: "white",
  input: "#ffffff00",
  text: "#0a0a0a",
  textSecondary: "#9E9E9E",
  white: "#FFFFFF",
  transparent: "#ffffff00",
  chipShadow: "0px 0px 5px 0px rgba(199,199,199,0.79)",
  shadow: "0px 4px 6px 2px rgba(0, 0, 0, 0.1)",
  headerText: "#005653",
  highlight: "#FD661F",
  programsBg: "#F0F8FF", // Light blue background for the section
  sidebarBg: "#FFFFFF",
  borderColor: "#E0E0E0",
  gray: "#A0aec0",
};
export const darkColors = {
  primary: "#2A363B",
  black: "#0a0a0a",
  hoverColor: "#1E1E1E",
  secondary: "#2A363B",
  accent: "#1E90FF",
  background: "#121212",
  input: "#F9F9F9",
  text: "#E0E0E0",
  textSecondary: "#B0B0B0",
  white: "#FFFFFF",
  transparent: "#00000000",
  chipShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.79)",
  shadow: "0px 4px 6px 2px rgba(0, 0, 0, 0.5)",
  headerText: "#FFFFFF",
  borderColor: "#292929",
};

export const FontFamily = {
  Regular: "'Open Sans', sans-serif !important",
  Bold: "'Open Sans', sans-serif !important",
  Minion: "'Open Sans', sans-serif !important",
};

const theme = (themeData) =>
  createTheme({
    MuiCssBaseline: {
      "@global": {
        fontFamily: "'Open Sans', sans-serif !important",
      },
    },
    palette: {
      primary: {
        main: themeData.primary,
      },
      secondary: {
        main: themeData.secondary,
      },
      accent: {
        main: themeData.accent,
      },
      background: {
        default: themeData.background,
      },
      text: {
        primary: themeData.text,
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            sectionHeader: "h2",
            cardTitle: "h3",
            cardSubtitle: "p",
            sidebarItem: "span",
            infoText: "span",
          },
        },
        variants: [
          {
            props: { variant: "sectionHeader" },
            style: {
              fontWeight: 700,
              fontSize: "72px !important",
              lineHeight: "84px",
              fontFamily: "'Open Sans', sans-serif !important",
              letterSpacing: "0px",
              verticalAlign: "middle",
              color: "#2A394E", // Keeping theme color
              textAlign: "center",
              marginBottom: "48px",
              "@media (max-width: 768px)": {
                fontSize: "48px !important", // Adjusted for mobile from 72px potentially
                lineHeight: "1.2",
                marginBottom: "32px",
              },
              "@media (max-width: 480px)": {
                fontSize: "24px !important", // Adjusted for mobile from 72px potentially
                lineHeight: "1.2",
                marginBottom: "16px",
              },
            },
          },
          {
            props: { variant: "cardTitle" },
            style: {
                fontWeight: 700,
                fontSize: "20px",
                color: "#2A394E",
                marginBottom: "8px",
                fontFamily: "'Open Sans', sans-serif !important",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                lineHeight: 1.3,
            },
          },
          {
            props: { variant: "cardSubtitle" },
            style: {
                fontWeight: 400,
                fontSize: "18px",
                color: "#26394D",
                fontFamily: "'Open Sans', sans-serif !important",
                lineHeight: 1.5,
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
            },
          },
          {
            props: { variant: "sidebarItem" },
            style: {
                fontSize: "16px",
                fontFamily: "'Open Sans', sans-serif !important",
            },
          },
          {
            props: { variant: "infoText" },
            style: {
                fontSize: "14px",
                color: "#666",
                fontFamily: "'Open Sans', sans-serif !important",
                marginBottom: "4px",
                display: "block",
            },
          },
        ],
        styleOverrides: {
          root: {
            display: "block",
            transition: "0.5s",
            fontFamily: "'Open Sans', sans-serif !important",
            letterSpacing: "0.6px",
            color: themeData.text,
            overflow: "hidden",
            fontWeight: 400,
            fontSize: 14,
            "@media (max-width: 768px)": {
              fontSize: 12,
            },
          },

          h1: {
            fontSize: 50,
            fontWeight: 700,
            fontFamily: "'Open Sans', sans-serif !important",
            "@media (max-width: 768px)": {
              fontSize: "36px !important",
            },
          },
          h3: {
            fontSize: 40,
            fontWeight: 700,
            fontFamily: "'Open Sans', sans-serif !important",
            "@media (max-width: 768px)": {
              fontSize: "26px !important",
            },
          },
          title: {
            fontSize: 32,
            fontWeight: 700,
            fontFamily: "'Open Sans', sans-serif !important",
            "@media (max-width: 768px)": {
              fontSize: "18px !important",
            },
          },
          subText: {
            fontWeight: "500 !important",
            fontFamily: "'Open Sans', sans-serif !important",
            fontSize: 16,
            "@media (max-width: 768px)": {
              fontSize: "14px !important",
            },
          },
          subTitle: {
            fontWeight: "700 !important",
            fontFamily: "'Open Sans', sans-serif !important",
            fontSize: 18,
          },
          head: {
            fontWeight: "700 !important",
            fontFamily: "'Open Sans', sans-serif !important",
            fontSize: 26,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: themeData.text,
            transition: "500ms",
            fontFamily: "'Open Sans', sans-serif !important",
            // "&:hover": {
            //   backgroundColor: themeData.white,
            //   color: themeData.white,
            // },
            outline: "none !important",
            "@media (hover: none)": {
              "&:hover": {
                backgroundColor: "transparent",
                color: `${themeData.primary} !important`,
              },
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: themeData.primary,
            backgroundColor: "transparent",
            transition: "all 300ms ease",
            fontFamily: "'Open Sans', sans-serif !important",
            fontWeight: 400,
            fontSize: 16,
            borderRadius: "8px",
            textTransform: 'none',
            padding: "8px 16px",
            outline: "none !important",
            "@media (max-width: 768px)": {
              fontSize: "14px !important",
              borderRadius: "4px",
              padding: "6px 8px !important",
            },
             "&:hover": {
                backgroundColor: `${themeData.primary} !important`,
                color: themeData.white,
              },
          },

          contained: {
            color: themeData.headerText,
            backgroundColor: themeData.primary,
            color: themeData.white,
          },
        },
        variants: [
          {
            props: { variant: "outlined" },
            style: {
              color: themeData.primary,
              borderColor: themeData.primary,
              paddingLeft: "16px !important",
              paddingRight: "16px !important",
              "&:hover": {
                backgroundColor: `${themeData.primary} !important`,
                color: themeData.white,
              },
            },
          },
          {
            props: { variant: "secondary" },
            style: {
              color: themeData.white,
              backgroundColor: themeData.secondary,
              "&:hover": {
                backgroundColor: `${themeData.secondary} !important`,
                color: themeData.white,
              },
            },
          },
        ],
      },

      MuiTab: {
        styleOverrides: {
          root: {
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: "600",
            outline: "none !important",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "gray", // Default label color
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          input: {
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            fontSize: 16, // Updated from 14 to 16 based on user context
            lineHeight: "24px",
            letterSpacing: "0px",
            "&::placeholder": {
              color: "gray", // Placeholder color
              opacity: 1, // Ensure full color opacity
              fontFamily: "'Open Sans', sans-serif", // explicit placeholder font
              fontWeight: 400,
            },
          },
          root: {
            borderRadius: "8px",
            "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
              {
                appearance: "none",
                margin: 0,
              },
          },
          notchedOutline: {
            borderColor: themeData.borderColor,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            padding: "4px 0px",
            fontSize: 12,
            fontFamily: "'Open Sans', sans-serif",
            textTransform: "none",
            height: "auto",
          },
        },
      },
    },
  });

export default theme;