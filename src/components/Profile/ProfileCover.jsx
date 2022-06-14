import { Avatar, Box, Card, CardMedia, Paper, Typography } from "@mui/material";
import coverImg from "../../assets/images/users/cover-photo.jpg";
import UsrAvtr from "../../assets/images/users/user-round.svg";
import { formateName } from "../../utils/formatting";
import ProfileTabs from "./ProfileTabs";

const ProfileCover = ({ userInfo, children }) => {
  const { firstName, lastName, username, profilePicture } = userInfo;

  return (
    <>
      <Box>
        <Card>
          <CardMedia
            component="img"
            height="240"
            image={coverImg}
            alt="green iguana"
            sx={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
        </Card>

        <Paper
          sx={{
            paddingLeft: 6,
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <Avatar
            alt={firstName && lastName ? formateName(userInfo) : "User Name"}
            src={profilePicture ? profilePicture : UsrAvtr}
            sx={{
              marginTop: "-50px",
              bgcolor: "#eaeaf0",
              width: 120,
              height: 120,
              border: "solid 5px #fff",
            }}
          />
          <Box
            sx={{
              marginTop: 3,
              paddingBottom: 3,
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {firstName && lastName ? formateName(userInfo) : "User Name"}
            </Typography>
            <Typography variant="body1" gutterBottom>
              @{username}
            </Typography>
          </Box>
          <Box
            sx={{
              paddingBottom: 3,
            }}
          >
            <ProfileTabs userInfo={userInfo} />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default ProfileCover;
