import { Box, Container, Typography } from "@mui/material";
import "./Projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useData } from "../contexts/DataContext";

const Projects = () => {
  const { darkMode } = useDarkMode();
  const { data } = useData();
  return (
    <Box
      className={`projects-container ${
        darkMode ? "dark-projects-container" : ""
      }`}
    >
      <Container maxWidth="lg">
        <Typography variant="h3">{data.projects?.title}</Typography>
        {data.projects?.projects?.map((project) => (
          <ProjectCard
            project={project}
            viewSite={data?.viewSite}
            key={project.title}
          />
        ))}
      </Container>
    </Box>
  );
};

export default Projects;
