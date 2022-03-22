import { Avatar, Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import RatingStar from "./RatingStar";

const RatingUser = ({ createBy, createdAt }) => {
  const formateDate = (dateString) => {
    const date = new Date(dateString);
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${
      month[date.getMonth()]
    } ${date.getDate()} , ${date.getFullYear()}`;
  };
  const formateName = (userObj) => {
    const { firstName, lastName, username } = userObj;
    if (firstName) {
      return firstName + " " + lastName;
    }
    return username;
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Box>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Avatar
              sx={{ width: 40, height: 40, bgcolor: red[500] }}
              aria-label="recipe"
            >
              R
            </Avatar>
            <Box paddingTop={0.75}>
              <Typography
                variant="subtitle1"
                textTransform={"capitalize"}
                lineHeight={0.5}
                fontWeight="bold"
                gutterBottom
              >
                {formateName(createBy)}
              </Typography>
              <RatingStar id={1} value={3} />
            </Box>
          </Stack>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            {formateDate(createdAt)}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default RatingUser;
