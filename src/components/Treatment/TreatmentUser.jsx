import { Avatar, Box, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

export const TreatmentUser = ({ createBy, createdAt }) => {
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
      <Box>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={1}
          marginY={2}
        >
          <Avatar
            sx={{ width: 35, height: 35, bgcolor: red[500] }}
            aria-label="recipe"
          >
            R
          </Avatar>
          <Box paddingTop={0.75}>
            <Typography
              variant="subtitle2"
              textTransform={"capitalize"}
              lineHeight={0.5}
              fontWeight="bold"
              color="primary"
            >
              {formateName(createBy)}
            </Typography>
            <Typography variant="caption" lineHeight={0} color="text.secondary">
              {formateDate(createdAt)}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
