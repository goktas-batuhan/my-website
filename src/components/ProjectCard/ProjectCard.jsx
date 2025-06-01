import { Box, Link, Typography } from "@mui/material";
import "./ProjectCard.css";
import { useDarkMode } from "../../contexts/DarkModeContext";

const ProjectCard = ({ project, viewSite }) => {
  const { darkMode } = useDarkMode();
  console.log(project, viewSite);
  return (
    <Box className={`card ${darkMode ? "dark-card" : ""}`}>
      <Box className="card-img-container">
        <img src={project.img} />
      </Box>
      <Box className="project-details">
        <Typography variant="h4">{project.title}</Typography>
        <Typography variant="body1">
          {project.description}
          <Box className="technologies-container">
            {project?.technologies?.map((technology) => (
              <Box className="technology-item">{technology}</Box>
            ))}
          </Box>
          <Box className="project-actions">
            <Link color="inherit" href="#">
              {viewSite}
            </Link>
            <Link color="inherit" href="#">
              Github
            </Link>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
