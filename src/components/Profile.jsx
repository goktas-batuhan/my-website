import { Box, Container, Typography } from "@mui/material";
import "./Profile.css";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useData } from "../contexts/DataContext";

const Profile = () => {
  const { darkMode } = useDarkMode();
  const { data } = useData();
  return (
    <Box
      className={`profile-container ${
        darkMode ? "dark-profile-container" : ""
      }`}
    >
      <Container maxWidth="lg">
        <Typography variant="h3">{data.profile?.title}</Typography>
        <Box className="profile-details">
          <Box className="basic-information">
            <Typography variant="h5">
              {data.profile?.basicInformation}
            </Typography>
            {data.profile?.informations.map((info) => (
              <Box className="basic-information-item" key={info.title}>
                <Typography variant="subtitle1">{info.title}</Typography>
                <Typography variant="body1">{info.value}</Typography>
              </Box>
            ))}
          </Box>
          <Box className="profile-picture">
            <img src="profile.jpeg" />
          </Box>
          <Box className="about-me">
            <Typography variant="h5">{data.profile?.about.title}</Typography>
            <Typography variant="body1">{data.profile?.about.text}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Profile;
