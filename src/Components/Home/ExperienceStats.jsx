import React from "react";
import { Box, Container, Grid, Typography, Avatar } from "@mui/material";
import {
  PersonOutline,
  HandshakeOutlined,
  StarOutline,
  MenuBookOutlined,
} from "@mui/icons-material";
import experienceStateBg from "../../assets/experienceStateBg.png";
import { colors } from "../../Config/theme";
import userAvatar from "../../assets/userAvatar.svg";
import community from "../../assets/community.svg";
import userRate from "../../assets/userRate.svg";
import classCompleted from "../../assets/classCompleted.svg";

const stats = [
  {
    icon: <img src={userAvatar} alt="User Avatar" />,
    count: "1K+",
    label: "Successfully Trained",
  },
  {
    icon: <img src={classCompleted} alt="Handshake Icon" />,
    count: "5K+",
    label: "Classes Completed",
  },
  {
    icon: <img src={userRate} alt="Star Icon" />,
    count: "99%",
    label: "Satisfaction Rate",
  },
  {
    icon: <img src={community} alt="Book Icon" />,
    count: "5K+",
    label: "Students Community",
  },
];

const ExperienceStats = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(to bottom, ${colors.mainBg} 50%, transparent 50%)`,
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box
          sx={{
            backgroundImage: `url(${experienceStateBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: colors.primary,
            borderRadius: { xs: 4, md: 50 }, // Rounded corners (Pill on desktop)
            py: { xs: 6, md: 4 },
            px: { xs: 4, md: 4 },
            color: "#fff",
            boxShadow: "0px 10px 40px rgba(0, 113, 229, 0.2)",
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 2 }}
            alignItems="center"
            justifyContent="center"
          >
            {stats.map((stat, index) => (
              <Grid item xs={8} sm={6} md={3} key={index}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  {/* Icon Circle */}
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: "#fff",
                      color: "#26394D", // Dark icon color
                    }}
                  >
                    {stat.icon}
                  </Avatar>

                  {/* Text Content */}
                  <Box>
                    <Typography
                      color={"inherit"}
                      sx={{ fontSize: { xs: "1 6px", md: "24px" } }}
                    >
                      {stat.count}
                    </Typography>
                    <Typography
                      sx={{
                        opacity: 0.8,
                        fontSize: { xs: "12px", md: "16px" },
                        color: "inherit",
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceStats;
