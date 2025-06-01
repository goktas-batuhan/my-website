import { Box, Container, Link, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useData } from "../contexts/DataContext";

const Footer = () => {
  const { darkMode } = useDarkMode();
  const { data } = useData();
  return (
    <Box className={`footer ${darkMode ? "dark-footer" : ""}`}>
      <Container className="footer-container">
        <Typography variant="h4">{data.footer?.title}</Typography>
        <Typography variant="body1">{data.footer?.description}</Typography>
        <Link href="#">{data.footer?.email}</Link>
        <Box className="footer-contacts">
          <TwitterIcon />
          <AlternateEmailIcon />
          <InstagramIcon />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
