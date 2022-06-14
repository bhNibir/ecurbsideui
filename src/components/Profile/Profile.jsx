import { Box, Container, Grid } from "@mui/material";
import useAuth from "../../hooks/useAuth";
import ProfileCover from "./ProfileCover";

const Profile = () => {
  const { loggedInUser } = useAuth();
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ProfileCover userInfo={loggedInUser} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Profile;
