import { createTheme } from "@mui/material";

export const colors = {
  primary: "#0071E5",
  mainBg: "#F0F7FF",
  loginBg: "#F0FFFE",
  signUpBg: "#F0F7FF",
  black: "#0a0a0a",
  hoverColor: "#007b7b",
  secondary: "#33c2751a",
  accent: "#1E90FF",
  background: "white",
  input: "#ffffff00",
  text: "#0a0a0a",
  textSecondary: "#9E9E9E",
  white: "#FFFFFF",
  transparent: "#ffffff00",
  chipShadow: "0px 0px 5px 0px rgba(199,199,199,0.79)",
  shadow: "0px 4px 6px 2px rgba(0, 0, 0, 0.1)",
  headerText: "#005653",
  
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
  Regular: "EuropaRegular !important",
  Bold: "EuropaBold !important",
  Minion: "Minion !important",
};
const Minion = {
  fontFamily: FontFamily.Regular,
  fontStyle: "normal",
  fontDisplay: "swap",
  src: "url('../Assets/Fonts/Minion.ttf') format('ttf')",
};
const theme = (themeData) =>
  createTheme(theme, {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Minion],
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
        styleOverrides: {
          root: {
            display: "block",
            transition: "0.5s",
            fontFamily: "Minion !important",
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
            fontFamily: "Minion !important",
            "@media (max-width: 768px)": {
              fontSize: "36px !important",
            },
          },
          h3: {
            fontSize: 40,
            fontWeight: 700,
            fontFamily: "Minion !important",
            "@media (max-width: 768px)": {
              fontSize: "26px !important",
            },
          },
          title: {
            fontSize: 32,
            fontWeight: 700,
            fontFamily: "Minion !important",
            "@media (max-width: 768px)": {
              fontSize: "18px !important",
            },
          },
          subText: {
            fontWeight: "500 !important",
            fontFamily: "Minion !important",
            fontSize: 16,
            "@media (max-width: 768px)": {
              fontSize: "14px !important",
            },
          },
          subTitle: {
            fontWeight: "700 !important",
            fontFamily: "Minion !important",
            fontSize: 18,
          },
          head: {
            fontWeight: "700 !important",
            fontFamily: "Minion !important",
            fontSize: 26,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: themeData.primary,
            transition: "500ms",
            fontFamily: `EuropaRegular !important`,
            // "&:hover": {
            //   backgroundColor: themeData.white,
            //   color: themeData.white,
            // },
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
            backgroundColor: themeData.white,
            transition: "all 300ms ease",
            fontFamily: `Minion !important`,
            fontWeight: 700,
            fontSize: 14,
            position: "relative",
            overflow: "hidden",
            padding: "10px",
            borderRadius: 8,
            zIndex: 1,
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          },
          containedPrimary: {
            color: themeData.headerText,
            backgroundColor: themeData.secondary,
            zIndex: 1,
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              top: 0,
              width: "51%",
              height: "100%",
              backgroundColor: themeData.hoverColor,
              transition: "transform 300ms ease",
              zIndex: -1,
            },
            "&::before": {
              left: 0,
              transform: "translateX(-102%)",
            },
            "&::after": {
              right: 0,
              transform: "translateX(102%)",
            },
            "&:hover": {
              color: themeData.white,
              "&::before": {
                transform: "translateX(0)",
              },
              "&::after": {
                transform: "translateX(0)",
              },
            },
            // "@media (hover: none)": {
            //   "&:hover": {
            //     backgroundColor: "transparent",
            //     color: `${themeData.primary} !important`,
            //     "&::before, &::after": {
            //       transform: "translateX(-102%)",
            //     },
            //   },
            // },
          },
          secondary: {
            color: themeData.primary,
            backgroundColor: themeData.white,
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: themeData.hoverColor,
              transform: "scaleX(0)",
              transformOrigin: "right",
              transition: "transform 500ms ease",
              zIndex: -1,
            },
            "&:hover": {
              color: themeData.white,
              "&::before": {
                transform: "scaleX(1)",
                transformOrigin: "left",
              },
            },
            "@media (hover: none)": {
              "&:hover": {
                backgroundColor: themeData.transparent,
                color: `${themeData.primary} !important`,
                "&::before": {
                  transform: "scaleX(0)",
                },
              },
            },
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: {
            fontFamily: `Minion`,
            fontWeight: "600",
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
            fontFamily: "Minion",
            fontSize: 14,
            "&::placeholder": {
              color: "gray", // Placeholder color
              opacity: 1, // Ensure full color opacity
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
            fontFamily: "Minion",
            textTransform: "uppercase",
            height: "auto",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
            padding: 0,
            margin: 0,
            fontFamily: "Minion",
          },
        },
      },
    },
  });

export default theme;