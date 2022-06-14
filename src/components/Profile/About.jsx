import LocationOnIcon from "@mui/icons-material/LocationOn";
import { List, ListItem, ListSubheader, Typography } from "@mui/material";

const About = ({ userInfo }) => {
  console.log(userInfo);
  const { country } = userInfo;
  return (
    <>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        subheader={<ListSubheader children={"About"} />}
      >
        <ListItem>
          <LocationOnIcon color="primary" fontSize="small" />
          <Typography
            variant="Subtitle2"
            sx={{
              ml: 0.5,
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Country :{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              ml: 2,
            }}
          >
            {country?.iocCode}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default About;
