import { Box, Switch, Typography, Button } from "@mui/material";
import "./About.css";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useData } from "../contexts/DataContext";
import { GitHub, LinkedIn } from "@mui/icons-material";

const About = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { toggleLanguage } = useLanguage();
  const { data } = useData();

  return (
    <Box className={`container ${darkMode ? "dark-mode-container" : ""}`}>
      <Box className="header">
        <Box className="translation-button">
          <Typography onClick={toggleLanguage} className="translation-text">
            {data?.languageToggle}
          </Typography>
        </Box>
        <Box className="theme-toggle">
          <Typography variant="subtitle1">DARK MODE</Typography>
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            slotProps={{
              input: {
                "aria-label": "DARK MODE",
              },
            }}
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#FFE86E", // Toggle (thumb) rengi
                "& + .MuiSwitch-track": {
                  backgroundColor: "#caf280", // Açıkken arka plan (track)
                },
              },
              "& .MuiSwitch-switchBase": {
                color: "#FFE86E", // Kapalıyken toggle rengi
                "& + .MuiSwitch-track": {
                  backgroundColor: "#8F88FF", // Kapalıyken arka plan
                },
              },
              "& .MuiSwitch-thumb": {
                boxShadow: "0 0 2px 2px rgba(0,0,0,0.2)", // Ekstra efekt
              },
            }}
          />
        </Box>
      </Box>
      <Box className="about">
        <Typography variant="h4">Batuhan Göktaş</Typography>
        <Box className="about-details">
          <Box className="about-details-text">
            <Typography variant="h3">{data?.intro?.text}</Typography>
            <Typography variant="body1">{data?.intro?.description}</Typography>
            <Box
              className={`about-details-links ${
                darkMode ? "dark-about-details-links" : ""
              }`}
            >
              <Button variant="contained" startIcon={<GitHub />}>
                Github
              </Button>
              <Button variant="contained" startIcon={<LinkedIn />}>
                Linkedin
              </Button>
            </Box>
          </Box>
          <Box className="about-details-image-container">
            <Box className="about-details-image" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
