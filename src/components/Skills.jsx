import { Box, Container, Grid, Typography } from "@mui/material";
import "./Skills.css";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useData } from "../contexts/DataContext";

const Skills = () => {
  const { darkMode } = useDarkMode();
  const { data } = useData();
  return (
    <Box className={`skills ${darkMode ? "dark-skills" : ""}`}>
      <Container
        className={`skills-container ${
          darkMode ? "dark-skills-container" : ""
        }`}
        maxWidth="md"
      >
        <Typography variant="h3">{data?.skills?.title}</Typography>
        <Box className="skills-item-container">
          {data?.skills?.skills.map((skill) => (
            <Box className="skills-item" key={skill.title}>
              <img src={skill.icon} alt={skill.title} />
              <Typography variant="subtitle1">{skill.title}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
